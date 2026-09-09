---
name: Atelier Index
description: A structural engineer's portfolio art-directed as a studio index — warm paper, near-black ink, one terracotta voice, giant tabular numerals.
colors:
  paper: "#F4F1EA"
  paper-2: "#EDE8DD"
  ink: "#0E0E10"
  ink-2: "#26251F"
  stone: "#8A8578"
  stone-2: "#6E695D"
  line: "#D8D2C4"
  accent: "#B24A2E"
  accent-2: "#9A3D24"
  on-ink: "#F4F1EA"
  on-ink-mut: "#B7B2A6"
typography:
  index:
    fontFamily: "Bricolage Grotesque, -apple-system, sans-serif"
    fontSize: "clamp(64px, 12vw, 168px)"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "-0.04em"
    fontFeature: "tabular-nums"
  display:
    fontFamily: "Bricolage Grotesque, -apple-system, sans-serif"
    fontSize: "clamp(56px, 13vw, 168px)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Bricolage Grotesque, -apple-system, sans-serif"
    fontSize: "clamp(30px, 5vw, 60px)"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "-0.03em"
  serif:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(19px, 2.2vw, 26px)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, -apple-system, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, -apple-system, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  hairline: "4px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  section: "clamp(72px, 12vw, 168px)"
  head-gap: "clamp(20px, 4vw, 64px)"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-2}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
    height: "48px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
    height: "48px"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
  tool-badge:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  tool-badge-key:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.stone-2}"
    rounded: "{rounded.pill}"
    padding: "6px 13px"
  card-frame:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.hairline}"
---

# Design System: Atelier Index

## Overview

**Creative North Star: "The Studio Index"**

Atelier Index treats a structural engineer's portfolio the way a design studio treats its own monograph: an art-directed *index* of work, not a dev-portfolio hero with a card grid. The whole surface is a warm printed spread — near-black ink on warm paper — organized by oversized tabular numerals that number each section like folios in a catalogue raisonné. Real 3D renders sit full-bleed inside hairline frames, the way plates are tipped into a fine book. A single terracotta voice does all the pointing; everything else is ink, stone, and paper.

The personality is editorial, confident, and quiet where it can be so it can be loud where it counts. Density is generous: sections breathe with large vertical rhythm and asymmetric two-column grids that alternate weight left and right. Depth is entirely flat — there are no drop shadows anywhere; separation is achieved with tone shifts (paper vs. paper-2 vs. ink bands) and 1px hairlines. The type does the drama: a heavy grotesque for the wordmark and numerals, a Spectral serif for the reflective "voice" leads, and a clean Geist for body and labels. Motion is restrained and physical — an exponential ease-out carries reveals, a clip-path "plot-in" wipes renders into view, and a FLIP transition scales a project field up into a full detail overlay.

This is a clean break from the prior "Bureau d'Études" blueprint world: no cold-concrete OKLCH palette, no steel-blue accent, no hand-drawn blueprint SVG motifs as the primary language (a restyled blueprint field survives only as a secondary fallback texture when a real render is missing). The anti-reference is the generic developer portfolio: centered hero, rounded shadowed cards, rainbow accents.

**Key Characteristics:**
- Warm paper ground with near-black ink and a single terracotta accent — no second hue.
- Giant terracotta tabular index numerals number every section like folios.
- Asymmetric editorial grid; renders go full-bleed inside 1px hairline frames.
- Flat by default: depth from tone + hairline, never shadow.
- Three-voice type system: Bricolage Grotesque display, Spectral serif, Geist body.
- Signature moves: inverted ink "Recherche" band, clip-path overlay menu, FLIP project gallery.

## Colors

A warm, printed palette: paper and ink carry the whole surface, warm stone handles quiet secondary text, and a single terracotta is the only chromatic voice.

### Primary
- **Terracotta** (`#B24A2E`): The one accent. It marks every index numeral, active nav underline, list markers, availability pulse, link hover, primary buttons, and the `::selection` highlight. Used sparingly and always meaningfully.
- **Deep Terracotta** (`#9A3D24`): Hover/pressed state of the accent only. Never a standalone fill.

### Neutral
- **Warm Paper** (`#F4F1EA`): The default page ground; also the text color on ink surfaces (`--on-ink`).
- **Deeper Paper** (`#EDE8DD`): Alternating section bands and the resting fill inside media frames — tonal separation without borders.
- **Near-Black Ink** (`#0E0E10`): Primary text; the fill of the inverted "Recherche" band and ink buttons.
- **Soft Ink** (`#26251F`): Large body copy and serif leads on paper — a hair softer than pure ink for long reading.
- **Warm Stone** (`#8A8578`): Warm-gray secondary text at body sizes (AA).
- **Dark Stone** (`#6E695D`): Darker stone for smaller secondary text, labels, and captions (AA).
- **Hairline** (`#D8D2C4`): The 1px rule that draws every divider, frame edge, and border — the structural line of the whole system.
- **Muted-on-Ink** (`#B7B2A6`): Muted paper text on ink surfaces, AA on `#0E0E10`.

