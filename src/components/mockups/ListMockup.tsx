"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EASE, MockupCard, MockupHeader, useSteps } from "./shared";

type Row = { name: string; detail: string; status?: string; icon?: ReactNode };
type Props = { title: string; badge?: string; icon?: ReactNode; rows: Row[]; note?: string; className?: string };

/** A short list that fills in row by row: companies, apps, projects, the steps of a day. */
export function ListMockup({ title, badge, icon, rows, note, className }: Props) {
  const { ref, step, animate } = useSteps<HTMLDivElement>(rows.length + 1, 550);
  return (
    <MockupCard className={cn("max-w-[420px]", className)}>
      <div ref={ref}>
        <MockupHeader title={title} badge={badge} icon={icon} />
        <ul className="flex flex-col gap-2 px-4 py-4">
          {rows.map((row, i) => (
            <m.li
              key={row.name}
              initial={animate ? { opacity: 0, y: 6 } : false}
              animate={step > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex items-center justify-between gap-3 rounded-[8px] border border-black/[0.06] px-3 py-2.5"
            >
              <span className="flex min-w-0 items-center gap-3">
                {row.icon && (
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-mist text-ink [&>svg]:size-[17px]">
                    {row.icon}
                  </span>
                )}
                <span className="flex min-w-0 flex-col">
                  <span className="font-display text-[13px] leading-[1.35] font-medium text-ink">{row.name}</span>
                  <span className="font-body text-[12px] leading-[1.4] text-muted">{row.detail}</span>
                </span>
              </span>
              {row.status && (
                <span className="shrink-0 rounded-full bg-brand-soft px-2 py-0.5 font-display text-[11px] leading-4 font-medium whitespace-nowrap text-brand">
                  {row.status}
                </span>
              )}
            </m.li>
          ))}
        </ul>
        {note && (
          <m.p
            initial={animate ? { opacity: 0 } : false}
            animate={{ opacity: step > rows.length ? 1 : 0 }}
            className="border-t border-black/[0.06] bg-brand-soft/60 px-4 py-2.5 font-display text-[12.5px] font-medium text-brand"
          >
            {note}
          </m.p>
        )}
      </div>
    </MockupCard>
  );
}
