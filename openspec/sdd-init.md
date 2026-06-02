# SDD Init Report — leadingPage

Generated: 2026-06-02
Status: success

## Project

- **Name**: leadingPage
- **Type**: Landing page / conversion-focused marketing asset
- **Business**: Accounting firm (monotributo, tax consulting, administrative management)
- **Primary KPIs**: Contact form submissions, WhatsApp clicks, Conversion Rate

## Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.7 |
| Language | TypeScript (strict) | ^5 |
| React | React | 19.2.4 |
| Package Manager | pnpm | (lockfile v9) |
| Styling | Tailwind CSS | v4 (via @tailwindcss/postcss) |
| CSS Processing | PostCSS | (plugin: @tailwindcss/postcss) |
| Linting | ESLint + eslint-config-next | ^9 (flat config) |
| Validation | Zod | (AGENTS.md; not yet installed) |
| Forms | React Hook Form | (AGENTS.md; not yet installed) |
| Email | Resend | (AGENTS.md; not yet installed) |
| Deployment | Vercel | (target) |

## Architecture

- **Router**: App Router at root `app/` directory (no `src/` wrapper)
- **Current state**: Default `create-next-app` scaffold — `app/layout.tsx`, `app/page.tsx`
- **Intended structure** (per AGENTS.md, not yet implemented):
  - `app/` — routes
  - `components/sections/` — landing sections (Hero, Benefits, Process, SocialProof, FAQ, Contact, Footer)
  - `components/ui/` — reusable UI primitives
  - `actions/` — Server Actions
  - `services/` — business logic
  - `lib/` — utilities
  - `types/` — TypeScript types
  - `hooks/` — React hooks
  - `constants/` — config constants
- **Patterns**: Server Components preferred, Server Actions for mutations, composition over large components, mobile-first, conversion-focused UX
- **Git**: Not initialized

## Conventions

- TypeScript strict mode enabled (`"strict": true` in tsconfig)
- Path alias: `@/*` → `./*`
- Flat ESLint config (eslint.config.mjs) with core-web-vitals + typescript rules
- pnpm workspace configured (pnpm-workspace.yaml with ignoredBuiltDependencies)
- All commands MUST use pnpm (per AGENTS.md)

## Testing Capabilities

| Capability | Status | Details |
|---|---|---|
| Test runner | **NOT DETECTED** | No jest, vitest, playwright, or cypress installed |
| Test config | **NONE** | No jest.config, vitest.config, playwright.config found |
| Test files | **NONE** | No *.test.* or *.spec.* files in project |
| Test scripts | **NONE** | No "test" script in package.json |
| Coverage tool | **NONE** | No coverage configuration |
| E2E tool | **NONE** | No playwright or cypress |

## Strict TDD

**`strict_tdd: false`** — No test runner is installed or configured. TDD enforcement is not viable without first installing a test framework.

**Recommendation**: Install Vitest (fast, native ESM/TS support, excellent Next.js integration) before beginning SDD work. Add `@testing-library/react` for component testing.

## Persistence Mode

- **Artifact store**: both (OpenSpec files + Engram)
- **OpenSpec path**: `openspec/sdd-init.md` (this file)
- **Engram topic**: `sdd-init/leadingPage` (project: `leadingPage`, scope: `project`)

## Skill Resolution

- **Method**: paths-injected (skill registry at `.atl/skill-registry.md` already populated)
- **Registry path**: `/home/clyde/Documentos/leadingPage/.atl/skill-registry.md`
- **Relevant skills for this project**:
  - `next-best-practices` — Next.js conventions, RSC, metadata, optimization
  - `vercel-react-best-practices` — React/Next.js performance patterns
  - `sdd-*` suite — full SDD workflow support

## Risks

1. **No test runner**: Cannot run tests or enforce TDD. Must install before `sdd-verify` phase.
2. **No git repo**: Cannot create branches, commits, or PRs. Must `git init` before SDD workflow.
3. **Scaffold only**: Project is default Next.js template — no business logic, components, or architecture implemented yet.
4. **Missing declared deps**: Zod, React Hook Form, Resend mentioned in AGENTS.md but not in package.json.
5. **No `src/` directory**: AGENTS.md describes `src/` structure but project uses root `app/`. Decision needed on folder structure.

## Next Recommended

Run `/sdd-explore` to define the first change — likely scaffolding the project architecture (folder structure, installing missing deps, setting up the landing page sections).
