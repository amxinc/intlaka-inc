import { cn } from "@/lib/utils";

/**
 * Intlaka mark, same geometry as src/assets/intlaka-logo-pack/mark, drawn in the current text color.
 * It points forward: up and to the right, mirrored to the left in right-to-left layouts.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="-300 -300 600 600" aria-hidden className={cn("h-[26px] w-auto shrink-0 rtl:-scale-x-100", className)} fill="currentColor">
      <g transform="scale(1.346112) translate(-5.472 -215.681)">
        <g transform="rotate(20 0 238)">
          <path d="M -194.31 168.03 L -43.32 10.48 A 60.00 60.00 0 0 1 43.32 10.48 L 194.31 168.03 A 78.00 78.00 0 1 1 69.06 258.49 L 14.14 154.72 A 16.00 16.00 0 0 0 -14.14 154.72 L -69.06 258.49 A 78.00 78.00 0 1 1 -194.31 168.03 Z" />
          <path d="M -49.97 339.67 L -19.80 425.00 A 21.00 21.00 0 0 0 19.80 425.00 L 49.97 339.67 A 53.00 53.00 0 1 0 -49.97 339.67 Z" />
        </g>
      </g>
    </svg>
  );
}

/**
 * Full logo: the mark, then the name set as text (Latin, or Arabic on the Arabic site).
 * It is decorative here: the link around it carries the accessible name.
 */
export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span aria-hidden className={cn("flex items-center gap-2", light ? "text-white" : "text-current", className)}>
      <LogoMark />
      <span className="font-[family-name:var(--font-geist)] text-[20px] leading-none font-medium tracking-[-0.4px] rtl:hidden">Intlaka</span>
      <span className="hidden font-display text-[20px] leading-none font-medium rtl:block">انطلاقة</span>
    </span>
  );
}
