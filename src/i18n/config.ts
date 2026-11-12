export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

/** English is served without a prefix (`/about`); other locales are prefixed (`/fr/about`). */
export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const localeDir: Record<Locale, "ltr" | "rtl"> = { en: "ltr", ar: "rtl", fr: "ltr" };

/** Native names, shown in the language switcher. */
export const localeNames: Record<Locale, string> = { en: "English", ar: "العربية", fr: "Français" };

/** BCP 47 tags used for date formatting. */
export const localeTags: Record<Locale, string> = { en: "en", ar: "ar", fr: "fr" };

/** Open Graph locale codes. */
export const ogLocales: Record<Locale, string> = { en: "en", ar: "ar", fr: "fr" };

/** Prefix an internal path with the locale. `localePath("fr", "/about")` → `/fr/about`. */
export function localePath(locale: Locale, path: string = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** Remove the locale prefix from a browser pathname. `/fr/about` → `/about`. */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  if (first && isLocale(first)) return `/${rest.join("/")}`.replace(/\/$/, "") || "/";
  return pathname || "/";
}
