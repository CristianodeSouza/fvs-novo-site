# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 📋 Project Overview

**FVS Novo Site** — Sophisticated real estate website for FVS Incorporações (Gramado, Serra Gaúcha, RS).

**Brand Essence:** "A FVS não vende imóveis. A FVS constrói percepção de valor sobre viver, investir e permanecer em Gramado."

**Current Phase:** Phase 2 ✅ Complete — Design Tokens & High-Fidelity Prototypes  
**Next Phase:** Phase 3 — UI Components & Build Setup

---

## 🎯 Critical Constraints

### Brand Identity (Non-Negotiable)
- **Colors:** Verde Serra #2B3A2C, Pedra #C2AE8F, Cobre #8C6A3F, Off-White #F4F0E8
  - Extracted from "FVS - Identidade Visual.pdf" (source of truth)
  - NO substitutions (reject ui-ux-pro-max suggestions for Teal, etc.)
- **Typography:** Cormorant Garamond (H1-H3, serif) + Outfit (UI/labels, sans)
  - No deviations from these fonts
- **Voice:** 6 tone dimensions (sofisticado, próximo, seguro, territorial, claro, maduro)
  - Approved expressions only (conforto, permanência, confiança, território, valor patrimonial)
  - Forbidden words: luxo, premium, exclusivo, elite, inovação, vanguarda
- **Validation:** Every component must pass DESIGN_SYSTEM_INTEGRATED.md checklist before build

---

## 📚 Documentation (Source of Truth)

### Phase 1 Documents (✅ Complete)

1. **DESIGN_ARCHITECTURE.md** — Brand guideline extraction
   - All exact colors, typography, logo rules
   - Compliance checklist (visual + communication + UX/UI)
   - Use this to validate component colors, fonts, spacing

2. **DESIGN_SYSTEM_INTEGRATED.md** — Integration layer
   - FVS colors + ui-ux-pro-max recommendations + PRD requirements
   - 5 component specifications (Hero, Cards, Nav, Buttons, Forms)
   - Responsive breakpoints (375px, 768px, 1024px, 1440px)
   - WCAG AA accessibility standards

3. **COMPONENTS_SPECIFICATION.md** — Detailed build specs
   - Sections 01-09 with YAML/pseudo-code for each component
   - Before-After transformation pattern (inspired by LUMEN)
   - Animations, transitions, mobile-first rules
   - Pre-delivery checklist (design tokens, accessibility, performance)

4. **REFERENCE_ANALYSIS.md** — Component inspiration sources
   - LUMEN (La Chambre Noire): linear navigation, progressive revelation, Cormorant serif
   - Lunchlab.fr: grid symmetry, mobile-first, image optimization
   - Adapted patterns per component

5. **PRD_MAPPING.md** — Functional requirements
   - 5 pages (Homepage, Projects, Property Detail, Contact, About)
   - 3 user flows (exploration, active search, sharing)
   - Forms, validations, integrations, SEO, security
   - Checkboxes [A VALIDAR] against NOVO_SITE_FVS_PRD_COMPLETO.docx

6. **IMPLEMENTATION_ROADMAP.md** — Execution blueprint
   - Phases 2-6 timeline, design-squad agent commands
   - Phase 2: Design tokens + prototypes (design-squad:design-system-architect)
   - Phase 3: UI components + Next.js setup (design-squad:ui-engineer)
   - Phase 4: Content & copywriting (brand voice compliance)
   - Phase 5: Testing & QA (accessibility, performance, security)
   - Phase 6: Staging & launch

### Brand Documents (Source of Truth — Read-Only)

- **FVS - Identidade Visual.pdf** — Official brand guidelines
  - Colors (exact hex), typography, logo variations, separator lines
  - Tone of voice (6 dimensions), approved/forbidden expressions
- **NOVO_SITE_FVS_PRD_COMPLETO.docx** — Functional specifications
  - Use to validate PRD_MAPPING.md assumptions

