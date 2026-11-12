import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getDictionary } from "@/i18n/dictionaries";
import { localeTags } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

/** Update this date whenever the policy text changes. */
const LAST_UPDATED = "2026-11-11";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return pageMetadata({ locale, path: routes.privacy, ...t.privacy.meta });
}

export default async function PrivacyPage() {
  const { locale, t } = await getDictionary();
  const p = t.privacy;
  const updated = new Intl.DateTimeFormat(localeTags[locale], { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${LAST_UPDATED}T00:00:00Z`),
  );
  return (
    <>
      <PageHero
        tag={t.footer.privacy}
        title={p.title}
        subtitle={
          <>
            {p.updated}: <time dateTime={LAST_UPDATED}>{updated}</time>
          </>
        }
      />
      <Section innerClassName="items-stretch">
        <article className="mx-auto flex w-full max-w-[760px] flex-col gap-10">
          {p.sections.map((section) => (
            <section key={section.title} className="flex flex-col gap-3">
              <h2 className="font-display text-[22px] font-normal text-ink">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-body text-[16px] leading-[1.7] text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
      </Section>
    </>
  );
}
