import type { Metadata } from "next";
import { HandHeart, Network, Split } from "lucide-react";
import { FactsMockup } from "@/components/mockups/FactsMockup";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { CtaSection } from "@/components/ui/CtaSection";
import { IconCard } from "@/components/ui/IconCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SplitFeature } from "@/components/ui/SplitFeature";
import { COMPANY_ICONS, SECTOR_STROKE } from "@/content/icons";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

const PRINCIPLE_ICONS = [Split, Network, HandHeart];

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return pageMetadata({ locale, path: routes.companies, ...t.companiesPage.meta });
}

export default async function CompaniesPage() {
  const { locale, t } = await getDictionary();
  const c = t.companiesPage;
  return (
    <>
      <PageHero
        tag={c.hero.tag}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        actions={<Button href={localePath(locale, routes.contact)} variant="light">{t.common.contactUs}</Button>}
      />

      <Section innerClassName="gap-[110px] max-[809px]:gap-16">
        {t.group.companies.map((company, i) => {
          const detail = c.details[i];
          const Icon = COMPANY_ICONS[company.id];
          return (
            <SplitFeature
              key={company.id}
              id={company.id}
              as="h2"
              reverse={i % 2 === 1}
              tag={detail.tag}
              title={detail.title}
              text={detail.text}
              visual={
                <FactsMockup
                  icon={<Icon className="size-4 text-brand" strokeWidth={SECTOR_STROKE} aria-hidden />}
                  t={{
                    title: company.name,
                    fields: [
                      { label: c.labels.sector, value: company.sector },
                      { label: c.labels.place, value: company.place },
                      { label: c.labels.group, value: c.labels.groupValue },
                      { label: c.labels.runs, value: c.labels.runsValue },
                    ],
                  }}
                />
              }
            >
              <CheckList items={detail.points} className="pt-2" />
            </SplitFeature>
          );
        })}
      </Section>

      <Section tone="night">
        <SectionHeader tag={c.principles.tag} title={c.principles.title} dark />
        <Reveal className="grid w-full grid-cols-3 gap-4 max-[1099px]:grid-cols-1">
          {c.principles.items.map((item, i) => (
            <IconCard key={item.title} icon={PRINCIPLE_ICONS[i]} title={item.title} text={item.text} dark />
          ))}
        </Reveal>
      </Section>

      <CtaSection locale={locale} t={t} />
    </>
  );
}
