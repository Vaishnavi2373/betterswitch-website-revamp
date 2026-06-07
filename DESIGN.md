---
name: Better Switch
description: Payment Systems as a Service. Launch your payment company in a day.
colors:
  accent-orange: "#e27533"
  accent-orange-hover: "#F28C38"
  obsidian: "#111111"
  obsidian-light: "#1A1A1A"
  canvas: "#FAFAFA"
  surface: "#FFFFFF"
  border: "#E5E5E5"
  gray-600: "#4B5563"
  gray-500: "#6B7280"
  gray-400: "#9CA3AF"
  gray-200: "#E5E7EB"
  system-green: "#22c55e"
  system-emerald: "#10B981"
  system-amber: "#f59e0b"
typography:
  display:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Figtree, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.05em"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.05em"
  brand:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.025em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.accent-orange}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent-orange-hover}"
    textColor: "#ffffff"
  button-inverted:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.obsidian}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-contact:
    backgroundColor: "{colors.accent-orange}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.obsidian}"
    rounded: "{rounded.xl}"
    padding: "24px"
  card-pricing:
    backgroundColor: "{colors.obsidian}"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "32px"
  nav-header:
    backgroundColor: "transparent"
    textColor: "{colors.obsidian}"
    padding: "20px 80px"
---

# Design System: Better Switch

## 1. Overview

**Creative North Star: "The Engineer's Workbench"**

Better Switch is Payment Systems as a Service: the platform for people who launch payment companies. The visual language communicates infrastructural confidence: precise, capable, understated. Every element exists to communicate capability and control.

