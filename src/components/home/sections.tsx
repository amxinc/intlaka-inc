import Link from "next/link";
import { ArrowRight, DoorOpen, Globe, GraduationCap, HandHeart, Network, Sprout, Target, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconCard } from "@/components/ui/IconCard";
import { LinkCard } from "@/components/ui/LinkCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { APP_ICONS, COMPANY_ICONS, PROJECT_ICONS, SECTOR_STROKE } from "@/content/icons";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePath, type Locale } from "@/i18n/config";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const CONVICTION_ICONS = [Target, HandHeart, DoorOpen, Network, Globe];
const PEOPLE_ICONS = [GraduationCap, Sprout, Trophy, Users];

const arrow = "size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1";

/** The five convictions of the group. */
export function ConvictionsSection({ t }: { t: Dictionary["home"]["convictions"] }) {
  return (
    <Section>
      <SectionHeader tag={t.tag} title={t.title} text={t.text} />
      <Reveal className="grid w-full grid-cols-6 gap-4 max-[1099px]:grid-cols-2 max-[640px]:grid-cols-1">
        {t.items.map((item, i) => (
          <IconCard
            key={item.title}
            icon={CONVICTION_ICONS[i]}
            title={item.title}
            text={item.text}
            className={i < 3 ? "col-span-2 max-[1099px]:col-span-1" : "col-span-3 max-[1099px]:col-span-1"}
          />
        ))}
      </Reveal>
    </Section>
  );
}

/** "Build to Give. Give to Last.", one word at a time. */
export function BeliefSection({ t, locale }: { t: Dictionary["home"]["belief"]; locale: Locale }) {
  return (
    <Section tone="night">
      <SectionHeader tag={t.tag} title={t.title} dark />
      <Reveal className="grid w-full grid-cols-3 gap-px overflow-hidden rounded-[10px] border border-white/15 bg-white/15 max-[1099px]:grid-cols-1">
        {t.items.map((item) => (
          <figure key={item.value} className="flex flex-col gap-4 bg-night p-8 max-[809px]:p-6">
            <p className="font-display text-[72px] leading-none font-normal tracking-[-0.04em] text-white max-[809px]:text-[56px]">{item.value}</p>
            <p className="font-body text-[16px] leading-[1.55] text-silver">{item.text}</p>
            <figcaption className="mt-auto border-t border-white/15 pt-4 font-body text-[12.5px] leading-[1.5] text-fog">{item.note}</figcaption>
          </figure>
        ))}
      </Reveal>
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="max-w-[640px] font-display text-[20px] leading-[1.45] font-light text-white max-[809px]:text-[18px]">{t.closing}</p>
        {/* The belief in its original Arabic, shown beside the translation on the other sites. */}
        {locale !== "ar" && (
          <p lang="ar" dir="rtl" className="font-[family-name:var(--font-arabic)] text-[16px] text-silver">
            {t.original}
          </p>
        )}
      </div>
    </Section>
  );
}

/** The three companies of the group; the one in the middle is set on night. */
export function CompaniesSection({ locale, t, companies }: { locale: Locale; t: Dictionary["home"]["companies"]; companies: Dictionary["group"]["companies"] }) {
  return (
    <Section>
      <SectionHeader tag={t.tag} title={t.title} text={t.text} />
      <Reveal className="grid w-full grid-cols-3 gap-4 max-[1099px]:grid-cols-1">
        {companies.map((company, i) => {
          const Icon = COMPANY_ICONS[company.id];
          const featured = i === 1;
          return (
            <article key={company.id} className={cn("flex flex-col gap-6 rounded-[10px] p-7", featured ? "bg-night text-white" : "bg-mist")}>
              <Icon className={cn("size-7", featured ? "text-white" : "text-ink")} strokeWidth={SECTOR_STROKE} aria-hidden />
              <div className="flex flex-col gap-3">
                <h3 className={cn("font-display text-[22px] leading-[1.25] font-normal", featured ? "text-white" : "text-ink")}>{company.name}</h3>
                <p className={cn("font-body text-[15px] leading-[1.6] font-light", featured ? "text-silver" : "text-slate")}>{company.text}</p>
              </div>
              <ul className={cn("flex flex-col gap-2.5 border-t pt-5", featured ? "border-white/15" : "border-black/10")}>
                {[company.sector, company.place].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span aria-hidden className={cn("mt-[9px] size-1 shrink-0 rounded-full", featured ? "bg-white" : "bg-ink")} />
                    <span className={cn("font-body text-[14.5px] leading-[1.5]", featured ? "text-silver" : "text-ink-soft")}>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`${localePath(locale, routes.companies)}#${company.id}`}
                className={cn("group mt-auto inline-flex items-center gap-2 font-display text-[15px] font-medium", featured ? "text-white" : "text-brand")}
              >
                {t.link}
                <ArrowRight className={arrow} aria-hidden />
              </Link>
            </article>
          );
        })}
      </Reveal>
    </Section>
  );
}

