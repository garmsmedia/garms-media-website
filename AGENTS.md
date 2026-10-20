<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# GARMS MEDIA — Agent & Contributor Guide

Read this before changing anything in this repository. It applies to humans and AI coding agents alike.

## 1. What GARMS MEDIA is

**GARMS MEDIA** (short name: **GARMS**) is an early-stage Social Media Marketing Agency (SMMA) concept for **independent streetwear and urban-fashion clothing brands in Los Angeles, California**.

- **Mission:** To help independent streetwear and urban-fashion brands strengthen their online presence and grow their e-commerce businesses through creative, culturally relevant, and results-driven social media marketing.
- **Services:** social media strategy & content planning · content creation & production · community management · UGC & influencer collaborations · paid social advertising · analytics, reporting & optimization.

- **Brand name:** always "GARMS MEDIA" (or "GARMS" for short). Never add a company-registration suffix after the name anywhere on the site.

## 2. Audience and positioning

- **Who we talk to:** founders and marketing managers of *independent* clothing brands (not big corporate fashion houses).
- **Positioning:** GARMS is *not* a generic digital agency. We specialise in streetwear and urban fashion and understand fashion culture, visual identity, storytelling, community and measurable business growth. This must be clear within seconds of landing on the page.

## 3. Website objective

One-page site that introduces GARMS, explains services, shows creative thinking, builds credibility honestly and **generates qualified enquiries** via the contact form (primary conversion).

## 4. Required sections (in this order)

| # | Section | Component | Anchor |
|---|---------|-----------|--------|
| 1 | Navigation + Hero | `layout/Header.tsx`, `sections/Hero.tsx` | `#home` |
| 2 | About / Our approach | `sections/About.tsx` | `#about` |
| 3 | Services (6 cards) | `sections/Services.tsx` | `#services` |
| 4 | Selected Concepts / Speculative Work | `sections/Work.tsx` | `#work` |
| 5 | Why GARMS? (orange) | `sections/WhyGarms.tsx` | — |
| 6 | Team | `sections/Team.tsx` | `#team` |
| 7 | Contact | `sections/Contact.tsx` | `#contact` |
| 8 | Footer | `layout/Footer.tsx` | — |

Nav links: Home, Services, Work, About, Contact + "Let's Talk" CTA.

## 5. Brand colours

Defined once as Tailwind tokens in `src/app/globals.css` (`@theme`). Never hard-code brand hex values in components — use the token classes.

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#111111` | Primary background (dark sections) and text on light |
| `paper` | `#F2F0EA` | Light backgrounds and text on dark |
| `flame` | `#FF5A1F` | Accent + CTAs. Use sparingly and with intent |
| `stone` | `#5A5853` | Secondary text — **light backgrounds only** |
| `ash` | `#C9C6BE` | Muted text on **dark backgrounds**, dividers |

**Contrast rules (WCAG AA):**
- ✅ `ink` on `flame` (~6:1) — buttons and the orange section always use near-black text.
- ✅ `flame` text on `ink` (~6:1).
- ✅ `stone` on `paper` (~6:1), `ash` on `ink` (~11:1).
- ❌ Never `flame` text on `paper` (~2.7:1) and never `paper`/white text on `flame` (fails). Use orange as a *background*, underline or graphic on light sections instead.
- ❌ Never `stone` text on `ink` (~2.7:1).
- Error red `#b42318` is used only for form errors.

Balance: black and off-white do the heavy lifting; orange is a strong but controlled accent (one highlighted word per headline at most).

## 6. Typography

Fonts are self-hosted in `src/app/fonts/` (SIL Open Font License) and loaded with `next/font/local` in `src/app/layout.tsx`. Do not switch back to `next/font/google` without checking builds work offline/in CI.

| Font | Class | Use |
|------|-------|-----|
| **Anton** | `font-display` / `.display` | Headlines, always UPPERCASE (`.display` handles this), tight leading |
| **DM Sans** | `font-sans` (default) | Body, navigation, buttons, forms |
| **Instrument Serif Italic** | `font-serif italic` | Occasional editorial accent phrases only (1 per section max) |

- One `<h1>` (hero). Each section has exactly one `<h2>` via `SectionHeading`. Cards use `<h3>`.
- Eyebrow labels: `.eyebrow` (small, tracked uppercase).

## 7. Tone of voice

Creative · Confident · Approachable — and clear, strategic and culturally relevant.
- Short sentences. Talk like someone who knows streetwear ("drops", "restocks", "the crew"), without forcing slang.
- No corporate filler or buzzwords ("synergy", "leverage", "best-in-class", "360°").
- No exaggerated promises ("10x your sales", "guaranteed viral").

## 8. Honesty rules — non-negotiable

GARMS is an early-stage agency concept. **Never** add or imply:
- clients, client logos, testimonials or reviews
- completed campaigns, case studies or "results"
- metrics/statistics about GARMS performance (followers gained, ROAS, % growth…)
- partnerships, awards, press mentions
- team surnames, job titles, bios, credentials, experience claims or photos that the person hasn't confirmed
- social handles, email addresses or phone numbers that haven't been confirmed

