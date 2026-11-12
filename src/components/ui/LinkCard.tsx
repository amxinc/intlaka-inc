import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  icon: ReactNode;
  title: string;
  /** Small line under the title: a sector, a kind of product. */
  kicker?: string;
  text: string;
  /** Status pill on the end side of the icon row. */
  status?: ReactNode;
  href?: string;
  link?: string;
  id?: string;
  className?: string;
};

/** Large mist card for a company, an app or a project. It is a link when `href` is given. */
export function LinkCard({ icon, title, kicker, text, status, href, link, id, className }: Props) {
  const classes = cn(
    "group relative flex h-full flex-col gap-10 overflow-hidden rounded-[10px] bg-mist p-8 max-[809px]:p-6",
    href && "transition-colors duration-300 hover:bg-brand-soft",
    className,
  );
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="text-ink [&>svg]:size-8">{icon}</span>
        {status && (
          <span className="rounded-full border border-black/[0.08] bg-white px-2.5 py-1 font-display text-[12px] leading-4 font-medium text-ink-soft">
            {status}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-[30px] leading-[1.15] font-normal tracking-[-0.03em] text-ink max-[809px]:text-[26px]">{title}</h3>
          {kicker && <p className="font-display text-[14px] font-medium text-muted">{kicker}</p>}
        </div>
        <p className="max-w-[460px] font-body text-[15.5px] leading-[1.6] font-light text-slate">{text}</p>
      </div>
      {href && link && (
        <span className="mt-auto inline-flex items-center gap-2 font-display text-[15px] font-medium text-brand">
          {link}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden />
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <Link id={id} href={href} className={classes}>
        {body}
      </Link>
    );
  }
  return (
    <article id={id} className={classes}>
      {body}
    </article>
  );
}