### Named Rules
**The One Voice Rule.** Terracotta is the only chromatic color in the system. If a screen needs a "second color," the answer is tone (paper-2, ink, stone), not a new hue. Its rarity is what makes it read as intent.

**The Ink-Band Inversion Rule.** Deep focus moments (the Recherche/publication feature) invert to a near-black ink ground with paper text; the terracotta accent survives the inversion unchanged. Inversion is a spotlight, used at most once or twice per page.

## Typography

**Display Font:** Bricolage Grotesque (with `-apple-system, sans-serif` fallback) — wordmark, section titles, and all tabular index numerals.
**Serif Voice:** Spectral (with `Georgia, serif` fallback) — reflective leads, subheads, and detail descriptions.
**Body Font:** Geist (with `-apple-system, system-ui, sans-serif` fallback) — body copy, labels, specs, nav, and buttons.

**Character:** A heavy, tightly-tracked grotesque supplies the editorial muscle; a warm Spectral serif provides the human, essayistic "voice"; Geist keeps functional text neutral and legible. The tension between the loud grotesque and the calm serif is the type story.

### Hierarchy
- **Index Numeral** (Bricolage 700, `clamp(64px, 12vw, 168px)`, line-height 0.82, `-0.04em`, tabular-nums, terracotta): The folio number leading every `.ed-head`. The system's loudest element.
- **Display / Wordmark** (Bricolage 700, `clamp(56px, 13vw, 168px)`, line-height 0.86, `-0.045em`): The hero name; tight, oversized, near-black with one terracotta word.
- **Title** (Bricolage 600, `clamp(30px, 5vw, 60px)`, line-height 1.0, `-0.03em`): Section titles, publication and contact headlines, project titles.
- **Serif Lead** (Spectral 400, `clamp(19px, 2.2vw, 26px)`, line-height 1.5, soft ink): Section leads and hero sub; the "voice." About-lead runs larger (`clamp(24px, 3.2vw, 40px)`).
- **Body** (Geist 400, 16–17px, line-height 1.6–1.7, soft ink): Paragraphs and descriptions. Reading measures capped ~46–65ch.
- **Label** (Geist 500, 12px, `0.12em`, UPPERCASE, dark stone): Eyebrow keys, spec labels, captions, folio strings.

### Named Rules
**The Numeral-as-Ornament Rule.** Big tabular index numerals are the primary decorative device. Always Bricolage 700 with `font-variant-numeric: tabular-nums` and terracotta. They replace icons, badges, and colored blocks as the eye-catcher.

**The Serif-is-Voice Rule.** Spectral is reserved for reflective, human sentences (leads, descriptions). Never set labels, specs, or UI in serif; those are Geist.

## Layout

A centered `1280px` container (`--container`) with fluid gutters (`--gutter: clamp(20px, 5vw, 64px)`). Vertical rhythm is large and consistent: every `.section` uses `padding-block: clamp(72px, 12vw, 168px)`. The grid is deliberately **asymmetric** — hero, about, publication, contact, and project rows all use uneven two-column splits (e.g. `1.05fr / 0.95fr`, `1.4fr / 1fr`, `1.5fr / 1fr`), and project rows alternate which side carries the render on even rows. Section heads are a two-column `auto 1fr` grid: giant index numeral beside a serif-led title, baseline-aligned.

Tonal bands structure the page: default paper, `.band-paper2` (deeper paper) for alternating sections, and `.band-ink` (near-black) for the inverted Recherche feature. Editorial lists (experience, education, skills, project index) are hairline-ruled rows rather than cards.

Responsive collapse: multi-column grids fold to single-column at 900px (hero/about), 860px (publication/contact/skills), 820px (project rows), and 720px (section heads and experience rows), where the numeral shrinks and stacks above its title. `scroll-padding-top: 88px` offsets the sticky nav for anchor jumps.

## Elevation & Depth

**This system uses no drop shadows.** Depth is expressed entirely through tone and hairlines. Surfaces separate by shifting ground (paper → paper-2 → ink) and by 1px `#D8D2C4` rules that frame media, divide list rows, and underline the sticky nav once scrolled. The only "shadow-like" effect is the terracotta availability dot's expanding `box-shadow` pulse ring — a motion accent, not elevation. Overlays (menu, project detail) sit above the page via a translucent ink scrim with `backdrop-filter: blur`, not via a lifted shadow.

### Named Rules
**The Flat-Paper Rule.** Nothing casts a shadow. If an element needs to feel separate, change its tone or frame it with a hairline — never add `box-shadow` for depth.

**The Hairline-Frame Rule.** Every real render and media surface is contained by a 4px-radius frame on a paper-2 ground; captions attach on a hairline `border-top`, echoing plate labels in a printed catalogue.

## Shapes

Two radii only. Structural surfaces — media frames, cards, overlays, focus outlines — use a crisp `4px` (`--radius`). Interactive pills — every button, nav CTA, tool badge, tag, soft-skill chip, and the icon toggles — use full `999px` rounding. There is no middle radius; the language is "sharp editorial rectangle" vs. "fully-round control." Borders are always a single 1px hairline (`#D8D2C4`) except ink buttons and key tool badges, which border in ink. The clip-path is a recurring geometric device: renders wipe in via `inset()` clip, and the overlay menu opens by animating `clip-path: inset(0 0 100% 0)` to full.

