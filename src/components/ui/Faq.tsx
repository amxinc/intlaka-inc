"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type FaqItem = { question: string; answer: string };

/** Accordion. Answers stay in the HTML when collapsed (readable by search engines), but are inert. */
export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  return (
    <div className="w-full">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={item.question} className={cn("border-b border-line", i === 0 && "border-t")}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full cursor-pointer items-center gap-4 py-6 text-start"
              >
                <span className="flex-1 font-body text-[17px] leading-[1.45] text-ink-soft transition-colors group-hover:text-ink">
                  {item.question}
                </span>
                <span aria-hidden className="relative size-3.5 shrink-0">
                  <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-ink" />
                  <span
                    className={cn(
                      "absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 rounded-full bg-ink transition-transform duration-300",
                      isOpen && "rotate-90",
                    )}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[760px] pb-6 font-body text-[15.5px] leading-[1.65] font-light text-slate">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
