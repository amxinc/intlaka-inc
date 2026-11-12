"use client";

import * as m from "motion/react-m";
import { CheckCheck, Compass, PiggyBank } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";
import { EASE, MockupCard, SampleBadge, useSteps } from "./shared";

type Props = { t: Dictionary["mockups"]["guardian"]; badge: string; className?: string };

function Bubble({ side, show, animate, children }: { side: "user" | "app"; show: boolean; animate: boolean; children: React.ReactNode }) {
  return (
    <m.div
      initial={animate ? { opacity: 0, y: 8 } : false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.4, ease: EASE }}
      className={cn("flex w-full", side === "app" ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[86%] rounded-[10px] px-3 py-2 font-body text-[13px] leading-[1.5] shadow-[0_1px_1px_rgba(0,0,0,0.06)]",
          side === "app" ? "rounded-se-[3px] bg-ink text-white" : "rounded-ss-[3px] bg-white text-ink",
        )}
      >
        {children}
      </div>
    </m.div>
  );
}

/** Hera's financial guardian: a traveller over budget, and a cheaper option with the same joy. */
export function ChatMockup({ t, badge, className }: Props) {
  const { ref, step, animate } = useSteps<HTMLDivElement>(5, 900);
  return (
    <MockupCard className={cn("max-w-[460px]", className)}>
      <div ref={ref}>
        <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full bg-brand-soft text-ink-soft">
              <PiggyBank className="size-4" strokeWidth={1.6} aria-hidden />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-[13px] leading-4 font-medium text-ink">{t.channel}</span>
              <span className="font-body text-[11px] leading-4 text-muted">{t.app}</span>
            </div>
          </div>
          <SampleBadge>{badge}</SampleBadge>
        </div>

        <div className="flex flex-col gap-2.5 bg-mist px-3.5 py-4">
          <Bubble side="user" show={step >= 1} animate={animate}>
            {t.userMessage}
          </Bubble>

          {step === 2 ? (
            <div className="flex justify-end" aria-hidden>
              <div className="flex items-center gap-1 rounded-[10px] bg-ink px-3 py-2.5">
                {[0, 1, 2].map((i) => (
                  <m.span
                    key={i}
                    className="size-1.5 rounded-full bg-white/70"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <Bubble side="app" show={step >= 3} animate={animate}>
              <span className="mb-1 flex items-center gap-1.5 font-display text-[11px] font-medium text-silver">
                <Compass className="size-3.5" strokeWidth={1.8} aria-hidden />
                {t.app}
              </span>
              {t.appMessage}
            </Bubble>
          )}

          <Bubble side="user" show={step >= 4} animate={animate}>
            {t.userReply}
          </Bubble>

          <m.div
            initial={animate ? { opacity: 0 } : false}
            animate={{ opacity: step >= 5 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center pt-1"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-display text-[11px] font-medium text-brand shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              {t.status}
              <CheckCheck className="size-3.5" strokeWidth={2} aria-hidden />
            </span>
          </m.div>
        </div>
      </div>
    </MockupCard>
  );
}