## Components

### Buttons
- **Shape:** Fully rounded pill (999px), min-height 48px, padding `13px 26px`, Geist 500 at 15px.
- **Primary:** Terracotta fill (`#B24A2E`) with paper text; hover deepens to `#9A3D24`. Often carries an `→` arrow that slides right on hover.
- **Ink:** Near-black fill with paper text; hover *inverts* to transparent with ink text and ink border.
- **Outline / Ghost:** Transparent with a 1px ink border and ink text; hover fills ink with paper text. On ink bands the border and text switch to translucent-paper / paper.
- **States:** `:active` nudges `translateY(1px)`; `:focus-visible` shows a 2px terracotta outline offset 3px. All transitions ride `--e-out` (exponential ease-out).

### Links
- **Style:** Inline, Geist 500, with an animated 1.5px terracotta underline drawn via a background-size gradient that grows left→right on hover; text also shifts to terracotta.
- **Nav links:** Dark-stone at rest with a 2px terracotta underline that `scaleX(0→1)` on hover/active; active state (scrollspy-driven) also darkens text to ink.
- **Focus:** 2px terracotta outline, offset 3px, 2px radius.

### Tool Badges & Tags
- **Tool badge (default):** Pill with 1px hairline border, Geist 500 14px; hover shifts border and text to terracotta.
- **Tool badge (key):** Ink fill with paper text marking daily-driver tools; hover fills terracotta.
- **Tag:** Smaller pill, 1px hairline, dark-stone text at 13px — metadata chips on project rows (no hover state; purely informational).
- **Soft-skill chip:** Same as tag, used for personal skills.

### Cards / Media Frames
- **Corner:** 4px radius (`--radius`).
- **Background:** paper-2 resting fill.
- **Depth:** Flat — no shadow. Separation from the page comes from the tone shift and (for renders) a hairline caption rule.
- **Behavior:** Render `<img>` scales to `1.04` on hover of its button; captions/badges float on translucent paper/ink pills with `backdrop-filter: blur`.

### Editorial Section Head (signature)
- **Structure:** `auto 1fr` grid — a giant terracotta tabular numeral (`.ed-index`) baseline-aligned beside a Bricolage title (`.ed-title`) and optional Spectral lead (`.ed-lead`).
- **Rule:** Every top-level section opens with one. Numerals run 00 (hero folio) through 08.

### Overlay Menu (signature)
- **Behavior:** Full-screen near-black panel that opens via `clip-path: inset(0 0 100% 0)` → `inset(0 0 0 0)` over 0.6s on `--e-out`. Nav items are giant Bricolage links (`clamp(40px, 11vw, 84px)`) that stagger-fade up with per-item transition delays; hover turns them terracotta. Focus-trapped, Escape-closes, body scroll locked. Reduced-motion disables the transitions.

### Project Row & FLIP Detail (signature)
- **Row:** Asymmetric two-column index entry, hairline-divided, alternating render side on even rows. Real renders "plot in" via a `clip-path: inset(0 100% 0 0)` → full wipe when the row enters view.
- **Detail overlay:** Clicking a row FLIP-animates the media field's rect up into a centered `min(1120px)` paper dialog (WAAPI translate+scale over 480ms on the same easing). The dialog is `role="dialog"`, focus-trapped, Escape/arrow-key navigable, with a thumbnail strip and a translucent-ink blurred scrim. All FLIP/animation is gated behind `prefers-reduced-motion: no-preference`.

## Do's and Don'ts

### Do:
- **Do** open every section with a giant terracotta tabular index numeral in a `.ed-head`.
- **Do** keep terracotta (`#B24A2E`) as the sole accent; reach for tone (paper-2, ink, stone) when you want contrast, per the One Voice Rule.
- **Do** frame every real render full-bleed inside a 4px hairline frame on paper-2, with a caption on a `border-top` rule.
- **Do** convey depth with tone shifts and 1px hairlines only — the Flat-Paper Rule forbids shadows.
- **Do** use Spectral only for the reflective "voice" (leads, descriptions) and Geist for all UI, labels, and specs.
- **Do** ride `--e-out` (`cubic-bezier(0.16,1,0.3,1)`) for transitions and gate every non-trivial animation behind `prefers-reduced-motion`.
- **Do** keep controls fully round (999px) and structural surfaces at 4px — two radii, no third.

### Don't:
- **Don't** add a second accent hue, gradient fills, or rainbow tool badges — terracotta is the only voice.
- **Don't** apply `box-shadow` for elevation; there are no lifted or floating cards.
- **Don't** revert to the old blueprint world (steel-blue accent, cold-concrete OKLCH, hand-drawn plan SVGs as the primary language) — the restyled blueprint field is a fallback only.
- **Don't** set body, labels, or specs in the serif, or set the reflective leads in Geist.
- **Don't** center the hero into a generic "hero + card grid" — the layout is an asymmetric editorial index.
- **Don't** use a middle radius (8/12/16px) or square off the pills; keep the sharp-rectangle / full-round contrast.