The aesthetic is light-first and typographically driven. Figtree carries everything: extrabold (800) for display headlines, bold (700) for section headers, and regular/medium (400-500) for body. Outfit appears only in the wordmark. JetBrains Mono handles technical labels. The color strategy is Committed: a warm off-white canvas (#FAFAFA), near-black obsidian (#111111), and a confident burnt-orange accent (#e27533) that carries 30-40% of brand-visible surface.

The system rejects: dark-mode crypto aesthetics, corporate banking blue, playful fintech illustration, blurred dashboard screenshots as marketing, and the beige/cream SaaS template trend.

**Key Characteristics:**
- Light-dominant with obsidian-dark contrast sections (testimonials, pricing, footer)
- Single font family for nearly all text (Figtree)
- Monochromatic palette with one warm orange accent
- White cards with thin gray borders and minimal shadows
- Scroll-driven timeline animations that reveal process
- SVG-based animated diagrams that explain the product, not decorate it

## 2. Colors: The Workbench Palette

A restrained palette built on warm whites and near-blacks. The orange accent is warmer and earthier than typical tech orange, sitting at #e27533 rather than the standard Tailwind orange-500.

### Primary
- **Accent Orange** (#e27533): The sole brand color. Used on CTAs, the wordmark's "switch" portion, status highlights, and interactive hover states. Warmer than standard tech orange.
- **Accent Orange Hover** (#F28C38): Lighter variant for hover states on primary buttons.

### Neutral
- **Obsidian** (#111111): Primary dark color. Used for headlines, body text, the pricing card, testimonials section, and footer background. Not pure black; has a warm undertone.
- **Obsidian Light** (#1A1A1A): Slightly lighter variant for secondary dark elements.
- **Canvas** (#FAFAFA): Base page background. Warm off-white.
- **Surface** (#FFFFFF): Card backgrounds, elevated surfaces. Pure white against the canvas creates subtle depth.
- **Border** (#E5E5E5): Card borders, dividers, structural lines. Consistent across the entire system.
- **Gray 600** (#4B5563): Body text, descriptions, secondary content.
- **Gray 500** (#6B7280): Tertiary text, de-emphasized labels.
- **Gray 400** (#9CA3AF): Placeholder text, timestamps, metadata.

### Tertiary (System Status)
- **System Green** (#22c55e): Success states, operational indicators, PCI compliance checkmarks.
- **System Emerald** (#10B981): Success node in hero SVG diagram.
- **System Amber** (#f59e0b): Warning states, in-progress indicators.

### Named Rules
**The Accent Discipline Rule.** Orange appears on CTAs, the wordmark, and animated status highlights. It never fills a section background. The testimonials and pricing sections use obsidian, not orange.

**The Two-Tone Rule.** The page alternates between canvas/white sections and obsidian sections. This contrast creates visual rhythm without introducing additional colors.

## 3. Typography

**Primary Font:** Figtree (with system sans-serif fallback)
**Brand Font:** Outfit (wordmark only)
**Mono Font:** JetBrains Mono (technical labels, status codes)

**Character:** Figtree is geometric, warm, and highly legible at every size. Strong weight contrast (300-900 range) carries the hierarchy from 6rem extrabold display to 9px medium labels without strain. Outfit appears exclusively in the "betterswitch" wordmark, giving the brand name a distinct identity without introducing a second reading font. JetBrains Mono marks technical content.

### Hierarchy
- **Display** (800, clamp(3rem, 8vw, 6rem), 0.95): Hero headline. Figtree extrabold. Extremely tight tracking (-0.04em).
- **Headline** (600, clamp(1.875rem, 4vw, 2.25rem), 1.1): Section headers ("Better Services," "Our Process," "Better Pricing"). Tight tracking (-0.02em).
- **Title** (600, 1.25rem, 1.3): Card titles, feature names. Figtree.
- **Body** (500, 0.875rem, 1.625): Descriptions and paragraph text. Figtree at font-medium weight (500), not regular (400). This is a deliberate choice for the medium weight.
- **Label** (600, 11px, 1.5, uppercase, tracking 0.05em): Status badges ("PSaaS"), step labels ("Step 01"), section markers ("TRUSTED BY"). Semibold uppercase with tracking.
- **Mono** (400, 10px, 1.5, uppercase, tracking 0.05em): Technical identifiers ("Any Processor"), step numbers. JetBrains Mono.
- **Brand** (500, 1.875rem, 1): Wordmark only. Outfit. "better" in obsidian, "switch" in accent orange.

### Named Rules
**The Single-Voice Rule.** Figtree handles everything except the wordmark (Outfit) and technical labels (JetBrains Mono). No other fonts. If you're reaching for Inter, Plus Jakarta Sans, or Geist, stop. They are not in this system.

## 4. Elevation

The system uses **minimal shadows and thin borders** for surface separation. The primary depth cue is color contrast: white surfaces on a #FAFAFA canvas, and obsidian sections that create dramatic tonal shifts.

Shadows are whisper-quiet. The custom `shadow-surface` (`0 1px 3px rgba(0,0,0,0.04)`) is barely perceptible, reinforcing flat design. The only prominent shadow is on the pricing card (`shadow-2xl`) and CTA hover states.

### Shadow Vocabulary
- **Surface** (`0 1px 3px rgba(0,0,0,0.04)`): Default card shadow. Barely visible. Creates a paper-like lift.
- **Button Hover** (`0 12px 32px -8px rgba(226,117,51,0.4)`): Orange-tinted glow on primary CTA hover. The strongest shadow in the system.
- **Pricing Emphasis** (`shadow-2xl`): The single pricing card uses a heavy shadow to create a focal point.

### Named Rules
**The Paper Rule.** Cards look like paper sitting on a desk: thin border, near-zero shadow, white surface. If a card looks "elevated" or "floating," the shadow is too strong.

## 5. Components

### Buttons
- **Shape:** Small radius (rounded / rounded-md, ~8px). Not pill-shaped. Square-ish and compact.
- **Primary (CTA):** Accent orange fill (#e27533), white text, 14px vertical padding, 32px horizontal. Includes a shimmer animation layer on hover. Ring-1 ring-white/10. Transitions: scale 1.03 on hover, 0.98 on active.
- **Inverted:** White fill, obsidian text. Used inside dark sections (pricing). Hover adds a white glow shadow.
- **Contact (Nav):** Accent orange fill, rounded-full, compact padding (8px 16px). The only pill-shaped button.
- **Focus:** ring-2 ring-accent/20 ring-offset-2.

### Cards / Containers
- **Corner Style:** Rounded-xl (16px radius) for all cards.
- **Background:** White (#FFFFFF). Always.
- **Border:** 1px solid #E5E5E5 (border-gray-200). Consistent across every card.
- **Shadow:** shadow-surface (0 1px 3px rgba(0,0,0,0.04)). Barely there.
- **Hover:** Some cards transition border to obsidian/30 on hover (500ms duration).
- **Internal Padding:** 24px (p-6).
- **Icon Container:** 36px square (w-9 h-9), bg-canvas, border border-gray-200, rounded (4px), shadow-sm. Contains a Lucide icon at 18px.

### Navigation
- **Position:** Static, not fixed. Full-width with max-w-7xl centered.
- **Background:** Transparent.
- **Links:** Figtree, 15px, font-medium, obsidian color, hover opacity 0.7.
- **CTA:** Rounded-full pill button in accent orange, right-aligned.
- **Dropdown:** White bg, border-gray-200, rounded-lg, shadow-lg, absolute positioned.

### Testimonials Section
- **Background:** Full-width obsidian (#111111) with dot-grid pattern overlay (radial-gradient, 32px grid, white dots at 10% opacity).
- **Layout:** Two-column: quote + author on left, animated stats on right separated by a white/10 border.
- **Controls:** Circular prev/next buttons (40px, border-white/10, rounded-full) with progress dots.
- **Typography:** 4xl semibold for quotes, white text.

### Lifecycle Timeline (Signature Component)
A scroll-driven vertical timeline at 400vh height. A sticky viewport contains the timeline. A vertical line (obsidian) fills as the user scrolls. Five steps alternate left/right with dot nodes that fill when active. Active step scales to 1.25x; passed steps fade to 0.5 opacity. Each step has a small white card with icon and status text.

## 6. Do's and Don'ts

### Do:
- **Do** use Figtree for all text except the wordmark (Outfit) and technical labels (JetBrains Mono).
- **Do** use the accent orange (#e27533) only on CTAs, the wordmark, and status highlights. Keep it under 10% of surface area.
- **Do** use white cards with thin gray borders (1px, #E5E5E5) and near-zero shadows (shadow-surface) for content containers.
- **Do** alternate between canvas/white sections and obsidian sections for visual rhythm.
- **Do** use SVG-based animated diagrams to explain product concepts (payment routing, deployment flow).
- **Do** use the icon container pattern (36px square, bg-canvas, border, rounded, shadow-sm) consistently for all feature icons.

### Don't:
- **Don't** use dark mode as the default. The site is light-first. Obsidian appears only in specific contrast sections (testimonials, pricing, footer). (From PRODUCT.md: avoid "Generic crypto/web3 aesthetic")
- **Don't** use navy blue, stock photography, or conservative corporate banking patterns. (From PRODUCT.md: "Corporate banking blue")
- **Don't** use cartoon illustrations, pastel gradients, or playful consumer fintech aesthetics. (From PRODUCT.md: "Overly playful fintech")
- **Don't** use blurred product screenshots with gradient overlays as hero images. The hero uses an animated SVG diagram. (From PRODUCT.md: "Dashboard-screenshot marketing")
- **Don't** use beige/cream warmth or soft gradients. The canvas is a cool #FAFAFA, not warm. (From PRODUCT.md: "Template SaaS cream")
- **Don't** use gradient text (background-clip: text with gradient). All text is solid color.
- **Don't** use pill-shaped buttons except for the nav contact button. Main CTAs use rounded-md (8px).
- **Don't** use heavy shadows or elevation. The system is intentionally flat. If it looks like Material Design, it's wrong.
- **Don't** introduce additional fonts. Figtree, Outfit, and JetBrains Mono are the complete set.
- **Don't** use em dashes in copy. Use commas, colons, semicolons, or periods.
