"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { localeNames, localePath, locales, stripLocale, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/** Link to the same page in another language. Use a plain <a>: switching locale changes the root layout. */
export function useLocaleHref() {
  const pathname = usePathname() || "/";
  const path = stripLocale(pathname);
  return (target: Locale) => localePath(target, path);
}

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const hrefFor = useLocaleHref();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="flex h-[36px] cursor-pointer items-center gap-1.5 rounded-[6px] px-2.5 font-display text-[14px] font-medium uppercase transition-colors hover:bg-current/[0.07]"
      >
        <Globe className="size-4" strokeWidth={1.6} aria-hidden />
        <span className="sr-only">{label}:</span>
        <span lang={locale}>{locale}</span>
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} strokeWidth={1.8} aria-hidden />
      </button>
      {open && (
        <ul
          id={menuId}
          className="absolute end-0 top-[calc(100%+8px)] z-20 min-w-[170px] rounded-[10px] border border-black/[0.08] bg-white p-1.5 text-ink"
        >
          {locales.map((target) => (
            <li key={target}>
              <a
                href={hrefFor(target)}
                hrefLang={target}
                lang={target}
                aria-current={target === locale ? "true" : undefined}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-3 rounded-[6px] px-3 py-2 font-body text-[14px] text-ink transition-colors hover:bg-mist"
              >
                {localeNames[target]}
                {target === locale && <Check className="size-4 text-brand" aria-hidden />}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
