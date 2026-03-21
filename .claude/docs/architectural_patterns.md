# Architectural Patterns — otomoAI

## 1. FadeUp Scroll Animation Wrapper

**Used in:** 12 of 15 components (all except Navbar, Hero orbs, Footer)
**Defined at:** `src/components/FadeUp.js:1-39`
**CSS at:** `src/app/globals.css:73-88` (fade-up, pending, visible classes)

**Mechanism:** IntersectionObserver (threshold 0.1) adds CSS class transitions. Element starts visible (SSR-safe), JavaScript adds `pending` class after hydration, then `visible` on intersection.

**Three usage patterns:**

1. **Section header wrapper** — Wraps title + description block
   - Example: `src/components/CTA.js:8`, `src/components/ComparisonTable.js:27`

2. **Grid item wrapper with stagger** — Parent has `stagger-children` class, each item wrapped in FadeUp. CSS nth-child rules add 80ms incremental delays.
   - Example: `src/components/ProblemSection.js:46-55`, `src/components/Testimonials.js:41-56`
   - Stagger CSS: `src/app/globals.css:91-96`

3. **Two-column layout halves** — Each column wrapped independently in FadeUp
   - Example: `src/components/AdminSuite.js:15` + `src/components/AdminSuite.js:39`

**Convention:** When adding a new section, wrap content in `<FadeUp>`. For grids, add `stagger-children` to the parent and wrap each item. Supports up to 6 staggered children.

---

## 2. Static Data Array + .map() Rendering

**Used in:** 10 components
**Files:** SocialProof, ProblemSection, SolutionIntro, AdminSuite, LeadGenFlow, PostServiceCRM, ModVisualizer, ComparisonTable, Testimonials, FAQ

**Pattern:** Data is defined as a `const` array at module scope (above the component), then rendered via `.map()` inside JSX. No external data files, no API calls, no context.

**Structure:**
- Array declared at top of file (e.g., `src/components/Testimonials.js:3-28`)
- Mapped inside JSX with FadeUp wrapper (e.g., `src/components/Testimonials.js:42-55`)
- Key is typically `title`, `label`, or `initials` — never array index (except FAQ)

**Convention:** When adding content to a section, modify the data array at the top of the file. The rendering logic handles the rest.

---

## 3. Glass Morphism Card System

**Defined at:** `src/app/globals.css:36-46`
**Used in:** AdminSuite, LeadGenFlow, PostServiceCRM, ModVisualizer, ComparisonTable, Testimonials, FAQ, ProblemSection

**Two tiers:**
- `.glass` — Light frosted (4% white bg, 8px blur, 6% border) — cards, FAQ items
- `.glass-strong` — Heavier frosted (7% white bg, 12px blur, 10% border) — dashboard mockups

**Combined with:**
- `.card-hover` (`globals.css:63-71`) — adds translateY(-4px) + shadow on hover
- `.rounded-2xl p-8` — standard card padding
- `.glass-shine` (`globals.css:337-361`) — optional hover shine effect

**Convention:** Use `.glass` for content cards, `.glass-strong` for mockup/dashboard containers. Always pair cards with `.card-hover` and `rounded-2xl`.

---

## 4. Two-Column Section Layout

**Used in:** AdminSuite, LeadGenFlow, PostServiceCRM (3 components)

**Pattern:** `grid lg:grid-cols-2 gap-16 items-center` with one column being descriptive text (label, heading, paragraph, bullet list) and the other being a visual mockup (glass-strong container with fake UI).

**Text column structure:**
1. Category label: `text-brand-400 font-semibold text-sm uppercase tracking-[0.2em]`
2. Heading with `gradient-text` span
3. Body paragraph in `text-gray-400`
4. Bullet list with checkmark SVGs
5. Italic footnote in `text-gray-600`

**Visual column structure:**
- Outer glow div: `absolute -inset-4 bg-gradient-to-br ... blur-xl`
- Container: `glass-strong rounded-3xl p-6`
- Status badge: pinging green/brand dot + uppercase label
- Inner cards: `.glass rounded-xl p-4`

**Convention:** Text goes in one FadeUp, visual in another. LeadGenFlow reverses column order on mobile with `order-1`/`order-2` classes.

---

## 5. Live Status Badge Indicator

**Used in:** Hero (`src/components/Hero.js:26-28`), AdminSuite (`src/components/AdminSuite.js:43-46`), LeadGenFlow (`src/components/LeadGenFlow.js:32-35`), PostServiceCRM (`src/components/PostServiceCRM.js:42-45`)

**Pattern:** A small colored dot with `animate-ping` overlay to create a "live" pulsing effect.

```
Structure: relative container > solid dot + absolute animate-ping dot
```

**Convention:** Used at the top of dashboard mockup cards and in the hero badge. Color matches the section's accent (green for flows, brand for dashboard).

---

## 6. Button System

**Defined at:** `src/app/globals.css:211-270`
**Used in:** Hero, CTA, Navbar

**Two variants:**
- `.btn-primary` — Gradient red→orange, hover shine sweep, shadow glow (`.cta-glow`)
- `.btn-secondary` — Transparent with border, radial hover highlight

**Convention:** Primary actions (Book a Demo) use `.btn-primary .cta-glow`. Secondary actions use `.btn-secondary`. Both include `rounded-full` and use the same padding (`px-7 py-3.5`).

---

## 7. Dynamic Import Code-Splitting Strategy

**Defined at:** `src/app/page.js:1-16`

**Split point:** Components above the initial viewport (Navbar, Hero, SocialProof) are statically imported. All 11 below-fold components use `next/dynamic`.

**Convention:** When adding a new section component, add it as a dynamic import unless it's above the fold. Import pattern:
```js
const NewSection = dynamic(() => import('@/components/NewSection'));
```

---

## 8. Scroll-Optimized Event Handling

**Defined at:** `src/components/Navbar.js:9-19`

**Pattern:** Scroll events are throttled via `requestAnimationFrame` with a `ticking` flag. The listener uses `{ passive: true }` to avoid blocking the main thread.

**Convention:** Any future scroll-based behavior should follow this pattern — never attach raw scroll handlers without rAF throttling.

---

## 9. Hydration-Safe Mount Animation

**Used in:** Hero (`src/components/Hero.js:7-11`), FadeUp (`src/components/FadeUp.js:13`)

**Pattern:** Components start in their visible/final state for SSR. After hydration, `useEffect` sets a `mounted` flag or adds a `pending` CSS class, then animations trigger. This prevents flash-of-invisible-content and hydration mismatches.

**Convention:** Never conditionally render content based on mount state — instead toggle CSS classes/styles to animate from hidden to visible after mount.

---

## 10. Color-Mapped Icon System

**Used in:** LeadGenFlow (`src/components/LeadGenFlow.js:40-46`)

**Pattern:** Each data item declares a `color` key (e.g., `'blue'`, `'green'`, `'brand'`). A `colorMap` object maps these to Tailwind class strings for background and text. This avoids Tailwind's JIT purging issues while keeping data declarative.

**Convention:** When adding colored icon variants, define the color map inside the render function and reference it by key from the data array. Never construct Tailwind class names dynamically (e.g., `` `bg-${color}-500` `` — this breaks Tailwind's purging).
