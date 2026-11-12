"use client";

import * as m from "motion/react-m";
import { LocateFixed, Share2, Siren, UserRoundCheck } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";
import { EASE, MockupCard, SampleBadge, useSteps } from "./shared";

type Props = { t: Dictionary["mockups"]["trip"]; badge: string; className?: string };

/** A Rose trip: a verified driver, the trip shared live, and the emergency button within reach. */
export function TripMockup({ t, badge, className }: Props) {
  const { ref, step, animate } = useSteps<HTMLDivElement>(3, 700);
  const appear = (n: number) => ({
    initial: animate ? { opacity: 0, y: 10 } : false,
    animate: step >= n ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    transition: { duration: 0.45, ease: EASE },
  });
  return (
    <MockupCard className={cn("max-w-[420px]", className)}>
      <div ref={ref} className="flex flex-col gap-3 p-4">
        <m.div {...appear(1)} className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-brand text-white">
              <UserRoundCheck className="size-[18px]" strokeWidth={1.8} aria-hidden />
            </span>
            <span className="font-display text-[13.5px] font-medium text-ink">{t.driver}</span>
          </div>
          <SampleBadge>{badge}</SampleBadge>
        </m.div>

        <m.div {...appear(2)} className="rounded-[10px] border border-black/[0.06] bg-mist/70 p-3">
          <p className="pb-1 font-display text-[11.5px] font-medium text-muted">{t.sharingTitle}</p>
          <p className="font-body text-[13px] leading-[1.55] text-ink">{t.sharing}</p>
        </m.div>

        <m.div {...appear(3)} className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 font-display text-[12px] font-medium text-brand">
            <LocateFixed className="size-3.5" strokeWidth={2} aria-hidden />
            {t.status}
          </span>
          <div className="flex gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-[6px] bg-ink px-2.5 py-1.5 font-display text-[12px] font-medium text-white">
              <Siren className="size-3" strokeWidth={2} aria-hidden />
              {t.emergency}
            </span>
            <span className="inline-flex items-center gap-1 rounded-[6px] border border-black/10 px-2.5 py-1.5 font-display text-[12px] font-medium text-ink">
              <Share2 className="size-3" strokeWidth={2} aria-hidden />
              {t.share}
            </span>
          </div>
        </m.div>
      </div>
    </MockupCard>
  );
}
