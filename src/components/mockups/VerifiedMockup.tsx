"use client";

import * as m from "motion/react-m";
import { BadgeCheck, Check, CircleHelp } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";
import { EASE, MockupCard, MockupHeader, useSteps } from "./shared";

type Props = { t: Dictionary["mockups"]["verified"]; badge: string; className?: string };

/** Hera's "verified" label: what has been checked, and one thing honestly marked as not known yet. */
export function VerifiedMockup({ t, badge, className }: Props) {
  const { ref, step, animate } = useSteps<HTMLDivElement>(t.steps.length + 1, 450);
  const unknownIndex = t.steps.length - 1;
  return (
    <MockupCard className={cn("max-w-[420px]", className)}>
      <div ref={ref}>
        <MockupHeader
          title={`${t.title} · ${t.subject}`}
          badge={badge}
          icon={<BadgeCheck className="size-4 text-brand" strokeWidth={1.8} aria-hidden />}
        />
        <ol className="flex flex-col px-4 py-2">
          {t.steps.map((label, i) => {
            const known = i !== unknownIndex;
            return (
              <m.li
                key={label}
                initial={animate ? { opacity: 0 } : false}
                animate={{ opacity: step > i ? 1 : 0.25 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex items-center justify-between gap-3 border-b border-black/[0.05] py-2.5 last:border-b-0"
              >
                <span className="flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className={cn("flex size-5 shrink-0 items-center justify-center rounded-full", known ? "bg-brand text-white" : "bg-brand-soft text-ink")}
                  >
                    {known ? <Check className="size-3" strokeWidth={3} /> : <CircleHelp className="size-3.5" strokeWidth={2.2} />}
                  </span>
                  <span className="font-body text-[13px] text-ink">{label}</span>
                </span>
                <span
                  className={cn(
                    "font-display text-[11.5px] font-medium whitespace-nowrap",
                    known ? "text-brand" : "rounded-full bg-brand-soft px-2 py-0.5 text-ink",
                  )}
                >
                  {known ? t.known : t.unknown}
                </span>
              </m.li>
            );
          })}
        </ol>
        <m.div
          initial={animate ? { opacity: 0 } : false}
          animate={{ opacity: step > t.steps.length ? 1 : 0 }}
          className="flex items-center gap-2 border-t border-black/[0.06] bg-brand-soft px-4 py-2.5"
        >
          <BadgeCheck className="size-4 shrink-0 text-ink" strokeWidth={2} aria-hidden />
          <span className="font-display text-[12.5px] font-medium text-ink">{t.alert}</span>
        </m.div>
      </div>
    </MockupCard>
  );
}
