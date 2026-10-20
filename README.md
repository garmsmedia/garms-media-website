# GARMS MEDIA — Website

One-page website for **GARMS MEDIA LTD**, a social media marketing agency concept for independent streetwear and urban-fashion brands in Los Angeles.

The site introduces GARMS, explains its services, shows speculative creative concepts, introduces the team and invites brand founders to get in touch.

> Brand, tone, honesty and coding rules live in **[AGENTS.md](./AGENTS.md)**. Read it before making changes.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components) + React 19
- TypeScript
- Tailwind CSS v4
- `next/font/local` with self-hosted Anton, DM Sans and Instrument Serif (SIL Open Font License)
- Server Actions for the contact form
- Optional: [Supabase](https://supabase.com) for storing contact-form leads (not required to build or deploy)

No UI kits, animation libraries or icon packs.

## Getting started

Requirements: **Node.js 20.9 or newer** and npm.

```bash
npm install          # install dependencies
npm run dev          # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run lint         # ESLint
npm run typecheck    # TypeScript check
npm run build        # production build
npm run start        # serve the production build locally
```

## Project structure

```
src/
  app/              layout, page, privacy page, SEO files (robots, sitemap, OG image), server action
  components/       layout/, sections/, contact/, ui/, visuals/
  content/          ✏️ all editable copy and data (site, services, concepts, team)
  lib/contact/      form validation, lead storage, rate limiting
supabase/migrations/  SQL for the contact_leads table
```

## Replacing placeholders

Everything that isn't confirmed yet is clearly labelled on the site and lives in `src/content/`.

| What | Where | How |
|------|-------|-----|
| Contact email | `src/content/site.ts` → `email` | Replace `null` with the confirmed address |
| Instagram / TikTok / LinkedIn | `src/content/site.ts` → `social` | Replace `null` with full profile URLs |
| Concept artwork | `src/content/concepts.ts` | Add images to `public/concepts/`, then set `image: "/concepts/file.jpg"` and a descriptive `imageAlt` |
| Concept copy | `src/content/concepts.ts` | Edit `title`, `format`, `slideCount`, `objective`, `slides` |
| Team roles / photos | `src/content/team.ts` | Add confirmed `role`, and `photo: "/team/name.jpg"` (files in `public/team/`) |
| Services | `src/content/services.ts` | Edit titles/descriptions; icons come from `src/components/ui/Icon.tsx` |
| Privacy policy | `src/app/privacy/page.tsx` | **Draft** — complete and review before collecting real enquiries |

Rules: no invented clients, testimonials, metrics, credentials or social handles (see AGENTS.md §8).

## Contact form

The form validates in the browser and again on the server, and includes basic spam protection (honeypot, minimum fill time, rate limit).

**Without Supabase configured (default):** the form shows a visible "in development" notice, and after a valid submission tells the visitor clearly that the message was *not* sent or stored. Nothing is saved anywhere.

**With Supabase configured:** valid submissions are inserted into the `contact_leads` table and the visitor sees a success message.

### Connecting Supabase (later)

1. Create a Supabase project.
2. In the SQL editor, run `supabase/migrations/20261020000000_contact_leads.sql`. It creates the `contact_leads` table with Row Level Security enabled and no public policies, so only the server can write to it.
3. In Supabase → Project Settings → API Keys, copy the **Project URL** and a **secret key** (`sb_secret_…`; a legacy `service_role` key also works).
4. Add them as environment variables (locally in `.env.local`, and in Vercel → Project → Settings → Environment Variables):
   ```
   SUPABASE_URL=https://<project-ref>.supabase.co
   SUPABASE_SECRET_KEY=sb_secret_...
   ```
   ⚠️ Never prefix these with `NEXT_PUBLIC_` and never commit them.
5. Redeploy. The "in development" notice disappears and leads are stored.
6. Read leads in the Supabase Table Editor. (Email notifications can be added later with a Supabase Database Webhook or an email provider such as Resend.)

No extra npm package is needed — the server talks to Supabase's REST API directly (`src/lib/contact/leads.ts`).

## Environment variables

All optional — the site builds and runs without any of them. See `.env.example`.

| Variable | Scope | Purpose |
|----------|-------|---------|
| `NEXT_PUBLIC_SITE_URL` | public | Canonical URL for SEO/Open Graph. Falls back to Vercel's production URL |
| `SUPABASE_URL` | server only | Supabase project URL for lead storage |
| `SUPABASE_SECRET_KEY` | server only | Supabase secret key for lead storage |

## Deploying to Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New → Project**, import `garms-media-website`. Vercel detects Next.js automatically — no build settings needed.
3. (Optional) add environment variables from the table above.
4. Click **Deploy**. Every push to `main` deploys to production; every pull request gets a preview URL.
5. (Optional) add a custom domain under Project → Settings → Domains, then set `NEXT_PUBLIC_SITE_URL` to it.

### Which Vercel plan?

Vercel's [Fair Use Guidelines](https://vercel.com/docs/limits/fair-use-guidelines) (last updated 14 Sep 2026) restrict the free **Hobby** plan to *non-commercial personal use*. Commercial use is defined as any deployment used for the financial gain of anyone involved, and explicitly includes **advertising the sale of a product or service**.

- While this is a **university project / agency concept** that nobody earns money from, Hobby is generally appropriate (Vercel staff have said demo and portfolio sites are fine on Hobby as long as no one makes money from them).
- Once GARMS MEDIA operates as a **real business** using this site to win paying clients, it is commercial use and needs a **Pro** (or Enterprise) plan.
- If unsure, contact Vercel Support before launching.

## Security notes

- No secrets in the repository; `.env*` files are git-ignored (except `.env.example`).
- Basic security headers are set in `next.config.ts`.
- `npm audit` currently reports advisories in ESLint's dev-only tooling (`eslint-config-next` → `fast-glob` → `braces`). They don't ship to the browser or the server bundle; the suggested `--force` fix would downgrade Next's lint config, so it's intentionally not applied.

## Fonts

Anton, DM Sans and Instrument Serif are © their authors and licensed under the SIL Open Font License 1.1 — see `src/app/fonts/LICENSE-*.txt`.
