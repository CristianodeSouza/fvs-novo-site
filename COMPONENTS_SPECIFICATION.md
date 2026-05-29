# 🎨 ESPECIFICAÇÃO DE COMPONENTES — FVS NOVO SITE
## Detalhamento para Implementação com design-squad

**Versão:** 1.0  
**Data:** 29/05/2026  
**Baseado em:** DESIGN_SYSTEM_INTEGRATED.md + Referências (LUMEN + Lunchlab.fr)  
**Status:** Pronto para Build

---

## 🎯 PRINCÍPIO: Experiência Imersiva

Inspiração em LUMEN (La Chambre Noire): navegação linear, revelação progressiva, contemplação sofisticada. **Adaptação FVS:** descobrir Gramado como refúgio e investimento, não como museu.

---

## 01 — HERO SECTION (Página Principal)

### Objetivo
Imersão em Gramado. Problema → Solução → CTA.

### Estrutura

```
┌─────────────────────────────────────────┐
│ HERO CONTAINER (100vh, Verde Serra bg)  │
├─────────────────────────────────────────┤
│                                         │
│  [Paralax Background: Montanha/Paisagem]│
│                                         │
│  Heading: "Descobrir Gramado"          │
│  Subheading: "Onde viver é investir"   │
│  CTA: "Entrar na Experiência"          │
│                                         │
│  [Scroll indicator: ↓]                  │
│                                         │
└─────────────────────────────────────────┘
```

### Especificações Técnicas

```yaml
Container:
  height: 100vh
  background: linear-gradient(135deg, #2B3A2C 0%, #1a2420 100%)
  position: relative
  overflow: hidden

Background Image (Paralax):
  image: Montanha Gramado/Vale
  position: fixed
  object-fit: cover
  opacity: 0.4
  transform: translateY() # Paralax suave on scroll

Heading (H1):
  text: "Descobrir Gramado"
  font: Cormorant Garamond, Light 300, 80px
  color: #F4F0E8 (Off-White)
  text-align: center
  position: absolute
  top: 35%
  left: 50%
  transform: translateX(-50%)
  line-height: 1.2
  letter-spacing: 2px # Elegância

Subheading:
  text: "Onde viver é investir em permanência patrimonial"
  font: Outfit, Light 300, 16px
  color: #C2AE8F (Pedra)
  text-align: center
  position: absolute
  top: 50%
  left: 50%
  transform: translateX(-50%)
  max-width: 600px
  line-height: 1.75

CTA Button (Primary):
  text: "Entrar na Experiência"
  position: absolute
  bottom: 15%
  left: 50%
  transform: translateX(-50%)
  [Ver especificação botão abaixo]

Scroll Indicator:
  position: absolute
  bottom: 30px
  left: 50%
  transform: translateX(-50%)
  animation: bounce 2s infinite
  opacity: 0.6

Animation (Entrance):
  fade-in: 600ms ease-out
  heading translateY: 0 (from -20px)
  subheading opacity: 1 (from 0)
  stagger: 100ms between elements
```

### Responsividade

```
Mobile (375px):
  heading: 48px (clamp(48px, 10vw, 80px))
  subheading: 14px
  Hero height: 100vh (minimum safe)

Tablet (768px):
  heading: 64px
  subheading: 15px

Desktop (1024px+):
  heading: 80px
  subheading: 16px
```

---

## 02 — PROPERTY CARDS (Grid de Propriedades)

### Objetivo
Mostrar propriedades em padrão simétrico, revelação progressiva (Before-After).

### Estrutura

```
┌─────────────────────────────────────────┐
│ PROPERTIES GRID CONTAINER               │
├─────────────────────────────────────────┤
│  [Property Card I]  [Property Card II]  │
│  [Property Card III][Property Card IV]  │
│  [Property Card V]  [Property Card VI]  │
└─────────────────────────────────────────┘
```

### Property Card — Especificação Completa