Concept work must stay labelled **"Selected Concepts / Speculative Work"** with the disclaimer: *"Concept work created to demonstrate GARMS MEDIA's creative and strategic approach. Not commissioned client campaigns."*

Stock or AI imagery must never be presented as GARMS client work. Any third-party image must be properly licensed and attributed where required.

The contact form must never pretend a message was delivered. If lead storage isn't configured, it says so (see §11).

## 9. Code conventions

- Next.js App Router, TypeScript (strict), Tailwind CSS v4, React 19. Cache Components are enabled (`cacheComponents: true`).
- **Server Components by default.** Add `"use client"` only for interactivity (`MobileNav`, `Reveal`, `ContactForm`).
- With Cache Components, `new Date()`/`Math.random()` can't run in the prerendered shell — use a `"use cache"` scope (see `CurrentYear.tsx`) or an effect/event handler.
- Use `next/link` for internal links (nav uses `/#section` so links work from `/privacy` too) and `next/image` for images.
- Keep components small and named after what they render. PascalCase filenames for components, camelCase for utilities.
- No new dependencies without a clear reason (no animation libraries, UI kits or icon packs — `ui/Icon.tsx` holds our icons).
- Server-only code imports `"server-only"`. Secrets live in env vars only and are never prefixed `NEXT_PUBLIC_`.

### Component organisation

```
src/
  app/                  routes, layout, metadata files, server actions
    actions/contact.ts  contact form server action
    fonts/              self-hosted fonts + licences
    privacy/            draft privacy policy
  components/
    layout/             Header, MobileNav, Footer, Wordmark
    sections/           one file per page section
    contact/            ContactForm (client)
    ui/                 Button, Icon, SectionHeading, Reveal, CurrentYear
    visuals/            illustrative graphics and mockups
  content/              ALL editable copy/data: site, services, concepts, team
  lib/contact/          validation (shared), leads storage + rate limit (server)
supabase/migrations/    database schema for leads
```

**Content lives in `src/content/`.** Change copy, team members, concepts, social links and email there — not inside components.

## 10. Accessibility expectations

- Semantic landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`), skip link, logical heading order.
- Everything works with keyboard only; visible focus ring (`:focus-visible`, orange; ink on orange sections).
- Form: every input has a `<label>`, errors linked via `aria-describedby` + `aria-invalid`, status messages in an `aria-live` region, focus moves to the first invalid field.
- Decorative graphics get `aria-hidden`; meaningful images get descriptive `alt`.
- Respect `prefers-reduced-motion` (handled globally in `globals.css` — keep new animations CSS-based so they inherit it).
- Content must be readable with JavaScript disabled (reveal animations only hide content under `html.js`).
- Minimum 44px touch targets for interactive elements on mobile.

## 11. Contact form & data

- Validation rules in `src/lib/contact/validation.ts` are shared by the browser and the server action; the server is the source of truth.
- Spam protection: honeypot field, minimum fill time, length limits, in-memory IP rate limit (light protection only on serverless).
- Storage: `src/lib/contact/leads.ts` writes to Supabase via REST when `SUPABASE_URL` and `SUPABASE_SECRET_KEY` are set. Otherwise the whole form is visibly **disabled** (fields and button) with a notice that enquiries aren't open yet. Keep it disabled until a real backend AND a reviewed privacy policy are ready.
- Never log personal data. Never expose the secret key to the browser.

## 12. Performance requirements

- Mobile-first; no horizontal scroll at 320px.
- Keep the home page statically prerendered (check the `○` marker in `npm run build` output).
- Prefer CSS/SVG over images for decoration; use `next/image` with `sizes` for real photos; keep JS client components minimal.
- No heavy animation libraries; transitions on `transform`/`opacity` only.

## 13. Visual consistency checklist

Before merging a visual change:
- [ ] Uses colour tokens and the type scale above; orange used as an accent, not everywhere.
- [ ] Section follows the pattern: numbered eyebrow → Anton `h2` → short supporting copy.
- [ ] Alternates dark/light backgrounds (hero dark → about light → services dark → work light → why orange → team dark → contact light → footer dark).
- [ ] Hover effects are subtle (colour/translate), with no layout shift.
- [ ] Checked at 390px and 1440px wide.

## 14. Updating the site

- **Copy & data:** edit files in `src/content/`.
- **Real concept artwork:** add to `public/concepts/` and set `image` + `imageAlt` in `content/concepts.ts`.
- **Team:** add confirmed `role` / `photo` in `content/team.ts` (photos in `public/team/`).
- **Socials / email:** replace the `null` placeholders in `content/site.ts`.
- **Privacy policy:** `src/app/privacy/page.tsx` is a DRAFT — complete and review before collecting real enquiries.
- Always run `npm run lint`, `npx tsc --noEmit` and `npm run build` before committing.