/** Rose and Hera as two large cards, and Mimi Pay on a quiet line under them. */
export function AppsSection({ locale, t, apps }: { locale: Locale; t: Dictionary["home"]["apps"]; apps: Dictionary["group"]["apps"] }) {
  return (
    <Section>
      <SectionHeader tag={t.tag} title={t.title} text={t.text} />
      <Reveal className="grid w-full grid-cols-2 gap-4 max-[1099px]:grid-cols-1">
        <LinkCard
          icon={<APP_ICONS.rose strokeWidth={1.2} aria-hidden />}
          title={apps.rose.name}
          kicker={apps.rose.kind}
          text={apps.rose.text}
          status={apps.rose.status}
          href={localePath(locale, routes.rose)}
          link={apps.rose.link}
        />
        <LinkCard
          icon={<APP_ICONS.hera strokeWidth={1.2} aria-hidden />}
          title={apps.hera.name}
          kicker={apps.hera.kind}
          text={apps.hera.text}
          status={apps.hera.status}
          href={localePath(locale, routes.hera)}
          link={apps.hera.link}
        />
      </Reveal>
      <div className="flex w-full items-center justify-between gap-6 rounded-[10px] bg-mist px-8 py-6 max-[809px]:flex-col max-[809px]:items-start max-[809px]:gap-4 max-[809px]:px-6">
        <div className="flex items-center gap-4">
          <APP_ICONS.mimi className="size-7 shrink-0 text-ink" strokeWidth={SECTOR_STROKE} aria-hidden />
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-[19px] font-normal text-ink">{apps.mimi.name}</h3>
            <p className="font-body text-[15.5px] leading-[1.6] text-slate">{apps.mimi.text}</p>
          </div>
        </div>
        <Button href={localePath(locale, routes.apps)} variant="outline" className="shrink-0">
          {t.all}
        </Button>
      </div>
    </Section>
  );
}

/** The four research projects, on night. */
export function ProjectsSection({ locale, t, projects }: { locale: Locale; t: Dictionary["home"]["projects"]; projects: Dictionary["group"]["projects"] }) {
  return (
    <Section tone="night">
      <SectionHeader tag={t.tag} title={t.title} text={t.text} dark />
      <Reveal className="grid w-full grid-cols-4 gap-4 max-[1099px]:grid-cols-2 max-[640px]:grid-cols-1">
        {projects.map((project) => (
          <IconCard key={project.id} icon={PROJECT_ICONS[project.id]} title={project.name} text={project.text} dark />
        ))}
      </Reveal>
      <Button href={localePath(locale, routes.projects)} variant="outline-light">
        {t.link}
      </Button>
    </Section>
  );
}

/** How the group treats its people. */
export function PeopleSection({ locale, t }: { locale: Locale; t: Dictionary["home"]["people"] }) {
  return (
    <Section>
      <SectionHeader tag={t.tag} title={t.title} text={t.text} />
      <Reveal className="grid w-full grid-cols-4 gap-4 max-[1099px]:grid-cols-2 max-[640px]:grid-cols-1">
        {t.items.map((item, i) => (
          <IconCard key={item.title} icon={PEOPLE_ICONS[i]} title={item.title} text={item.text} />
        ))}
      </Reveal>
      <Button href={`${localePath(locale, routes.about)}#team`} variant="outline">
        {t.link}
      </Button>
    </Section>
  );
}
