import type { Metadata } from "next";
import { GraduationCap, Sprout, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { IconCard } from "@/components/ui/IconCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { PersonCard } from "@/components/ui/PersonCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionTag } from "@/components/ui/SectionTag";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

const FAMILY_ICONS = [GraduationCap, Sprout, Trophy, Users];

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return pageMetadata({ locale, path: routes.about, ...t.about.meta });
}

export default async function AboutPage() {
  const { locale, t } = await getDictionary();
  const a = t.about;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl(localePath(locale, routes.about)),
          inLanguage: locale,
          about: {
            "@type": "Organization",
            name: siteConfig.name,
            founder: { "@type": "Person", name: siteConfig.founder },
          },
        }}
      />
      <PageHero
        tag={a.hero.tag}
        title={a.hero.title}
        subtitle={a.hero.subtitle}
        actions={<Button href={localePath(locale, routes.contact)} variant="light">{t.common.contactUs}</Button>}
      />

      <Section>
        <div className="grid w-full grid-cols-[1fr_1.4fr] gap-16 max-[1099px]:grid-cols-1 max-[1099px]:gap-8">
          <div className="flex flex-col items-start gap-6 min-[1100px]:sticky min-[1100px]:top-28 min-[1100px]:self-start">
            <SectionTag>{a.story.tag}</SectionTag>
            <h2 className="type-section text-ink">{a.story.title}</h2>
          </div>
          <div className="flex flex-col gap-6">
            {a.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-body text-[17px] leading-[1.7] text-ink-soft max-[809px]:text-[16px]">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col gap-2 border-s-2 border-ink ps-5">
              <p lang="ar" dir="rtl" className="text-start font-[family-name:var(--font-arabic)] text-[22px] leading-[1.6] font-normal text-ink max-[809px]:text-[19px]">
                {a.story.quote}
              </p>
              {locale !== "ar" && <p className="font-body text-[15px] text-slate">{a.story.quoteNote}</p>}
            </div>
          </div>
        </div>
      </Section>

      <Section id="team">
        <SectionHeader tag={a.founder.tag} title={a.founder.title} />
        <Reveal className="w-full">
          <PersonCard id="ahmad" name={a.founder.name} role={a.founder.role} bio={a.founder.bio} />
        </Reveal>
      </Section>

      <Section>
        <SectionHeader tag={a.team.tag} title={a.team.title} text={a.team.text} />
        <Reveal className="grid w-full grid-cols-3 gap-4 max-[1099px]:grid-cols-2 max-[640px]:grid-cols-1">
          {a.team.people.map((person) => (
            <PersonCard key={person.id} {...person} />
          ))}
        </Reveal>
      </Section>

      <Section tone="night">
        <SectionHeader tag={a.family.tag} title={a.family.title} dark />
        <Reveal className="grid w-full grid-cols-4 gap-4 max-[1099px]:grid-cols-2 max-[640px]:grid-cols-1">
          {a.family.items.map((item, i) => (
            <IconCard key={item.title} icon={FAMILY_ICONS[i]} title={item.title} text={item.text} dark />
          ))}
        </Reveal>
      </Section>

      <CtaSection locale={locale} t={t} />
    </>
  );
}
