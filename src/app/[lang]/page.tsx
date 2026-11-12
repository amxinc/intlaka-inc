import type { Metadata } from "next";
import { FeatureBento } from "@/components/home/FeatureBento";
import { Hero } from "@/components/home/Hero";
import {
  AppsSection,
  BeliefSection,
  CompaniesSection,
  ConvictionsSection,
  PeopleSection,
  ProjectsSection,
} from "@/components/home/sections";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return pageMetadata({
    locale,
    path: routes.home,
    title: t.home.meta.title,
    description: t.home.meta.description,
    absoluteTitle: true,
  });
}

export default async function HomePage() {
  const { locale, t } = await getDictionary();
  const h = t.home;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: absoluteUrl(localePath(locale, "/")),
          inLanguage: locale,
          description: t.meta.description,
        }}
      />
      <Hero locale={locale} t={t} />
      <FeatureBento t={t} />
      <ConvictionsSection t={h.convictions} />
      <BeliefSection t={h.belief} locale={locale} />
      <CompaniesSection locale={locale} t={h.companies} companies={t.group.companies} />
      <AppsSection locale={locale} t={h.apps} apps={t.group.apps} />
      <ProjectsSection locale={locale} t={h.projects} projects={t.group.projects} />
      <PeopleSection locale={locale} t={h.people} />
      <FaqSection tag={h.faq.tag} title={h.faq.title} items={h.faq.items} />
      <CtaSection locale={locale} t={t} />
    </>
  );
}
