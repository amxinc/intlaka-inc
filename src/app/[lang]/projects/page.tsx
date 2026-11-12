import type { Metadata } from "next";
import { CalendarOff, HeartHandshake, Hammer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { IconCard } from "@/components/ui/IconCard";
import { LinkCard } from "@/components/ui/LinkCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECT_ICONS } from "@/content/icons";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

const PRINCIPLE_ICONS = [CalendarOff, Hammer, HeartHandshake];

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return pageMetadata({ locale, path: routes.projects, ...t.projectsPage.meta });
}

export default async function ProjectsPage() {
  const { locale, t } = await getDictionary();
  const p = t.projectsPage;
  return (
    <>
      <PageHero
        tag={p.hero.tag}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
        actions={<Button href={localePath(locale, routes.contact)} variant="light">{t.common.contactUs}</Button>}
      />

      <Section>
        <SectionHeader tag={p.list.tag} title={p.list.title} text={p.list.text} />
        <Reveal className="grid w-full grid-cols-2 gap-4 max-[1099px]:grid-cols-1">
          {t.group.projects.map((project, i) => {
            const Icon = PROJECT_ICONS[project.id];
            return (
              <LinkCard
                key={project.id}
                id={project.id}
                icon={<Icon strokeWidth={1.2} aria-hidden />}
                title={p.details[i].title}
                kicker={project.kind}
                text={p.details[i].text}
                status={t.common.inResearch}
              />
            );
          })}
        </Reveal>
      </Section>

      <Section tone="night">
        <SectionHeader tag={p.principles.tag} title={p.principles.title} dark />
        <Reveal className="grid w-full grid-cols-3 gap-4 max-[1099px]:grid-cols-1">
          {p.principles.items.map((item, i) => (
            <IconCard key={item.title} icon={PRINCIPLE_ICONS[i]} title={item.title} text={item.text} dark />
          ))}
        </Reveal>
      </Section>

      <CtaSection locale={locale} t={t} />
    </>
  );
}
