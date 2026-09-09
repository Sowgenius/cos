# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing codebase: Next.js 16 (App Router) + React 19 + TypeScript, package manager pnpm, plain global CSS (no CSS framework). Fonts via `next/font` (Space Grotesk). Statically prerendered. Ported from a single hand-authored static HTML artifact; the original lives at the OpenDesign project directory and in the repo's `Docs/` companion assets.

## Users

Primary user: recruiters, lead engineers, and hiring managers at Senegalese engineering firms — bureaux d'études structures, bureaux de contrôle technique (e.g. SEATEC-type firms), and applied-research groups — evaluating candidates for a 4–6 month structures internship. They scan quickly for proof of real structural-engineering capability (design, calculation, code compliance) and want to reach the candidate with minimal friction. Reach is Senegal-focused; the site is French-only for now.

## Product Purpose

A personal portfolio site for Cheikh Oumar Sy, a civil-engineering design engineer specializing in structures, whose goal is to secure a 4–6 month structures internship (structural calculation, technical control office, or applied research). Success = a qualified recruiter understands his competence within one scroll and contacts him (email, LinkedIn) or downloads his CV.

## Positioning

A structures engineer who works end-to-end — from conception and 3D modeling through structural calculation, code-compliant sizing (Eurocodes, BAEL), and execution drawings — and who builds his own Python calculation tools and has authored a peer-reviewed publication. The differentiator a neighboring student portfolio could not truthfully copy: real named projects with delivered structural deliverables (RSA models, rebar/footing plans, ArchiCAD/Revit models) plus a published Zenodo paper on high-speed railway bridge dynamics.

## Operating Context

Evaluation happens on the recruiter's device (desktop and mobile), often quickly and in French. The portfolio is judged the way engineering work is judged: by drawings, models, calculations, and code references. The visual language of the trade — plans, elevations, sections, dimension lines, rebar sections, structural grids — is the native context, not decoration. Real project artifacts (renders, coffrage/ferraillage plans, RSA/CBS/DDC outputs) are the substance under evaluation.

## Capabilities and Constraints

Content the site presents (all confirmed real):
- Experience: Bureau de contrôle technique intern (SEATEC Sénégal); Conducteur de travaux intern — plomberie and gros œuvre (SENTRA BTP SA).
- Research: publication "Analyse dynamique d'un pont ferroviaire à grande vitesse" — DOI 10.5281/zenodo.20069677 (Zenodo, 2026).
- Projects (3D design / structures): currently three on the site (Maison R+2 ×2, Maison R+1 conteneurs recyclés). Real project library in `Docs/` is broader — see Evidence.
- Skills/tools: RSA, CYPECAD, Graitec, CBS, DDC, EXPERT, RMD7, AutoCAD, Revit, ArchiCAD, Python, LaTeX; béton armé & charpente métallique sizing (Eurocodes, BAEL), execution drawings, conformity checks, structural dynamics & modal analysis (EN 1991-2, EN 1990), Python tooling, métrés/devis.
- Education: Ingénieur de Conception en Génie Civil (DIC3), IPSL Saint-Louis (2023–2026); DST, ESP Dakar (2021–2023); Bac S1, Lycée Maba Diakhou BA (2021).
- Freelance: concepteur béton armé; formateur logiciels de calcul de structures.

Constraints (from the founder brief):
- No video-background hero.
- Wants animation and transitions; "simple but sophisticated and informative."
- French-only, Senegal-focused for now (no i18n required yet; keep future FR/EN open but do not build it).

## Brand Commitments

