# 🎨 Figma Design System Architecture — FVS Novo Site

**Version:** 1.0  
**Date:** 2026-05-29  
**Status:** Ready for Figma Implementation  
**For Phase:** 3 (UI Engineering Handoff)

---

## 📋 Overview

This document describes the structure, components, and variants for the Figma design system file: **FVS-NOVO-SITE-DESIGN-SYSTEM.fig**

Since automated Figma creation via MCP is not available, this document serves as the **complete specification** for recreating the design system in Figma manually (or via Figma API/plugins).

---

## 🏗️ File Structure

```
FVS-NOVO-SITE-DESIGN-SYSTEM.fig
├── 📑 Pages
│   ├── Cover (Intro page, design system overview)
│   ├── Design Tokens (Visual reference for all tokens)
│   ├── 1. Hero Section
│   ├── 2. Property Cards
│   ├── 3. Navigation Bar
│   ├── 4. Buttons
│   ├── 5. Form Inputs
│   ├── 6. Footer
│   ├── 7. Secondary Components
│   └── 📋 Utilities (Spacing grid, color palette)
│
└── 📚 Library (Reusable Components)
    ├── Button / Primary
    ├── Button / Secondary
    ├── Button / Tertiary
    ├── Input / Text
    ├── Input / Textarea
    ├── Input / Select
    ├── Card / Property
    ├── NavBar / Desktop
    ├── NavBar / Mobile
    ├── Hero / Section
    ├── Footer / Full
    ├── Badge / Standard
    └── [More secondary components]
```

---

## 🎯 Component Hierarchy & Variants

### Page 1: Cover

**Purpose:** Design system introduction and navigation  
**Layout:** 1440px (desktop width)

```
┌────────────────────────────────────────────────┐
│  FVS NOVO SITE                                 │
│  Design System v1.0                            │
│                                                │
│  Brand Colors │ Typography │ Components        │
│  Spacing Grid │ Transitions │ Responsive      │
│                                                │
│  Jump to: [Hero] [Cards] [Nav] [Buttons]      │
│           [Forms] [Footer] [Secondary]        │
└────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Verde Serra #2B3A2C
- Heading: Cormorant Garamond Light 80px, Off-White #F4F0E8
- Subheading: Outfit Regular 16px, Pedra #C2AE8F
- Include: Navigation quick links to each page

---

### Page 2: Design Tokens

**Purpose:** Visual reference for all tokens (colors, typography, spacing, transitions)

**Sections:**

#### Color Palette
```
Grid Layout (2 columns):
├─ Verde Serra #2B3A2C (80x80px swatch + hex + RGB)
├─ Pedra #C2AE8F
├─ Cobre #8C6A3F
├─ Off-White #F4F0E8
├─ Pedra Clara #DDD0BB
├─ Névoa (border swatch)
├─ Preto Quente #1A1A18
├─ Erro #DC2626 (with contrast labels)
├─ Sucesso #16A34A
└─ Aviso #EA8C55

Include: Contrast ratios (e.g., "7.8:1 ✅ AAA") for each pairing
```

#### Typography Scale
```
H1 (80px): "Descobrir Gramado" — Cormorant Garamond Light
H2 (48px): "Seção Principal" — Cormorant Garamond Regular
H3 (28px): "Destaque Temático" — Cormorant Garamond Light Italic
Body (16px): "Texto descritivo com múltiplas linhas..." — Outfit Light
Body SM (14px): "Descrição secundária" — Outfit Light
Label (13px): "BOTÃO CTA" — Outfit Medium Uppercase
Label SM (11px): "METADATA" — Outfit ExtraLight Uppercase
```

**Include:**
- Font name, weight, size, line-height
- Color reference (Preto Quente for dark, Off-White for light)
- Example usage

#### Spacing Grid
```
Visual 8px grid:
xs (8px) │ sm (16px) │ md (24px) │ lg (40px) │ xl (64px) │ 2xl (80px)

Show actual pixel blocks in a row, labeled clearly
```

#### Transitions
```
Timing Scale:
150ms (fast) — hover states     [show icon/animation example]
300ms (base) — standard clicks   [show icon/animation example]
600ms (slow) — page transitions  [show icon/animation example]
1000ms (cine) — hero entrance   [show icon/animation example]

