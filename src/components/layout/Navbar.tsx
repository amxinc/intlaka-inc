"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { LanguageSwitcher, useLocaleHref } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { mailtoHref } from "@/config/site";
import { APP_ICONS, SECTOR_STROKE } from "@/content/icons";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localeNames, localePath, locales, stripLocale, type Locale } from "@/i18n/config";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

type NavbarProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
  siteName: string;
};

const CLOSE_GRACE_MS = 150;

const linkClass =
  "flex items-center gap-1 rounded-[6px] px-3 py-1.5 font-display text-[15px] leading-[19px] font-normal tracking-[-0.2px] whitespace-nowrap transition-colors duration-200 hover:bg-current/[0.07]";
const activeClass = "bg-current/[0.07]";

const mobileLinkClass = "flex h-[52px] w-full items-center font-display text-[24px] tracking-[-0.02em] text-white";

/** True once the page has left its very top: the bar is transparent only there. */
function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return scrolled;
}

export default function Navbar({ locale, nav, common, siteName }: NavbarProps) {
  const [appsOpen, setAppsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAppsOpen, setMobileAppsOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const scrolled = useScrolled();
  const reduceMotion = useReducedMotion();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();
  const mobileMenuId = useId();
  const mobileAppsId = useId();
  const pathname = usePathname() || "/";
  const current = stripLocale(pathname);
  const hrefFor = useLocaleHref();
  const href = (path: string) => localePath(locale, path);

  // Before the "Apps" menu, and after it.
  const leading = [{ label: nav.companies, path: routes.companies }];
  const trailing = [
    { label: nav.projects, path: routes.projects },
    { label: nav.studio, path: routes.studio },
    { label: nav.about, path: routes.about },
  ];
  const apps = [
    { label: nav.rose, description: nav.roseDesc, path: routes.rose, Icon: APP_ICONS.rose },
    { label: nav.hera, description: nav.heraDesc, path: routes.hera, Icon: APP_ICONS.hera },
    { label: nav.mimi, description: nav.mimiDesc, path: `${routes.apps}#mimi-pay`, Icon: APP_ICONS.mimi },
  ];
  const isActive = (path: string) => current === path || current.startsWith(`${path}/`);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setAppsOpen(false), CLOSE_GRACE_MS);
  }, [cancelClose]);
  useEffect(() => cancelClose, [cancelClose]);

  // Close menus on navigation (state adjusted during render, no effect needed).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setAppsOpen(false);
    setMobileOpen(false);
  }

  // Outside click and Escape close any open menu.
  useEffect(() => {
    if (!appsOpen && !mobileOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setAppsOpen(false);
        setMobileOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAppsOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [appsOpen, mobileOpen]);

  // The mobile menu covers the screen: keep the page behind it still.
  useEffect(() => {
    if (!mobileOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [mobileOpen]);

  const solid = scrolled && !mobileOpen;

  const onHoverEnter = (e: ReactPointerEvent) => {
    if (e.pointerType !== "mouse") return;
    cancelClose();
    setAppsOpen(true);
  };
  const onHoverLeave = (e: ReactPointerEvent) => {
    if (e.pointerType === "mouse") scheduleClose();
  };

  return (
    <header
      ref={rootRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center border-b px-8 transition-colors duration-300 ease-out max-[809px]:px-5",
        solid ? "border-black/[0.08] bg-white text-ink" : "border-transparent text-white",
      )}
    >
      {/* Desktop bar */}
      <nav
        aria-label={nav.mainLabel}
        className="relative hidden h-[72px] w-full max-w-[1336px] items-center gap-4 min-[1000px]:flex"
      >
        <Link href={href(routes.home)} className="flex shrink-0 items-center rounded-[6px]" aria-label={siteName}>
          <Logo />
        </Link>

        <ul className="flex min-w-0 flex-1 items-center justify-center">
          {leading.map((link) => (
            <li key={link.path}>
              <Link
                href={href(link.path)}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={cn(linkClass, isActive(link.path) && activeClass)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="relative" onPointerEnter={onHoverEnter} onPointerLeave={onHoverLeave}>
            <button
              type="button"
              aria-expanded={appsOpen}
              aria-controls={panelId}
              onClick={() => {
                cancelClose();
                setAppsOpen((v) => !v);
              }}
              className={cn(linkClass, "cursor-pointer", (appsOpen || isActive(routes.apps)) && activeClass)}
            >
              {nav.apps}
              <ChevronDown
                aria-hidden
                strokeWidth={1.8}
                className={cn("size-3.5 transition-transform duration-200", appsOpen && "rotate-180")}
              />
            </button>
            <AnimatePresence>
              {appsOpen && (
                <m.div
                  id={panelId}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute start-1/2 top-[calc(100%+12px)] w-[400px] -translate-x-1/2 rtl:translate-x-1/2"
                >
                  <ul className="flex flex-col gap-1 rounded-[12px] border border-black/[0.08] bg-white p-2 text-ink">
                    {apps.map(({ label, description, path, Icon }) => (
                      <li key={path}>
                        <Link
                          href={href(path)}
                          className="flex items-start gap-3 rounded-[8px] p-2.5 transition-colors hover:bg-mist"
                        >
                          <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[8px] bg-ink text-white">
                            <Icon className="size-[18px]" strokeWidth={SECTOR_STROKE} aria-hidden />
                          </span>
                          <span className="flex flex-col gap-1">
                            <span className="font-display text-[15px] leading-[19px] font-medium text-ink">{label}</span>
                            <span className="font-body text-[13.5px] leading-[19px] text-muted">{description}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                    <li className="border-t border-black/[0.06] pt-1">
                      <Link
                        href={href(routes.apps)}
                        className="group flex items-center justify-between gap-3 rounded-[8px] px-2.5 py-2 font-display text-[14px] font-medium text-ink transition-colors hover:bg-mist"
                      >
                        {nav.allApps}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" aria-hidden />
                      </Link>
                    </li>
                  </ul>
                </m.div>
              )}
            </AnimatePresence>
          </li>
          {trailing.map((link) => (
            <li key={link.path}>
              <Link
                href={href(link.path)}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={cn(linkClass, isActive(link.path) && activeClass)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher locale={locale} label={common.language} />
          <Link
            href={href(routes.contact)}
            className={cn(
              "flex h-[36px] items-center rounded-[6px] px-4 font-display text-[14px] font-medium whitespace-nowrap transition-colors duration-300",
              solid ? "bg-ink text-white hover:bg-ink/85" : "bg-white text-ink hover:bg-white/85",
            )}
          >
            {nav.cta}
          </Link>
        </div>
      </nav>

      {/* Mobile and tablet bar, and the menu it opens. Any link inside closes the menu, even one to the current page. */}
      <div
        className="w-full min-[1000px]:hidden"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setMobileOpen(false);
        }}
      >
        <div className="relative z-[1] flex h-[64px] items-center justify-between">
          <Link href={href(routes.home)} aria-label={siteName}>
            <Logo />
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? common.closeMenu : common.openMenu}
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => {
              setMobileAppsOpen(isActive(routes.apps));
              setMobileOpen((v) => !v);
            }}
            className="-me-2 flex size-10 cursor-pointer items-center justify-center rounded-[8px]"
          >
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={cn(
                  "absolute inset-x-0 h-[1.5px] bg-current transition-all duration-300 ease-out",
                  mobileOpen ? "top-[5px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 h-[1.5px] bg-current transition-all duration-300 ease-out",
                  mobileOpen ? "top-[5px] -rotate-45" : "top-[10px]",
                )}
              />
            </span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <m.div
              id={mobileMenuId}
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-0 bg-night text-white"
            >
              <nav
                aria-label={nav.mainLabel}
                className="mx-auto flex h-full w-full max-w-[560px] flex-col px-5 pt-[64px] pb-[max(16px,env(safe-area-inset-bottom))]"
              >
                <m.ul
                  initial="closed"
                  animate="open"
                  variants={{ open: { transition: { staggerChildren: 0.04, delayChildren: 0.06 } } }}
                  className="flex min-h-0 flex-1 flex-col overflow-y-auto py-5"
                >
                  {leading.map((link) => (
                    <MobileLink key={link.path} href={href(link.path)} active={isActive(link.path)} reduceMotion={reduceMotion}>
                      {link.label}
                    </MobileLink>
                  ))}
                  <m.li variants={mobileItem(reduceMotion)}>
                    <button
                      type="button"
                      aria-expanded={mobileAppsOpen}
                      aria-controls={mobileAppsId}
                      onClick={() => setMobileAppsOpen((v) => !v)}
                      className={cn(mobileLinkClass, "cursor-pointer justify-between")}
                    >
                      {nav.apps}
                      <ChevronDown
                        aria-hidden
                        strokeWidth={1.4}
                        className={cn("size-5 text-fog transition-transform duration-300", mobileAppsOpen && "rotate-180")}
                      />
                    </button>
                    <div
                      id={mobileAppsId}
                      inert={!mobileAppsOpen}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                        mobileAppsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <ul className="flex flex-col gap-3 overflow-hidden">
                        {[...apps, { label: nav.allApps, description: "", path: routes.apps }].map(({ label, description, path }) => (
                          <li key={path} className="first:pt-1 last:pb-3">
                            <Link href={href(path)} aria-current={isActive(path) ? "page" : undefined} className="flex flex-col gap-0.5">
                              <span className="flex items-center gap-2.5 font-display text-[17px] leading-6 text-white">
                                {label}
                                {isActive(path) && <span aria-hidden className="h-3 w-1 -skew-x-[13deg] bg-white" />}
                              </span>
                              {description && <span className="font-body text-[13.5px] leading-5 text-fog">{description}</span>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </m.li>
                  {[...trailing, { label: nav.contact, path: routes.contact }].map((link) => (
                    <MobileLink key={link.path} href={href(link.path)} active={isActive(link.path)} reduceMotion={reduceMotion}>
                      {link.label}
                    </MobileLink>
                  ))}
                </m.ul>

                <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                  <Button href={href(routes.contact)} variant="light" className="w-full">
                    {common.contactUs}
                  </Button>
                  <Button
                    href={mailtoHref}
                    variant="outline-light"
                    chevron={false}
                    icon={<Mail className="size-[18px]" strokeWidth={1.6} aria-hidden />}
                    className="w-full"
                  >
                    {common.emailUs}
                  </Button>
                  <div className="flex items-center justify-center gap-6 pt-1" role="group" aria-label={common.language}>
                    {locales.map((target) => (
                      <a
                        key={target}
                        href={hrefFor(target)}
                        hrefLang={target}
                        lang={target}
                        aria-current={target === locale ? "true" : undefined}
                        className={cn("flex h-10 items-center font-body text-[14px]", target === locale ? "text-white" : "text-fog")}
                      >
                        {localeNames[target]}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function mobileItem(reduceMotion: boolean | null) {
  return { closed: { opacity: 0, y: reduceMotion ? 0 : 10 }, open: { opacity: 1, y: 0 } };
}

function MobileLink({
  href,
  active,
  reduceMotion,
  children,
}: {
  href: string;
  active: boolean;
  reduceMotion: boolean | null;
  children: string;
}) {
  return (
    <m.li variants={mobileItem(reduceMotion)}>
      <Link href={href} aria-current={active ? "page" : undefined} className={cn(mobileLinkClass, "gap-3")}>
        {children}
        {active && <span aria-hidden className="h-3.5 w-[5px] -skew-x-[13deg] bg-white" />}
      </Link>
    </m.li>
  );
}
