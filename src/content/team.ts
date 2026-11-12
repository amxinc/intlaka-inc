import type { StaticImageData } from "next/image";
import ahmad from "@/assets/team/ahmad.jpg";
import amine from "@/assets/team/amine.jpg";
import ayoub from "@/assets/team/ayoub.jpg";
import khaoula from "@/assets/team/khaoula.jpg";
import khouloud from "@/assets/team/khouloud.jpeg";
import sarah from "@/assets/team/sarah.jpg";

/**
 * Team photos, by person id. The files live in `src/assets/team/` (square, at least 240 x 240 px).
 * Names and roles are in `src/i18n/dictionaries/{en,fr,ar}.ts` (`about.founder`, `about.team.people`), under the same ids.
 */
export const teamPhotos = { ahmad, ayoub, sarah, khouloud, amine, khaoula } satisfies Record<string, StaticImageData>;

export type TeamId = keyof typeof teamPhotos;
