import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import type { Dictionary } from "./dictionaries/en";
import { isLocale, type Locale } from "./config";
import { loadDictionary } from "./load-dictionary";

/** Current locale from the `[lang]` root segment. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

/** Dictionary for the current request's locale. */
export async function getDictionary(): Promise<{ locale: Locale; t: Dictionary }> {
  const locale = await getLocale();
  return { locale, t: await loadDictionary(locale) };
}

export type { Dictionary };
