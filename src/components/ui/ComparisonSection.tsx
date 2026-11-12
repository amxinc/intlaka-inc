import type { ReactNode } from "react";
import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Props = {
  t: { tag: string; title: string; text: string; typical: string; ours: string; rows: string[][] };
  icon?: ReactNode;
};

/** Two-column comparison: the usual way on the start side, ours on the end side. */
export function ComparisonSection({ t, icon }: Props) {
  return (
    <Section>
      <SectionHeader tag={t.tag} title={t.title} text={t.text} />
      <Reveal className="w-full">
        <table className="w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-[10px] border border-line">
          <caption className="sr-only">{t.title}</caption>
          <thead>
            <tr>
              <th scope="col" className="border-b border-line bg-mist px-6 py-4 text-start font-display text-[14px] font-medium text-muted max-[640px]:px-4">
                {t.typical}
              </th>
              <th scope="col" className="bg-ink px-6 py-4 text-start max-[640px]:px-4">
                <span className="inline-flex items-center gap-2 font-display text-[15px] font-medium text-white">
                  {icon}
                  {t.ours}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {t.rows.map(([typical, ours], i) => (
              <tr key={ours}>
                <td className={`px-6 py-4 align-top max-[640px]:px-4 ${i < t.rows.length - 1 ? "border-b border-line" : ""}`}>
                  <span className="flex items-start gap-2.5 font-body text-[14.5px] leading-[1.5] text-muted">
                    <Minus className="mt-[3px] size-4 shrink-0 text-muted" aria-hidden />
                    {typical}
                  </span>
                </td>
                <td className={`bg-mist px-6 py-4 align-top max-[640px]:px-4 ${i < t.rows.length - 1 ? "border-b border-line" : ""}`}>
                  <span className="flex items-start gap-2.5 font-body text-[14.5px] leading-[1.5] text-ink">
                    <Check className="mt-[3px] size-4 shrink-0 text-brand" strokeWidth={2.4} aria-hidden />
                    {ours}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
