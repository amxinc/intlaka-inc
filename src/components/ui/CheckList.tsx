import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckList({ items, columns = 1, className }: { items: string[]; columns?: 1 | 2; className?: string }) {
  return (
    <ul className={cn("grid gap-x-8 gap-y-3.5", columns === 2 && "min-[810px]:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span aria-hidden className="mt-[3px] flex size-[18px] shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
            <Check className="size-3" strokeWidth={2.6} />
          </span>
          <span className="font-body text-[15.5px] leading-[1.55] text-ink-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}
