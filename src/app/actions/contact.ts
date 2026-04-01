"use server";

import { z } from "zod";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { headers } from "next/headers";
import { ContactNotificationEmail } from "@/emails/ContactNotification";
import { AutoReplyEmail } from "@/emails/AutoReply";

// ── Zod schema ────────────────────────────────────────────
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long.")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .max(200, "Email is too long.")
    .trim(),
  phone: z
    .string()
    .max(30, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(1, "Please select a service.")
    .max(100, "Invalid service selection."),
  message: z
    .string()
    .min(10, "Please describe your inquiry in at least 10 characters.")
    .max(2000, "Message is too long (max 2000 characters).")
    .trim(),
  // Honeypot
  website: z.string().max(0, ""),
  // Turnstile token
  "cf-turnstile-response": z.string().min(1),
});

export type ActionResult = {
  success: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
};

// ── Server Action ─────────────────────────────────────────
export async function submitContact(
  formData: FormData
): Promise<ActionResult> {
  // Enforce payload limit — FormData is already parsed, just check string lengths
  // (covered by Zod maxLength guards above)

  // ── Parse & validate ──────────────────────────────────
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
    website: formData.get("website"),
    "cf-turnstile-response": formData.get("cf-turnstile-response"),
  };

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const [field, errs] of Object.entries(
      parsed.error.flatten().fieldErrors
    )) {
      if (errs && errs.length > 0) {
        fieldErrors[field] = errs[0];
      }
    }

    // Honeypot triggered — silently "succeed"
    if (
      rawData.website &&
      typeof rawData.website === "string" &&
      rawData.website.length > 0
    ) {
      return { success: true };
    }

    return {
      success: false,
      message: fieldErrors["cf-turnstile-response"] ? "Please complete the security challenge." : "Please check the form for errors.",
      fieldErrors,
    };
  }

  // ── Honeypot check ────────────────────────────────────
  if (parsed.data.website && parsed.data.website.length > 0) {
    return { success: true }; // silently succeed
  }

  // ── Turnstile verification ────────────────────────────
  const turnstileToken = parsed.data["cf-turnstile-response"];
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown";

  const turnstileValid = await verifyTurnstile(turnstileToken, ip);
  if (!turnstileValid) {
    return {
      success: false,
      message: "Security challenge failed. Please try again.",
    };
  }

  // ── Rate limit ────────────────────────────────────────
  const rateLimitResult = await checkRateLimit(ip);
  if (!rateLimitResult.allowed) {
    return {
      success: false,
      message:
        "Too many submissions from this connection. Please wait a few minutes and try again.",
    };
  }

  // ── Send emails via Resend ────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!fromEmail || !toEmail) {
    console.error("[Contact Action] RESEND_FROM_EMAIL or RESEND_TO_EMAIL is missing.");
    return {
      success: false,
      message: "Server configuration error. Please contact support.",
    };
  }

  const { name, email, phone, service, message } = parsed.data;

  try {
    // 1. Notification to business
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Inquiry: ${service} — from ${name}`,
      react: ContactNotificationEmail({ name, email, phone: phone || "Not provided", service, message }),
    });

    // 2. Auto-reply to user
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "We received your inquiry — Marshalls Tailoring",
      react: AutoReplyEmail({ name, service }),
    });
  } catch (err) {
    console.error("[Contact Action] Email send failed:", err);
    return {
      success: false,
      message:
        "We could not send your message due to a server error. Please contact us directly.",
    };
  }

  return { success: true };
}
