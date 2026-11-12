import type { StaticImageData } from "next/image";
import placeholder from "@/assets/team/placeholder.svg";

/**
 * Team photos.
 *
 * Every entry is a placeholder for now. To publish a real person:
 * 1. add the photo to `src/assets/team/` (square, at least 240 x 240 px),
 * 2. import it here and assign it to the person's id,
 * 3. replace the name and role of that id in `src/i18n/dictionaries/{en,fr,ar}.ts` (`about.founder`, `about.team.people`).
 */
export const teamPhotos: Record<string, StaticImageData> = {
  founder: placeholder,
  "member-1": placeholder,
  "member-2": placeholder,
  "member-3": placeholder,
  "member-4": placeholder,
  "member-5": placeholder,
  "member-6": placeholder,
};

export const teamPhoto = (id: string): StaticImageData => teamPhotos[id] ?? placeholder;
