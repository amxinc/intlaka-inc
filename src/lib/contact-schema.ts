/** Shared between the contact form (client) and its server action. */
export const PROFILES = ["partner", "investor", "media", "talent", "other"] as const;
export const INTERESTS = ["partnership", "investment", "apps", "studio"] as const;

export type Profile = (typeof PROFILES)[number];
export type Interest = (typeof INTERESTS)[number];

export type ContactValues = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  profile: string;
  interests: string[];
  message: string;
  consent: boolean;
};

export type ContactField = "name" | "email" | "consent";
export type ContactError = "required" | "email" | "consent";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "invalid"; errors: Partial<Record<ContactField, ContactError>>; values: ContactValues }
  | { status: "error"; values: ContactValues };

export const LIMITS = { short: 160, message: 5000 } as const;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
