import type { Metadata } from "next";
import { HeartHandshake, PackageCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { IconCard } from "@/components/ui/IconCard";
import { PageHero } from "@/components/ui/PageHero";
import { ProcessSection } from "@/components/ui/ProcessSection";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionTag } from "@/components/ui/SectionTag";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

const OFFER_ICONS = [HeartHandshake, Wrench, PackageCheck];

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return pageMetadata({ locale, path: routes.studio, ...t.studio.meta });
}

export default async function StudioPage() {
  const { locale, t } = await getDictionary();
  const s = t.studio;
  return (
    <>
      <PageHero
        tag={s.hero.tag}
        title={s.hero.title}
        subtitle={s.hero.subtitle}
        actions={<Button href={localePath(locale, routes.contact)} variant="light">{t.common.contactUs}</Button>}
      />

      <Section>
        <div className="grid w-full grid-cols-[1fr_1.4fr] gap-16 max-[1099px]:grid-cols-1 max-[1099px]:gap-8">
          <div className="flex flex-col items-start gap-6 min-[1100px]:sticky min-[1100px]:top-28 min-[1100px]:self-start">
            <SectionTag>{s.story.tag}</SectionTag>
            <h2 className="type-section text-ink">{s.story.title}</h2>
          </div>
          <div className="flex flex-col gap-6">
            {s.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-body text-[17px] leading-[1.7] text-ink-soft max-[809px]:text-[16px]">
                {paragraph}
              </p>
            ))}
            <p className="border-s-2 border-ink ps-5 font-display text-[22px] leading-[1.4] font-normal text-ink max-[809px]:text-[19px]">
              {s.story.quote}
            </p>
          </div>
        </div>
      </Section>

      <ProcessSection t={s.process} />

      <Section tone="night">
        <SectionHeader tag={s.offer.tag} title={s.offer.title} dark />
        <Reveal className="grid w-full grid-cols-3 gap-4 max-[1099px]:grid-cols-1">
          {s.offer.items.map((item, i) => (
            <IconCard key={item.title} icon={OFFER_ICONS[i]} title={item.title} text={item.text} dark />
          ))}
        </Reveal>
      </Section>

      <CtaSection locale={locale} t={t} />
    </>
  );
}