---

## ✅ Phase 2 Deliverables (Complete)

### Generated Files

1. **design-tokens.css** — 114 production-ready CSS custom properties
   - Colors: 14 tokens (brand palette + semantic colors)
   - Typography: 18 tokens (font families, sizes, weights, line-heights)
   - Spacing: 10 tokens (8px grid scale: xs to 2xl)
   - Transitions: 8 tokens (timing scale: 150ms to 1000ms + easing functions)
   - Shadows: 6 tokens (Verde Serra coloring, no pure black)
   - Border Radius: 7 tokens (4px to 9999px)
   - Z-Index: 5 tokens (1 to 50 hierarchy)
   - Component-specific: 26 tokens (button states, card, inputs, nav)
   - Accessibility: 4 tokens + media queries (prefers-contrast, prefers-reduced-motion)

2. **DESIGN_TOKENS_DOCUMENTATION.md** — Complete usage guide
   - Token naming conventions explained
   - DO/DON'T examples per category
   - WCAG AA contrast validation
   - Tailwind configuration patterns
   - Token justification (why each exists)

3. **FIGMA_ARCHITECTURE.md** — Design system specifications
   - 5 core components (Hero, Cards, Nav, Buttons, Forms)
   - 3 responsive variants each (desktop/tablet/mobile)
   - All interaction states (default/hover/active/disabled/focus/error)
   - Layer structure and naming conventions
   - 4 additional components (Footer, Gallery, Before-After Slider, Map)

4. **PHASE_2_BRIEF.md** — Phase 2 execution specification
   - Complete token definitions with exact hex values
   - Component architecture requirements
   - Quality checklist (114 tokens validated against DESIGN_ARCHITECTURE.md)

## ⏳ Getting Started for Phase 3

**When Phase 3 begins:**

1. **Project Setup**
   ```bash
   npm init -y
   npm install next react react-dom tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   mkdir -p src/components src/pages src/styles
   ```

2. **Tailwind Configuration (tailwind.config.js)**
   - Import design tokens from `design-tokens.css`
   - Configure theme colors, fonts, spacing using CSS variables
   - Define responsive breakpoints (375px, 768px, 1024px, 1440px)
   - Example:
   ```js
   module.exports = {
     theme: {
       colors: {
         'verde-serra': 'var(--color-verde-serra)',
         'pedra': 'var(--color-pedra)',
         // ... import all 14 color tokens
       },
       fontFamily: {
         serif: 'var(--font-serif)',
         sans: 'var(--font-sans)',
       },
       spacing: {
         xs: 'var(--spacing-xs)',
         sm: 'var(--spacing-sm)',
         // ... import all spacing tokens
       },
     }
   }
   ```

3. **Invoke design-squad:ui-engineer**
   - Input: design-tokens.css (for Tailwind config)
   - Input: FIGMA_ARCHITECTURE.md (for pixel-perfect specs)
   - Input: COMPONENTS_SPECIFICATION.md (for implementation details)
   - Output: Next.js components (9 total: Hero, Cards, Nav, Buttons, Forms, Footer, Gallery, Before-After, Map)

---

## 🔧 Workflow by Phase

### Phase 2: Design Tokens & High-Fidelity (Days 1-3)

**When to invoke:** After Phase 1 docs are finalized  
**Agent:** `design-squad:design-system-architect`

```bash
# Command (from IMPLEMENTATION_ROADMAP.md):
# design-squad:design-system-architect should:
# 1. Extract design tokens from DESIGN_SYSTEM_INTEGRATED.md
# 2. Create Figma design system with components + variants
# 3. Generate CSS variables file (colors, typography, spacing, transitions)
# 4. Document token naming convention (e.g., --color-verde-serra, --t-base)
# 5. Create high-fidelity prototypes for all 5 components
```

