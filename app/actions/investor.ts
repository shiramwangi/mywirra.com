"use server";

import crypto from "crypto";
import { Resend } from "resend";
import InvestorAllocation from '@/emails/InvestorAllocation';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to generate a Google OAuth 2.0 Bearer Token using JWT
async function getGoogleAuthToken() {
let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error("GOOGLE_PRIVATE_KEY is missing or invalid.");
  }

  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  if (!clientEmail) {
    throw new Error("GOOGLE_CLIENT_EMAIL is missing.");
  }

  // 1. Strip literal surrounding quotes injected by .env parsers
  privateKey = privateKey.replace(/^"|"$/g, '');
  
  // 2. Convert literal "\n" text into actual architectural line breaks
  privateKey = privateKey.replace(/\\n/g, '\n');
  
  // 3. Absolute Fallback: Rebuild PEM format if completely flattened
  if (!privateKey.includes('\n')) {
    privateKey = privateKey.replace('-----BEGIN PRIVATE KEY-----', '-----BEGIN PRIVATE KEY-----\n');
    privateKey = privateKey.replace('-----END PRIVATE KEY-----', '\n-----END PRIVATE KEY-----\n');
    const body = privateKey.replace('-----BEGIN PRIVATE KEY-----\n', '').replace('\n-----END PRIVATE KEY-----\n', '').replace(/\s+/g, '');
    const formattedBody = body.match(/.{1,64}/g)?.join('\n') || body;
    privateKey = `-----BEGIN PRIVATE KEY-----\n${formattedBody}\n-----END PRIVATE KEY-----\n`;
  }

  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  
  const payload = Buffer.from(JSON.stringify({
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  })).toString("base64url");

  const signatureInput = `${header}.${payload}`;
  
  // The crypto module can now successfully parse the sanitized private key
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(signatureInput);
  const signature = sign.sign(privateKey, "base64url");

  const jwt = `${signatureInput}.${signature}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt
    })
  });

  if (!response.ok) {
    throw new Error("Failed to authenticate with Google OAuth.");
  }

  const data = await response.json();
  return data.access_token;
}

export async function submitInvestorApplication(formData: FormData) {
  const name = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const country = formData.get("country") as string;
  const amount = formData.get("amount") as string;
  const shares = formData.get("shares") as string;

  try {
    // 1. Google Sheets Insertion
    const token = await getGoogleAuthToken();
    const sheetId = process.env.GOOGLE_INVESTOR_SHEET_ID;
    
    const sheetsResponse = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:append?valueInputOption=USER_ENTERED`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        values: [[name, email, country, amount, shares]]
      })
    });

    if (!sheetsResponse.ok) {
      console.error("Google Sheets Error:", await sheetsResponse.text());
      throw new Error("Failed to append to Google Sheets.");
    }

    // 2. Resend Email Delivery
    await resend.emails.send({
      from: "Wirra Investor Relations <investors@mywirra.com>", // Use your verified domain
      to: email,
      subject: "Welcome to the Wirra Investor Network",
      react: InvestorAllocation({ 
        investorName: name, 
        shares: shares, 
        amount: amount, 
        equityPercent: ((Number(shares) / 1000) * 1).toFixed(2) 
      }),
    });

    return { success: true };
  } catch (error) {
    console.error("Investor Submission Error:", error);
    return { success: false };
  }
}