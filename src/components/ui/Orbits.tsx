import { useId } from "react";
import { LogoMark } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

/** One orbit: its radius, the seconds of a full turn, where its body starts, and which way it travels. */
const ORBITS = [
  { radius: 112, seconds: 16, start: 140, reverse: false, dashed: false },
  { radius: 190, seconds: 28, start: 20, reverse: true, dashed: true },
  { radius: 268, seconds: 44, start: 250, reverse: false, dashed: false },
];
/** Length of the trail a body leaves behind it, in degrees. */
const TRAIL = 64;

const round = (n: number) => Number(n.toFixed(2));

/**
 * The Intlaka mark, small and still, at the centre of three orbits that never stop turning:
 * one vision, and everything the group builds moving around it. The whole figure fits inside its box.
 */
export function Orbits({ className }: { className?: string }) {
  const id = useId();
  return (
    <div aria-hidden className={cn("pointer-events-none relative aspect-square text-white", className)}>
      <svg viewBox="-300 -300 600 600" className="absolute inset-0 size-full" fill="none">
        <circle r="58" fill="currentColor" fillOpacity="0.035" stroke="currentColor" strokeOpacity="0.14" vectorEffect="non-scaling-stroke" />
        {ORBITS.map(({ radius, seconds, start, reverse, dashed }, i) => {
          const tail = (-TRAIL * Math.PI) / 180;
          const x = round(radius * Math.cos(tail));
          const y = round(radius * Math.sin(tail));
          return (
            <g
              key={radius}
              className="animate-orbit"
              style={{ animationDuration: `${seconds}s`, animationDirection: reverse ? "reverse" : "normal", transformOrigin: "0px 0px" }}
            >
              {/* The body is drawn at 0 degrees with its trail behind it, then turned to its start (and mirrored when it travels backwards). */}
              <g transform={`rotate(${start})${reverse ? " scale(1 -1)" : ""}`}>
                <linearGradient id={`${id}-${i}`} gradientUnits="userSpaceOnUse" x1={x} y1={y} x2={radius} y2="0">
                  <stop offset="0" stopColor="currentColor" stopOpacity="0" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0.9" />
                </linearGradient>
                <circle
                  r={radius}
                  stroke="currentColor"
                  strokeOpacity={dashed ? 0.34 : 0.16}
                  strokeDasharray={dashed ? "1 9" : undefined}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path d={`M${x} ${y}A${radius} ${radius} 0 0 1 ${radius} 0`} stroke={`url(#${id}-${i})`} strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <circle cx={radius} r="4.5" fill="currentColor" />
              </g>
            </g>
          );
        })}
      </svg>
      <LogoMark className="absolute inset-0 m-auto h-[11.5%]" />
    </div>
  );
}

/** A low glow on the horizon, behind the centred sections of tablet and phone. */
export function HorizonGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_100%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0)_72%)] desktop:hidden",
        className,
      )}
    />
  );
}

/** A field of fine points behind the night sections, fading out toward the edges. */
export function PointField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.13)_1px,transparent_1.5px)] bg-[length:28px_28px]",
        className,
      )}
      style={{ maskImage: "radial-gradient(75% 85% at 50% 45%, #000 0%, transparent 100%)" }}
    />
  );
}
