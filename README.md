# Intlaka website

The official website of Intlaka (انطلاقة), a group of companies between Morocco and Jordan.
Built with Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS 4 and Motion.

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

## Pages

| Page | Address | What it holds |
| --- | --- | --- |
| Home | `/` | Vision, belief, companies, apps, research, team, FAQ |
| Companies | `/companies` | AMX Tech, Intlaka Real Estate, JOE MOOD |
| Apps | `/apps` | Rose, Hera and Mimi Pay at a glance |
| Rose | `/apps/rose` | Safe mobility for women, with the launch countdown |
| Hera | `/apps/hera` | The travel companion, and Hera City |
| Projects | `/projects` | Research and development: Battouta, Fihri, smart glasses, autonomous driving |
| Hera Studio | `/studio` | The talent programme |
| About | `/about` | Vision, founder, team |
| Contact | `/contact` | Form and email address |
| Privacy | `/privacy` | Privacy policy |

## Where to change things

| What | Where |
| --- | --- |
| All text, in every language | `src/i18n/dictionaries/{en,fr,ar}.ts` |
| Team names and roles | `about.founder` and `about.team.people` in the three dictionaries |
| Team photos | `src/content/team.ts`, files in `src/assets/team` |
| Rose launch date (countdown) | `roseLaunch` in `src/config/site.ts`, and the `countdown` texts in the dictionaries |
| Contact email shown on the site | `src/config/site.ts` |
| Icons of the companies, apps and projects | `src/content/icons.ts` |
| Site URL, social links | Environment variables, see `.env.example` |
| Contact form (Resend key, recipient, sender) | Environment variables, see `.env.example` |
| Colours and fonts | `src/app/globals.css`, `src/app/[lang]/layout.tsx` |
| Logo | `src/components/layout/Logo.tsx`, source files in `src/assets/intlaka-logo-pack` |
| Favicons and web manifest | Copied to `public/` from `src/assets/intlaka-logo-pack/favicon` |
| Social share images | `node scripts/generate-og-images.mjs` |

### Team

The team on the About page is a placeholder: the names are invented and every photo is the same
silhouette. Before going live, replace each person in the three dictionaries and map their photo in
`src/content/team.ts` (the file explains how).

### Content rules

- Never use the em dash character.
- No statistics or numbers other than Rose's permanent 10%.
- No partner, vehicle brand, fleet size, hotel, city launch, event or plan that Intlaka has not announced.
- No "first", "only" or "largest".
- Rose "launches" on 19 December 2026. Hera, Hera City and Mimi Pay are "coming soon". Research projects have no dates.
- The single public contact is contact@intlaka.com. No other email and no phone number.

### Contact form

Messages are sent as emails through [Resend](https://resend.com) by a server action
(`src/app/[lang]/contact/actions.ts`, `src/lib/mailer.ts`). Before going live, verify your domain in
Resend and set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` (a sender on the verified
domain). These stay on the server and apply at runtime.

The reply-to of each email is the visitor's address, so you can answer directly. If Resend is not
configured or refuses an email, the visitor sees an error with a link to send the same message by
email, and the reason is written to the server log, so no message is lost silently.

### Languages

English is served at the root (`/about`), French and Arabic under `/fr` and `/ar`. Arabic is rendered
right to left. `src/proxy.ts` handles the routing; `/en/...` redirects to the unprefixed address.
Every string in `fr.ts` and `ar.ts` must exist in `en.ts` (TypeScript enforces the same shape).

### SEO

Each page has localized titles and descriptions, canonical and `hreflang` alternates, Open Graph images
per language (`public/og`), structured data (Organization, WebSite, FAQPage, AboutPage), `sitemap.xml`
and `robots.txt`. Set `NEXT_PUBLIC_SITE_URL` to the real domain.
