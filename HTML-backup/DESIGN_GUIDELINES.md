---
name: Luminous Elegance
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c444f'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7480'
  outline-variant: '#cfc3d0'
  surface-tint: '#7b4998'
  primary: '#6a3987'
  on-primary: '#ffffff'
  primary-container: '#8452a1'
  on-primary-container: '#f7deff'
  inverse-primary: '#e6b4ff'
  secondary: '#6f5c39'
  on-secondary: '#ffffff'
  secondary-container: '#fadfb3'
  on-secondary-container: '#75623f'
  tertiary: '#4e5300'
  on-tertiary: '#ffffff'
  tertiary-container: '#666c00'
  on-tertiary-container: '#e6ee7d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f5d9ff'
  primary-fixed-dim: '#e6b4ff'
  on-primary-fixed: '#30004a'
  on-primary-fixed-variant: '#61317e'
  secondary-fixed: '#fadfb3'
  secondary-fixed-dim: '#dcc399'
  on-secondary-fixed: '#261901'
  on-secondary-fixed-variant: '#554424'
  tertiary-fixed: '#e2ea79'
  tertiary-fixed-dim: '#c6cd61'
  on-tertiary-fixed: '#1b1d00'
  on-tertiary-fixed-variant: '#464a00'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  deep-onyx: '#000000'
  soft-lilac: '#F8F4FA'
  warm-ivory: '#FFFDF9'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 84px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Bodoni Moda
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  accent-text:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1200px
  gutter: 24px
  section-padding-lg: 120px
  section-padding-sm: 64px
---

## Brand & Style

The brand identity for this design system is built upon the pillars of **sophistication, serenity, and editorial grace**. It is designed to resonate with couples seeking a high-end, professional marriage celebrant who balances tradition with modern luminosity. The visual language evokes the feeling of a bespoke luxury wedding invitation—intentional, calm, and deeply personal.

The chosen style is **Minimalist-Editorial**. It prioritizes high-quality photography and intentional negative space to allow the "Purple Passion" and "Yellow Aura" tones to breathe. The interface should feel more like a digital lookbook than a functional tool, utilizing smooth transitions and a rhythmic use of whitespace to guide the user through the narrative of their ceremony.

## Colors

The palette is centered on **Purple Passion (#8452A1)**, used primarily for headlines and key interactive elements to convey authority and romantic depth. **Yellow Aura (#FFE4B8)** acts as a luminous accent, used in backgrounds, decorative dividers, and secondary buttons to provide warmth and a "golden hour" glow.

The background is predominantly **White (#FFFFFF)** to maintain the minimalist aesthetic, while **Warm Ivory** and **Soft Lilac** are used as subtle surface tones to distinguish sections without the need for harsh borders. **Black (#000000)** is reserved strictly for body text and high-contrast labels to ensure absolute legibility and a premium editorial feel.

## Typography

This design system uses a sophisticated typographic hierarchy that balances the high-contrast drama of a classic serif with the clean efficiency of a modern sans-serif.

- **Headlines:** **Bodoni Moda** provides a timeless, high-fashion aesthetic. It should be used for all major section headers and hero titles.
- **Body Copy:** **Hanken Grotesk** is chosen for its neutral, contemporary profile. It remains legible even at smaller sizes, ensuring the focus stays on the content.
- **Accents:** **Playfair Display (Italic)** serves as the "decorative flourish" font. Use this for pull-quotes, testimonials, and small descriptive labels to mimic the elegance of hand-written calligraphy.
- **Navigation/Small Labels:** Use **Hanken Grotesk** in uppercase with generous letter spacing to create a sense of order and premium "luxury brand" labeling.

## Layout & Spacing

The layout philosophy follows a **fixed-width centered grid** for desktop and a fluid-margin model for mobile. To achieve the "luminous" feel, the system utilizes **generous vertical padding** (section-padding-lg) to separate content blocks, preventing the UI from feeling cluttered.

- **Desktop:** A 12-column grid with a 1200px max-width. Content should often be centered in a 6 or 8 column span to maximize whitespace on the flanks.
- **Mobile:** A single-column layout with 24px side margins. 
- **Spacing Rhythm:** All spacing is based on an 8px base unit. Component-level spacing should be tight (8px/16px), while layout-level spacing should be expansive (64px/120px).

## Elevation & Depth

To maintain a "flat-luxe" aesthetic, this design system avoids heavy shadows. Depth is conveyed through **Tonal Layering** and **High-Contrast Overlays**.

- **Surfaces:** Use the `warm-ivory` or `soft-lilac` named colors to create subtle depth behind content cards.
- **Shadows:** When necessary (e.g., for navigation bars or floating action buttons), use a singular "Ambient Mist" shadow: `0px 4px 20px rgba(132, 82, 161, 0.05)`. The tint of the shadow should match the primary purple color at a very low opacity.
- **Transitions:** Elements should fade or slide into place with a "slow-out" easing (0.6s) to reinforce the calm, sophisticated nature of the brand.

## Shapes

The shape language is **Soft and Structural**. 

- **Containers:** Use a subtle 0.25rem (Soft) radius for buttons and cards. This prevents the UI from feeling too sharp or aggressive, while maintaining a more professional and architectural look than fully rounded or pill-shaped designs.
- **Media:** Photography should alternate between sharp corners for full-bleed images and soft corners for inset portraits to create a dynamic, editorial rhythm.
- **Dividers:** Use thin (1px) horizontal lines in `secondary_color` to separate content, rather than using boxes or heavy borders.

## Components

### Buttons
- **Primary:** Solid `Purple Passion` with white text. No border. Soft-radius corners.
- **Secondary:** Outlined `Purple Passion` with 1px border or solid `Yellow Aura` with black text for a softer call-to-action.
- **Text Buttons:** `Label-caps` styling with a 1px underline that expands on hover.

### Cards
- **Editorial Cards:** No borders or shadows. Use a `warm-ivory` background and generous internal padding (32px).
- **Image Cards:** Images should feature a subtle zoom effect on hover, with text overlays using `accent-text` (Playfair Display Italic).

### Input Fields
- **Style:** Minimalist "Bottom-Border Only" inputs. The border color should be a light grey, turning `Purple Passion` on focus. Labels should use the `label-caps` style.

### Navigation
- **Header:** Sticky, transparent background that transitions to `White` with a 5% opacity `Purple Passion` bottom-border upon scroll.
- **Links:** Hanken Grotesk, uppercase, with wide tracking (0.1em).

### Decorative Elements
- **Signatures:** Use the `accent-text` style for Liliana Paton’s name or sign-offs to provide a personal, bespoke touch.
- **Icons:** Thin-stroke (1pt) linear icons in `Purple Passion`. Avoid filled or bulky iconography.