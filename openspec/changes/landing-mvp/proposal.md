# Proposal: Landing MVP — Architecture Setup

## Intent

Transform the default `create-next-app` scaffold into a conversion-focused landing page for an accounting firm. The project has zero business logic, no folder structure, and missing dependencies. This first change establishes the architectural foundation so subsequent changes can implement sections independently.

## Scope

### In Scope
- Install missing dependencies: `zod`, `react-hook-form`, `@hookform/resolvers`
- Create AGENTS.md-defined folder structure: `components/sections/`, `components/ui/`, `actions/`, `lib/`, `types/`, `constants/`
- Define TypeScript types for business domain (`ContactFormData`, `Benefit`, `ProcessStep`, `FAQ`, `Testimonial`)
- Define Zod schema for contact form validation
- Define constants: site metadata, WhatsApp URL, section content data
- Create theme tokens in `globals.css` (brand colors, spacing)
- Update `layout.tsx` with proper SEO metadata (OG, Twitter, JSON-LD placeholder), Spanish `lang`, production-ready fonts
- Update `page.tsx` to compose landing sections in correct order (placeholder components)
- Create stub section components: Hero, Benefits, Process, SocialProof, FAQ, Contact, Footer
- Optimize brand assets usage with `next/image` (logo.png, fondoOficina.png, dibujoOficina.png)

### Out of Scope
- Full section implementations (each section is a future change)
- Resend email integration
- Analytics (GA, Meta Pixel)
- CRM integration
- Tests (no test runner installed; `strict_tdd: false`)
- Dark mode support
- i18n (Spanish-only for MVP)

## Capabilities

### New Capabilities
- `landing-architecture`: Folder structure, types, constants, theme tokens, layout SEO
- `contact-form-schema`: Zod validation schema + TypeScript types for contact form
- `section-stubs`: Placeholder components for all 7 landing sections

### Modified Capabilities
- None (project has no existing specs)

## Approach

**Bottom-up foundation build.** Each deliverable is a vertical slice committed independently.

1. **Deps** — `pnpm add zod react-hook-form @hookform/resolvers`
2. **Structure** — Create folders per AGENTS.md
3. **Types** — `types/index.ts` with all domain interfaces
4. **Constants** — `constants/site.ts` (metadata, WhatsApp, content data)
5. **Schema** — `lib/schemas/contact.ts` with Zod schema
6. **Theme** — Update `globals.css` with brand tokens
7. **Layout** — Update `layout.tsx` with SEO, Spanish lang, structured data
8. **Stubs** — Create 7 section components in `components/sections/`
9. **Page** — Update `page.tsx` to compose sections
10. **Assets** — Configure `next/image` for brand PNGs with WebP/AVIF

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `package.json` | Modified | Add zod, react-hook-form, @hookform/resolvers |
| `app/globals.css` | Modified | Brand color tokens, spacing scale |
| `app/layout.tsx` | Modified | SEO metadata, OG/Twitter cards, JSON-LD, es lang |
| `app/page.tsx` | Modified | Compose landing sections |
| `types/index.ts` | New | Domain TypeScript interfaces |
| `constants/site.ts` | New | Site config, WhatsApp URL, content data |
| `lib/schemas/contact.ts` | New | Zod contact form schema |
| `components/sections/Hero.tsx` | New | Hero stub |
| `components/sections/Benefits.tsx` | New | Benefits stub |
| `components/sections/Process.tsx` | New | Process stub |
| `components/sections/SocialProof.tsx` | New | Social proof stub |
| `components/sections/FAQ.tsx` | New | FAQ stub (`<details/summary>`) |
| `components/sections/Contact.tsx` | New | Contact form stub |
| `components/sections/Footer.tsx` | New | Footer stub |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Brand PNGs too heavy (1-1.8MB each) | High | Use `next/image` with quality prop; auto-WebP/AVIF via Next.js optimizer |
| Font choice undecided | Low | Default to Geist; swap later if user decides |
| No test runner | Medium | `strict_tdd: false` per sdd-init; add Vitest before Phase 2 |
| Over-engineering stubs | Low | Keep stubs minimal — just enough structure to compose |

## Rollback Plan

1. `git revert` on the feature branch `feat/landing-mvp`
2. No database or external service changes — pure frontend scaffold
3. `pnpm remove zod react-hook-form @hookform/resolvers` to revert deps

## Dependencies

- Git initialized on `feat/landing-mvp` ✓
- Node modules installed ✓
- Brand assets in `public/` ✓

## Success Criteria

- [ ] `pnpm build` passes with zero errors
- [ ] `pnpm lint` passes
- [ ] All 7 section stubs render in correct order on `/`
- [ ] SEO metadata renders (title, description, OG tags, JSON-LD)
- [ ] `lang="es"` on `<html>`
- [ ] Brand images use `next/image` with proper `alt` text
- [ ] Folder structure matches AGENTS.md exactly
- [ ] Zod schema validates contact form fields
- [ ] TypeScript strict mode compiles with no errors