**Deliverables:**
- design-tokens.css (or design-tokens.json for Tailwind)
- Figma design system file
- Token documentation (naming, usage rules)

### Phase 3: UI Components & Build Setup (Days 4-8)

**When to invoke:** After Phase 2 deliverables are complete  
**Agent:** `design-squad:ui-engineer`

**Reference Files:**
- `design-tokens.css` — Token definitions
- `DESIGN_TOKENS_DOCUMENTATION.md` — Token usage patterns
- `FIGMA_ARCHITECTURE.md` — Component specifications (5 core + 4 additional)
- `COMPONENTS_SPECIFICATION.md` — Detailed implementation specs (YAML format)
- `DESIGN_SYSTEM_INTEGRATED.md` — Integration rules and responsive patterns

**Tech Stack:**
- Framework: Next.js 14+ (React 18+)
- Styling: Tailwind CSS with custom design tokens from `design-tokens.css`
- Icons: Heroicons or Lucide (no emoji icons)
- Image Optimization: Next.js Image + WebP + srcset (375w, 768w, 1024w, 1440w)

**Component Build Order (9 total):**
1. **Button** (04) — Primary, Secondary, Tertiary variants with all states
2. **Form Inputs** (05) — Input, Textarea, Select with validation states
3. **Navigation Bar** (03) — Sticky header with mobile drawer
4. **Hero Section** (01) — Parallax background, entrance animations, scroll indicator
5. **Property Cards** (02) — Grid layout, Before-After slider, hover states
6. **Footer** (06) — Multi-column responsive, newsletter signup
7. **Image Gallery** (07) — Lightbox, lazy loading, responsive srcset
8. **Before-After Slider** (08) — Interactive comparison, smooth drag/click
9. **Map Embed** (09) — Google Maps integration, marker, proximity info

**Validation Checklist Before Merge:**
- [ ] Tailwind config imports all 114 tokens from design-tokens.css
- [ ] All colors verified against DESIGN_ARCHITECTURE.md (Verde Serra, Pedra, Cobre, Off-White)
- [ ] Typography uses Cormorant Garamond (H1-H3, serif) + Outfit (UI/labels, sans)
- [ ] Responsive at all breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large)
- [ ] Touch targets 44x44px minimum (buttons, form inputs, interactive elements)
- [ ] All transitions use token scale (150ms, 300ms, 600ms, 1000ms — NO custom values)
- [ ] Images lazy loaded with `loading="lazy"` and proper srcset
- [ ] Before-After slider smooth 60fps (use transform/opacity, not width/height)
- [ ] axe-core accessibility audit clean (WCAG AA, 4.5:1 contrast minimum)
- [ ] Lighthouse score 90+ (performance, accessibility, SEO, best practices)
- [ ] No horizontal scroll at any viewport width
- [ ] All focus states visible for keyboard navigation
- [ ] Component states match FIGMA_ARCHITECTURE.md (default/hover/active/disabled/focus/error)

### Phase 4: Content & Copywriting (Days 9-10)

**When to invoke:** After components are built  
**Task:** Write all copy using ONLY approved expressions

**Checklist:**
- [ ] Every heading/description uses approved phrases
- [ ] No forbidden words (luxo, premium, exclusivo, etc.)
- [ ] Gramado/Serra Gaúcha mentioned contextually
- [ ] Tone matches 6 dimensions (sofisticado, próximo, etc.)
- [ ] Meta tags (og:image, og:title, description)
- [ ] SEO content (H1 unique per page, internal links)

### Phase 5: Testing & QA (Days 11-14)

**When to invoke:** After all content is in place

```bash
# Accessibility testing:
# npx axe-core [url]
# Check WCAG AA compliance (4.5:1 contrast minimum)

# Performance testing:
# npx lighthouse [url] --view

# Security testing:
# Run OWASP Top 10 audit
# Content Security Policy (CSP) headers
# HTTPS only, form validation server-side

# Browser testing:
# Chrome, Firefox, Safari, Edge (latest 2 versions)
# Mobile: iOS Safari, Chrome Android
```

