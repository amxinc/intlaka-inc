import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
  dark?: boolean;
  className?: string;
};

export function IconCard({ icon: Icon, title, text, dark = false, className }: IconCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-8 rounded-[10px] p-6",
        dark ? "bg-night-soft" : "bg-mist",
        className,
      )}
    >
      <Icon className={cn("size-6", dark ? "text-white" : "text-ink")} strokeWidth={1.4} aria-hidden />
      <div className="flex flex-col gap-2">
        <h3 className={cn("font-display text-[18px] leading-[1.35] font-normal", dark ? "text-white" : "text-ink")}>{title}</h3>
        <p className={cn("font-body text-[15px] leading-[1.6] font-light", dark ? "text-silver" : "text-slate")}>{text}</p>
      </div>
    </div>
  );
}
