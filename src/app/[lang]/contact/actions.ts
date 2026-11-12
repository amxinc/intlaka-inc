"use server";

import { isLocale } from "@/i18n/config";
import {
  PROFILES,
  EMAIL_PATTERN,
  INTERESTS,
  LIMITS,
  type ContactError,
  type ContactField,
  type ContactState,
  type ContactValues,
} from "@/lib/contact-schema";
import { deliverContactMessage } from "@/lib/mailer";

const text = (formData: FormData, key: string, max: number) => String(formData.get(key) ?? "").trim().slice(0, max);

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (text(formData, "website", 200)) return { status: "success" };

  const values: ContactValues = {
    name: text(formData, "name", LIMITS.short),
    company: text(formData, "company", LIMITS.short),
    role: text(formData, "role", LIMITS.short),
    email: text(formData, "email", LIMITS.short),
    phone: text(formData, "phone", 40),
    profile: (PROFILES as readonly string[]).includes(String(formData.get("profile"))) ? String(formData.get("profile")) : "",
    interests: formData
      .getAll("interests")
      .map(String)
      .filter((v) => (INTERESTS as readonly string[]).includes(v)),
    message: text(formData, "message", LIMITS.message),
    consent: formData.get("consent") === "on",
  };
  const locale = String(formData.get("locale") ?? "en");

  const errors: Partial<Record<ContactField, ContactError>> = {};
  if (!values.name) errors.name = "required";
  if (!values.email) errors.email = "required";
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = "email";
  if (!values.consent) errors.consent = "consent";
  if (Object.keys(errors).length > 0) return { status: "invalid", errors, values };

  const delivered = await deliverContactMessage({ ...values, locale: isLocale(locale) ? locale : "en" });
  return delivered ? { status: "success" } : { status: "error", values };
}
