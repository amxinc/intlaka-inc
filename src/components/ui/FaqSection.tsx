import { Faq } from "@/components/ui/Faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Props = { tag: string; title: string; items: { question: string; answer: string }[] };

/** FAQ block with FAQPage structured data. */
export function FaqSection({ tag, title, items }: Props) {
  return (
    <Section id="faq">
      <div className="grid w-full grid-cols-[1fr_1.7fr] gap-16 max-[1099px]:grid-cols-1 max-[1099px]:gap-8">
        <SectionHeader tag={tag} title={title} className="min-[1100px]:sticky min-[1100px]:top-28 min-[1100px]:self-start" />
        <Faq items={items} />
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
    </Section>
  );
}
