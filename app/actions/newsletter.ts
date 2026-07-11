"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string;
  const terms = formData.get("terms");

  if (!email || !email.includes('@')) {
    return { success: false, error: "Invalid email address." };
  }
  if (!terms) {
    return { success: false, error: "You must agree to the Terms & Conditions." };
  }

  try {
    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: "Failed to add to audience." };
    }

    return { success: true };
  } catch (error) {
    console.error("Newsletter Subscription Error:", error);
    return { success: false, error: "Internal server error." };
  }
}