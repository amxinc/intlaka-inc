/** Every public page, as a locale-independent path. Used by the sitemap and navigation. */
export const routes = {
  home: "/",
  companies: "/companies",
  apps: "/apps",
  rose: "/apps/rose",
  hera: "/apps/hera",
  projects: "/projects",
  studio: "/studio",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
} as const;

export type RouteKey = keyof typeof routes;
