"use client";

import * as m from "motion/react-m";
import { MapPinned } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";
import { EASE, MockupCard, MockupHeader, useSteps } from "./shared";

type Props = { t: Dictionary["mockups"]["map"]; badge: string; className?: string };

// Where each pin sits on the drawing, in percent from the start side and from the top.
const PINS = [
  { x: 14, y: 58 },
  { x: 44, y: 22 },
  { x: 66, y: 66 },
];

/** Hera's interactive map on arrival: the places of the trip, on an abstract street plan. */
export function MapMockup({ t, badge, className }: Props) {
  const { ref, step, animate } = useSteps<HTMLDivElement>(t.pins.length + 1, 500);
  return (
    <MockupCard className={cn("max-w-[420px]", className)}>
      <div ref={ref}>
        <MockupHeader
          title={`${t.title} · ${t.subtitle}`}
          badge={badge}
          icon={<MapPinned className="size-4 text-brand" strokeWidth={1.8} aria-hidden />}
        />
        <div className="relative m-4 h-[190px] overflow-hidden rounded-[10px] border border-black/[0.06] bg-mist">
          <svg aria-hidden viewBox="0 0 400 190" preserveAspectRatio="none" className="absolute inset-0 size-full rtl:-scale-x-100" fill="none">
            <path d="M-10 62H410M-10 138H410M96 -10V200M236 -10V200M330 -10V200M-10 190L170 -10" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
            <path d="M62 118C120 118 150 52 184 50C230 48 240 132 270 132" stroke="var(--ik-ink)" strokeWidth="1.6" strokeDasharray="4 5" strokeLinecap="round" />
          </svg>
          {t.pins.map((pin, i) => (
            <m.span
              key={pin}
              initial={animate ? { opacity: 0, y: 6 } : false}
              animate={step > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="absolute flex items-center gap-1.5 rounded-full bg-white py-1 ps-1.5 pe-2.5 font-display text-[11.5px] font-medium whitespace-nowrap text-ink shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
              style={{ insetInlineStart: `${PINS[i].x}%`, top: `${PINS[i].y}%` }}
            >
              <span className="size-2 rounded-full bg-ink" />
              {pin}
            </m.span>
          ))}
        </div>
        <m.p
          initial={animate ? { opacity: 0 } : false}
          animate={{ opacity: step > t.pins.length ? 1 : 0 }}
          className="border-t border-black/[0.06] bg-brand-soft/60 px-4 py-2.5 font-display text-[12.5px] font-medium text-brand"
        >
          {t.note}
        </m.p>
      </div>
    </MockupCard>
  );
}
