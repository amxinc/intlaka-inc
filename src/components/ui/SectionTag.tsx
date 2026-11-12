import { cn } from "@/lib/utils";

/** Small label above headings, marked with a slanted tick. */
export function SectionTag({ children, dark = false, className }: { children: string; dark?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-[13px] leading-5",
        dark ? "text-fog" : "text-muted",
        className,
      )}
    >
      <span aria-hidden className={cn("h-2.5 w-1 shrink-0 -skew-x-[13deg]", dark ? "bg-white" : "bg-ink")} />
      {children}
    </span>
  );
}
