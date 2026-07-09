"use server";

import crypto from "crypto";
import { Resend } from "resend";
import InvestorAllocation from '@/emails/InvestorAllocation';
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to generate a Google OAuth 2.0 Bearer Token using JWT
async function getGoogleAuthToken() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  
  let privateKey = process.env.GOOGLE_PRIVATE_KEY_BASE64 
  ? Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, 'base64').toString('utf-8')
  : process.env.GOOGLE_PRIVATE_KEY;

// 2. Universal Sanitization (Catches literal \n from both Base64 and raw strings)
if (privateKey) {
  privateKey = privateKey
    .replace(/\\n/g, '\n') // Convert literal \n to actual invisible line breaks
    .replace(/\r/g, '')    // Strip Windows carriage returns
    .replace(/^"|"$/g, '') // Strip wrapping quotes
    .trim();               // Strip leading/trailing whitespace
}

if (!privateKey) {
  throw new Error("Google Private Key is missing from environment variables.");
}

  if (!clientEmail) {
    throw new Error("GOOGLE_CLIENT_EMAIL is missing.");
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

    // 2. Pre-compile the React Email template
    const emailHtml = await render(
      InvestorAllocation({ 
        investorName: name, 
        shares: shares, 
        amount: amount, 
        equityPercent: ((Number(shares) / 1000) * 1).toFixed(2) 
      })
    );

    // 3. Resend Email Delivery
    await resend.emails.send({
      from: "Wirra Investor Relations <investors@mywirra.com>", // Use your verified domain
      to: email,
      subject: "Welcome to the Wirra Investor Network",
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Investor Submission Error:", error);
    return { success: false };
  }
}