import { LogoMark } from "@/components/layout/Logo";
import { Countdown } from "@/components/ui/Countdown";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

type Props = { t: Pick<Dictionary, "home" | "countdown">; className?: string };

/** Barely there, and eased so there is no line where it begins: a hint, not a shadow. */
const FADE =
  "linear-gradient(to top, rgba(0,0,0,0.78) 0, rgba(0,0,0,0.84) 8px, rgba(0,0,0,0.9) 18px, rgba(0,0,0,0.95) 30px, rgba(0,0,0,0.985) 42px, #000 56px)";

const note = "font-body text-[11px] leading-4 whitespace-nowrap";

/**
 * Foot of the home hero on tablet and phone: the belief everything starts from, and the next launch
 * as a white sheet that rises out of the page into the night, counting down.
 * Tablet: the belief beside the sheet. Phone: the sheet, with the belief laid on it.
 */
export function HeroStage({ t, className }: Props) {
  const stage = t.home.hero.stage;
  return (
    <div
      className={cn("w-full shrink-0 px-8 tablet:max-w-[820px] phone:px-5", className)}
      // The cards thin out over their last pixels, with no edge to see: they start to vanish into the foot of the hero.
      style={{ maskImage: FADE, WebkitMaskImage: FADE }}
    >
      <div className="relative tablet:grid tablet:h-[224px] tablet:grid-cols-[1fr_1.45fr] tablet:gap-4 phone:mx-auto phone:h-[294px] phone:max-w-[420px]">
        <div
          className={cn(
            "animate-rise rounded-[14px] border border-white/12 bg-night-soft p-5 text-silver",
            "tablet:-mb-3",
            "phone:absolute phone:start-0 phone:bottom-[208px] phone:z-20 phone:w-[250px] phone:rounded-[12px] phone:rounded-ss-[3px] phone:px-3.5 phone:py-3",
          )}
          style={{ animationDelay: "0.35s" }}
        >
          <div className="flex items-center justify-between gap-3 phone:hidden">
            <span className="font-display text-[13px] text-white">{stage.beliefLabel}</span>
            <span className={cn(note, "text-fog")}>{stage.beliefNote}</span>
          </div>
          <p className="mt-3.5 rounded-[10px] rounded-ss-[3px] bg-white/[0.07] px-3.5 py-2.5 font-body text-[13.5px] leading-[1.5] text-white phone:mt-0 phone:bg-transparent phone:p-0">
            {stage.belief}
          </p>
        </div>

        <div
          className="z-10 flex animate-rise flex-col rounded-t-[14px] bg-white px-7 pt-6 text-ink phone:absolute phone:inset-x-0 phone:bottom-0 phone:h-[222px] phone:px-5 phone:pt-7"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 font-display text-[13px] text-slate">
              <LogoMark className="h-4" />
              {stage.roseLabel}
            </span>
            <span className={cn(note, "text-muted")}>{stage.launchLabel}</span>
          </div>
          {/* The space under the countdown is where the sheet fades out. */}
          <div className="mt-auto flex flex-col gap-3 pb-12 phone:pb-[42px]">
            <p className="font-display text-[23px] leading-7 tracking-[-0.02em] whitespace-nowrap phone:text-[21px]">{t.countdown.date}</p>
            <Countdown t={t.countdown} className="border-t border-ink/15 pt-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
