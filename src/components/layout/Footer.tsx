import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { SocialIcon } from "@/components/ui/BrandIcons";
import { configuredSocials, mailtoHref, siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localeNames, localePath, locales, type Locale } from "@/i18n/config";
import { routes } from "@/lib/routes";

const YEAR = new Date().getFullYear();

const linkClass = "font-body text-[15px] leading-[21px] text-silver transition-colors hover:text-white";
const iconLinkClass =
  "flex size-9 items-center justify-center rounded-[8px] bg-white/[0.06] text-silver transition-colors hover:bg-white/15 hover:text-white";

type FooterProps = {
  locale: Locale;
  t: Pick<Dictionary, "meta" | "footer" | "nav" | "common" | "group">;
};

export function Footer({ locale, t }: FooterProps) {
  const href = (path: string) => localePath(locale, path);
  const socials = configuredSocials();

  const columns = [
    {
      heading: t.footer.group,
      links: [
        { label: t.nav.companies, href: href(routes.companies) },
        ...t.group.companies.map((company) => ({ label: company.name, href: href(`${routes.companies}#${company.id}`) })),
      ],
    },
    {
      heading: t.footer.apps,
      links: [
        { label: t.nav.rose, href: href(routes.rose) },
        { label: t.nav.hera, href: href(routes.hera) },
        { label: t.nav.mimi, href: href(`${routes.apps}#mimi-pay`) },
        { label: t.nav.allApps, href: href(routes.apps) },
      ],
    },
    {
      heading: t.footer.company,
      links: [
        { label: t.nav.about, href: href(routes.about) },
        { label: t.nav.projects, href: href(routes.projects) },
        { label: t.nav.studio, href: href(routes.studio) },
        { label: t.footer.privacy, href: href(routes.privacy) },
      ],
    },
  ];

  // Phones show only these links: every other page stays one tap away in the menu.
  const essentials = [
    { label: t.nav.companies, href: href(routes.companies) },
    { label: t.nav.apps, href: href(routes.apps) },
    { label: t.nav.about, href: href(routes.about) },
    { label: t.nav.contact, href: href(routes.contact) },
    { label: t.footer.privacy, href: href(routes.privacy) },
  ];

  return (
    <footer className="flex w-full justify-center border-t border-white/15 bg-night text-white">
      <div className="flex w-full max-w-[1400px] flex-col gap-14 px-8 pt-16 pb-10 max-[809px]:gap-10 max-[809px]:px-5 max-[809px]:pt-12">
        {/* Brand + links */}
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 max-[1099px]:grid-cols-3 max-[809px]:grid-cols-1 max-[809px]:gap-7">
          <div className="flex flex-col gap-4 max-[1099px]:col-span-3 max-[809px]:col-span-1 max-[809px]:items-center max-[809px]:text-center">
            <Link href={href(routes.home)} aria-label={t.meta.siteName} className="w-fit">
              <Logo light />
            </Link>
            <p className="max-w-[300px] font-body text-[14px] leading-[1.6] text-fog">{t.footer.tagline}</p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-4 max-[809px]:hidden">
              <p className="font-display text-[13px] font-medium text-fog">{col.heading}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex flex-col gap-4 max-[809px]:hidden">
            <p className="font-display text-[13px] font-medium text-fog">{t.footer.contact}</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={mailtoHref} className={`${linkClass} inline-flex items-center gap-2 break-all`}>
                  <Mail className="size-4 shrink-0" strokeWidth={1.6} aria-hidden />
                  <span dir="ltr">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <Link href={href(routes.contact)} className={linkClass}>
                  {t.nav.cta}
                </Link>
              </li>
            </ul>
            {socials.length > 0 && (
              <ul className="flex flex-wrap gap-2 pt-1" aria-label={t.footer.followUs}>
                {socials.map((s) => (
                  <li key={s.network}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={iconLinkClass}
                    >
                      <SocialIcon network={s.network} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Phones: the essential links, then one row of ways to reach us. */}
          <div className="hidden flex-col items-center gap-6 max-[809px]:flex">
            <nav aria-label={t.nav.mainLabel}>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                {essentials.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="flex flex-wrap justify-center gap-2" aria-label={t.footer.contact}>
              <li>
                <a href={mailtoHref} aria-label={siteConfig.contact.email} className={iconLinkClass}>
                  <Mail className="size-4" strokeWidth={1.6} aria-hidden />
                </a>
              </li>
                {socials.map((s) => (
                  <li key={s.network}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={iconLinkClass}>
                      <SocialIcon network={s.network} className="size-4" />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-8 max-[809px]:justify-center">
          <p className="font-body text-[13px] text-fog max-[809px]:text-center">
            © {YEAR} {t.meta.siteName}. {t.footer.rights}
          </p>
          <ul className="flex items-center gap-4 max-[809px]:hidden" aria-label={t.common.language}>
            {locales.map((target) => (
              <li key={target}>
                <a
                  href={localePath(target, "/")}
                  hrefLang={target}
                  lang={target}
                  aria-current={target === locale ? "true" : undefined}
                  className={target === locale ? "font-body text-[13px] text-white" : "font-body text-[13px] text-fog hover:text-white"}
                >
                  {localeNames[target]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