### Phase 6: Staging & Launch (Days 15-16)

**Environment Setup:**
- Staging: vercel.com (preview deployments)
- Production: TBD (ask user for hosting preference)

**Pre-Launch Checklist:**
- [ ] All Phase 5 tests passing
- [ ] A/B test setup (if required)
- [ ] Analytics (Google Analytics 4) wired
- [ ] Email/CRM integration (per PRD_MAPPING.md)
- [ ] Sitemap.xml generated
- [ ] robots.txt configured
- [ ] SSL certificate active

---

## 🤖 Skills & Design Agents Referenced

This project uses specialized agents for design execution:

- **ui-ux-pro-max** — Design system recommendations (used in Phase 1 for color/typography guidance)
- **design-squad:design-system-architect** — Generates design tokens and Figma prototypes (Phase 2)
- **design-squad:ui-engineer** — Builds React/Next.js components from specs (Phase 3)

Note: These are referenced in IMPLEMENTATION_ROADMAP.md. Invoke them when their respective phases begin.

---

## 🎨 Component Build Checklist

When building ANY component, verify against these docs in order:

1. **DESIGN_ARCHITECTURE.md** — Brand color/font rules
   - Q: Are colors from the approved palette?
   - Q: Is typography Cormorant/Outfit only?
   - Q: Spacing in 8px grid?

2. **DESIGN_SYSTEM_INTEGRATED.md** — Integration specs
   - Q: Does hover state match the spec?
   - Q: Are transitions in 150-1000ms range?
   - Q: Are buttons (Primary/Secondary/Tertiary) correct?

3. **COMPONENTS_SPECIFICATION.md** — Detailed specs
   - Q: Does component match the YAML spec exactly?
   - Q: Mobile-first (375px) implemented?
   - Q: Pre-delivery checklist items covered?

4. **REFERENCE_ANALYSIS.md** — Inspiration patterns
   - Q: Does component follow LUMEN/Lunchlab patterns?
   - Q: Are Before-After sliders correct?
   - Q: Is grid symmetry (auto-fit) used?

5. **PRD_MAPPING.md** — Functional requirements
   - Q: Is this component in the functional spec?
   - Q: Are all form validations implemented?
   - Q: Are CTAs correct (Entrar, Ver Detalhes, Solicitar)?

---

## 🔍 Common Development Patterns

### Importing Design Tokens into Tailwind

**In tailwind.config.js:**
```js
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        'verde-serra': 'var(--color-verde-serra)',
        'pedra': 'var(--color-pedra)',
        'cobre': 'var(--color-cobre)',
        'off-white': 'var(--color-off-white)',
        'nevoa': 'var(--color-nevoa)',
        'erro': 'var(--color-erro)',
        'sucesso': 'var(--color-sucesso)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'base': 'var(--transition-base)',
        'slow': 'var(--transition-slow)',
        'cine': 'var(--transition-cine)',
      },
    }
  }
}
```

**In CSS/component files:**
```jsx
// Use Tailwind classes directly
<div className="bg-verde-serra text-off-white p-lg hover:shadow-lg transition-colors duration-base">
  {content}
</div>

// Or use CSS variables for complex selectors
<style>{`
  .custom-gradient {
    background: linear-gradient(135deg, var(--color-verde-serra), var(--color-bg-dark));
  }
`}</style>
```

### Color Usage
```css
/* DO use design tokens from design-tokens.css */
background-color: var(--color-verde-serra);  /* #2B3A2C */
color: var(--color-off-white);               /* #F4F0E8 */
border: 1px solid var(--color-nevoa);        /* rgba(232, 221, 201, 0.18) */

/* DON'T invent colors, use ui-ux-pro-max suggestions, or generic grays/blacks */
```

