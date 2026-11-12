import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Server, Target } from "lucide-react";
import { FactsMockup } from "@/components/mockups/FactsMockup";
import { TimelineMockup } from "@/components/mockups/TimelineMockup";
import { TripMockup } from "@/components/mockups/TripMockup";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { CtaSection } from "@/components/ui/CtaSection";
import { IconCard } from "@/components/ui/IconCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SplitFeature } from "@/components/ui/SplitFeature";
import { APP_ICONS, SECTOR_STROKE } from "@/content/icons";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

const PRINCIPLE_ICONS = [Server, Target, BadgeCheck];

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return pageMetadata({ locale, path: routes.apps, ...t.appsPage.meta });
}

function MoreLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 pt-2 font-display text-[15px] font-medium text-brand">
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden />
    </Link>
  );
}

export default async function AppsPage() {
  const { locale, t } = await getDictionary();
  const a = t.appsPage;
  const apps = t.group.apps;
  return (
    <>
      <PageHero
        tag={a.hero.tag}
        title={a.hero.title}
        subtitle={a.hero.subtitle}
        actions={<Button href={localePath(locale, routes.rose)} variant="light">{apps.rose.link}</Button>}
      />

      <Section innerClassName="gap-[110px] max-[809px]:gap-16">
        <SplitFeature
          id="rose"
          as="h2"
          tag={`${a.rose.tag} · ${apps.rose.status}`}
          title={a.rose.title}
          text={a.rose.text}
          visual={<TripMockup t={t.mockups.trip} badge={t.common.illustration} />}
        >
          <CheckList items={a.rose.points} className="pt-2" />
          <MoreLink href={localePath(locale, routes.rose)}>{apps.rose.link}</MoreLink>
        </SplitFeature>

        <SplitFeature
          id="hera"
          as="h2"
          reverse
          tag={`${a.hera.tag} · ${apps.hera.status}`}
          title={a.hera.title}
          text={a.hera.text}
          visual={<TimelineMockup t={t.mockups.simulator} badge={t.common.illustration} />}
        >
          <CheckList items={a.hera.points} className="pt-2" />
          <MoreLink href={localePath(locale, routes.hera)}>{apps.hera.link}</MoreLink>
        </SplitFeature>

        <SplitFeature
          id="mimi-pay"
          as="h2"
          tag={`${a.mimi.tag} · ${apps.mimi.status}`}
          title={a.mimi.title}
          text={a.mimi.text}
          visual={
            <FactsMockup
              icon={<APP_ICONS.mimi className="size-4 text-brand" strokeWidth={SECTOR_STROKE} aria-hidden />}
              t={{ title: apps.mimi.name, fields: a.mimi.fields, footerLabel: a.mimi.statusLabel, footerValue: apps.mimi.status }}
            />
          }
        />
      </Section>

      <Section tone="night">
        <SectionHeader tag={a.principles.tag} title={a.principles.title} dark />
        <Reveal className="grid w-full grid-cols-3 gap-4 max-[1099px]:grid-cols-1">
          {a.principles.items.map((item, i) => (
            <IconCard key={item.title} icon={PRINCIPLE_ICONS[i]} title={item.title} text={item.text} dark />
          ))}
        </Reveal>
      </Section>

      <CtaSection locale={locale} t={t} />
    </>
  );
}
