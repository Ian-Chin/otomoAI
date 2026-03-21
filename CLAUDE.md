# otomoAI — AI-Powered Workshop Automation Landing Page

## Project Overview

Single-page marketing site for otomoAI, an AI admin suite for auto workshops and bike mechanics. The site is a Next.js 14 App Router landing page with 15 section components, scroll-triggered animations, and a dark glass-morphism design.

**Live URL target:** https://otomoai.com

## Tech Stack

| Layer       | Technology                                     |
|-------------|-------------------------------------------------|
| Framework   | Next.js 14.2 (App Router) — `next.config.js:1`  |
| UI          | React 18.2, JSX (`.js` files, not TypeScript)   |
| Styling     | Tailwind CSS 3.4 + custom utility classes in `src/app/globals.css` |
| Icons       | lucide-react (used in 4 components)             |
| Fonts       | Manrope (headings), DM Sans (body) via `next/font/google` — `src/app/layout.js:1-14` |
| Images      | `next/image` with WebP optimization — `next.config.js:3-8` |
| TypeScript  | Configured but not enforced (`strict: false`) — `tsconfig.json:11` |

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout: fonts, metadata, SEO, JSON-LD
│   ├── page.js            # Home: renders all sections, dynamic imports for below-fold
│   └── globals.css        # Design system: glass, buttons, animations, grain overlay
└── components/
    ├── FadeUp.js          # Scroll-triggered fade-in wrapper (IntersectionObserver)
    ├── Navbar.js          # Sticky nav with scroll detection + mobile menu
    ├── Hero.js            # Above-fold hero with animated orbs
    ├── SocialProof.js     # Stats row (10x, 87%, 0 hrs, 5★)
    ├── ProblemSection.js  # 3-card pain points
    ├── SolutionIntro.js   # 4-feature overview grid
    ├── AdminSuite.js      # Back-office features + dashboard mockup
    ├── LeadGenFlow.js     # 5-step lead capture flow visualization
    ├── PostServiceCRM.js  # CRM automation showcase
    ├── ModVisualizer.js   # AI mod visualizer feature cards
    ├── ComparisonTable.js # otomoAI vs competitors table
    ├── Testimonials.js    # 3 testimonial cards
    ├── FAQ.js             # Accordion FAQ
    ├── CTA.js             # Call-to-action section
    └── Footer.js          # 4-column footer with social links
public/
└── images/                # Static assets: logo.png, heroimg.png, 1-8.png
```

## Essential Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build (validates everything compiles)
npm run start    # Serve production build
npm run lint     # ESLint via next lint
```

**No test suite is configured.** Validate changes with `npm run build`.

## Key Files to Understand First

1. `src/app/page.js` — Entry point; controls component loading strategy (dynamic imports)
2. `src/app/globals.css` — All custom CSS classes (glass, buttons, animations, grain)
3. `src/components/FadeUp.js` — Core animation primitive used in 12 components
4. `tailwind.config.js` — Custom color tokens (`brand`, `fire`), font families, animations
5. `src/app/layout.js` — SEO metadata, font loading, structured data

## Design Tokens (tailwind.config.js:12-29)

- **brand** (red palette, 50-900): Primary color — `#dc2626` at 600
- **fire** (orange palette, 400-600): Accent color — `#f97316` at 500
- **font-heading**: Manrope (600/700/800)
- **font-body**: DM Sans (400/500/600/700)

## Component Loading Strategy (src/app/page.js)

- **Eagerly loaded** (above fold): Navbar, Hero, SocialProof
- **Dynamically imported** (below fold): All other 11 components via `next/dynamic`

## Client vs Server Components

Only 5 components use `'use client'`:
- `FadeUp.js` — IntersectionObserver requires DOM
- `Navbar.js` — Scroll listener + menu state
- `Hero.js` — Mount animation state
- `FAQ.js` — Accordion toggle state
- `LeadGenFlow.js`, `PostServiceCRM.js`, `ModVisualizer.js` — Lucide icon rendering

All other components are server components with static data.

## Path Alias

`@/*` maps to `./src/*` — defined in `tsconfig.json:26-28`

## Image Handling

- Hero image and logo use `next/image` with `priority` for LCP
- Footer logo uses `loading="lazy"`
- WebP format enabled in `next.config.js:4`

---

## Additional Documentation

Check these files for deeper context on specific topics:

| Document | When to check |
|----------|---------------|
| `.claude/docs/architectural_patterns.md` | Before adding/modifying components, changing animations, or altering the design system |
