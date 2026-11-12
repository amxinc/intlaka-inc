import type { Metadata } from "next";
import {
  CalendarClock,
  ClipboardList,
  Compass,
  Gamepad2,
  Home,
  MegaphoneOff,
  PlugZap,
  ShieldAlert,
  Shuffle,
  Sun,
  UserRound,
  UserRoundCheck,
  Wallet,
} from "lucide-react";
import { JourneyTabs } from "@/components/hera/JourneyTabs";
import { ChatMockup } from "@/components/mockups/ChatMockup";
import { FactsMockup } from "@/components/mockups/FactsMockup";
import { ListMockup } from "@/components/mockups/ListMockup";
import { MapMockup } from "@/components/mockups/MapMockup";
import { TimelineMockup } from "@/components/mockups/TimelineMockup";
import { VerifiedMockup } from "@/components/mockups/VerifiedMockup";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { ComparisonSection } from "@/components/ui/ComparisonSection";
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

const PROTECT_ICONS = [Shuffle, CalendarClock, Wallet, ShieldAlert];
const EXTRA_ICONS = [Gamepad2, MegaphoneOff, Home];

const headerIcon = { className: "size-4 text-brand", strokeWidth: 1.8, "aria-hidden": true } as const;

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return pageMetadata({ locale, path: routes.hera, ...t.hera.meta });
}

export default async function HeraPage() {
  const { locale, t } = await getDictionary();
  const h = t.hera;
  const m = t.mockups;
  const badge = t.common.illustration;

  // One illustration per step of the journey, in order.
  const journeyVisuals = [
    <FactsMockup key="profile" t={m.profile} badge={badge} icon={<UserRound {...headerIcon} />} />,
    <ListMockup key="prepare" {...m.prepare} badge={badge} icon={<ClipboardList {...headerIcon} />} />,
    <FactsMockup key="match" t={m.match} badge={badge} icon={<Compass {...headerIcon} />} />,
    <ListMockup
      key="vetted"
      title={m.vetted.title}
      note={m.vetted.note}
      rows={m.vetted.rows.map((row, i) => (i < 2 ? { ...row, status: m.vetted.status } : row))}
      badge={badge}
      icon={<UserRoundCheck {...headerIcon} />}
    />,
    <ListMockup key="today" {...m.today} badge={badge} icon={<Sun {...headerIcon} />} />,
    <MapMockup key="map" t={m.map} badge={badge} />,
  ];
  const showcaseVisuals = [
    <TimelineMockup key="simulator" t={m.simulator} badge={badge} />,
    <ChatMockup key="guardian" t={m.guardian} badge={badge} />,
    <VerifiedMockup key="verified" t={m.verified} badge={badge} />,
  ];

  return (
    <>
      <PageHero
        tag={h.hero.tag}
        title={h.hero.title}
        subtitle={h.hero.subtitle}
        actions={<Button href={localePath(locale, routes.contact)} variant="light">{t.common.contactUs}</Button>}
      />

      <Section>
        <SectionHeader tag={h.protect.tag} title={h.protect.title} text={h.protect.text} />
        <Reveal className="grid w-full grid-cols-4 gap-4 max-[1099px]:grid-cols-2 max-[640px]:grid-cols-1">
          {h.protect.items.map((item, i) => (
            <IconCard key={item.title} icon={PROTECT_ICONS[i]} title={item.title} text={item.text} />
          ))}
        </Reveal>
      </Section>

      <Section id="how-it-works">
        <SectionHeader tag={h.journey.tag} title={h.journey.title} text={h.journey.text} />
        <JourneyTabs t={h.journey} visuals={journeyVisuals} />
      </Section>

      <Section innerClassName="gap-[110px] max-[809px]:gap-16">
        {h.showcase.map((item, i) => (
          <SplitFeature key={item.title} as="h2" tag={item.tag} title={item.title} text={item.text} visual={showcaseVisuals[i]} reverse={i % 2 === 1} />
        ))}
      </Section>

      <Section>
        <SectionHeader tag={h.extras.tag} title={h.extras.title} />
        <Reveal className="grid w-full grid-cols-3 gap-4 max-[1099px]:grid-cols-1">
          {h.extras.items.map((item, i) => (
            <IconCard key={item.title} icon={EXTRA_ICONS[i]} title={item.title} text={item.text} />
          ))}
        </Reveal>
      </Section>

      <ComparisonSection t={h.difference} icon={<Compass className="size-[18px]" strokeWidth={1.6} aria-hidden />} />

      <Section id="hera-city">
        <SplitFeature
          as="h2"
          tag={h.city.tag}
          title={h.city.title}
          text={h.city.text}
          visual={<ListMockup {...m.city} badge={badge} icon={<PlugZap {...headerIcon} />} />}
        >
          <CheckList items={h.city.points} className="pt-2" />
        </SplitFeature>
      </Section>

      <FaqSection tag={h.faq.tag} title={h.faq.title} items={h.faq.items} />
      <CtaSection locale={locale} t={t} />
    </>
  );
}
