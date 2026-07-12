"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Blocklist for free email providers to enforce B2B company emails
const FREE_EMAIL_PROVIDERS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com",
  "icloud.com", "aol.com", "protonmail.com", "zoho.com"
];

export async function submitEnterpriseLead(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const website = formData.get("website") as string;
  const role = formData.get("role") as string;
  const country = formData.get("country") as string;

  if (!email || !email.includes('@')) {
    return { success: false, error: "Valid email is required." };
  }

  // 1. Validate Company Email
  const domain = email.split("@")[1]?.toLowerCase();
  if (FREE_EMAIL_PROVIDERS.includes(domain)) {
    return { success: false, error: "Please use a valid company email address. Personal emails are not accepted for Enterprise access." };
  }

  try {
    // 2. Outbound Email to the Lead (Confirmation & Cal.com link)
    await resend.emails.send({
      from: "Wirra Enterprise <founders@wirra.space>", 
      to: email,
      subject: "Enterprise Access Request - Wirra",
      html: `
        <div style="font-family: sans-serif; color: #1F2420;">
          <h2>Hi ${firstName},</h2>
          <p>Thank you for requesting Enterprise access to Wirra.</p>
          <p>Our team is reviewing your requirements. To get started immediately and discuss your custom deployment, please schedule a brief discovery call with our founding team using the link below:</p>
          <p><a href="https://cal.com/mywirra-zrh78w/investor-network" style="display: inline-block; padding: 12px 24px; background-color: #F49B36; color: #1F2420; text-decoration: none; font-weight: bold; border-radius: 4px;">Schedule your call here</a></p>
          <p>Best regards,<br/>The Wirra Team</p>
        </div>
      `
    });

    // 3. Internal Notification to the Founder (mwngichiira@gmail.com)
    await resend.emails.send({
      from: "Wirra System <founders@wirra.space>", 
      to: "mwngichiira@gmail.com",
      subject: `New Enterprise Lead: ${company}`,
      html: `
        <div style="font-family: sans-serif; color: #1F2420;">
          <h2>New Enterprise Request</h2>
          <p><strong>${firstName} ${lastName}</strong> from <strong>${company}</strong> has requested access.</p>
          <ul>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Role:</strong> ${role}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Website:</strong> ${website}</li>
            <li><strong>Country:</strong> ${country}</li>
          </ul>
          <p><em>Note: They have received the automated email prompting them to schedule via Cal.com.</em></p>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error("Enterprise Form Error:", error);
    return { success: false, error: "Failed to process request. Please try again later." };
  }
}