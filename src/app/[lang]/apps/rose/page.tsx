import type { Metadata } from "next";
import { GraduationCap, HandCoins, HeartHandshake, KeyRound, Share2, Siren, UserRoundCheck } from "lucide-react";
import { FactsMockup } from "@/components/mockups/FactsMockup";
import { TripMockup } from "@/components/mockups/TripMockup";
import { Button } from "@/components/ui/Button";
import { Countdown } from "@/components/ui/Countdown";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { IconCard } from "@/components/ui/IconCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SplitFeature } from "@/components/ui/SplitFeature";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

const FEATURE_ICONS = [UserRoundCheck, GraduationCap, Share2, Siren];
const INDEPENDENCE_ICONS = [KeyRound, HandCoins, HeartHandshake];

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return pageMetadata({ locale, path: routes.rose, ...t.rose.meta });
}

export default async function RosePage() {
  const { locale, t } = await getDictionary();
  const r = t.rose;
  const visuals = [
    <TripMockup key="trip" t={t.mockups.trip} badge={t.common.illustration} />,
    <FactsMockup
      key="driver"
      t={t.mockups.driver}
      badge={t.common.illustration}
      icon={<UserRoundCheck className="size-4 text-brand" strokeWidth={1.8} aria-hidden />}
    />,
  ];
  return (
    <>
      <PageHero
        tag={r.hero.tag}
        title={r.hero.title}
        subtitle={r.hero.subtitle}
        actions={<Button href={localePath(locale, routes.contact)} variant="light">{t.common.contactUs}</Button>}
      />

      <div className="flex w-full justify-center pt-[76px] max-[809px]:pt-0">
        <Section id="launch" tone="night">
          <SectionHeader tag={r.launch.tag} title={r.launch.title} text={r.launch.text} dark />
          <Countdown t={t.countdown} variant="night" />
        </Section>
      </div>

      <Section>
        <SectionHeader tag={r.features.tag} title={r.features.title} text={r.features.text} />
        <Reveal className="grid w-full grid-cols-4 gap-4 max-[1099px]:grid-cols-2 max-[640px]:grid-cols-1">
          {r.features.items.map((item, i) => (
            <IconCard key={item.title} icon={FEATURE_ICONS[i]} title={item.title} text={item.text} />
          ))}
        </Reveal>
      </Section>

      <Section innerClassName="gap-[110px] max-[809px]:gap-16">
        {r.showcase.map((item, i) => (
          <SplitFeature key={item.title} as="h2" tag={item.tag} title={item.title} text={item.text} visual={visuals[i]} reverse={i % 2 === 1} />
        ))}
      </Section>

      <Section tone="night">
        <SectionHeader tag={r.independence.tag} title={r.independence.title} text={r.independence.text} dark />
        <Reveal className="grid w-full grid-cols-3 gap-4 max-[1099px]:grid-cols-1">
          {r.independence.items.map((item, i) => (
            <IconCard key={item.title} icon={INDEPENDENCE_ICONS[i]} title={item.title} text={item.text} dark />
          ))}
        </Reveal>
      </Section>

      <FaqSection tag={r.faq.tag} title={r.faq.title} items={r.faq.items} />
      <CtaSection locale={locale} t={t} />
    </>
  );
}
