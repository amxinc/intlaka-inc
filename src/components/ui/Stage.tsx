import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Soft dotted backdrop that product mockups sit on. */
export function Stage({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-[8px] bg-mist p-6 max-[809px]:p-4",
        className,
      )}
      style={{
        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.09) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      {children}
    </div>
  );
}
