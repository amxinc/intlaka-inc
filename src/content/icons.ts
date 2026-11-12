import {
  Bot,
  BrainCircuit,
  Building2,
  CarFront,
  Compass,
  Cpu,
  Flower2,
  Glasses,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/**
 * One minimal icon per company, app and project. Companies have no logo and no colour of their own:
 * every icon comes from the same line set (Lucide) and is drawn with the same stroke, in the current text colour.
 */
export const COMPANY_ICONS = {
  "amx-tech": Cpu,
  "real-estate": Building2,
  "joe-mood": UtensilsCrossed,
} satisfies Record<string, LucideIcon>;

export const APP_ICONS = { rose: Flower2, hera: Compass, mimi: Wallet } satisfies Record<string, LucideIcon>;

export const PROJECT_ICONS = {
  battouta: Bot,
  fihri: BrainCircuit,
  glasses: Glasses,
  autonomous: CarFront,
} satisfies Record<string, LucideIcon>;

/** Stroke width shared by every sector icon. */
export const SECTOR_STROKE = 1.4;
