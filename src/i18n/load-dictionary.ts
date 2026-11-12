import type { Dictionary } from "./dictionaries/en";
import type { Locale } from "./config";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  ar: () => import("./dictionaries/ar").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
};

/** Dictionary for a known locale. Safe outside the page tree, unlike `getDictionary` (server actions). */
export const loadDictionary = (locale: Locale) => dictionaries[locale]();
