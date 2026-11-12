import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { Stage } from "@/components/ui/Stage";
import { cn } from "@/lib/utils";

type SplitFeatureProps = {
  id?: string;
  tag: string;
  title: string;
  text?: string;
  visual: ReactNode;
  /** Visual on the start side instead of the end side. */
  reverse?: boolean;
  /** Heading level; h2 when the block is its own section. */
  as?: "h2" | "h3";
  children?: ReactNode;
};

/** Text on one side, product visual on the other. */
export function SplitFeature({ id, tag, title, text, visual, reverse, as: Heading = "h3", children }: SplitFeatureProps) {
  return (
    <div id={id} className="grid w-full grid-cols-2 items-center gap-12 max-[1099px]:grid-cols-1 max-[1099px]:gap-8">
      <div className={cn("flex flex-col items-start gap-5", reverse && "min-[1100px]:order-2")}>
        <SectionTag>{tag}</SectionTag>
        <Heading className="type-feature text-ink">
          {title}
        </Heading>
        {text && <p className="max-w-[520px] font-body text-[16.5px] leading-[1.65] text-slate">{text}</p>}
        {children}
      </div>
      <Reveal className={cn(reverse && "min-[1100px]:order-1")}>
        <Stage className="min-h-[400px] max-[809px]:min-h-0">{visual}</Stage>
      </Reveal>
    </div>
  );
}
