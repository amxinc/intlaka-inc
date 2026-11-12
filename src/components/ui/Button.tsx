import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const CHEVRON_MASK =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 6 4 L 10 8 L 6 12' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")";

export type ButtonVariant = "dark" | "brand" | "outline" | "outline-light" | "light";

const variants: Record<ButtonVariant, string> = {
  dark: "bg-ink text-white hover:bg-ink-soft",
  brand: "bg-brand text-white hover:bg-brand-deep",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  "outline-light": "border border-white/25 text-white hover:bg-white hover:text-ink",
  light: "bg-white text-ink hover:bg-brand-soft",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Leading icon. */
  icon?: ReactNode;
  chevron?: boolean;
  external?: boolean;
};

/** Call to action with a trailing chevron that points forward in both reading directions. */
export function Button({ href, children, variant = "dark", className, icon, chevron = true, external }: ButtonProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const classes = cn(
    "group inline-flex h-11 items-center justify-center gap-2 rounded-[6px] px-6 font-body text-[15px] leading-none font-medium whitespace-nowrap transition-colors duration-200",
    variants[variant],
    className,
  );
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {chevron && (
        <span
          aria-hidden
          className="block size-4 shrink-0 bg-current transition-transform duration-200 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
          style={{ maskImage: CHEVRON_MASK, WebkitMaskImage: CHEVRON_MASK }}
        />
      )}
    </>
  );
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
