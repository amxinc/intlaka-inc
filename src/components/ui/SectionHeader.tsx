import { cn } from "@/lib/utils";
import { SectionTag } from "./SectionTag";

type SectionHeaderProps = {
  tag: string;
  title: string;
  text?: string;
  dark?: boolean;
  /** Heading level, h2 by default. */
  as?: "h1" | "h2";
  className?: string;
};

/** Opens a section on a single line: tag and title on the start side, the supporting text on the end side. */
export function SectionHeader({ tag, title, text, dark = false, as: Heading = "h2", className }: SectionHeaderProps) {
  return (
    <div className={cn("flex w-full items-end justify-between gap-x-14 gap-y-3 max-[1099px]:flex-col max-[1099px]:items-start", className)}>
      <div className={"flex max-w-[680px] flex-col items-start gap-3"}>
        <SectionTag dark={dark}>{tag}</SectionTag>
        <Heading className={cn("type-section", dark ? "text-white" : "text-ink")}>{title}</Heading>
      </div>
      {text && (
        <p className={cn("max-w-[400px] font-body text-[15.5px] leading-[1.6] text-pretty", dark ? "text-silver" : "text-slate")}>{text}</p>
      )}
    </div>
  );
}
