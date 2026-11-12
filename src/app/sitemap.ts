import type { MetadataRoute } from "next";
import { localePath, locales } from "@/i18n/config";
import { routes, type RouteKey } from "@/lib/routes";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

const PRIORITY: Partial<Record<RouteKey, number>> = { home: 1, rose: 0.9, hera: 0.9, companies: 0.9, contact: 0.8, privacy: 0.3 };

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(routes) as RouteKey[]).flatMap((key) =>
    locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, routes[key])),
      changeFrequency: "monthly" as const,
      priority: PRIORITY[key] ?? 0.7,
      alternates: { languages: languageAlternates(routes[key]) },
    })),
  );
}