Include: Easing curves (cubic-bezier notation)
```

---

## 🎯 Page 3: Hero Section

**Variants:**
1. Desktop (1440px)
2. Tablet (768px)
3. Mobile (375px)

### Variant: Desktop (1440px)

```
┌──────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────┐  │
│ │                                                     │  │
│ │  [Background Image: Montanha Gramado, 40% opacity] │  │
│ │                                                     │  │
│ │              Descobrir Gramado                      │  │
│ │    (Cormorant Light 80px, Off-White, centered)     │  │
│ │                                                     │  │
│ │  Onde viver é investir em permanência patrimonial  │  │
│ │  (Outfit Light 16px, Pedra #C2AE8F, centered)      │  │
│ │                                                     │  │
│ │           [ENTRAR NA EXPERIÊNCIA]                  │  │
│ │           (Pedra bg, hover → Cobre)                │  │
│ │                                                     │  │
│ │                     ↓                               │  │
│ │              (Scroll indicator bounce)             │  │
│ │                                                     │  │
│ └─────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

**Specifications:**
- Container: 100vh height, Verde Serra #2B3A2C background
- Background image: Fixed parallax, opacity 40%, center cover
- Title: Cormorant Light 80px, Off-White, letter-spacing 2px
- Subtitle: Outfit Light 16px, Pedra #C2AE8F, max-width 600px
- CTA Button: Primary (see Button component spec)
- Scroll indicator: Chevron down, opacity 60%, animated bounce (keyframe)

**Animations:**
- Entrance: Fade-in 600ms ease-out
  - Heading: translate Y (0 from -20px)
  - Subtitle: opacity (1 from 0), delay 100ms
  - Button: opacity (1 from 0), delay 200ms
- Scroll indicator: bounce 2s infinite (±8px translateY)

---

### Variant: Tablet (768px)

Same layout, adjusted sizes:
- Title: 64px (clamp size)
- Subtitle: 15px
- Height: 100vh minimum
- Centered alignment preserved

---

### Variant: Mobile (375px)

Stack-friendly:
- Title: 48px (clamp size)
- Subtitle: 14px
- CTA Button: Full width with padding
- Scroll indicator: Visible but smaller

---

## 🎯 Page 4: Property Cards

**Variants:**
1. Default state (loaded)
2. Hover state
3. Loading state (skeleton)
4. Error state

### Component: Property Card

**Base Container:**
```
┌─────────────────────────┐
│ ┌─────────────────────┐ │
│ │                     │ │  Card: Off-White bg, Névoa border
│ │  [Property Image]   │ │  55% of card height (aspect 16:9)
│ │  ┌───────────────┐  │ │
│ │  │ DESTAQUE      │  │ │  Badge overlay (top-right)
│ │  └───────────────┘  │ │
│ │                     │ │
│ └─────────────────────┘ │
│                         │
│  Residência Alpina      │  Title: Cormorant Regular 28px
│  GRAMADO, RS            │  Location: Outfit ExtraLight 11px
│                         │
│  Projeto residencial... │  Description: Outfit Light 14px
│  com vista para serra   │  (3 lines max, -webkit-line-clamp)
│                         │
│  Ver Detalhes →         │  CTA Link: Outfit Medium 13px Cobre
│                         │  Underline Pedra on hover
└─────────────────────────┘

Aspect ratio: 4/5 (portrait)
Padding: 0 (image edge-to-edge), 24px (content)
```

**Specifications:**

| Property | Value |
|----------|-------|
| Background | Off-White #F4F0E8 |
| Border | 1px solid Névoa rgba(...) |
| Border Radius | 0px (sharp) |
| Padding (image) | 0 |
| Padding (content) | 24px |
| Aspect Ratio | 4:5 (portrait) |

---

### Variant: Default State

**Image:**
- object-fit: cover
- object-position: center
- loading: lazy
- srcset: 375w, 768w, 1024w, 1440w

**Badge Overlay:**
- Position: absolute top-right
- Background: Verde Serra #2B3A2C
- Text: Outfit ExtraLight 11px uppercase, Off-White
- Padding: 8px 14px
- Example: "DESTAQUE", "NOVO", "VENDIDO"

**Title:**
- Font: Cormorant Regular 28px
- Color: Preto Quente #1A1A18
- Line height: 1.3
- Max height: 60px (overflow hidden)

**Location Tag:**
- Font: Outfit ExtraLight 11px uppercase
- Color: Cobre #8C6A3F
- Letter spacing: 1px
- Example: "GRAMADO, RS"

**Description:**
- Font: Outfit Light 14px
- Color: Preto Quente #1A1A18
- Line height: 1.6
- Max height: 70px
- Webkit-line-clamp: 3 lines
- Text truncation with ellipsis

**CTA Link:**
- Font: Outfit Medium 13px
- Color: Cobre #8C6A3F
- Text decoration: underline Pedra #C2AE8F 2px
- Cursor: pointer

---

### Variant: Hover State

**Changes:**
- Card: box-shadow 0 8px 24px rgba(43, 58, 44, 0.12)
- Background: Slight whitening #FAFAF8
- Image: transform scale(1.05) [smooth zoom]
- CTA Link: color → Verde Serra #2B3A2C, underline → Cobre #8C6A3F

**Transition:** All changes in 200ms ease-out (except image which is 300ms)

---

### Variant: Loading State (Skeleton)

```
┌─────────────────────────┐
│ ┌─────────────────────┐ │
│ │ [Skeleton Shimmer]  │ │  Gray background shimmer animation
│ │ ████████████████   │ │
│ └─────────────────────┘ │
│                         │
│ ████████░░░             │  Skeleton text lines (gray with shimmer)
│ ████░░░░░░░             │  
│ ███░░░░░░░░             │
│                         │
└─────────────────────────┘
```

**Specifications:**
- Background: Pedra Clara #DDD0BB (placeholder)
- Animation: Shimmer effect (opacity 0.5 → 1 → 0.5, infinite)
- Text lines: Skeletons (gray rectangles) with standard sizing

---

### Variant: Error State

```
┌─────────────────────────┐
│ ┌─────────────────────┐ │
│ │ [⚠ Error Loading]   │ │
│ │ Image failed        │ │
│ └─────────────────────┘ │
│                         │
│ Residência Alpina       │
│ GRAMADO, RS             │
│                         │
│ Imagem indisponível     │  Message text (muted)
│ Tentar novamente        │  Retry link (Cobre)
└─────────────────────────┘
```

**Specifications:**
- Image area: Gray background #F0F0F0 with centered warning icon
- Error message: Outfit Light 14px, Cobre #8C6A3F
- Retry link: Outfit Medium 13px, Cobre (underline)

---

### Before-After Slider (Sub-component)

```
┌───────────────────────────────────────────┐
│                                           │
│  [Before Image]│[After Image]            │  Handle: 4px wide, Cobre color
│                ↕                          │  Cursor: ew-resize
│                                           │
│  Before: "Atual"                          │
│  After: "Transformado"                    │
│                                           │
└───────────────────────────────────────────┘
```

**Specifications:**
- Container: max-width 800px, aspect ratio 16:9
- Images: Both optimized (WebP + fallback)
- Handle: position absolute left-50%, 4px width, Cobre #8C6A3F, opacity 0.8
- Cursor: ew-resize (horizontal drag)
- Interaction: Mouse drag to slide, touch swipe on mobile

---

## 🎯 Page 5: Navigation Bar

**Variants:**
1. Desktop (1440px) — Full menu
2. Tablet closed (768px) — Hamburger, menu hidden
3. Tablet/Mobile open (375px) — Drawer open

### Variant: Desktop (1440px)

```
┌─────────────────────────────────────────────────────────────┐
│  FVS │ Sobre │ Projetos │ Contato │ Idioma   [FALAR AGORA] │
│  INCORPORAÇÕES                                              │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Container: sticky position, top 0, height 64px, z-index 20
- Background: Off-White #F4F0E8
- Border-bottom: 1px solid Névoa
- Padding: 16px 24px (vertical/horizontal)
- Display: flex, justify-content space-between, align-items center

**Logo Section:**
- Logo text: "FVS" Cormorant Regular 24px, Verde Serra
- Separator line: 2px width, 20px height, Cobre #8C6A3F
- Tagline: "INCORPORAÇÕES" Outfit ExtraLight 9px, Cobre, uppercase, letter-spacing 2px
- Gap between elements: 8px

**Menu Items:**
- Font: Outfit Regular 13px
- Color: Preto Quente #1A1A18
- Gap between items: 32px
- Hover: color → Cobre #8C6A3F, border-bottom 2px Pedra #C2AE8F
- Transition: 150ms ease-in-out

**CTA Button:**
- Text: "FALAR AGORA"
- Style: Primary button (see Button component)
- Position: right side

---

### Variant: Mobile (375px) — Hamburger

```
┌──────────────────────────┐
│ FVS    ☰                 │
│ INCORPORAÇÕES            │
└──────────────────────────┘
```

**Specifications:**
- Logo: Same as desktop (smaller breakpoint = same visual)
- Hamburger icon: 24x24px, 3-line menu icon (SVG), Preto Quente
- Position: right side
- CTA Button: Hidden (moved to drawer)

---

### Variant: Mobile (375px) — Drawer Open

```
┌────────────────────────────────────────┐
│ FVS    ☰                               │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ [Drawer Content]                       │
│ Sobre                                  │  Background: Verde Serra
│ Projetos                               │  Text: Off-White
│ Contato                                │  Item gap: 16px
│ Idioma                                 │  Padding: 24px
│                                        │
│ ────────────────────────────────────── │  Divider: 1px rgba(..., 0.1)
│ [FALAR AGORA]                         │  Button at bottom
│                                        │
└────────────────────────────────────────┘
```

**Specifications:**
- Position: fixed, left 0, top 64px (below nav), width 100%, height calc(100vh - 64px)
- Background: Verde Serra #2B3A2C
- Padding: 24px
- Display: flex flex-direction column
- Z-index: 40
- Animation: slideInDown 300ms ease-out

**Menu Items:**
- Font: Outfit Regular 16px
- Color: Off-White #F4F0E8
- Padding: 16px 0
- Border-bottom: 1px solid rgba(244, 240, 232, 0.1)

**Active Item:**
- Color: Pedra #C2AE8F
- Font-weight: 500

---

## 🎯 Page 6: Buttons

**Variants:**
1. Primary
2. Secondary
3. Tertiary (Link-style)

Each variant includes substates: Default, Hover, Active, Disabled

### Component: Primary Button

```
[ENTRAR NA EXPERIÊNCIA]
```

**Default State:**
- Background: Pedra #C2AE8F
- Text: Preto Quente #1A1A18, Outfit Medium 500, 13px
- Padding: 14px 32px (internal)
- Min height: 44px
- Border: none
- Border-radius: 0px (sharp)
- Box-shadow: none
- Cursor: pointer

**Hover State:**
- Background: Cobre #8C6A3F (darker)
- Text: unchanged
- Box-shadow: 0 4px 12px rgba(43, 58, 44, 0.15)
- Transition: background-color 150ms ease-in-out

**Active/Pressed State:**
- Background: Verde Serra #2B3A2C (darkest)
- Text: Off-White (for contrast)
- Transform: translateY(1px) (subtle press effect)
- Transition: immediate (0ms)

**Disabled State:**
- Background: Pedra Clara #DDD0BB (muted)
- Text: #94927D (muted text)
- Opacity: 0.6
- Cursor: not-allowed
- Pointer-events: none

**Focus State (Accessibility):**
- Outline: 2px solid Verde Serra #2B3A2C
- Outline-offset: 2px

---

### Component: Secondary Button

```
[SAIBA MAIS]
```

**Default State:**
- Background: transparent
- Border: 2px solid Verde Serra #2B3A2C
- Text: Verde Serra #2B3A2C, Outfit Medium 500, 13px
- Padding: 12px 30px (adjusted for 2px border = 44px total height)
- Min height: 44px
- Cursor: pointer

**Hover State:**
- Background: rgba(43, 58, 44, 0.08) (very light Verde Serra)
- Border-color: Cobre #8C6A3F
- Text: Cobre #8C6A3F
- Transition: all 150ms ease-in-out

**Active/Disabled:**
- Similar to Primary (opacity reduced for disabled)

---

### Component: Tertiary Button (Link)

```
Ver Detalhes →
```

**Default State:**
- Background: transparent
- Border: none
- Text: Cobre #8C6A3F, Outfit Regular 400, 13px
- Text-decoration: underline Pedra #C2AE8F, 2px thickness
- Text-underline-offset: 4px
- Cursor: pointer

**Hover State:**
- Text: Verde Serra #2B3A2C
- Text-decoration-color: Cobre #8C6A3F
- Transition: color 150ms, text-decoration-color 150ms

---

### Layout (All Buttons)

Arrange in Figma as grid:
```
┌─────────────────────────────────────────────────┐
│  Primary                                         │
│  [DEFAULT] [HOVER] [ACTIVE] [DISABLED] [FOCUS] │
│                                                 │
│  Secondary                                      │
│  [DEFAULT] [HOVER] [ACTIVE] [DISABLED] [FOCUS] │
│                                                 │
│  Tertiary                                       │
│  [DEFAULT] [HOVER] [ACTIVE] [DISABLED] [FOCUS] │
└─────────────────────────────────────────────────┘
```

---

## 🎯 Page 7: Form Inputs

**Variants:**
1. Input (text)
2. Textarea
3. Select dropdown
4. Each with: Default, Focus, Error, Disabled

### Component: Input (Text)

```
┌─────────────────────────┐
│ NOME COMPLETO           │  Label (top)
│ ┌─────────────────────┐ │
│ │ João da Silva       │ │  Input field
│ └─────────────────────┘ │
│ Erro: Campo obrigatório │  Error message (if error state)
└─────────────────────────┘
```

**Label:**
- Font: Outfit ExtraLight 11px uppercase
- Color: Preto Quente #1A1A18
- Letter-spacing: 1px
- Margin-bottom: 8px

**Input Field:**
- Background: Off-White #F4F0E8
- Border: 1px solid Névoa rgba(...)
- Text: Outfit Light 14px, Preto Quente #1A1A18
- Padding: 12px 14px
- Min-height: 44px (touch target)
- Border-radius: 0px (sharp)
- Font-size: 16px (mobile—prevents zoom)
- Placeholder: Outfit Light 14px, Pedra #C2AE8F, italic

**Focus State:**
- Border: 2px solid Verde Serra #2B3A2C
- Background: #FAFAF8 (slight brightening)
- Box-shadow: 0 0 0 3px rgba(43, 58, 44, 0.08)
- Outline: none
- Transition: all 150ms ease-out

**Error State:**
- Border: 2px solid Cobre #8C6A3F
- Background: #FAFAF8
- Error message: Outfit Regular 12px, Cobre
- Margin-top: 6px

**Disabled State:**
- Background: Pedra Clara #DDD0BB
- Border: 1px solid Névoa
- Color: #94927D (muted)
- Cursor: not-allowed
- Opacity: 0.5

---

### Component: Textarea

Same as Input, but:
- Min-height: 120px (multiline)
- Height: auto (grows with content)
- Resize: vertical (allow user to expand)

---

### Component: Select Dropdown

```
┌─────────────────────────┐
│ TIPO DE PROPRIEDADE ▼   │
│ ┌─────────────────────┐ │
│ │ Selecione...        │ │
│ │ ┌─────────────────┐ │ │
│ │ │ Apartamento     │ │ │  Options list (shown on click)
│ │ │ Casa            │ │ │
│ │ │ Terreno         │ │ │
│ │ │ Comercial       │ │ │
│ │ └─────────────────┘ │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

**Specifications:**
- Same styling as Input
- Chevron icon (right side)
- Options: Custom styled (use Verde Serra hover)
- Z-index: 10 (above other content)

---

### Form Layout (All Fields)

Arrange in Figma:
```
┌─────────────────────────────────────────────────────┐
│  Input                                               │
│  [DEFAULT] [FOCUS] [ERROR] [DISABLED]               │
│                                                     │
│  Textarea                                           │
│  [DEFAULT] [FOCUS] [ERROR] [DISABLED]               │
│                                                     │
│  Select                                             │
│  [DEFAULT] [OPEN] [DISABLED]                        │
│                                                     │
│  Validation Message (Error)                         │
│  [ERROR MESSAGE] ← Outfit Regular 12px, Cobre      │
└─────────────────────────────────────────────────────┘
```

---

## 🎯 Page 8: Footer

**Container:**
- Background: Verde Serra #2B3A2C
- Color: Off-White #F4F0E8
- Padding: 48px 24px 24px
- Margin-top: 96px

**Grid Layout:**
- 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Gap: 40px between sections
- Max-width: 1440px, centered

### Section: Sobre

```
SOBRE
Quem é FVS
Histórico
Valores
```

- Section Title: Cormorant Regular 18px, Off-White
- Links: Outfit Light 14px, Pedra #C2AE8F
- Link hover: color → Off-White, text-decoration underline

### Section: Propriedades

```
PROPRIEDADES
Todos os projetos
Residências
Investimentos
```

Same as Sobre

### Section: Newsletter

```
NEWSLETTER
Fique atualizado
┌──────────────────┐
│ seu@email.com    │
└──────────────────┘
[INSCREVER-SE]
```

- Input: Background rgba(244, 240, 232, 0.1), border 1px solid rgba(..., 0.3)
- Button: Primary styled for footer (custom colors)
- Placeholder: Off-White with opacity

### Section: Redes Sociais

```
SEGUIR
[f] [👤] [📷] [🐦]
```

- Title: Cormorant Regular 18px
- Icons: 32x32px, border 1px solid rgba(..., 0.3)
- Icon hover: background rgba(..., 0.1), border Pedra

### Bottom Section (Legal)

```
© 2024 FVS Incorporações
Política de Privacidade  |  Termos de Uso  |  Cookies
```

- Layout: flex, justify-content space-between
- Copyright: Outfit ExtraLight 12px, rgba(244, 240, 232, 0.6)
- Legal links: Outfit ExtraLight 12px, Pedra #C2AE8F
- Border-top: 1px solid rgba(244, 240, 232, 0.1)

---

## 🎯 Page 9: Secondary Components

Smaller components used in various contexts:

### Badge / Standard

```
[DESTAQUE]  [NOVO]  [VENDIDO]
```

- Style: Verde Serra background, Off-White text
- Font: Outfit ExtraLight 11px uppercase
- Padding: 8px 14px
- Border-radius: 0px (sharp)

### Badge / Status

```
[Em breve]  [Disponível]  [Consultoria]
```

- Variants: Verde Serra, Pedra, Cobre
- Same sizing as Standard

### Icon Buttons

```
[☰] [🔍] [❤] [⬆]
```

- Size: 44x44px (touch target)
- Background: transparent or Verde Serra
- Color: Preto Quente or Off-White
- Border-radius: 0px

### Chips / Tags

```
#Investimento  #Conforto  #Permanência
```

- Font: Outfit ExtraLight 11px
- Padding: 6px 12px
- Background: Pedra Clara #DDD0BB
- Color: Preto Quente #1A1A18

---

## 📐 Page 10: Utilities & Reference Grid

### Spacing Grid Visualization

```
8px grid overlay (show on canvas):
- Horizontal lines every 8px
- Vertical lines every 8px
- Color: Névoa with low opacity (for reference only)
- Label: spacing-xs (8px), spacing-sm (16px), etc.
```

### Responsive Breakpoints

```
Mobile (375px) | Tablet (768px) | Desktop (1024px) | Large (1440px)
├─ Safe area  │ iPad safe area │ Desktop safe    │ Cinema safe
│ 24px margin │ 24px margin    │ 24px margin     │ 40px margin
```

### Color Palette Reference

Show all colors with:
- Hex code
- RGB values
- Usage guidelines
- Contrast matrix (which colors pair)

---

## 🔧 Component Library Structure (Auto-layout)

All library components should use Auto-layout for responsive scaling:

```
Button (Primary)
├─ Label: "LABEL" (text layer)
├─ Padding: horizontal 32px, vertical 12px
├─ Gap: 0
├─ Min width: 44px
└─ Min height: 44px

Input (Text)
├─ Label: "LABEL" (text layer)
├─ Field: [input box] (rectangle + text)
├─ Error: [error message] (conditional)
├─ Padding: vertical 24px, horizontal 0
├─ Gap: 8px (between label and field)
└─ Min width: 100%
```

---

## 📋 Figma Naming Convention

All components in library follow format: `Category / Variant / State`

Examples:
```
Button / Primary / Default
Button / Primary / Hover
Button / Primary / Disabled
Input / Text / Default
Input / Text / Error
NavBar / Desktop / Default
Card / Property / Hover
Hero / Section / Desktop
Badge / Standard / Default
```

---

## 🎨 Design System Properties (Figma UI)

### Shared Styles (Figma Styles Panel)

Create reusable styles for:
- All typography (H1, H2, H3, Body, Label, etc.)
- All colors (Verde Serra, Pedra, Cobre, etc.)
- All shadows (Shadow SM, MD, LG, XL)

**Naming:** `/Type/H1/Light/80px` or `/Color/Verde Serra/Primary`

### Text Styles

```
Type/H1/Light
├─ Font: Cormorant Garamond
├─ Weight: Light (300)
├─ Size: 80px
├─ Line Height: 1.2
└─ Letter Spacing: 2px

Type/Body/Light
├─ Font: Outfit
├─ Weight: Light (300)
├─ Size: 16px
├─ Line Height: 1.75
└─ Letter Spacing: 0px
```

### Color Styles

```
Color/Verde Serra/Primary
├─ Hex: #2B3A2C
└─ Export: CSS, JSON

Color/Pedra/Secondary
├─ Hex: #C2AE8F
└─ Export: CSS, JSON
```

---

## 🚀 Export & Handoff

### Figma Export Options

1. **Export as PDF:** Design system overview (print-friendly)
2. **Export Components as Image:** For quick reference
3. **Figma Link (Shared Workspace):** Real-time collaboration
   - URL format: `figma.com/file/[FILE-ID]/FVS-NOVO-SITE-DESIGN-SYSTEM`
4. **Figma API Export:** For automated syncing with Storybook/Component library

### Phase 3 Handoff Package

Files to deliver:
```
├── FVS-NOVO-SITE-DESIGN-SYSTEM.fig (Figma file)
├── design-tokens.css (CSS variables)
├── design-tokens.json (JSON for Tailwind)
├── DESIGN_TOKENS_DOCUMENTATION.md (this documentation)
├── FIGMA_ARCHITECTURE.md (this file)
└── COMPONENTS_SPECIFICATION.md (YAML specs for devs)
```

---

## 📋 Verification Checklist

Before finalizing Figma file:

- [ ] All 5 main components created (Hero, Cards, Nav, Buttons, Forms)
- [ ] Each component has 3+ variants (desktop, tablet, mobile)
- [ ] All states represented (default, hover, active, disabled, error, focus)
- [ ] Colors match `design-tokens.css` exactly (copy/paste hex values)
- [ ] Typography matches token specs (size, weight, line-height, letter-spacing)
- [ ] Spacing uses 8px grid multiples (no magic numbers)
- [ ] Shadows use Verde Serra (not pure black)
- [ ] Border-radius set to 0px (sharp corners)
- [ ] All text layers use Figma text styles (linked to library)
- [ ] All color fills use Figma color styles (linked to library)
- [ ] Responsive breakpoints labeled (375, 768, 1024, 1440)
- [ ] Animations documented (timing, easing, stagger)
- [ ] Accessibility notes included (focus states, contrast ratios)
- [ ] Design system page has navigation/overview
- [ ] Library components use auto-layout
- [ ] Naming convention followed consistently
- [ ] File is shared/commented for team access

---

## 📞 Notes for UI Engineer (Phase 3)

When using this Figma file:

1. **Colors:** Copy hex values directly from Figma (or from `design-tokens.css`)
2. **Typography:** Map each text style to CSS classes (`.h1`, `.body`, `.label`, etc.)
3. **Spacing:** Use CSS grid/flexbox with spacing tokens (no hardcoded pixels)
4. **Shadows:** Use `--shadow-*` tokens (not Figma shadow properties directly)
5. **States:** Implement all variants as CSS/React state/props
6. **Responsiveness:** Use Figma breakpoint layout as reference for media queries
7. **Transitions:** All interactive elements use `--transition-*` timing scale

---

**Document Version:** 1.0  
**Confidential — FVS Incorporações**  
**Last Updated:** 2026-05-29