```yaml
Container:
  background: #F4F0E8 (Off-White)
  border: 1px solid #D8D4CC (Névoa)
  border-radius: 0 # Ângulos retos = sofisticação
  padding: 0 (imagem sem espaço)
  overflow: hidden
  aspect-ratio: 4/5
  transition: box-shadow 200ms ease-out
  cursor: pointer

Hover State:
  box-shadow: 0 8px 24px rgba(43, 58, 44, 0.12) # Verde Serra subtle
  background: #FAFAF8 (breve whitening)
  [Sem scale — evita layout shift]

Image Container:
  height: 55%
  overflow: hidden
  position: relative

Image:
  object-fit: cover
  object-position: center
  width: 100%
  height: 100%
  transition: transform 300ms ease-out
  loading: lazy
  srcset: 
    375w: 375px
    768w: 768px
    1024w: 1024px

Image Hover:
  transform: scale(1.05) # Zoom suave, máximo 5%

Overlay Badge (Projeto X):
  position: absolute
  top: 16px
  right: 16px
  background: #2B3A2C (Verde Serra)
  color: #F4F0E8 (Off-White)
  padding: 8px 14px
  font: Outfit ExtraLight 11px
  border-radius: 0
  opacity: 1 (no hover)

Content Container:
  height: 45%
  padding: 24px
  display: flex
  flex-direction: column
  justify-content: space-between

Title:
  font: Cormorant Regular 28px
  color: #1A1A18 (Preto Quente)
  margin: 0 0 8px 0
  line-height: 1.3
  max-height: 60px
  overflow: hidden

Location Tag:
  font: Outfit ExtraLight 11px
  color: #8C6A3F (Cobre)
  text-transform: uppercase
  letter-spacing: 1px
  margin-bottom: 12px

Description:
  font: Outfit Light 14px
  color: #1A1A18
  line-height: 1.6
  max-height: 70px
  overflow: hidden
  display: -webkit-box
  -webkit-line-clamp: 3
  -webkit-box-orient: vertical

CTA Link:
  font: Outfit Medium 13px
  color: #8C6A3F (Cobre)
  text-decoration: none
  cursor: pointer
  transition: color 150ms, border-color 150ms
  border-bottom: 2px solid #C2AE8F (Pedra)
  padding-bottom: 2px
  margin-top: auto

CTA Hover:
  color: #2B3A2C (Verde Serra)
  border-color: #8C6A3F (Cobre)
```

### Grid Layout

```css
Container:
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))
  gap: 24px
  padding: 48px 24px
  max-width: 1440px
  margin: 0 auto

Breakpoints:
  Mobile (375px): 1 column
  Tablet (768px): 2 columns
  Desktop (1024px): 3 columns
  Desktop Large (1440px): 3 columns
```

### Padrão LUMEN Inspirado: Revelação Progressiva

Ao clicar em um card:

```yaml
Lightbox Modal:
  background: rgba(43, 58, 44, 0.95) # Verde Serra com opacidade
  backdrop-filter: blur(8px)
  display: flex
  align-items: center
  justify-content: center
  z-index: 100

Content Inside Modal:
  max-width: 80vw
  max-height: 90vh
  background: #F4F0E8 (Off-White)
  border: 1px solid #D8D4CC
  padding: 40px
  border-radius: 0

Heading:
  font: Cormorant Regular 48px
  color: #2B3A2C (Verde Serra)
  margin-bottom: 24px

Details:
  font: Outfit Regular 16px
  color: #1A1A18
  line-height: 1.75
  columns: 2
  column-gap: 32px

Before-After Slider:
  height: 400px
  position: relative
  overflow: hidden
  margin: 32px 0

Slider Image:
  width: 100%
  height: 100%
  object-fit: cover

Handle:
  position: absolute
  left: 50%
  top: 0
  bottom: 0
  width: 4px
  background: #8C6A3F (Cobre)
  cursor: ew-resize
  opacity: 0.8
```

---

## 03 — NAVIGATION BAR (Sticky Header)

### Objetivo
Navegação fluida, sem distração visual.

### Especificações

```yaml
Container:
  position: sticky
  top: 0
  background: #F4F0E8 (Off-White)
  border-bottom: 1px solid #D8D4CC (Névoa)
  padding: 16px 24px
  display: flex
  justify-content: space-between
  align-items: center
  height: 64px
  z-index: 50

Logo Section:
  display: flex
  align-items: center
  gap: 8px

Logo:
  font: Cormorant Garamond Regular 24px
  color: #2B3A2C (Verde Serra)
  text-decoration: none
  line-height: 1

Logo Separator Line:
  width: 2px
  height: 20px
  background: #8C6A3F (Cobre)
  margin: 0 8px

Logo Tag:
  font: Outfit ExtraLight 9px
  color: #8C6A3F (Cobre)
  text-transform: uppercase
  letter-spacing: 2px

Menu (Desktop):
  display: flex
  gap: 32px
  list-style: none

Menu Item:
  font: Outfit Regular 13px
  color: #1A1A18 (Preto Quente)
  cursor: pointer
  transition: color 150ms, border-bottom 150ms

Menu Item Hover:
  color: #8C6A3F (Cobre)
  border-bottom: 2px solid #C2AE8F (Pedra)
  padding-bottom: 4px

CTA Button (Right):
  font: Outfit Medium 13px
  color: #1A1A18
  background: #C2AE8F (Pedra)
  padding: 12px 24px
  border: none
  cursor: pointer
  transition: background-color 150ms
  [Ver especificação botão]

Hamburger Menu (Mobile):
  display: none # hidden on desktop
  width: 24px
  height: 24px
  cursor: pointer
  flex-direction: column
  justify-content: center
  gap: 5px

@media (max-width: 768px):
  Menu: display: none
  Hamburger Menu: display: flex
  Logo Tag: display: none
```

