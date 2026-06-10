# Design Brief — "Stokt-inspired" v2

Reference: wearestokt.com — bold editorial agency style, translated for a DevOps/Platform engineer portfolio.
Local-UI phase only. No containerization concerns here.

## Core moves (non-negotiable)
1. **Massive condensed uppercase display type** (Anton) for section statements. Headlines are the design.
2. **Alternating section backgrounds**: dark `#0E0E0C` ↔ cream `#EDEAE3`. Hard cuts, no gradients between.
3. **Editorial layout**: generous vertical rhythm (py-24/32), thin 1px dividers, numbered mono eyebrows.
4. **One accent**: `#FF3D00` (vivid orange-red). Used sparingly — links-hover, marks, key numbers. Terminal-green is RETIRED except inside literal code/terminal snippets where it reads as syntax.
5. **Mono details** (JetBrains Mono): eyebrows, tags, meta — small, uppercase, tracked out.
6. Zero JS where possible. CSS-only marquee/hover. `prefers-reduced-motion` respected.

## Tokens (already in global.css)
- Colors: `--color-dark #0E0E0C`, `--color-cream #EDEAE3`, `--color-accent #FF3D00`,
  `--color-ink-on-cream #161614`, `--color-ink-on-dark #E8E6E1`, dim variants, `--color-line-dark`, `--color-line-cream`.
- Fonts: `--font-display` (Anton), `--font-sans` (Inter), `--font-mono` (JetBrains Mono).
- Utilities: `.container-site` (max-w-[88rem]), `.display` (Anton, uppercase, tight leading), `.eyebrow` (mono small caps), `.btn-solid`, `.btn-outline`, `.marquee`.

## Page structure (index.astro assembles, each component is standalone)
1. `Nav.astro` — minimal sticky. Wordmark `SHALOM®`, links (work / experience / contact), `RESUME` pill button. Dark, blends with hero.
2. `Hero.astro` — DARK. Mono eyebrow (`devops / platform engineer — boston, ma`). Display headline filling the width, e.g. `KEEPING PRODUCTION BORING.` Short sub-paragraph (profile.tagline), two CTAs (view work → solid accent; github → outline). Subtle oversized `☸` or grid texture allowed, no 3D.
3. `Marquee.astro` — thin strip, dark, CSS-infinite-scroll of tools: `KUBERNETES ✦ TERRAFORM ✦ AWS ✦ GO ✦ CI/CD ✦ …` Anton, outlined text (text-stroke) like agency sites.
4. `Work.astro` — CREAM ("Featured Work ♥" energy → `SELECTED WORK`). Bento grid (md:grid-cols-12, varied col-spans) of the 3 projects from `src/data/resume.ts`. Each card: stylized visual block (dark inset: code snippet / ASCII arch diagram / metric tiles — NO stock images), project name, one-liner, mono tags. Hover: card lifts border to accent.
5. `Stats.astro` — DARK. "PLATFORM POWERHOUSE" eyebrow + display line. Grid of big numbers (Anton, accent): `500+ deprecations resolved`, `30% faster test suites`, `200+ students supported`, `24/7 on-call carried`, `3 clouds`, `CKA certified`. Thin dividers.
6. `Experience.astro` — CREAM. Stokt "We Don't Chase Awards" list treatment: full-width rows, thin dividers, each row = company (display, large), role + period (mono, right-aligned), expandable feel via 2 key bullets shown small underneath. Data from resume.ts.
7. `Toolbox.astro` — DARK, compact. Grouped mono tag rows from resume.ts skills (keep tight, not a hero section). Education + CKA folded in as two small cards.
8. `CTA.astro` — CREAM. Huge display: `LET'S CUT THE DOWNTIME.` + email button (solid dark) + location/mono meta.
9. `Footer.astro` — DARK, minimal: wordmark, github/linkedin/email links, `built with astro · runs on my own k3s cluster` mono line.

## Rules for section agents
- Astro components only, Tailwind v4 utilities + the shared custom utilities. No new global CSS without need; if you must add a utility, add it to `src/styles/global.css` bottom section marked `/* section-specific */` — never touch tokens.
- All content imports from `src/data/resume.ts`. NEVER hardcode resume facts. No phone number anywhere.
- Responsive: must look right at 390px, 768px, 1440px.
- a11y: semantic landmarks, heading order, focus-visible states, contrast ≥ 4.5:1 for body text.
- No client-side JS unless impossible otherwise (and then, justify in a comment).
