import { Mail } from "lucide-react";
import { Accent } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import { HorizonGlow, Orbits, PointField } from "@/components/ui/Orbits";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { Signature } from "@/components/ui/Signature";
import { mailtoHref, siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePath, type Locale } from "@/i18n/config";
import { routes } from "@/lib/routes";

/**
 * Closing call to action of every page. It ends on a signature line: the start of a partnership.
 * Desktop: a night panel, the invitation beside the orbits. Tablet and phone: a full-width night section
 * that runs into the footer, the invitation on one centred axis.
 */
export function CtaSection({ locale, t }: { locale: Locale; t: Pick<Dictionary, "cta" | "common"> }) {
  return (
    <section aria-labelledby="cta-title" className="mt-[76px] w-full desktop:mb-[76px] desktop:max-w-[1400px] desktop:max-[1439px]:px-5 phone:mt-14">
      <div className="relative isolate overflow-clip bg-night text-white desktop:rounded-[20px]">
        <PointField />
        <HorizonGlow />
        <Reveal className="flex flex-col items-center px-8 pt-[132px] pb-[120px] desktop:grid desktop:grid-cols-[minmax(0,1fr)_auto] desktop:gap-x-14 desktop:px-16 desktop:py-[80px] phone:px-5 phone:pt-[88px] phone:pb-[80px]">
          <div className="flex w-full max-w-[736px] flex-col items-center gap-5 text-center desktop:max-w-[680px] desktop:items-start desktop:text-start">
            <SectionTag dark>{t.cta.tag}</SectionTag>
            <h2 id="cta-title" className="type-page">
              <Accent text={t.cta.title} />
            </h2>
            <p className="max-w-[520px] font-body text-[17px] leading-[1.6] text-pretty text-silver phone:text-[16px]">{t.cta.text}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3 desktop:justify-start max-[479px]:w-full max-[479px]:max-w-[280px] max-[479px]:flex-col max-[479px]:items-stretch">
              <Button href={localePath(locale, routes.contact)} variant="light">
                {t.common.contactUs}
              </Button>
              <Button
                href={mailtoHref}
                variant="outline-light"
                chevron={false}
                icon={<Mail className="size-[18px]" strokeWidth={1.6} aria-hidden />}
              >
                <span dir="ltr">{siteConfig.contact.email}</span>
              </Button>
            </div>
            <div className="mt-10 flex w-full max-w-[220px] items-end gap-2 border-b border-white/25 pb-1.5">
              <span aria-hidden className="font-body text-[14px] leading-none text-fog">
                ×
              </span>
              <Signature delay={0.35} className="h-8 min-w-0 flex-1" />
            </div>
          </div>
          <Orbits className="hidden w-[clamp(260px,27vw,380px)] desktop:me-6 desktop:block" />
        </Reveal>
      </div>
    </section>
  );
}
