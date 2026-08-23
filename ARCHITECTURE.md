# Portfolio Website Architecture

Static site for Yi-hui (Lydian) Li's portfolio. No build tools or framework — plain HTML/CSS/JS, deployed as-is.

**Positioning (decided 2026-07-08):** homepage targets BA/DA roles in tech AND finance; E-Lab lives on its own venture page; the two educational projects are folded into the E-Lab narrative. Planned deployment: GitHub Pages via github.com/Lyyyy17 (repo `Yi-hui-Li-Portfolio`), after design polish is done.

## Folder Structure

```
My portfolio site/
├── index.html              # Homepage — data-first hero, project grid, E-Lab teaser, footer
├── about.html              # Bio, experience timeline, education, skills, contact links
├── preview-editorial.html  # Style exploration A (warm paper + Fraunces serif + green) — self-contained
├── preview-dark.html       # Style exploration B (dark + Space Grotesk + amber) — self-contained
├── preview-swiss.html      # Style exploration C (white + Archivo + swiss red) — self-contained
├── css/
│   └── main.css            # Single shared stylesheet for all non-preview pages
├── js/
│   └── script.js           # Mobile nav toggle + Swiper carousel init (Elab page)
├── projects/                # One detail page per project
│   ├── Elab.html           # STANDALONE VENTURE PAGE (global nav, not the project template)
│   ├── KKBOX.html          # Case-study format
│   ├── CountdownTimer.html # Case-study format
│   ├── Housing.html        # Case-study format
│   ├── 3491.html           # Legacy format (PDF iframe) — not yet converted
│   ├── LEO.html            # Legacy format — not yet converted
│   ├── Purchasing.html     # Legacy format — not yet converted
│   ├── Entrepreneurship.html  # Legacy format; back-link points to Elab.html
│   └── International.html     # Legacy format; back-link points to Elab.html
├── images/                  # Cover images + in-page graphics (webp where optimized)
│   └── Elab/                # Slide images (1.jpg–5.jpg) for E-Lab swiper gallery
├── pdf/                     # Full report PDFs + Resume.pdf
└── Marketing Research-Countdown Timer.docx/.pdf  # Source files
```

## Design System (Editorial × Swiss theme, applied 2026-07-08)

All theming lives in `css/main.css`. Layout (card grid) was kept; only the "skin" changed.

- **Accent color:** ONE variable controls the whole site — `--accent` at the top of `:root`
  (currently deep green `#2D4A3E`; swap to swiss red `#E63329` or navy `#1D3A6E` by editing that single line).
  Legacy names `--accent-blue/green/purple` all alias to `var(--accent)` so older inline styles
  (about.html, Elab.html) stay compatible.
- **Palette:** warm paper background `#FAF7F2`, white cards, ink text `#1C1917`, dim `#6B6560`.
- **Typography:** headings = Fraunces (serif display, loaded via `@import` in main.css);
  body/UI = Archivo. Serif rule covers `h1, .card h3, .project-card h2, .nav-brand`.
- **Swiss elements:** 2px black section rules (`.section-divider`), small uppercase
  letter-spaced section labels (`.category-title`), sharp 2px corners, borders instead of
  shadows, no hover-lift (cards darken their border instead).
- **Tags:** single neutral outline style; `.tag-green`/`.tag-purple` still exist in HTML but
  render identically (their CSS vars point to the same values).
