import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialIcon } from "@/components/ui/BrandIcons";
import { PageHero } from "@/components/ui/PageHero";
import { configuredSocials, mailtoHref, siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return pageMetadata({ locale, path: routes.contact, ...t.contact.meta });
}

export default async function ContactPage() {
  const { locale, t } = await getDictionary();
  const c = t.contact;
  const socials = configuredSocials();

  return (
    <>
      <PageHero tag={c.hero.tag} title={c.hero.title} subtitle={c.hero.subtitle} />
      <section
        aria-label={c.form.title}
        className="grid w-full max-w-[1464px] grid-cols-[1.5fr_1fr] gap-5 px-8 py-[76px] max-[1099px]:grid-cols-1 max-[809px]:gap-3 max-[809px]:px-5 max-[809px]:py-5 max-[809px]:pb-14"
      >
        <div className="rounded-[10px] border border-line p-10 max-[809px]:p-5">
          <h2 className="pb-7 font-display text-[28px] font-normal tracking-[-0.03em] text-ink">{c.form.title}</h2>
          <ContactForm locale={locale} t={c.form} />
        </div>

        <aside className="flex flex-col gap-5 max-[809px]:gap-2.5">
          <div className="flex flex-col items-start gap-4 rounded-[10px] bg-night p-8 text-white max-[809px]:p-5">
            <span className="flex size-11 items-center justify-center rounded-[10px] bg-white/10 text-white">
              <Mail className="size-6" strokeWidth={1.4} aria-hidden />
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-[20px] font-normal">{c.side.emailTitle}</h2>
              <p className="font-body text-[15px] leading-[1.6] text-silver">{c.side.emailText}</p>
            </div>
            <a
              href={mailtoHref}
              className="inline-flex h-11 items-center gap-2 rounded-[6px] bg-white px-5 font-body text-[15px] font-semibold text-ink transition-colors hover:bg-brand-soft"
            >
              <Mail className="size-[18px]" strokeWidth={1.8} aria-hidden />
              <span dir="ltr">{siteConfig.contact.email}</span>
            </a>
          </div>

          {socials.length > 0 && (
            <div className="flex flex-col gap-3 rounded-[10px] bg-mist p-8 max-[809px]:p-5">
              <h2 className="font-display text-[14px] font-medium text-muted">{c.side.socialTitle}</h2>
              <ul className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <li key={s.network}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex size-10 items-center justify-center rounded-[8px] border border-line text-ink transition-colors hover:border-brand hover:text-brand"
                    >
                      <SocialIcon network={s.network} className="size-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-5 rounded-[10px] bg-mist p-8 max-[809px]:p-5">
            <h2 className="font-display text-[20px] font-normal text-ink">{c.side.nextTitle}</h2>
            <ol className="flex flex-col gap-4">
              {c.side.next.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[12px] text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 font-body text-[15px] leading-[1.55] text-ink-soft">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </section>
    </>
  );
}
