import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: "white" | "night" | "plain";
  className?: string;
  innerClassName?: string;
  labelledBy?: string;
};

/** Building block of every page: an open white section, or a 1400px night panel (full-bleed below 810px). */
export function Section({ children, id, tone = "white", className, innerClassName, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "w-full max-w-[1400px] overflow-clip",
        tone === "night" && "bg-night text-white min-[810px]:rounded-[10px]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col items-center gap-12 px-8 max-[809px]:gap-8 max-[809px]:px-5",
          tone === "night" ? "py-[88px] max-[809px]:py-16" : "py-[76px] max-[809px]:py-14",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
