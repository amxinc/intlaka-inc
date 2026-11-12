"use client";

import { useSyncExternalStore } from "react";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

const TARGET = Math.floor(new Date(siteConfig.roseLaunch).getTime() / 1000);

const subscribe = (onTick: () => void) => {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
};
const nowInSeconds = () => Math.floor(Date.now() / 1000);
/** The server and the first client render show placeholders: the time left is only known in the browser. */
const unknown = () => null;

type Props = {
  t: Dictionary["countdown"];
  /** `sheet`: compact, dark on white. `strip`: compact, white on night. `night`: large cells on a night panel. */
  variant?: "sheet" | "strip" | "night";
  className?: string;
};

/** Live countdown to the launch of Rose (see `siteConfig.roseLaunch`). */
export function Countdown({ t, variant = "sheet", className }: Props) {
  const now = useSyncExternalStore<number | null>(subscribe, nowInSeconds, unknown);
  const left = now === null ? null : Math.max(0, TARGET - now);
  const night = variant === "night";
  const strip = variant === "strip";

  if (left === 0) {
    return (
      <p
        role="status"
        className={cn(
          "font-display",
          night ? "text-center text-[40px] leading-tight tracking-[-0.03em] text-white max-[809px]:text-[30px]" : cn("text-[17px]", strip ? "text-white" : "text-ink"),
          className,
        )}
      >
        {t.launched}
      </p>
    );
  }

  const cells = [
    { label: t.days, value: left === null ? null : Math.floor(left / 86400) },
    { label: t.hours, value: left === null ? null : Math.floor((left % 86400) / 3600) },
    { label: t.minutes, value: left === null ? null : Math.floor((left % 3600) / 60) },
    { label: t.seconds, value: left === null ? null : left % 60 },
  ];
  const text = (value: number | null) => (value === null ? "--" : String(value).padStart(2, "0"));

  return (
    <div
      role="timer"
      aria-label={`${t.label} (${t.date})`}
      className={cn(
        night
          ? "grid w-full grid-cols-4 gap-px overflow-hidden rounded-[10px] border border-white/15 bg-white/15 max-[809px]:grid-cols-2"
          : "grid grid-cols-4 gap-3",
        className,
      )}
    >
      {cells.map((cell) => (
        <div
          key={cell.label}
          className={cn("flex flex-col", night ? "gap-3 bg-night p-8 max-[809px]:p-6" : "items-start gap-0.5")}
        >
          <span
            dir="ltr"
            className={cn(
              "self-start font-display tabular-nums",
              night
                ? "text-[72px] leading-none font-normal tracking-[-0.04em] text-white max-[809px]:text-[56px]"
                : cn("text-[23px] leading-7 tracking-[-0.02em] phone:text-[21px]", strip ? "text-white" : "text-ink"),
            )}
          >
            {text(cell.value)}
          </span>
          <span className={cn("font-body", night ? "text-[16px] text-silver" : cn("text-[11.5px] leading-4 whitespace-nowrap", strip ? "text-fog" : "text-muted"))}>
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  );
}
