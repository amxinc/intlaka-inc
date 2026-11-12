"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Reveals `count` steps one after another once the element scrolls into view.
 * With reduced motion every step shows at once. The first render is the same for everyone
 * (step 0), so the server and the browser agree on the markup.
 */
export function useSteps<T extends Element>(count: number, intervalMs = 700, startDelayMs = 250) {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    if (reduce) {
      timers.push(setTimeout(() => setStep(count), 0));
    } else {
      for (let i = 1; i <= count; i++) {
        timers.push(setTimeout(() => setStep(i), startDelayMs + (i - 1) * intervalMs));
      }
    }
    return () => timers.forEach(clearTimeout);
  }, [inView, reduce, count, intervalMs, startDelayMs]);

  return { ref, step, animate: !reduce };
}

/** White product-style card used by every mockup. */
export function MockupCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-[12px] border border-black/[0.07] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MockupHeader({ title, badge, icon }: { title: string; badge?: string; icon?: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] px-4 py-3">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-display text-[13px] font-medium text-ink">{title}</span>
      </div>
      {badge && <SampleBadge>{badge}</SampleBadge>}
    </div>
  );
}

export function SampleBadge({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-black/[0.08] bg-mist px-2 py-0.5 font-display text-[10.5px] leading-4 font-medium text-muted">
      {children}
    </span>
  );
}
