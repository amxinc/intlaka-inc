"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BellRing,
  BookOpen,
  Building2,
  Bus,
  Compass,
  Home,
  Luggage,
  MapPinned,
  PiggyBank,
  Plane,
  Radio,
  SearchCheck,
  Sparkles,
  Stamp,
  Ticket,
  UserRoundCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Stage } from "@/components/ui/Stage";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn, fill } from "@/lib/utils";

type Props = {
  t: Dictionary["hera"]["journey"];
  /** One illustration per step, in the order of the steps. */
  visuals: ReactNode[];
};

// Three icons per step, matching the order of each step's points.
const POINT_ICONS: LucideIcon[][] = [
  [Compass, Wallet, Sparkles],
  [Stamp, BookOpen, SearchCheck],
  [Plane, BellRing, PiggyBank],
  [UserRoundCheck, Building2, BadgeCheck],
  [Bus, Ticket, Radio],
  [MapPinned, Home, Luggage],
];

/**
 * Walk through the six stages of a trip with Hera, each with its own illustration.
 * Wide screens get a row of labelled tabs. Below 900px (`rail:`) the same tabs become a numbered
 * stepper that stays visible while reading, followed by previous and next controls.
 */
export function JourneyTabs({ t, visuals }: Props) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const baseId = useId();
  const step = t.steps[active];
  const lastStep = t.steps.length - 1;

  const goTo = (index: number) => {
    setActive(index);
    // Below the sticky stepper the reader may be far down the previous step: bring the new one to its top.
    const bar = barRef.current?.getBoundingClientRect();
    const panel = panelRef.current?.getBoundingClientRect();
    if (!bar || !panel) return;
    const overshoot = panel.top - (bar.bottom + 24);
    if (overshoot < 0) window.scrollBy({ top: overshoot });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const rtl = document.documentElement.dir === "rtl";
    const forward = rtl ? "ArrowLeft" : "ArrowRight";
    const back = rtl ? "ArrowRight" : "ArrowLeft";
    let next = active;
    if (e.key === forward) next = (active + 1) % t.steps.length;
    else if (e.key === back) next = (active - 1 + t.steps.length) % t.steps.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = t.steps.length - 1;
    else return;
    e.preventDefault();
    goTo(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <div
        ref={barRef}
        className="w-full rail:sticky rail:top-[64px] rail:z-20 rail:-mb-2 rail:border-b rail:border-line rail:bg-white rail:pt-2 rail:pb-2.5 phone:-mx-5 phone:w-[calc(100%+40px)] phone:px-5 min-[810px]:rail:-mx-8 min-[810px]:rail:w-[calc(100%+64px)] min-[810px]:rail:px-8"
      >
        <div
          role="tablist"
          aria-label={t.title}
          onKeyDown={onKeyDown}
          className="relative flex w-full gap-1 overflow-x-auto rounded-[10px] border border-line bg-mist p-1 [scrollbar-width:none] rail:justify-between rail:gap-0 rail:overflow-visible rail:rounded-none rail:border-0 rail:bg-transparent rail:p-0 [&::-webkit-scrollbar]:hidden"
        >
          {/* Progress line behind the stepper numbers, from the first number to the last. */}
          <span aria-hidden className="absolute inset-x-[22px] top-1/2 hidden h-px -translate-y-1/2 bg-line rail:block">
            <span className="block h-full bg-ink transition-[width] duration-300 ease-out" style={{ width: `${(active / lastStep) * 100}%` }} />
          </span>
          {t.steps.map((s, i) => (
            <button
              key={s.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`${baseId}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={active === i}
              aria-controls={`${baseId}-panel`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => goTo(i)}
              className={cn(
                "relative flex min-w-fit flex-1 cursor-pointer items-center justify-center gap-2 rounded-[7px] px-4 py-2.5 font-display text-[14.5px] whitespace-nowrap transition-colors duration-200 rail:size-11 rail:min-w-0 rail:flex-none rail:p-0",
                active === i
                  ? "bg-white text-ink shadow-[0_1px_3px_rgba(0,0,0,0.08)] rail:bg-transparent rail:shadow-none"
                  : "text-muted hover:text-ink",
              )}
            >
              <span
                className={cn(
                  "flex size-5 items-center justify-center rounded-full font-mono text-[11px] transition-colors duration-200 rail:size-8 rail:text-[13px]",
                  active === i && "bg-brand text-white rail:ring-4 rail:ring-ink/10",
                  i < active && "bg-black/[0.06] text-muted rail:bg-ink rail:text-white",
                  i > active && "bg-black/[0.06] text-muted rail:border rail:border-line rail:bg-white",
                )}
              >
                {i + 1}
              </span>
              <span className="rail:sr-only">{s.label}</span>
            </button>
          ))}
        </div>
        <div className="hidden items-baseline justify-between gap-4 pt-1 rail:flex">
          <span className="font-display text-[15px] font-medium text-ink">{step.label}</span>
          <span className="shrink-0 font-body text-[12.5px] text-muted">{fill(t.stepOf, { current: active + 1, total: t.steps.length })}</span>
        </div>
      </div>

      <div
        ref={panelRef}
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="grid w-full grid-cols-2 items-stretch gap-10 max-[1099px]:grid-cols-1 max-[809px]:gap-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-[32px] leading-[1.15] font-normal tracking-[-0.03em] text-ink max-[809px]:text-[25px]">{step.title}</h3>
              <p className="font-body text-[16px] leading-[1.6] text-slate">{step.text}</p>
            </div>
            <ul className="flex flex-col gap-5">
              {step.points.map((point, i) => {
                const Icon = POINT_ICONS[active]?.[i] ?? Compass;
                return (
                  <li key={point.title} className="flex items-start gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-[8px] border border-line bg-white text-brand">
                      <Icon className="size-[18px]" strokeWidth={1.6} aria-hidden />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="font-display text-[15.5px] font-medium text-ink">{point.title}</span>
                      <span className="font-body text-[14.5px] leading-[1.55] font-light text-slate">{point.text}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </m.div>
        </AnimatePresence>
        <Stage className="min-h-[440px] max-[809px]:min-h-0">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="flex w-full justify-center"
            >
              {visuals[active]}
            </m.div>
          </AnimatePresence>
        </Stage>
      </div>

      <div className="hidden w-full gap-3 rail:flex">
        <button
          type="button"
          aria-label={t.previous}
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
          className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-[6px] border border-line text-ink transition-colors hover:border-ink disabled:cursor-default disabled:opacity-40 disabled:hover:border-line"
        >
          <ArrowLeft className="size-[18px] rtl:-scale-x-100" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => goTo(active === lastStep ? 0 : active + 1)}
          className="flex min-h-12 min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-[6px] bg-ink px-4 py-2 font-body text-[15px] leading-tight font-semibold text-white transition-colors hover:bg-ink-soft"
        >
          <span className="min-w-0 text-balance">{active === lastStep ? t.restart : fill(t.next, { step: t.steps[active + 1].label })}</span>
          {active !== lastStep && <ArrowRight className="size-[18px] shrink-0 rtl:-scale-x-100" aria-hidden />}
        </button>
      </div>
    </div>
  );
}
