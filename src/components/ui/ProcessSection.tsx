import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Props = { t: { tag: string; title: string; steps: { title: string; text: string }[] } };

/** Numbered steps on a line; stacks vertically on small screens. */
export function ProcessSection({ t }: Props) {
  return (
    <Section>
      <SectionHeader tag={t.tag} title={t.title} />
      <Reveal className="w-full">
        <ol
          className="relative grid w-full grid-cols-[repeat(var(--steps),minmax(0,1fr))] gap-6 max-[1099px]:grid-cols-1 max-[1099px]:gap-0"
          style={{ "--steps": t.steps.length } as React.CSSProperties}
        >
          <span aria-hidden className="absolute inset-x-[10%] top-5 h-px bg-line max-[1099px]:hidden" />
          {t.steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center gap-4 text-center max-[1099px]:flex-row max-[1099px]:items-start max-[1099px]:gap-5 max-[1099px]:pb-8 max-[1099px]:text-start max-[1099px]:last:pb-0">
              {i < t.steps.length - 1 && (
                <span aria-hidden className="absolute start-5 top-10 bottom-0 hidden w-px bg-line max-[1099px]:block" />
              )}
              <span className="relative z-[1] flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-white font-mono text-[13px] text-brand">
                {i + 1}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-[18px] font-normal text-ink">{step.title}</h3>
                <p className="font-body text-[14.5px] leading-[1.55] font-light text-slate">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
