"use server";

import crypto from "crypto";
import { Resend } from "resend";
import BetaWelcome from '@/emails/BetaWelcome';
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to generate a Google OAuth 2.0 Bearer Token using JWT
async function getGoogleAuthToken() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!privateKey) throw new Error("GOOGLE_PRIVATE_KEY is missing.");

  // 1. Strip literal quotes
  privateKey = privateKey.replace(/^"|"$/g, '');
  // 2. Convert literal \n
  privateKey = privateKey.replace(/\\n/g, '\n');
  // 3. Fallback PEM rebuild
  if (!privateKey.includes('\n')) {
    privateKey = privateKey.replace('-----BEGIN PRIVATE KEY-----', '-----BEGIN PRIVATE KEY-----\n');
    privateKey = privateKey.replace('-----END PRIVATE KEY-----', '\n-----END PRIVATE KEY-----\n');
    const body = privateKey.replace('-----BEGIN PRIVATE KEY-----\n', '').replace('\n-----END PRIVATE KEY-----\n', '').replace(/\s+/g, '');
    const formattedBody = body.match(/.{1,64}/g)?.join('\n') || body;
    privateKey = `-----BEGIN PRIVATE KEY-----\n${formattedBody}\n-----END PRIVATE KEY-----\n`;
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

export async function submitDemoRequest(formData: FormData, isRecruiter: boolean) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const country = formData.get("country") as string;
  const timestamp = new Date().toISOString().split('T')[0];
  
  // Dynamically map values based on the role structure
  let values: string[] = [];
  
  if (isRecruiter) {
    values = [
      name, 
      email, 
      phone,
      country,
      formData.get("company") as string || "N/A",
      formData.get("role") as string || "N/A",
      formData.get("companySize") as string || "N/A",
      formData.get("challenges") as string || "N/A",
      timestamp
    ];
  } else {
    values = [
      name, 
      email, 
      phone,
      country,
      formData.get("field") as string || "N/A",
      formData.get("industry") as string || "N/A",
      formData.get("level") as string || "N/A",
      timestamp
    ];
  }

  try {
    // 1. Google Sheets Insertion
    const token = await getGoogleAuthToken();
    const sheetId = process.env.GOOGLE_BETA_SHEET_ID;
    
    // Tab dynamic mapping
    const tabRange = isRecruiter ? "Recruiters!A1:append" : "Candidates!A1:append";
    
    const sheetsResponse = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${tabRange}?valueInputOption=USER_ENTERED`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        values: [values]
      })
    });

    if (!sheetsResponse.ok) {
      console.error("Google Sheets Error:", await sheetsResponse.text());
      throw new Error("Failed to append to Google Sheets.");
    }

    // 2. Pre-compile the React Email template
    const emailHtml = await render(BetaWelcome({ firstName: name }));

    // 3. Resend Email Delivery
    await resend.emails.send({
      from: "Wirra <hello@mywirra.com>",
      to: email,
      subject: "Welcome to the Future of Hiring",
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Demo Submission Error:", error);
    return { success: false };
  }
}