- The three `preview-*.html` files are self-contained style explorations (own inline CSS,
  don't use main.css). Keep for reference or delete after the design settles.

## Page Architecture

### index.html (homepage)
- Global nav: Projects / E-Lab / About / Resume
- `.hero-section` — left-aligned editorial hero: positioning line ("data into business
  decisions — across tech and finance"), Columbia/SinoPac/Shopee highlights, GitHub +
  LinkedIn + Resume links
- Project sections (`.section-divider` + `.category-title` + `.project-grid`, 2 cards/row):
  1. **Machine Learning & Analytics** — KKBOX, Countdown Timer, Housing
  2. **Finance & Industry Research** — 3491, LEO
  3. **In Progress** — 4 ongoing cards, no detail pages yet (CTBC MCP, readmission
     prediction, gift-app UX, senior-consumer research)
  4. **Beyond Analytics** — E-Lab teaser (featured card → venture page)
- `.filter-bar` (All / Completed / Ongoing) under the hero; each card carries
  `data-status="done|ongoing"`, inline script at the bottom of index.html filters cards and
  hides empty sections. Ongoing cards use `.status-badge` (pulsing dot).
- Purchasing card removed from homepage (Kaggle toy dataset); projects/Purchasing.html
  still exists but is unlinked.
- `.main-footer` — Email / LinkedIn / GitHub (@Lyyyy17) / Location (Taipei → New York, Fall 2026)
- Has meta description + OG tags

### projects/Elab.html (venture page — unique layout)
Global nav + `.venture-container` (inline styles): hero with mission + IG/FB/report links,
three `.stat-box`es (MOE Dream Achiever Award / US$10,000+ funding / 0→1), "What I Did"
narrative, concept image, Swiper gallery, "Related Educational Work" cards
(Entrepreneurship + International), closing note about staying open to founding again in NYC.

### Case-study pages (KKBOX, CountdownTimer, Housing)
Shared pattern using `.case-*` components in main.css:
`.case-tldr` (one-paragraph takeaway) → Problem → Data & Method (`.case-list`) →
Key Findings (`.case-figures` stat boxes + list) → Business Impact. PDF iframe removed;
full report stays as the nav-header button. All numbers come from the actual reports
(Countdown: n=183, scarcity mediation p=.037; Housing: R² 0.69 vs 0.15, park +3.61, etc.).

### Case-study pages (also 3491, LEO, Purchasing — converted 2026-07-08)
3491: BUY/TP405/+41.2% pitch; LEO: industry map (33.8% CAGR, cost curve, 2 stock picks);
Purchasing: honest null-result inference workflow (unlinked from homepage but kept).

### Legacy project pages (Entrepreneurship, International)
Old pattern: `.nav-header` + description + PDF `<iframe>`. Linked from Elab.html.

## Content Mapping (Project → Assets)

| Project | Detail Page | Cover Image | Report PDF |
|---|---|---|---|
| E-Lab | Elab.html | images/Elab.png, Elab_1.webp, Elab/1–5.jpg | pdf/Elab.pdf |
| KKBOX | KKBOX.html | images/kkbox-preview.png, KKBOX_1.png | pdf/KKBOX_Report.pdf |
| Housing | Housing.html | images/Housing.webp | pdf/Housing.pdf |
| Countdown Timer | CountdownTimer.html | images/CountdownTimer.webp, Countdown_1.png | pdf/countdown.pdf |
| LEO | LEO.html | images/LEO.jpg, LEO_1.jpg | pdf/LEO.pdf |
| 3491 (Universal Microwave) | 3491.html | images/3491.png | pdf/3491.pdf |
| Purchasing Power | Purchasing.html | images/Purchasing.png | pdf/Purchasing.pdf |
| Entrepreneurship (Education) | Entrepreneurship.html | images/Entrepreneurship.webp, Entrepreneurship_1.png | pdf/Entrepreneurship.pdf |
| International / Global Trends | International.html | images/International.png | pdf/International_1.pdf, International_2.pdf |
| Resume | linked in global nav | — | pdf/Resume.pdf |

## Changelog

### 2026-07-08 — Repositioning + case studies + theme
- index.html rewritten: data-first hero, ML/Finance category split, E-Lab moved to teaser,
  meta/OG tags, GitHub links, fixed typos (Machine Learning, Diagnostics, Planning),
  removed stray `</main>`/nested footer, unique section ids, alt text.
- Elab.html rebuilt as standalone venture page; educational projects folded in;
  their back-links point to Elab.html.
- KKBOX/CountdownTimer/Housing converted to case-study format (`.case-*` CSS added).
- main.css re-themed: Editorial × Swiss (see Design System). Card-grid layout unchanged.
- about.html: nav order matched to global nav; GitHub link added.
- Three preview-*.html style explorations added.
- Fonts now loaded via <link> on every page (Fraunces 500/600 + Archivo); @import removed
  from main.css; faux-bold fixed (inline weight 800 → 600 on about/Elab).
- Status filter (All/Completed/Ongoing) + In Progress section with 4 ongoing cards;
  Purchasing card removed from homepage. Footer grid re-centered. Accent changed to
  wine red by Lydian.

### 2026-06-12 — Cleanup (previous)
- Merged page_elab.css into main.css; removed dead files; WebP conversions
  (Entrepreneurship 2.1MB→157KB, Elab_1 1.5MB→472KB, Housing 740KB→91KB, CountdownTimer gif→webp 61KB).

### 2026-07-08 (later) — Covers, nav, layout unification
- images/covers/ — 5 unified homepage cover thumbnails (matplotlib-generated, paper bg +
  wine-red accent, real numbers). Homepage cards now use these. Draft fonts are system
  serif (C059) — regenerate with Fraunces when finalizing.
- Beyond Analytics featured card → one-line `.venture-strip` text teaser.
- Footer top rule now an in-container `.section-divider` (was full-bleed border).
- Resume removed from global nav on all pages; prominent Download Resume button lives in
  About hero. Nav is now Projects / E-Lab / About.
- about.html and Elab.html containers unified to 1300px/40px (content columns capped at
  760/900px, left-aligned) so page switches no longer jump.

## Known Issues / Remaining Ideas

- `pdf/KKBOX_Report.pdf` is unreadable from the sandbox (iCloud placeholder?) — open it once
  in Finder to force download, then real numbers can be added to the KKBOX case study.
- 3491, LEO, Purchasing, Entrepreneurship, International still use the legacy PDF-iframe
  format; PDFs total ~34MB (International_2 5.6MB, Purchasing 5.4MB, LEO 5.0MB).
- images/Elab.png, Entrepreneurship_1.png, Elab/*.jpg still unoptimized.
- No favicon; no custom 404 (matters once deployed to GitHub Pages).
