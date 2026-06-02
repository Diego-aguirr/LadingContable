# Landing MVP Specification

## Purpose

Establish the architectural foundation for a conversion-focused accounting firm landing page: folder structure, TypeScript types, Zod validation, theme tokens, SEO metadata, and 7 stub section components.

## Requirements

### Requirement: Project Structure

The system MUST create directories per AGENTS.md: `app/components/sections/`, `app/components/ui/`, `app/actions/`, `app/lib/`, `app/types/`, `app/constants/`.

#### Scenario: Folder scaffold exists

- GIVEN the project root
- WHEN inspecting `app/`
- THEN `components/sections/`, `components/ui/`, `actions/`, `lib/`, `types/`, `constants/` directories exist

### Requirement: Domain Types

The system MUST export TypeScript interfaces from `app/types/index.ts`: `ContactFormData`, `Benefit`, `ProcessStep`, `FAQ`, `Testimonial`, `SiteMetadata`.

#### Scenario: ContactFormData shape

- GIVEN `app/types/index.ts`
- WHEN importing `ContactFormData`
- THEN it has fields: `name: string`, `email: string`, `phone: string`, `message: string`

#### Scenario: Benefit shape

- GIVEN `app/types/index.ts`
- WHEN importing `Benefit`
- THEN it has fields: `id: number`, `icon: string`, `title: string`, `description: string`

#### Scenario: ProcessStep shape

- GIVEN `app/types/index.ts`
- WHEN importing `ProcessStep`
- THEN it has fields: `step: number`, `title: string`, `description: string`

#### Scenario: FAQ shape

- GIVEN `app/types/index.ts`
- WHEN importing `FAQ`
- THEN it has fields: `question: string`, `answer: string`

#### Scenario: Testimonial shape

- GIVEN `app/types/index.ts`
- WHEN importing `Testimonial`
- THEN it has fields: `name: string`, `role: string`, `quote: string`, `rating: number`

### Requirement: Contact Form Schema

The system MUST define a Zod schema in `app/lib/validations/contact.ts` validating `ContactFormData`.

#### Scenario: Valid submission passes

- GIVEN the Zod contact schema
- WHEN validating `{ name: "Juan", email: "juan@mail.com", phone: "+541112345678", message: "Hola" }`
- THEN validation succeeds with no errors

#### Scenario: Missing required field fails

- GIVEN the Zod contact schema
- WHEN validating `{ name: "", email: "juan@mail.com", phone: "123", message: "x" }`
- THEN validation fails on `name` with non-empty error

#### Scenario: Invalid email fails

- GIVEN the Zod contact schema
- WHEN validating `{ name: "Juan", email: "not-an-email", phone: "123", message: "x" }`
- THEN validation fails on `email` with format error

### Requirement: Site Constants

The system MUST export from `app/constants/index.ts`: `SITE_METADATA`, `WHATSAPP_URL`, `NAV_ITEMS`, and section content arrays (`BENEFITS`, `PROCESS_STEPS`, `FAQS`, `TESTIMONIALS`).

#### Scenario: WhatsApp URL format

- GIVEN `app/constants/index.ts`
- WHEN reading `WHATSAPP_URL`
- THEN it matches `https://wa.me/{number}?text={encoded-message}`

#### Scenario: Section content populated

- GIVEN `app/constants/index.ts`
- WHEN reading `BENEFITS`
- THEN it is a non-empty array conforming to `Benefit[]`

### Requirement: Theme Tokens

The system MUST define CSS custom properties in `app/globals.css` for brand colors (`--color-primary`, `--color-secondary`, `--color-accent`, `--color-bg`, `--color-text`) and spacing scale.

#### Scenario: Brand colors defined

- GIVEN `app/globals.css`
- WHEN inspecting `:root` variables
- THEN `--color-primary`, `--color-secondary`, `--color-accent` are valid hex values

#### Scenario: Tailwind integration

- GIVEN `app/globals.css`
- WHEN Tailwind processes the file
- THEN custom colors are available as `bg-primary`, `text-secondary`, etc. via `@theme inline`

### Requirement: Layout SEO

The system MUST update `app/layout.tsx` with `lang="es"`, production metadata (title, description, OG, Twitter cards), and JSON-LD structured data placeholder.

#### Scenario: Spanish language attribute

- GIVEN `app/layout.tsx`
- WHEN rendering `<html>`
- THEN `lang="es"` is present

#### Scenario: OG metadata present

- GIVEN `app/layout.tsx`
- WHEN inspecting exported `metadata`
- THEN `openGraph` has `title`, `description`, `locale: "es_AR"`, `type: "website"`

#### Scenario: JSON-LD in head

- GIVEN `app/layout.tsx`
- WHEN rendering the layout
- THEN a `<script type="application/ld+json">` tag exists with `@type: "AccountingService"`

### Requirement: Section Stubs

The system MUST create 7 stub components in `app/components/sections/`: `Hero`, `Benefits`, `Process`, `SocialProof`, `FAQ`, `Contact`, `Footer`. Each MUST accept no props, render a semantic `<section>` with `id`, heading, and placeholder content.

#### Scenario: Each stub renders

- GIVEN any section stub component
- WHEN rendered
- THEN it outputs a `<section>` with the correct `id` attribute and an `<h2>` heading

#### Scenario: FAQ uses accessible markup

- GIVEN `FAQ.tsx`
- WHEN rendered
- THEN it uses `<details>` / `<summary>` elements for accordion behavior

#### Scenario: Page composes sections in order

- GIVEN `app/page.tsx`
- WHEN rendered
- THEN sections appear in DOM order: Hero → Benefits → Process → SocialProof → FAQ → Contact → Footer

### Requirement: Dependencies

The system MUST add `zod`, `react-hook-form`, `@hookform/resolvers` to `dependencies` in `package.json`.

#### Scenario: Dependencies installed

- GIVEN `package.json`
- WHEN reading `dependencies`
- THEN `zod`, `react-hook-form`, `@hookform/resolvers` keys exist with valid semver ranges

## Technical Notes

- All images (`logo.png`, `fondoOficina.png`, `dibujoOficina.png`) MUST use `next/image` with `alt` text in Spanish
- TypeScript strict mode — no `any` types
- Font: Geist (already configured); swap later if brand requires
- No dark mode for MVP
- Spanish-only content (no i18n)
