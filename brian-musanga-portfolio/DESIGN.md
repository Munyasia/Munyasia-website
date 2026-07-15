---
name: Brian Musanga Portfolio
description: An editorial, heritage-luxury portfolio for a full-stack and AI developer, built on a single fixed four-color palette.
colors:
  floral-white: "#FEFAEF"
  deep-blue: "#182350"
  powder-blue: "#AFD2FA"
  pale-brown: "#B9915E"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(1.85rem, 3.5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "General Sans, ui-sans-serif, system-ui"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "3px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.floral-white}"
    borderColor: "{colors.pale-brown}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.pale-brown}"
    textColor: "{colors.deep-blue}"
  card-project:
    backgroundColor: "transparent"
    rounded: "{rounded.sm}"
    padding: "0px"
---

# Design System: Brian Musanga Portfolio

## 1. Overview

**Creative North Star: "The Editorial Ledger"**

The site reads as a well-kept ledger crossed with a magazine masthead: a deep-blue page, floral-white ink, stamped mono labels for structure, and a bold Bodoni serif reserved for moments that deserve emphasis. It is the visual proof of the same discipline the case studies describe — cost-aware, security-first, nothing wasted. One fixed four-color palette carries the whole system: deep blue for the page, floral white for text and structure, pale brown for the two accent moments that need to earn attention, and powder blue for quiet hairlines. There is no fifth color, no icon library doing the talking, no gradient standing in for a real idea.

This system explicitly rejects generic startup-SaaS scaffolding: no hero-metric blocks, no gradient text, no tiny uppercase eyebrow repeated above every section, no identical icon-grid cards, no side-stripe accent borders, no glassmorphism used as decoration. Nothing here should be swappable with another developer's name; the hero includes Brian himself, and the mono/serif contrast is deliberate, not templated.

**Key Characteristics:**
- Deep-blue page, floral-white ink, fixed — no toggle, no inversion, one state
- Pale brown marks exactly two things: buttons/links and the italic emphasis word in headings
- Bodoni Moda reserved for headline emphasis and single-word editorial accents (italic)
- JetBrains Mono carries all structural/metadata language: labels, indices, timestamps
- Zero radius on structure, a hair of softness (2-3px) on interactive controls only — except the hero portrait, which is fully circular by deliberate choice
- Hairline rules do the work cards and shadows would do elsewhere

## 2. Colors

Four colors, four roles, fixed. No hue is introduced outside this set.

### Surface
- **Deep Blue** (#182350): the page. The only background color on the site.

### Primary
- **Floral White** (#FEFAEF): the ink. Carries all headline type, body text, and structural borders when used as foreground.

### Accent
- **Pale Brown** (#B9915E): the primary accent. Reserved for two moments only — buttons/links (`.btn-invert`, `.link-invert`) and the italic emphasis word inside display/headline type.
- **Powder Blue** (#AFD2FA): the secondary, quiet accent. Used at reduced opacity for hairline borders and muted structural rules — never for text, never for the two accent moments above.

### Named Rules
**The Four-Color Rule.** Every surface on this site is built from exactly floral white, deep blue, pale brown, and powder blue, each with one job. If a fifth hue appears anywhere outside a project screenshot, it's a mistake, not a variant.

## 3. Typography

**Display Font:** Bodoni Moda (with Georgia, serif fallback)
**Body Font:** General Sans (with ui-sans-serif, system-ui fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** A humanist sans carries the reading copy without ceremony; the high-contrast Bodoni serif interrupts only at emphasis points (a hero's key verb, a CTA's key noun) in italic and pale brown, like a hand-annotated correction on the ledger page; mono renders anything structural — indices, metadata, section numbers — like a stamped register entry.

### Hierarchy
- **Display** (400, `clamp(2rem, 4vw, 3.75rem)`, line-height 1.1): hero headline only, one per page. Sized for a full sentence rather than a punchy fragment — see the Sentence Headline rule below.
- **Headline** (400, `clamp(2.5rem, 6vw, 5.5rem)`, line-height 1): section-closing statements (e.g. the contact CTA).
- **Title** (400, `clamp(1.85rem, 3.5vw, 3rem)`, line-height 1.05): pillar titles, featured project titles.
- **Body** (400, 1rem, line-height 1.7): all reading copy, capped at 55-65ch measure.
- **Label** (400, 0.75rem, letter-spacing 0.08em, uppercase): mono metadata — nav, section indices, project type/year, stack pills.

### Named Rules
**The Single-Word Rule.** Bodoni Moda italic, in pale brown, marks exactly one word or short phrase per heading, never a whole sentence. It's an accent, not a second typeface competing for attention.

**The Sentence Headline Rule.** The hero headline is a full sentence (what Brian does, in his own words), not a punchy 3-4 word fragment, so it runs at a moderate `clamp(2rem, 4vw, 3.75rem)` rather than the oversized shout a short fragment could carry. `text-wrap: balance` finds its own line breaks against whatever width the portrait's gutter reclaim leaves it (see Hero Portrait, below), so the composition stays readable and balanced at any viewport instead of overflowing into an unreadable wall of oversized serif type.

## 4. Elevation

Flat by default; the system has no shadow vocabulary. Depth and separation are conveyed entirely through hairline borders (1px, translucent powder blue) and inversion on hover/active (pale brown fill replaces the border, text becomes deep blue). This is intentional: a ledger page doesn't have drop shadows, it has ruled lines.

### Named Rules
**The No-Shadow Rule.** If a component needs visual separation, reach for a hairline border or an inversion state, never `box-shadow`.

## 5. Components

### Buttons
- **Shape:** sharp corners with a hair of softness (3px radius) — enough to feel considered, not enough to soften the editorial line.
- **Primary (`.btn-invert`):** transparent background, 1px pale-brown border, mono uppercase label type, 10px/20px padding.
- **Hover / Focus:** full invert — background becomes pale brown, text becomes deep blue, 150ms ease. No color shift beyond that, no shadow, no scale.

### Chips (stack pills, project metadata)
- **Style:** transparent background, 1px hairline border (powder blue), mono uppercase label type, 3px radius, tight padding (2.5px/10px).
- **State:** static; these are informational, not interactive.

### Cards / Containers (project cards, featured project blocks)
- **Corner Style:** sharp images (0px) inside a 1px hairline border; text blocks have no container at all — they sit directly on the page.
- **Background:** transparent; the page background shows through.
- **Shadow Strategy:** none — see Elevation.
- **Border:** 1px hairline (`--border`, powder blue) around imagery only.
- **Internal Padding:** none on the outer block; internal gap between title/outcome/description/pills is a consistent vertical rhythm (~1rem steps).

### Inputs / Fields
- **Style:** transparent background, 1px hairline border bottom or full outline, mono or sans label depending on context, 3px radius.
- **Focus:** 2px solid outline in floral white, 2px offset (matches the site-wide `:focus-visible` rule).

### Navigation
- Mono uppercase link labels with a two-digit index (`01`, `02`...) prefixed in floral white. Active/hover state underlines via `.link-invert` (pale-brown underline that brightens to full floral white on hover). No theme toggle — one fixed look, nav is logo and links only.

### Featured Project (signature component)
Large, alternating image-left/image-right blocks: a hairline-bordered screenshot dominates roughly 55-60% of the row, paired with mono metadata (type · year), a display-serif title, a bold sans "outcome" line at a larger body size (the single sentence that has to justify the project), a muted description, mono stack pills, and a "Visit site ↗" link where a live URL exists. The ↗ is a typographic character in the body font, never an icon component.

### Hero Portrait (signature component)
Circular, grayscale, hairline-bordered (`rounded-full`, 1px `--border`), fixed at 384px (`lg:w-96`) rather than sharing a proportional column with the headline. This is the one deliberate exception to the sharp-corner system: a portrait reads as a person, not a structural block, and the circle marks that distinction on sight. Sits left of the headline on desktop, above it on mobile. At `xl` (1280px+) and `2xl` (1536px+) it steps further left via negative margin (`xl:-ml-[152px]`, `2xl:-ml-[300px]`) into the unused gutter outside the `max-w-5xl` container, pulling it close to the page's own left edge and handing the reclaimed width to the headline column (which mirrors the reclaim on its own right edge via `xl:-mr-[180px]`, `2xl:-mr-[330px]`) rather than shrinking the portrait. Confirmed by Brian at this position; re-tuned alongside the larger 6.5rem display scale.

On `lg`+ the row is vertically centered (`lg:items-center`), leveling the portrait with the headline column rather than top-aligning them. A mono caption (Brian's role) sits directly under the portrait like a museum placard, the one place the role appears in the hero. The headline itself no longer forces fixed line breaks: it renders as one string and relies on `text-wrap: balance` (see Typography) to find its own line lengths against whatever width the portrait's gutter reclaim leaves it, so the composition stays balanced across breakpoints instead of being hand-tuned per line. The gutter reclaim itself is computed with `calc()` against `100vw` rather than fixed pixel values, so it scales continuously with viewport width and can never pull the portrait or text column past the browser's actual edge.

### Named Rules
**The One Circle Rule.** Exactly one element on the entire site is ever circular: the hero portrait. If a second circular shape appears anywhere else, it's a mistake, not a variant — the sharp/circle contrast only works if the circle stays singular.

## 6. Do's and Don'ts

### Do:
- **Do** keep the whole palette to exactly floral white, deep blue, pale brown, and powder blue, each with a fixed, single job.
- **Do** use Bodoni Moda italic in pale brown for single-word emphasis inside display and headline type only.
- **Do** use hairline borders (1px, `--border` token, powder blue) and full pale-brown invert hover states for all separation and interactivity — never a shadow.
- **Do** keep buttons and pill chips at a small 2-3px radius; keep image containers and structural blocks at 0px — except the hero portrait, which is the one deliberate full circle on the site (see the One Circle Rule).
- **Do** render arrow/directional glyphs (↗) as typographic characters in the body font, not as icon components, per the project's icon policy.
- **Do** include Brian's own photo in the hero — this is a personal portfolio, not a template.

### Don't:
- **Don't** introduce a hero-metric block, gradient text, or a tiny uppercase eyebrow repeated above every section — these are the generic startup-SaaS clichés this system exists to avoid.
- **Don't** build identical icon-grid cards or add a side-stripe colored border to any card, list item, or callout.
- **Don't** use glassmorphism decoratively, or any shadow for depth — see the No-Shadow Rule.
- **Don't** introduce a fifth color or a second display typeface; General Sans, Bodoni Moda, and JetBrains Mono are the complete set.
- **Don't** bring back a light/dark toggle — the palette is fixed by deliberate choice.
- **Don't** let this read as swappable with another developer's name — the personal, specific details (Brian's name, photo, real project outcomes) are load-bearing, not decoration.
