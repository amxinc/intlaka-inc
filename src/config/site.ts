/**
 * Intlaka public details. `process.env` is read by its full name so Next.js can inline it for the browser.
 * The contact email is fixed: it is the single public address of the group, and no phone number is published.
 * Social links come from environment variables (see `.env.example`); an empty value is hidden everywhere.
 */
export const siteConfig = {
  name: "Intlaka",

  /** Public URL of the website, without a trailing slash. Used for SEO (canonical URLs, sitemap, social cards). */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://intlaka.com").replace(
    /\/+$/,
    "",
  ),

  contact: {
    email: "contact@intlaka.com",
  },

  founder: "Ahmad Al Husban",

  /** Rose launch: 28 December 2026, midnight in Morocco (UTC+1). The countdowns run to this instant. */
  roseLaunch: "2026-12-28T00:00:00+01:00",

  /** Full URLs of the social profiles. */
  social: {
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "",
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "",
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "",
    x: process.env.NEXT_PUBLIC_SOCIAL_X ?? "",
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ?? "",
    tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK ?? "",
  },
} as const;

export const mailtoHref = `mailto:${siteConfig.contact.email}`;

export type SocialNetwork = keyof typeof siteConfig.social;

export const socialLabels: Record<SocialNetwork, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  facebook: "Facebook",
  x: "X",
  youtube: "YouTube",
  tiktok: "TikTok",
};

/** Social profiles that have a URL configured, in display order. */
export function configuredSocials() {
  return (Object.keys(siteConfig.social) as SocialNetwork[])
    .filter((network) => siteConfig.social[network])
    .map((network) => ({
      network,
      label: socialLabels[network],
      href: siteConfig.social[network],
    }));
}
