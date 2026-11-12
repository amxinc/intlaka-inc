"use client";

import * as m from "motion/react-m";
import { CalendarCheck, CalendarDays } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";
import { EASE, MockupCard, MockupHeader, useSteps } from "./shared";

type Props = { t: Dictionary["mockups"]["simulator"]; badge: string; className?: string };

/** Hera's simulator: the trip, lived one day at a time before paying. */
export function TimelineMockup({ t, badge, className }: Props) {
  const total = t.items.length + 1;
  const { ref, step, animate } = useSteps<HTMLDivElement>(total, 650);
  return (
    <MockupCard className={cn("max-w-[420px]", className)}>
      <div ref={ref}>
        <MockupHeader
          title={`${t.title} · ${t.subtitle}`}
          badge={badge}
          icon={<CalendarDays className="size-4 text-brand" strokeWidth={1.8} aria-hidden />}
        />
        <ol className="flex flex-col px-4 py-3">
          {t.items.map((item, i) => {
            const last = i === t.items.length - 1;
            return (
              <m.li
                key={item.day}
                initial={animate ? { opacity: 0, y: 6 } : false}
                animate={step > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative flex gap-3 pb-3 last:pb-0"
              >
                <span className="relative flex flex-col items-center">
                  <span className={cn("z-[1] mt-1 flex size-3 rounded-full border-2", last ? "border-brand bg-brand" : "border-brand/50 bg-white")} />
                  {!last && <span className="absolute top-4 bottom-[-6px] w-px bg-black/10" />}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="font-display text-[11px] font-medium text-muted">{item.day}</span>
                  <span className={cn("font-body text-[13px] leading-[1.45]", last ? "font-medium text-ink" : "text-ink-soft")}>{item.text}</span>
                </span>
              </m.li>
            );
          })}
        </ol>
        <m.div
          initial={animate ? { opacity: 0 } : false}
          animate={{ opacity: step >= total ? 1 : 0 }}
          className="flex items-center gap-2 border-t border-black/[0.06] bg-brand-soft/60 px-4 py-2.5"
        >
          <CalendarCheck className="size-4 text-brand" strokeWidth={1.8} aria-hidden />
          <span className="font-display text-[12.5px] font-medium text-brand">{t.status}</span>
        </m.div>
      </div>
    </MockupCard>
  );
}
