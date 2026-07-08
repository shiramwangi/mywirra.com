"use server";

import crypto from "crypto";
import { Resend } from "resend";
import BetaWelcome from '@/emails/BetaWelcome';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to generate a Google OAuth 2.0 Bearer Token using JWT
async function getGoogleAuthToken() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  
  // CRITICAL FIX: Sanitize the private key by converting literal \n characters back into actual line breaks
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
    throw new Error("GOOGLE_PRIVATE_KEY is missing or invalid, or Google Service Account credentials are not set.");
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
  
  // Dynamically map values based on the role structure
  let values: string[] = [];
  
  if (isRecruiter) {
    values = [
      name, 
      email, 
      "Recruiter",
      formData.get("company") as string || "N/A",
      formData.get("role") as string || "N/A",
      formData.get("challenges") as string || "N/A",
      formData.get("timeToHire") as string || "N/A",
      formData.get("aiRole") as string || "N/A"
    ];
  } else {
    values = [
      name, 
      email, 
      "Candidate",
      formData.get("field") as string || "N/A",
      formData.get("industry") as string || "N/A",
      formData.get("level") as string || "N/A",
      formData.get("goal") as string || "N/A"
    ];
  }

  try {
    // 1. Google Sheets Insertion
    const token = await getGoogleAuthToken();
    const sheetId = process.env.GOOGLE_SHEET_BETA_ID;
    
    const sheetsResponse = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:append?valueInputOption=USER_ENTERED`, {
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

    // 2. Resend Email Delivery using React Email
    await resend.emails.send({
      from: "Wirra <hello@mywirra.com>", // Use your verified domain
      to: email,
      subject: "Welcome to the Future of Hiring",
      react: BetaWelcome({ firstName: name }),
    });

    return { success: true };
  } catch (error) {
    console.error("Demo Submission Error:", error);
    return { success: false };
  }
}