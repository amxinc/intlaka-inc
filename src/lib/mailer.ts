import type { Locale } from "@/i18n/config";
import { loadDictionary } from "@/i18n/load-dictionary";
import { renderContactEmail } from "@/lib/contact-email";
import type { ContactValues } from "@/lib/contact-schema";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TIMEOUT_MS = 10_000;

/**
 * Sends a contact form message by email with Resend. Every setting comes from an environment
 * variable (see .env.example). Returns false unless Resend accepted the email, so the form shows
 * an error instead of losing a message silently.
 */
export async function deliverContactMessage(values: ContactValues & { locale: Locale }): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL?.split(",").map((s) => s.trim()).filter(Boolean);

  if (!apiKey || !from || !to?.length) {
    console.error("[contact] Email not sent. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return false;
  }

  const { contact } = await loadDictionary(values.locale);
  const { subject, html, text } = renderContactEmail(values, { email: contact.email, form: contact.form });

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, reply_to: values.email, subject, html, text }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) console.error(`[contact] Resend responded ${res.status}: ${await res.text()}`);
    return res.ok;
  } catch (error) {
    console.error("[contact] Resend request failed", error);
    return false;
  }
}
