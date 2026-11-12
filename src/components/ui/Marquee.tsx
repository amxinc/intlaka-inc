import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  gap?: number;
  className?: string;
};

/** Infinite ticker: renders the children twice and translates by -50%. Always laid out left to right. */
export function Marquee({ children, duration = 40, gap = 12, className }: MarqueeProps) {
  return (
    <div
      dir="ltr"
      className={cn("relative w-full overflow-hidden", className)}
      style={{ maskImage: "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)" }}
    >
      <div className="flex w-max animate-marquee" style={{ "--marquee-duration": `${duration}s` } as CSSProperties}>
        <div className="flex shrink-0 items-center" style={{ gap, paddingRight: gap }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={{ gap, paddingRight: gap }} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