### Typography
```css
/* H1: Cormorant Garamond Light 80px */
h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: 80px;
  line-height: 1.2;
  letter-spacing: 2px;
}

/* Label: Outfit Medium 13px uppercase */
.label {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
}
```

### Responsive Breakpoints
```css
/* Mobile-first: start at 375px */
/* Tablet: 768px */
/* Desktop: 1024px */
/* Large: 1440px */

@media (min-width: 768px) {
  /* tablet styles */
}

@media (min-width: 1024px) {
  /* desktop styles */
}
```

### Transitions
```css
/* Use predefined duration scale */
--t-fast: 150ms;    /* hover states */
--t-base: 300ms;    /* button clicks */
--t-slow: 600ms;    /* page transitions */
--t-cine: 1000ms;   /* hero entrance, sliders */

transition: color var(--t-base) cubic-bezier(0.22, 1, 0.36, 1);
```

### Image Optimization
```jsx
// Use Next.js Image with srcset
<Image
  src={heroImage}
  alt="Propriedade FVS em Gramado"
  width={1440}
  height={900}
  srcSet="375w, 768w, 1024w, 1440w"
  loading="lazy"
  quality={85}
/>
```

---

## ⚠️ Red Flags — Stop Before Committing

- [ ] Any color NOT in DESIGN_ARCHITECTURE.md palette
- [ ] Typography NOT Cormorant Garamond or Outfit
- [ ] Component doesn't match COMPONENTS_SPECIFICATION.md YAML
- [ ] Responsive breakpoints not 375/768/1024/1440
- [ ] Touch targets < 44px
- [ ] Transitions > 1000ms or < 150ms
- [ ] Copy uses forbidden words (luxo, premium, exclusivo, elite, inovação, vanguarda)
- [ ] Images not lazy loaded or optimized
- [ ] Accessibility issues (missing alt text, low contrast, no focus states)
- [ ] No breadcrumb or navigation on detail pages

---

## 📞 Reference by Task

When you need to:
- **Clarify brand guidelines** → Read FVS - Identidade Visual.pdf (colors, typography, logo, tone)
- **Check functional requirements** → Read PRD_MAPPING.md or NOVO_SITE_FVS_PRD_COMPLETO.docx (pages, flows, integrations)
- **Understand component specifications** → Read COMPONENTS_SPECIFICATION.md (YAML specs 01-09)
- **See design token definitions** → Read design-tokens.css (single source of truth)
- **Learn token usage patterns** → Read DESIGN_TOKENS_DOCUMENTATION.md (DO/DON'T examples, contrasts)
- **View Figma architecture** → Read FIGMA_ARCHITECTURE.md (component variants, states, responsive)
- **Understand reference patterns** → Read REFERENCE_ANALYSIS.md (LUMEN + Lunchlab adaptations)
- **Build React components** → Follow Phase 3 workflow with design-squad:ui-engineer

---

## 🎯 Success Criteria

By Phase 6 completion, the site will have:
- ✅ 100% FVS brand identity compliance (colors, typography, voice)
- ✅ WCAG AA accessibility (4.5:1 contrast, keyboard nav, alt text)
- ✅ Lighthouse 90+ (performance, accessibility, SEO, best practices)
- ✅ Responsive at all breakpoints (375px-1440px)
- ✅ All functional requirements from PRD implemented
- ✅ Analytics and CRM integrations wired
- ✅ Security audit clean (CSP, HTTPS, form validation, XSS prevention)

---

**Document Version:** 1.1  
**Last Updated:** 2026-05-29 (Phase 2 Complete)  
**Previous Version:** 1.0 (Phase 1 Complete, May 29)  
**Confidential — FVS Incorporações**

---

### Version History
- **1.1** — Updated for Phase 2 completion. Added Phase 2 deliverables section, updated Phase 3 instructions with design token import patterns, improved component build checklist.
- **1.0** — Initial document for Phase 1 completion.
