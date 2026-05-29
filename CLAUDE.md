# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 📋 Project Overview

**FVS Novo Site** — Sophisticated real estate website for FVS Incorporações (Gramado, Serra Gaúcha, RS).

**Brand Essence:** "A FVS não vende imóveis. A FVS constrói percepção de valor sobre viver, investir e permanecer em Gramado."

**Current Phase:** Phase 1 ✅ Complete — Design Architecture Documentation  
**Next Phase:** Phase 2 — Design Tokens & High-Fidelity Prototypes

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

## ⏳ Getting Started for Phase 2

**When Phase 2 begins:**

1. **Invoke design-squad:design-system-architect**
   - Input: Read DESIGN_SYSTEM_INTEGRATED.md sections (5 components)
   - Input: Reference DESIGN_ARCHITECTURE.md for color/typography specs
   - Output: design-tokens.css, design-tokens.json, Figma file

2. **After design tokens are approved:**
   - Repository structure becomes: `src/components/`, `src/pages/`, `tailwind.config.js`
   - This CLAUDE.md will be updated with build/lint/test commands
   - Check back after Phase 2 for updated instructions

**Note:** This section will be updated when Phase 2 deliverables arrive.

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

**When to invoke:** After design tokens are approved  
**Agent:** `design-squad:ui-engineer`

```bash
# Setup commands (not yet implemented):
# npm init -y
# npm install next react react-dom tailwindcss postcss autoprefixer
# npx tailwindcss init -p
# mkdir -p src/components src/pages src/styles

# Component build (reference COMPONENTS_SPECIFICATION.md):
# - Hero Section (01)
# - Property Cards (02)
# - Navigation (03)
# - Buttons (04)
# - Forms (05)
# - Footer (06)
# - Image Gallery (07)
# - Before-After Slider (08)
# - Map Embed (09)
```

**Tech Stack:**
- Framework: Next.js 14+ (React 18+)
- Styling: Tailwind CSS with custom design tokens
- Icons: Heroicons or Lucide (no emoji icons)
- Image Optimization: Next.js Image + WebP + srcset

**Validation Before Merge:**
- [ ] All colors from DESIGN_ARCHITECTURE.md checklist
- [ ] Typography matches Cormorant + Outfit specs
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Touch targets 44x44px minimum
- [ ] Transitions in 150-1000ms range (no custom values)
- [ ] axe-core accessibility audit clean
- [ ] Lighthouse score 90+ (performance, accessibility, SEO)
- [ ] No horizontal scroll on mobile
- [ ] Images lazy loaded with srcset

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

### Color Usage
```css
/* DO use design tokens from DESIGN_ARCHITECTURE */
background-color: var(--color-verde-serra);  /* #2B3A2C */
color: var(--color-off-white);               /* #F4F0E8 */
border: 1px solid var(--color-nevoa);        /* rgba(232, 221, 201, 0.18) */

/* DON'T invent colors, use ui-ux-pro-max suggestions, or generic grays */
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

## 📞 Contact & Escalation

If you need to:
- **Clarify brand guidelines** → Read FVS - Identidade Visual.pdf
- **Check functional requirements** → Read PRD_MAPPING.md or NOVO_SITE_FVS_PRD_COMPLETO.docx
- **Understand component specs** → Read COMPONENTS_SPECIFICATION.md
- **Get design tokens** → Wait for Phase 2 deliverables (design-squad:design-system-architect)
- **Build components** → Follow Phase 3 workflow (design-squad:ui-engineer)

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

**Document Version:** 1.0  
**Last Updated:** 2026-05-29  
**Confidential — FVS Incorporações**
