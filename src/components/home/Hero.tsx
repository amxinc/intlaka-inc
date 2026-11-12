import { HeroStage } from "@/components/home/HeroStage";
import { Button } from "@/components/ui/Button";
import { Countdown } from "@/components/ui/Countdown";
import { Marquee } from "@/components/ui/Marquee";
import { HorizonGlow, Orbits, PointField } from "@/components/ui/Orbits";
import { SectionTag } from "@/components/ui/SectionTag";
import { Signature } from "@/components/ui/Signature";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePath, type Locale } from "@/i18n/config";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const label = "font-body text-[12.5px] leading-4 text-fog";
const value = "mt-1.5 font-display text-[19px] leading-7 tracking-[-0.02em] text-white";

/**
 * Home hero.
 * Desktop: the text beside the orbits, the belief and the launch on a line below.
 * Tablet and phone: the text on one centred axis, and the stage rising at the foot.
 */
export function Hero({ locale, t }: { locale: Locale; t: Pick<Dictionary, "home" | "common" | "countdown"> }) {
  const hero = t.home.hero;
  const stage = hero.stage;
  return (
    <>
      <div className="relative isolate flex min-h-[min(100svh,880px)] w-full flex-col items-center overflow-clip bg-night text-white desktop:min-h-[min(100svh,920px)]">
        <PointField />
        <HorizonGlow />
        <div className="flex w-full max-w-[1400px] flex-1 flex-col px-8 pt-[132px] desktop:pt-[108px] desktop:pb-9 phone:px-5 phone:pt-[108px]">
          <div className="relative grid flex-1 content-center items-center justify-items-center gap-x-14 pb-[72px] desktop:grid-cols-[1.1fr_1fr] desktop:justify-items-stretch desktop:pb-10 phone:pb-12">
            <div className="flex flex-col items-center text-center desktop:items-start desktop:text-start">
              <SectionTag dark>{hero.tag}</SectionTag>
              <h1 className="type-hero mt-6 max-w-[680px] tablet:max-w-[760px] phone:mt-5">
                {hero.titleLead} {hero.titleLink}{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="type-accent">{hero.titleAccent}</span>
                  <Signature delay={0.5} className="absolute inset-x-0 top-[calc(100%-0.02em)] w-full rtl:top-[calc(100%+0.12em)]" />
                </span>
              </h1>
              <p className="mt-12 max-w-[560px] font-body text-[17px] leading-[1.6] text-pretty text-silver desktop:mt-10 tablet:max-w-[640px] phone:mt-10 phone:text-[16px]">
                {hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 desktop:justify-start max-[479px]:w-full max-[479px]:max-w-[280px] max-[479px]:flex-col max-[479px]:items-stretch phone:mt-7">
                <Button href={localePath(locale, routes.contact)} variant="light">
                  {t.common.contactUs}
                </Button>
                <Button href={localePath(locale, routes.companies)} variant="outline-light">
                  {hero.secondary}
                </Button>
              </div>
            </div>
            {/* The orbits follow the height of the window too, so the hero stays on one screen. */}
            <Orbits className="hidden w-[clamp(230px,min(calc(100svh-340px),33vw),440px)] animate-rise justify-self-end desktop:me-4 desktop:block" />
          </div>

          {/* Desktop: the belief everything starts from, and the next launch counting down. */}
          <div className="hidden items-end justify-between gap-x-12 border-t border-white/12 pt-7 desktop:flex">
            <div>
              <p className={label}>{stage.beliefLabel}</p>
              <p className={value}>{stage.belief}</p>
            </div>
            <div className="flex items-end gap-x-12">
              <div>
                <p className={label}>
                  {stage.roseLabel} · {stage.launchLabel}
                </p>
                <p className={cn(value, "whitespace-nowrap")}>{t.countdown.date}</p>
              </div>
              <Countdown t={t.countdown} variant="strip" className="gap-8" />
            </div>
          </div>
        </div>
        <HeroStage t={t} className="desktop:hidden" />
      </div>

      <div className="flex w-full max-w-[760px] flex-col items-center gap-4 px-8 pt-12 max-[809px]:px-5 max-[809px]:pt-8">
        <p className="text-center font-body text-[14px] text-muted">{t.home.sectors.label}</p>
        <Marquee duration={45} gap={32}>
          {t.home.sectors.items.map((sector) => (
            <span key={sector} className="flex items-center gap-8 font-display text-[15px] whitespace-nowrap text-ink-soft">
              {sector}
              <span aria-hidden className="h-2.5 w-1 -skew-x-[13deg] bg-ink/20" />
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
}
