"use server";

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(email: string, role: string, company?: string) {
  try {
    // 1. The Ultimate Sanitization Chain
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
      ? process.env.GOOGLE_PRIVATE_KEY
          .replace(/\\n/g, '\n') // 1. Convert escaped newlines
          .replace(/\r/g, '')    // 2. CRITICAL: Strip Windows carriage returns
          .replace(/^"|"$/g, '') // 3. Strip accidental wrapping quotes
          .trim()                // 4. Strip leading/trailing whitespace
      : undefined;

    // 2. Safe Telemetry Logging
    if (privateKey) {
      console.log("Key Start:", privateKey.substring(0, 35));
      console.log("Key End:", privateKey.substring(privateKey.length - 35));
      console.log("Total Length:", privateKey.length);
    } else {
      console.log("FATAL: privateKey is undefined.");
    }

    if (!privateKey || !process.env.GOOGLE_CLIENT_EMAIL) {
      console.error("Auth Configuration Error: Missing credentials");
      return { success: false, error: "Configuration error" };
    }

    // 3. Initialize Auth with cleaned key
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const isRecruiter = role === 'recruiter';
    
    const sheetId = isRecruiter 
      ? process.env.GOOGLE_RECRUITER_SHEET_ID! 
      : process.env.GOOGLE_CANDIDATE_SHEET_ID!;

    const emailSubject = isRecruiter
      ? "Welcome to the Wirra Recruiter Beta"
      : "Welcome to the Wirra Talent Pool";

    const emailHtml = isRecruiter
      ? `<p>Hi there,</p><p>You are officially on the list to optimize your hiring process. We will reach out when beta access opens.</p><p>- The Wirra Team</p>`
      : `<p>Hi there,</p><p>You are officially on the list. Get ready to bypass the traditional screening process. We will reach out when the portal opens.</p><p>- The Wirra Team</p>`;

    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

    // 4. Execute Operations Concurrently
    await Promise.all([
      (async () => {
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        
        if (isRecruiter) {
          await sheet.addRow({
            DATE: new Date().toISOString(),
            EMAIL: email,
            COMPANY: company || 'N/A',
            ROLE: 'Recruiter'
          });
        } else {
          await sheet.addRow({
            DATE: new Date().toISOString(),
            EMAIL: email,
            ROLE: 'Candidate'
          });
        }
      })(),

      resend.emails.send({
        from: 'Wirra <founders@wirra.space>',
        to: email,
        subject: emailSubject,
        html: emailHtml,
      })
    ]);

    return { success: true };
  } catch (error) {
    // Graceful error logging
    console.error("Waitlist Action Error:", error);
    return { success: false, error: "Data pipeline execution failed" };
  }
}