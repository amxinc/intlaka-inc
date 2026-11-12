"use client";

import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { cn } from "@/lib/utils";

/** A long flourish that underlines a word. */
const FLOURISH = "M6 48C66 22 146 8 214 18C264 26 250 64 206 62C176 60 188 34 244 30C322 24 398 36 472 31C532 27 588 20 634 12";

/** A pen stroke that signs itself when scrolled into view. It mirrors in right-to-left layouts. */
export function Signature({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <m.svg
      aria-hidden
      viewBox="0 0 640 72"
      fill="none"
      className={cn("overflow-visible rtl:-scale-x-100", className)}
      initial="unsigned"
      whileInView="signed"
      viewport={{ once: true }}
    >
      <m.path
        d={FLOURISH}
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          unsigned: { pathLength: 0, opacity: 0 },
          signed: {
            pathLength: 1,
            opacity: 1,
            transition: {
              // With reduced motion the stroke appears at once instead of being drawn.
              pathLength: { duration: reduce ? 0 : 1.5, delay: reduce ? 0 : delay, ease: [0.6, 0, 0.2, 1] },
              opacity: { duration: 0.01, delay: reduce ? 0 : delay },
            },
          },
        }}
      />
    </m.svg>
  );
}
