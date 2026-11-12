import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { defaultLocale, localePath, locales, ogLocales, type Locale } from "@/i18n/config";

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path === "/" ? "" : path}` || siteConfig.url;
}

/** hreflang map for a locale-independent path, including x-default (English). */
export function languageAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[locale] = absoluteUrl(localePath(locale, path));
  languages["x-default"] = absoluteUrl(localePath(defaultLocale, path));
  return languages;
}

type PageMetaInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  /** Use the title as-is instead of appending the site name. */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function pageMetadata({ locale, path, title, description, absoluteTitle, noIndex }: PageMetaInput): Metadata {
  const url = absoluteUrl(localePath(locale, path));
  const image = `/og/${locale}.png`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: ogLocales[locale],
      url,
      title: absoluteTitle ? title : `${title} | ${siteConfig.name}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}
