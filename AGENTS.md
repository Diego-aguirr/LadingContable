# AGENT.md

# Landing Conversion Platform for Accounting Firm

## Project Overview

This project is a high-conversion landing page designed for accounting firms that provide:

- Monotributo registration
- Tax consulting
- Administrative management
- Accounting services for freelancers
- Small business advisory

The primary objective is lead generation.

This is not a corporate website.

This is a conversion-focused marketing asset whose success is measured by generated leads and WhatsApp conversations.

---

# Business Goals

1. Generate qualified leads.
2. Increase WhatsApp contact rate.
3. Improve mobile conversion.
4. Build trust and credibility.
5. Reduce friction during the contact process.

---

# Success Metrics

Primary KPIs:

- Contact form submissions
- WhatsApp clicks
- Conversion Rate
- Mobile Conversion Rate
- Cost Per Lead (future marketing campaigns)

Secondary KPIs:

- Time on page
- Bounce rate
- Scroll depth
- CTA interaction rate

---

# Target Audience

Primary Users:

- Freelancers
- Entrepreneurs
- Self-employed professionals
- Small business owners
- Individuals needing tax assistance

Pain Points:

- Tax complexity
- Lack of accounting knowledge
- Fear of making mistakes
- Need for quick registration
- Need for professional guidance

---

# Technical Stack

Frontend:

- Next.js 16+
- React 19+
- TypeScript
- Tailwind CSS

Validation:

- Zod

Forms:

- React Hook Form

Backend:

- Next.js Server Actions

Deployment:

- Vercel

Email:

- Resend (future integration)

Analytics:

- Google Analytics (future)
- Meta Pixel (future)

Testing:

- No tests for MVP — add Vitest before Phase 2

---

# Package Manager Rule

MANDATORY:

Always use PNPM.

Never use npm.

Never use yarn.

Examples:

pnpm install
pnpm add package-name
pnpm dev
pnpm build
pnpm lint

All generated documentation, scripts and commands must use pnpm.

---

# Architecture Principles

1. Keep business logic outside UI components.
2. Use Server Actions for mutations.
3. Prefer composition over large components.
4. Maintain strict TypeScript typing.
5. Prioritize performance.
6. Prioritize SEO.
7. Prioritize conversion optimization.
8. Mobile-first development.
9. Accessibility by default.
10. Avoid over-engineering.

---

# System Architecture

```
                     ┌─────────────────────┐
                     │     Visitor         │
                     └──────────┬──────────┘
                                │
                                ▼
                 ┌───────────────────────────┐
                 │     Landing Page UI       │
                 │      Next.js App Router   │
                 └──────────┬────────────────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼

  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
  │ WhatsApp CTA│   │   Contact   │   │   SEO /     │
  │  (wa.me)    │   │    Form     │   │  Metadata   │
  └──────┬──────┘   └──────┬──────┘   └─────────────┘
         │                 │
         │                 ▼
         │      ┌─────────────────────┐
         │      │    Server Action    │
         │      └──────────┬──────────┘
         │                 │
         │                 ▼
         │      ┌─────────────────────┐
         │      │   Zod Validation    │
         │      └──────────┬──────────┘
         │                 │
         │                 ▼
         │      ┌─────────────────────┐
         │      │  WhatsApp / Email   │
         │      │   Notification     │
         │      └─────────────────────┘
         │
         ▼
    Opens WhatsApp
    directly
```

WhatsApp CTA opens the chat directly — no server needed.
Contact form validates via Server Action + Zod, then notifies via WhatsApp or email (simple).

---

# Demo Scope

This is a CONVERSION DEMO that simulates a real landing page to attract clients.

The frontend must look and feel like a production landing — polished, professional, conversion-optimized.
Backend complexity is intentionally limited.

## Build Now (MVP)

- Static landing sections (Hero → Benefits → Process → Social Proof → FAQ → Contact → Footer)
- WhatsApp CTA link (wa.me/...) — real, functional
- Contact form with validation (React Hook Form + Zod + Server Action)
- Mobile-first responsive design
- SEO metadata (OG, Twitter, JSON-LD)
- Fast, optimized, deployed on Vercel

## NOT in Scope (Future Phases)

- Resend email integration
- Google Analytics / Meta Pixel
- CRM integration
- Lead dashboard
- Complex backend services

---

# Folder Structure

app/

├── (routes)/
│
├── components/
│ ├── sections/
│ └── ui/
│
├── actions/
│
├── lib/
│
├── types/
│
└── constants/

---

# UI Sections

Landing Structure:

Hero

↓

Benefits

↓

Process

↓

Social Proof

↓

FAQ

↓

Contact Form

↓

Footer

Each section should have a single purpose.

Avoid combining multiple goals into one section.

---

# Conversion Rules

Always prioritize:

1. Clear headline.
2. Strong CTA.
3. Minimal friction.
4. Mobile usability.
5. Fast load time.
6. Trust building.
7. Simple forms.

Never:

- Add unnecessary fields.
- Add complex navigation.
- Add distracting animations.
- Hide CTAs.
- Use dark patterns.

---

# SEO Requirements

Mandatory:

- Metadata API
- Open Graph
- Twitter Cards
- Structured Data (JSON-LD)
- Semantic HTML
- Sitemap
- Robots.txt

Target Keywords:

- Monotributo
- Contador para monotributistas
- Asesoramiento impositivo
- Servicios contables
- Alta de monotributo

---

# Performance Requirements

Target:

- Lighthouse >= 90
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

Rules:

- Optimize images.
- Prefer Server Components.
- Minimize client-side JavaScript.
- Lazy load non-critical content.

---

# Future Scalability

Phase 1

Landing

- WhatsApp
- Contact Form

Phase 2

CRM Integration

- Email Automation
- Lead Dashboard

Phase 3

Customer Portal

- Document Upload
- Billing Management
- Appointment Scheduling

  ***

# Agent Instructions

When modifying the codebase:

1. Preserve conversion-focused UX.
2. Do not introduce unnecessary complexity.
3. Maintain clean architecture.
4. Prefer reusable components.
5. Keep TypeScript strict.
6. Keep forms server-driven.
7. Use Server Actions whenever possible.
8. Follow Next.js best practices.
9. Use PNPM exclusively.
10. Optimize for production readiness.

Every technical decision must support one of:

- Conversion
- Performance
- Maintainability
- Scalability