- Name: Cheikh Oumar Sy. Initials mark used in the current nav: "C.O.S".
- Voice: professional, precise, engineering-credible; French.
- Inspiration references the founder made binding (tone/direction, not literal copy): Formark template (formark-template.webflow.io) and several architecture-website Dribbble explorations (Housoku, Architecture Website Exploration 07, luxury real estate, modern architecture). Directional: architectural, editorial, sophisticated.
- Motion & interaction references the founder made binding (directional, not literal): Codrops infinite GSAP scroll gallery — click-to-expand FLIP transition on project cards (tympanus.net, 2026-07-30); Codrops persistent WebGPU page transitions and async vanilla page transitions — smooth full-surface transitions between views (tympanus.net, 2026-06-30 & 2026-02-26); Tympanus Sticky Sections index7 — one-scroll sticky section transitions; Tympanus Animated Image Pieces — image reveal that resolves from animated fragments. Layout/typography/menu references: recent.design Harry Atkins (layout, typography, and its menu — loved) and recent.design "X Advertising" (layout). These define the ambition for motion and editorial layout; honor them within the existing "bureau d'études" world, not as a restyle away from it.
- Variation intent: the founder wants to explore multiple design variations. Treat the documented world as the anchor identity; variations are expressions within it (or, if a variation is an explicit redesign, route it through new-work) — not silent drift.
- Incumbent visual world (documented in DESIGN.md): "bureau d'études / cabinet d'architecture" — cold-concrete OKLCH palette with a single deep steel-blue accent, Space Grotesk display, monospace for dimensions/metadata, hand-drawn blueprint SVG motifs, technical tick-rules and structural grid overlays.

## Evidence on Hand

Real assets in repo `Docs/` (companion, not yet wired into the site):
- CV: `Docs/CV_Cheikh Oumar SY_v2.pdf` (real, current CV — the "Télécharger le CV" button should link here).
- Portrait candidate: `Docs/PHOTO-2026-09-05-02-09-01.jpg` (to confirm it is the intended portrait before use).
- MAISON NAFI DIOM (R+2): 3D renders `1.jpg`–`7.jpg`, full plans (RDC, Étage 1, Étage 2, Terrasse), façade, sections (Coupe AA/BB), building permit, ArchiCAD `.pln`.
- Villa Bamar Mounass: RSA 3D structural model, Revit coffrage, column & footing rebar plans, raft plan (`radier.pdf`), column load spreadsheet — a full structures deliverable set.
- 4 STUDIOS BABACAR DIOUF: plans (RDC, Étage, Terrasse), ArchiCAD `.pln`.
- BAAY MASS: plans (RDC, Étage, Terrasse), ArchiCAD `.pln`.
- PROJET DEMS 1 (R+2 Guédiawaye, academic): ArchiCAD, RSA, CBS, DDC outputs; presentation PDF; rebar plans (longrines, poutres PH RDC/R+1/R+2); ~14 renders in `PRESENTATION PROJET DEMS/IMAGES/bon/`.

Explicitly absent / must not be fabricated:
Explicitly absent / must not be fabricated:
- The site's project imagery is currently hand-drawn blueprint SVG placeholders; real renders above may replace them, but source CAD files (`.pln`, `.rvt`, `.rtd`, `.dwg`) are not web images and need export first.

Confirmed contact facts:
- Email: cheikhoumarsy05@gmail.com
- Phone: +221 76 630 10 88
- LinkedIn: https://www.linkedin.com/in/cheikh-oumar-sy-29912b23b
- GitHub: https://github.com/cheikhoumarsy05-eng
- Zenodo publication: https://doi.org/10.5281/zenodo.20069677

## Product Principles

1. Proof over polish: every claim maps to a real artifact (a project, a plan, a model, a DOI). Never dress up the portfolio with invented work or metrics.
2. Speak the trade's language: plans, elevations, sections, dimension lines, and structural grids are the native visual vocabulary, not ornament — they signal competence to an engineering evaluator.
3. One scroll to credibility, one click to contact: a recruiter should grasp his level fast and reach him or grab the CV without hunting.
4. Substance is bilingual-ready but shipped in French: keep content structured so a future FR/EN split is possible, without building i18n now.
5. Honest placeholders: pending facts (e.g. un-exported CAD renders) are marked as such, never faked.

## Accessibility & Inclusion

No product-specific standard was mandated by the founder. Baseline: the site must remain legible and operable on mobile (recruiters browse on phones), respect `prefers-reduced-motion` (already honored in the incumbent build), and preserve semantic structure and keyboard/focus affordances. French is the sole content language for now.