### Mobile Drawer Menu

```yaml
Drawer:
  position: fixed
  left: 0
  top: 64px # below navbar
  width: 100%
  height: calc(100vh - 64px)
  background: #2B3A2C (Verde Serra)
  backdrop-filter: blur(4px)
  display: flex
  flex-direction: column
  padding: 24px
  z-index: 40
  animation: slideInDown 300ms ease-out

Menu Items:
  font: Outfit Regular 16px
  color: #F4F0E8 (Off-White)
  cursor: pointer
  padding: 16px 0
  border-bottom: 1px solid rgba(244, 240, 232, 0.1)

Menu Item Active:
  color: #C2AE8F (Pedra)
  font-weight: 500
```

---

## 04 — BUTTONS (Sistema Completo)

### 4.1 Primary Button

```yaml
Background: #C2AE8F (Pedra)
Text: #1A1A18 (Preto Quente)
Font: Outfit Medium 500, 13px
Padding: 14px 32px
Min Height: 44px
Border: none
Border-Radius: 0
Cursor: pointer
Transition: all 150ms ease-in-out

States:

  Normal:
    background: #C2AE8F
    box-shadow: none

  Hover:
    background: #8C6A3F (Cobre)
    box-shadow: 0 4px 12px rgba(43, 58, 44, 0.15)

  Active/Pressed:
    background: #2B3A2C (Verde Serra)
    box-shadow: none
    transform: translateY(1px)

  Disabled:
    background: #DDD0BB (Pedra Clara)
    color: #94927D (muted)
    cursor: not-allowed
    opacity: 0.6

  Focus:
    outline: 2px solid #2B3A2C (Verde Serra)
    outline-offset: 2px
```

### 4.2 Secondary Button

```yaml
Background: transparent
Border: 2px solid #2B3A2C (Verde Serra)
Text: #2B3A2C (Verde Serra)
Font: Outfit Medium 500, 13px
Padding: 12px 30px # para compensar border
Min Height: 44px
Cursor: pointer

States:

  Normal:
    border-color: #2B3A2C
    background: transparent

  Hover:
    background: rgba(43, 58, 44, 0.08)
    border-color: #8C6A3F (Cobre)
    color: #8C6A3F

  Focus:
    outline: 2px solid #2B3A2C
    outline-offset: 2px
```

### 4.3 Tertiary Button (Links)

```yaml
Background: transparent
Border: none
Text: #8C6A3F (Cobre)
Font: Outfit Regular 400, 13px
Text-Decoration: underline
Text-Decoration-Color: #C2AE8F (Pedra)
Text-Decoration-Thickness: 2px
Text-Underline-Offset: 4px
Cursor: pointer

States:

  Hover:
    color: #2B3A2C (Verde Serra)
    text-decoration-color: #8C6A3F

  Focus:
    outline: 2px solid #2B3A2C
    outline-offset: 4px
```

---

## 05 — FORM FIELDS

### Input Text / Textarea

```yaml
Container (Wrapper):
  margin-bottom: 24px

Label:
  font: Outfit ExtraLight 11px
  color: #1A1A18 (Preto Quente)
  text-transform: uppercase
  letter-spacing: 1px
  display: block
  margin-bottom: 8px

Input / Textarea:
  width: 100%
  padding: 12px 14px
  font: Outfit Light 14px
  color: #1A1A18
  background: #F4F0E8 (Off-White)
  border: 1px solid #D8D4CC (Névoa)
  border-radius: 0
  transition: all 150ms ease-out
  min-height: 44px # touch target

Input Placeholder:
  color: #C2AE8F (Pedra)
  font-style: italic
  opacity: 0.7

Input Focus:
  border-color: #2B3A2C (Verde Serra)
  border-width: 2px
  outline: none
  background: #FAFAF8
  box-shadow: 0 0 0 3px rgba(43, 58, 44, 0.08)

Input Error:
  border-color: #8C6A3F (Cobre)
  border-width: 2px
  background: #FAFAF8

Error Message:
  font: Outfit Regular 12px
  color: #8C6A3F (Cobre)
  margin-top: 6px
  display: block
```

---

## 06 — FOOTER

### Estrutura

```
┌────────────────────────────────────────┐
│ FOOTER (Verde Serra background)        │
├────────────────────────────────────────┤
│ Logo | Links | Newsletter | Redes      │
├────────────────────────────────────────┤
│ Copyright | Políticas                  │
└────────────────────────────────────────┘
```

### Especificações

