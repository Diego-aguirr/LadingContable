# Tasks: Landing MVP — Architecture Setup

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~650–850 (18 files, 10 modified/new) |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 → PR 2 → PR 3 |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Foundation: deps, folders, types, constants, schema, theme | PR 1 | Base = feat/landing-mvp; ~250 lines |
| 2 | Layout SEO + UI primitives | PR 2 | Base = PR 1 branch; ~250 lines |
| 3 | Section stubs + page composition | PR 3 | Base = PR 2 branch; ~300 lines |

---

## Phase 1: Dependencies & Scaffolding

- [x] 1.1 Run `pnpm add zod react-hook-form @hookform/resolvers` — adds 3 deps to package.json + lockfile. Done: keys exist in dependencies with valid semver.
- [x] 1.2 Create directories: `app/components/sections/`, `app/components/ui/`, `app/actions/`, `app/lib/validations/`, `app/types/`, `app/constants/`. Done: all dirs exist. → depends on 1.1

## Phase 2: Domain Types & Constants

- [x] 2.1 Create `app/types/index.ts` — export interfaces: `ContactFormData` (name/email/phone/message: string), `Benefit` (id/icon/title/description), `ProcessStep` (step/title/description), `FAQ` (question/answer), `Testimonial` (name/role/quote/rating), `SiteMetadata`. Done: `pnpm build` compiles. → depends on 1.2
- [x] 2.2 Create `app/constants/index.ts` — export `SITE_METADATA`, `WHATSAPP_URL` (wa.me/{number}?text=...), `NAV_ITEMS`, `BENEFITS` (4+ items), `PROCESS_STEPS` (3+ items), `FAQS` (5+ items), `TESTIMONIALS` (3+ items). All arrays typed with interfaces from 2.1. Done: `pnpm build` compiles, no `any` types. → depends on 2.1

## Phase 3: Contact Form Schema & Action

- [x] 3.1 Create `app/lib/validations/contact.ts` — Zod schema for contact form: name (min 2), email (email format), phone (min 8), message (min 5). Export `ContactFormSchema`, infer `ContactFormInput` type. Done: `pnpm build` compiles. → depends on 2.1
- [x] 3.2 Create `app/actions/contact.ts` — "use server" skeleton: `submitContactForm(formData: FormData)` that parses with Zod schema, returns `{ success, errors? }`. No real send logic yet (log only). Done: `pnpm build` compiles. → depends on 3.1

## Phase 4: Theme Tokens

- [x] 4.1 Update `app/globals.css` — replace default vars with brand tokens: `--color-primary`, `--color-secondary`, `--color-accent`, `--color-bg`, `--color-text`, `--color-bg-alt`, spacing scale (`--space-xs` through `--space-2xl`). Remove dark mode media query. Map to Tailwind via `@theme inline`. Done: `pnpm build` compiles, custom colors available as `bg-primary` etc. → depends on 1.1

## Phase 5: Layout & SEO

- [x] 5.1 Update `app/layout.tsx` — set `lang="es"`, update `metadata` export with production title/description, `openGraph` (title, description, locale: "es_AR", type: "website"), `twitter` card metadata. Done: `pnpm build` compiles. → depends on 4.1
- [x] 5.2 Add JSON-LD structured data to `app/layout.tsx` — `<script type="application/ld+json">` with `@type: "AccountingService"`, name, description, areaServed, serviceType. Done: script tag renders in HTML output. → depends on 5.1

## Phase 6: UI Primitives

- [x] 6.1 Create `app/components/ui/Button.tsx` — Server Component, accepts `variant` (primary/secondary/outline), `size` (sm/md/lg), `as` (button/a), `href?`, children. Uses theme tokens. Done: `pnpm build` compiles. → depends on 4.1
- [x] 6.2 Create `app/components/ui/Input.tsx` — Client Component ("use client") for form integration, accepts `label`, `name`, `type`, `error?`, `register` from RHF. Renders label + input + error message. Done: `pnpm build` compiles. → depends on 4.1
- [x] 6.3 Create `app/components/ui/Card.tsx` — Server Component, accepts `children`, `className?`. Renders semantic div with padding/shadow/radius. Done: `pnpm build` compiles. → depends on 4.1
- [x] 6.4 Create `app/components/ui/Section.tsx` — Server Component, accepts `id`, `children`, `className?`. Renders `<section id={id}>` with container width + vertical padding. Done: `pnpm build` compiles. → depends on 4.1

## Phase 7: Section Stubs

- [x] 7.1 Create `app/components/sections/Hero.tsx` — Server Component. `<section id="hero">` with `<h1>` headline, subtitle paragraph, WhatsApp CTA button (wa.me link), optional `next/image` for fondoOficina.png as background. Done: `pnpm build` compiles, section renders. → depends on 6.1, 2.2
- [x] 7.2 Create `app/components/sections/Benefits.tsx` — Server Component. `<section id="benefitos">` with `<h2>`, maps over `BENEFITS` constant, renders Card per item with icon/title/description. Done: `pnpm build` compiles. → depends on 6.3, 2.2
- [x] 7.3 Create `app/components/sections/Process.tsx` — Server Component. `<section id="proceso">` with `<h2>`, maps over `PROCESS_STEPS`, renders numbered step cards. Done: `pnpm build` compiles. → depends on 6.3, 2.2
- [x] 7.4 Create `app/components/sections/SocialProof.tsx` — Server Component. `<section id="testimonios">` with `<h2>`, maps over `TESTIMONIALS`, renders quote cards with name/role/rating. Done: `pnpm build` compiles. → depends on 6.3, 2.2
- [x] 7.5 Create `app/components/sections/FAQ.tsx` — Server Component. `<section id="faq">` with `<h2>`, maps over `FAQS`, renders `<details>/<summary>` for accessible accordion. Done: `pnpm build` compiles, `<details>` elements present. → depends on 2.2
- [x] 7.6 Create `app/components/sections/Contact.tsx` — Client Component ("use client"). `<section id="contacto">` with `<h2>`, React Hook Form + Zod integration, renders Input fields for name/email/phone/message + submit Button. Calls `submitContactForm` action. Done: `pnpm build` compiles. → depends on 6.1, 6.2, 3.2
- [x] 7.7 Create `app/components/sections/Footer.tsx` — Server Component. `<footer>` with copyright, WhatsApp link, minimal nav. Done: `pnpm build` compiles. → depends on 2.2

## Phase 8: Page Composition

- [x] 8.1 Update `app/page.tsx` — replace default Next.js content with section imports in order: Hero → Benefits → Process → SocialProof → FAQ → Contact → Footer. Done: `pnpm build` compiles, sections render in correct DOM order. → depends on all Phase 7 tasks

## Phase 9: Verification

- [x] 9.1 Run `pnpm build && pnpm lint` — zero errors. Verify all section IDs present in HTML output, lang="es" on html tag, JSON-LD script rendered. Done: clean build + lint. → depends on 8.1
