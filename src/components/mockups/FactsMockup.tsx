"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE, MockupCard, MockupHeader, useSteps } from "./shared";

type Props = {
  t: { title: string; fields: { label: string; value: string }[]; footerLabel?: string; footerValue?: string };
  badge?: string;
  icon?: ReactNode;
  className?: string;
};

/** A profile that fills in field by field, ending on a result. */
export function FactsMockup({ t, badge, icon, className }: Props) {
  const total = t.fields.length + 1;
  const { ref, step, animate } = useSteps<HTMLDivElement>(total, 550);
  return (
    <MockupCard className={cn("max-w-[420px]", className)}>
      <div ref={ref}>
        <MockupHeader title={t.title} badge={badge} icon={icon} />
        <dl className="flex flex-col px-4 py-2">
          {t.fields.map((field, i) => {
            const filled = step > i;
            return (
              <div key={field.label} className="flex items-center justify-between gap-4 border-b border-black/[0.05] py-2.5 last:border-b-0">
                <dt className="font-body text-[12.5px] text-muted">{field.label}</dt>
                <dd className="flex items-center gap-2">
                  <m.span
                    initial={animate ? { opacity: 0 } : false}
                    animate={{ opacity: filled ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="text-end font-display text-[13px] font-medium text-ink"
                  >
                    {field.value}
                  </m.span>
                  <span
                    className={cn(
                      "flex size-4 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                      filled ? "bg-brand text-white" : "bg-black/[0.06] text-transparent",
                    )}
                    aria-hidden
                  >
                    <Check className="size-2.5" strokeWidth={3} />
                  </span>
                </dd>
              </div>
            );
          })}
        </dl>
        {t.footerLabel && (
          <div className="flex items-center gap-3 border-t border-black/[0.06] bg-mist/60 px-4 py-3">
            <span className="font-body text-[12.5px] whitespace-nowrap text-muted">{t.footerLabel}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/[0.07]">
              <m.div
                className="h-full rounded-full bg-brand"
                initial={animate ? { width: "0%" } : false}
                animate={{ width: `${(Math.min(step, total) / total) * 100}%` }}
                transition={{ duration: 0.5, ease: EASE }}
              />
            </div>
            <m.span
              initial={animate ? { opacity: 0 } : false}
              animate={{ opacity: step >= total ? 1 : 0 }}
              className="rounded-full bg-brand-soft px-2 py-0.5 font-display text-[11.5px] font-medium whitespace-nowrap text-brand"
            >
              {t.footerValue}
            </m.span>
          </div>
        )}
      </div>
    </MockupCard>
  );
}