```yaml
Container:
  background: #2B3A2C (Verde Serra)
  color: #F4F0E8 (Off-White)
  padding: 48px 24px 24px
  margin-top: 96px

Section:
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
  gap: 40px
  max-width: 1440px
  margin: 0 auto
  margin-bottom: 32px

Section Title:
  font: Cormorant Regular 18px
  color: #F4F0E8 (Off-White)
  margin-bottom: 16px

Section Link:
  font: Outfit Light 14px
  color: #C2AE8F (Pedra)
  text-decoration: none
  margin-bottom: 8px
  transition: color 150ms
  cursor: pointer

Section Link Hover:
  color: #F4F0E8 (Off-White)
  text-decoration: underline

Newsletter Input:
  background: rgba(244, 240, 232, 0.1)
  border: 1px solid rgba(244, 240, 232, 0.3)
  color: #F4F0E8
  padding: 12px 14px
  font: Outfit Light 14px
  margin-bottom: 12px
  width: 100%

Newsletter Input Focus:
  border-color: #C2AE8F (Pedra)
  background: rgba(244, 240, 232, 0.15)

Social Icons:
  display: flex
  gap: 16px
  margin-top: 16px

Social Icon:
  width: 32px
  height: 32px
  border: 1px solid rgba(244, 240, 232, 0.3)
  border-radius: 0
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  transition: all 150ms

Social Icon Hover:
  background: rgba(244, 240, 232, 0.1)
  border-color: #C2AE8F (Pedra)

Bottom Section:
  border-top: 1px solid rgba(244, 240, 232, 0.1)
  padding-top: 24px
  display: flex
  justify-content: space-between
  align-items: center
  flex-wrap: wrap
  gap: 16px

Copyright:
  font: Outfit ExtraLight 12px
  color: rgba(244, 240, 232, 0.6)

Legal Links:
  display: flex
  gap: 16px
  font: Outfit ExtraLight 12px
  color: #C2AE8F (Pedra)
```

---

## 07 — TRANSIÇÕES & ANIMAÇÕES

### Transições Padrão (Inspirado em LUMEN)

```css
/* Micro-interações (rápidas) */
--t-fast: 150ms
easing: ease-in-out

/* Estados (normais) */
--t-base: 300ms
easing: cubic-bezier(0.22, 1, 0.36, 1)

/* Contemplativas (reveladoras) */
--t-slow: 600ms
easing: cubic-bezier(0.65, 0, 0.35, 1)

/* Épicas (entrada/saída página) */
--t-cine: 1000ms
easing: ease-out
```

### Animações Específicas

```css
/* Bounce scroll indicator */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

/* Hero entrance */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Card reveal */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
animation: fadeIn 600ms ease-out 100ms both
```

---

## 08 — RESPONSIVIDADE CRÍTICA

### Breakpoints

```
375px — Mobile (small, iPhone SE)
768px — Tablet (iPad)
1024px — Desktop (small laptop)
1440px — Desktop (full, cinema)
```

### Mobile-First Rules

- [ ] Hero: clamp(48px, 10vw, 80px) para heading
- [ ] Cards: 1 coluna em mobile, 2 em tablet, 3+ em desktop
- [ ] Buttons: mínimo 44x44px em todas as viewports
- [ ] Inputs: font-size 16px em mobile (evita zoom auto)
- [ ] Imagens: srcset com 375w, 768w, 1024w, 1440w
- [ ] Navbar: hamburger em mobile, menu em desktop
- [ ] Sem horizontal scroll em nenhuma viewport

---

## 09 — CHECKLIST DE IMPLEMENTAÇÃO

### Design Tokens

- [ ] Cores definidas como CSS variables
- [ ] Tipografia como font-family variables
- [ ] Transições como tempo variables
- [ ] Spacing escala (8px grid)

### Componentes

- [ ] Hero section com paralax
- [ ] Property cards com grid responsivo
- [ ] Navigation sticky bar
- [ ] Botões (Primary, Secondary, Tertiary)
- [ ] Form fields com validação
- [ ] Footer completo
- [ ] Modais/Lightbox
- [ ] Before-After slider

### Acessibilidade

- [ ] Contraste 4.5:1 mínimo (WebAIM verificado)
- [ ] Focus states visíveis em todos os interativos
- [ ] Tab order correto
- [ ] Alt text em todas as imagens
- [ ] Labels associadas em forms
- [ ] Skip links presentes
- [ ] prefers-reduced-motion respeitado

### Performance

- [ ] Imagens WebP + srcset + lazy loading
- [ ] CSS crítico inline
- [ ] Fonts com font-display: swap
- [ ] LCP < 2.5s
- [ ] CLS < 0.1 (zero layout shift)

---

**Próxima Etapa:** Design-squad build componentes com 100% conformidade a esta especificação.

---

**Documento Confidencial — FVS Incorporações**  
**Última atualização:** 29/05/2026
