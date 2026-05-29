# 🎨 PHASE 2 BRIEF — Design Tokens & High-Fidelity Prototypes

**Phase:** 2 of 6  
**Duration:** Days 1-3  
**Agent Required:** design-squad:design-system-architect  
**Status:** Ready for Execution  
**Date Created:** 2026-05-29

---

## 📋 Objective

Transform DESIGN_SYSTEM_INTEGRATED.md into production-ready design tokens and high-fidelity Figma prototypes that serve as the source of truth for Phase 3 (UI Engineering).

---

## 📥 INPUTS (Required Resources)

### Source Documents (in repository root)
1. **DESIGN_SYSTEM_INTEGRATED.md** — Component specs (Hero, Cards, Nav, Buttons, Forms)
2. **DESIGN_ARCHITECTURE.md** — Brand guidelines (colors, typography, spacing rules)
3. **COMPONENTS_SPECIFICATION.md** — Detailed YAML specs for 9 components
4. **REFERENCE_ANALYSIS.md** — Inspiration patterns (LUMEN + Lunchlab.fr)

### Brand Assets
- **FVS - Identidade Visual.pdf** — Official color hex codes, typography, logo rules
- Colors: Verde Serra #2B3A2C, Pedra #C2AE8F, Cobre #8C6A3F, Off-White #F4F0E8
- Typography: Cormorant Garamond (Light 300, Regular 400, Italic 400) + Outfit (ExtraLight 200 to Medium 500)

---

## 🎯 DELIVERABLES (Output Specification)

### 1. Design Tokens File (`design-tokens.css` OR `design-tokens.json`)

**Format:** Either CSS custom properties OR JSON (for Tailwind config)

**Token Categories & Naming Convention:**

#### Colors
```css
/* Primary Brand Colors */
--color-verde-serra: #2B3A2C;     /* Primary brand green */
--color-pedra: #C2AE8F;            /* Warm stone beige */
--color-cobre: #8C6A3F;            /* Copper/bronze accent */
--color-off-white: #F4F0E8;        /* Primary foreground */

/* Semantic Colors */
--color-nevoa: rgba(232, 221, 201, 0.18);  /* Subtle border */
--color-erro: #DC2626;             /* Error state */
--color-sucesso: #16A34A;          /* Success state */
--color-aviso: #EA8C55;            /* Warning state */

/* Background Variants */
--color-bg-dark: #1a2420;          /* Hero/footer gradient variant */
```

#### Typography
```css
/* Font Families */
--font-serif: 'Cormorant Garamond', Georgia, serif;
--font-sans: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;

/* H1: Hero Heading */
--h1-font-size: 80px;
--h1-font-weight: 300;             /* Light */
--h1-line-height: 1.2;
--h1-letter-spacing: 2px;

/* H2: Section Heading */
--h2-font-size: 48px;
--h2-font-weight: 300;
--h2-line-height: 1.3;

/* H3: Card Title */
--h3-font-size: 24px;
--h3-font-weight: 400;             /* Regular */
--h3-line-height: 1.4;

/* Body: Description Text */
--body-font-size: 16px;
--body-font-weight: 300;
--body-line-height: 1.75;

/* Label: UI Labels & CTAs */
--label-font-size: 13px;
--label-font-weight: 500;          /* Medium */
--label-letter-spacing: 0.5px;
--label-text-transform: uppercase;
```

#### Spacing (8px Grid)
```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 40px;
--spacing-xl: 64px;
--spacing-2xl: 80px;
```

#### Transitions (Timing Scale)
```css
--transition-fast: 150ms;          /* Hover states, micro-interactions */
--transition-base: 300ms;          /* Button clicks, fade-ins */
--transition-slow: 600ms;          /* Page transitions, scroll reveals */
--transition-cine: 1000ms;         /* Hero entrance, Before-After sliders */

--easing-out: cubic-bezier(0.22, 1, 0.36, 1);
--easing-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

#### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 24px rgba(43, 58, 44, 0.08);  /* Verde Serra at 8% */
--shadow-xl: 0 20px 40px rgba(43, 58, 44, 0.12);
```

#### Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-full: 9999px;
```

#### Z-Index Scale
```css
--z-base: 1;
--z-dropdown: 10;
--z-sticky: 20;
--z-fixed: 30;
--z-modal: 50;
```

---

### 2. Figma Design System File

**Location:** Create in shared Figma workspace or export as `.fig` to repository

**Components (from COMPONENTS_SPECIFICATION.md):**

1. **Hero Section** 
   - Variant: Desktop (1440px), Tablet (768px), Mobile (375px)
   - Interactive: Scroll indicator animation, CTA hover states
   - Include: Background paralax placeholder, text layers, gradient overlay

2. **Property Cards**
   - Variants: Default, Hover, Active
   - States: Empty (loading skeleton), Loaded, Error
   - Include: Image with srcset overlay, card title, description, CTA button
   - Before-After Slider sub-component

3. **Navigation Bar**
   - Variants: Desktop (full menu), Tablet (drawer closed), Tablet (drawer open), Mobile (drawer open)
   - Include: Logo with cobre separator, menu items, mobile hamburger button

4. **Buttons** (3 variants)
   - **Primary:** Pedra background, Preto text, Verde Serra hover
   - **Secondary:** Verde Serra border, transparent bg, Verde Serra text
   - **Tertiary:** Cobre link color, no background, Cobre hover
   - States: Default, Hover, Active, Disabled
   - Include: 44px minimum height spec, padding, border radius

5. **Form Inputs**
   - Input, Textarea, Select
   - States: Default, Focus (Verde Serra border), Error (Cobre border), Disabled
   - Include: Label, placeholder, validation message
   - 44px minimum height spec

---

### 3. Token Documentation (`DESIGN_TOKENS_DOCUMENTATION.md`)

**Contents:**
- Token naming convention explanation
- Usage rules for each category
- DO/DON'T examples
- How to import tokens in Next.js/Tailwind setup
- Design decision rationale (why these values)

**Example Section:**
```markdown
## Color Tokens

### Verde Serra (#2B3A2C)
- **Usage:** Primary background (Hero, Footer), focus states, hover overlays
- **Opacity Scale:** 100%, 80%, 60%, 40%, 20%, 8% (for shadows)
- **DO:** Use for CTA backgrounds, navigation, primary interactions
- **DON'T:** Use as text color (not enough contrast with Off-White)
```

---

## ✅ Quality Checklist

Before delivering Phase 2 outputs, verify:

- [ ] All colors extracted from DESIGN_ARCHITECTURE.md exactly (no approximations)
- [ ] Typography scales match DESIGN_SYSTEM_INTEGRATED.md specs (sizes, weights, line-heights)
- [ ] Spacing uses 8px grid consistently
- [ ] Transitions use only 150ms, 300ms, 600ms, 1000ms (no custom values)
- [ ] 5 components in Figma with variants for desktop/tablet/mobile
- [ ] Token naming follows convention (--category-name-variant)
- [ ] Documentation explains WHY each token exists
- [ ] Figma file is exportable/shareable (ready for Phase 3)
- [ ] Design tokens can be imported into Next.js/Tailwind config
- [ ] All brand constraints from CLAUDE.md checklist are met

---

## 📤 Deliverable Structure (to commit to GitHub)

```
fvs-novo-site/
├── design-tokens.css          (or design-tokens.json)
├── design-tokens-documentation.md
├── figma/
│   └── FVS-NOVO-SITE-DESIGN-SYSTEM.fig  (or link to shared workspace)
└── PHASE_2_BRIEF.md           (this file)
```

---

## 🚀 Phase 3 Handoff

Once Phase 2 is complete:

1. **design-squad:ui-engineer** will receive:
   - design-tokens.css/json (to configure Tailwind)
   - Figma file (for pixel-perfect component building)
   - COMPONENTS_SPECIFICATION.md (for implementation details)

2. **Phase 3 Setup Commands** (to be documented in updated CLAUDE.md):
   ```bash
   npm init -y
   npm install next react react-dom tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   # Import design-tokens into tailwind.config.js
   mkdir -p src/components src/pages src/styles
   ```

---

## 📝 Notes for design-squad:design-system-architect

- **Context:** This is a luxury real estate website for Gramado, Serra Gaúcha, Brazil
- **Brand Constraint:** Do NOT deviate from FVS brand colors (Verde Serra, Pedra, Cobre are fixed)
- **Inspiration:** Reference LUMEN (La Chambre Noire) for elegant transitions; Lunchlab.fr for grid/responsive patterns
- **Audience:** Affluent investors/residents in Gramado; tone is sophisticated but territorial (not generic luxury)
- **Deliverable Priority:** Design tokens (high) > Figma prototypes (medium) > Documentation (high)

---

**Next Phase:** Phase 3 — UI Components & Build Setup (awaits Phase 2 completion)  
**Document Version:** 1.0  
**Confidential — FVS Incorporações**
