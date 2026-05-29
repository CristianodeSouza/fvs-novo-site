# 📚 REFERENCE ANALYSIS — LUMEN + Lunchlab.fr

**Versão:** 1.0  
**Data:** 29/05/2026  
**Objetivo:** Documentar componentes inspirados e adaptações para FVS  
**Status:** Análise Completa

---

## 🎬 LUMEN (La Chambre Noire) — Padrões Extraídos

### Propósito Original
Museu digital imersivo com 6 obras de arte em ambiente darkroom (contemplação sofisticada).

### Padrões Identificados

#### 1. **Navegação Linear com Revelação Progressiva**
**Original LUMEN:**
- Fluxo: Intro → Artwork I → Artwork II ... → VI → Exit
- Cada cena é autossuficiente com botões "Œuvre" (details) e "Révéler" (reveal)
- Transições contemplativas 240ms-1800ms (fast→cine)

**Adaptação FVS:**
- Fluxo: Homepage → Featured Properties → Project List → Project Detail → Contact
- Cada propriedade revela detalhes progressivamente (Before-After slider)
- Transições mantêm escala 150-1000ms (elegância sem hermitismo)
- **Componente:** Hero Section entrance fade-in (600ms) + scroll indicator bounce

#### 2. **Tipografia Sofisticada: Serif + Sans Pairing**
**Original LUMEN:**
```
Serif: 'Cormorant Garamond', Georgia (headings elegantes)
Sans: 'Inter' (UI, body text acessível)
```

**Adaptação FVS:**
```
Serif: Cormorant Garamond (Light 300 para H1-H3, 80px-24px)
Sans: Outfit (Light 300-Medium 500 para labels, CTAs, 16px-13px)
RAZÃO: FVS é sofisticada, não hermética. Outfit é mais moderno que Inter.
```
- **Componentes:** Todos H1-H3, descrições, labels de botão

#### 3. **Cores Escuras com Acentos Dourados**
**Original LUMEN:**
```
Backgrounds: #0A0908 noir, #100E0C noir-2, #1B1714 ombre
Foreground: #E8DDC9 ivoire, #BFB2A0 ivoire-dim
Accents: #C9A56B or (gold), #DDB985 or-pale (pale gold)
```

**Adaptação FVS:**
```
Backgrounds: #2B3A2C Verde Serra (dark green, não preto), #1a2420 variação escura
Foreground: #F4F0E8 Off-White (mais brilhante que LUMEN)
Accents: #8C6A3F Cobre (bronze/copper, alinhado com Gramado natural)
RAZÃO: FVS é territorial (Gramado), não um museu. Verde Serra substitui noir.
```
- **Componentes:** Hero background, cards, footer, borders subtis

#### 4. **Efeitos Atmosféricos: Fog, Dust, Beams**
**Original LUMEN:**
```
Intro Scene tem beams de luz, fog, dust em CSS/Canvas
Position: fixed para efeitos sobrepostos
Blur filters (backdrop-filter) para vidro
```

**Adaptação FVS:**
```
Paralax background (translateY) em Hero para montanha Gramado
Gradiente linear no Hero (Verde Serra → dark shade)
Transições suaves (ease-out) para imagens
Sem fog/dust (muito dramático para real estate)
RAZÃO: Imersão deve ser convidativa, não misteriosa.
```
- **Componentes:** Hero Section background, Property image transitions

#### 5. **Transições Contemplativas: Timing Scale**
**Original LUMEN:**
```
--t-fast: 240ms
--t-base: 600ms
--t-slow: 1200ms
--t-cine: 1800ms
Easing: cubic-bezier(0.22, 1, 0.36, 1) ease-out, cubic-bezier(0.65, 0, 0.35, 1) ease-in-out
```

**Adaptação FVS:**
```
--t-fast: 150ms (micro-interactions, hover states)
--t-base: 300ms (button clicks, fade-ins)
--t-slow: 600ms (page transitions, scroll reveals)
--t-cine: 1000ms (hero entrance, Before-After slider)
Easing: cubic-bezier(0.22, 1, 0.36, 1) ease-out preservado
RAZÃO: FVS é sofisticada mas responsiva (e-commerce). Tempos menores.
```
- **Componentes:** Todos os componentes com transições definidas

#### 6. **Layout Grid com Centralização**
**Original LUMEN:**
```
Grid patterns: 1fr 1.1fr 1fr (centered asymmetry)
Centering: align-items center, justify-content center
Position fixed/absolute para layering
```

**Adaptação FVS:**
```
Hero: 100vh container com elementos centrados
Property Cards Grid: repeat(auto-fit, minmax(320px, 1fr))
Before-After Slider: grid com 2 colunas (before | after)
RAZÃO: Simetria apela, mas grid responsivo é mais prático.
```
- **Componentes:** Property Cards Grid, Before-After Slider

---

## 🍽️ LUNCHLAB.FR — Padrões Extraídos

### Propósito Original
Restaurant booking platform com navegação intuitiva, grid simétrico, progressive revelation.

### Padrões Identificados

#### 1. **Grid Simétrico com Auto-Fit**
**Original Lunchlab:**
```
Property/Menu cards em grid CSS responsivo
Simetria visual (cards mesmo tamanho)
Lazy load imagens para performance
```

**Adaptação FVS:**
```
Property Cards Grid: repeat(auto-fit, minmax(320px, 1fr))
Aspect ratio: 4/5 (portrait, melhor para imóveis)
Lazy loading com srcset (375w, 768w, 1024w, 1440w)
Border sutil: 1px solid rgba(232, 221, 201, 0.18) [Névoa]
```
- **Componentes:** Property Cards, Featured Properties Section

#### 2. **Navegação Linear com Scroll Progressive**
**Original Lunchlab:**
```
Menu → Seleção → Detalhes → Checkout
Cada passo revela informações incrementalmente
Scroll suave (smooth scroll to results)
```

**Adaptação FVS:**
```
Homepage → Projects List → Project Detail → Contact Form
Featured Properties com CTA "Ver Detalhes"
Smooth scroll para filtros + resultados
Breadcrumb: Home > Projetos > Projeto X
```
- **Componentes:** Navigation Bar, Projects Listing, Related Properties

#### 3. **Card Interactions & Hover States**
**Original Lunchlab:**
```
Cards elevam-se no hover (box-shadow enhancement)
Imagens fazem zoom suave
CTA buttons ficam mais proeminentes
```

**Adaptação FVS:**
```
Property Cards hover: box-shadow 0 8px 24px rgba(43, 58, 44, 0.08)
Imagem não faz zoom (protege legibilidade)
Border Pedra #C2AE8F ficam mais visíveis
Botão "Ver Detalhes" muda cor (Pedra bg ao hover)
```
- **Componentes:** Property Cards hover state, Button interactions

#### 4. **Typography Hierarchy com Spacing**
**Original Lunchlab:**
```
Headings grandes (72px+)
Subtext menor e muted (14px, gray-500)
Espaçamento limpo (gap: 24px, 16px, 8px)
```

**Adaptação FVS:**
```
H1 (Hero): Cormorant 80px Light
H2 (Section): Cormorant 48px Light
H3 (Card title): Cormorant 24px Regular
Body: Outfit 16px Light
Label: Outfit 13px Medium (uppercase)
Spacing grid: 8px, 16px, 24px, 40px
```
- **Componentes:** Typography scale, spacing in all components

#### 5. **Mobile-First Responsive Design**
**Original Lunchlab:**
```
Breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop)
Touch targets: 44x44px minimum
No horizontal scroll
Font size never below 16px (previne zoom involuntário)
```

**Adaptação FVS:**
```
Breakpoints IDÊNTICOS: 375px, 768px, 1024px, 1440px
Touch targets em forma fields: 44px height minimum
Property cards: stack em 375px (1 coluna)
Heading Hero: 80px desktop → 48px tablet → 32px mobile
```
- **Componentes:** Responsividade em todos os componentes

#### 6. **Image Optimization & Lazy Loading**
**Original Lunchlab:**
```
Images com srcset para diferentes resoluções
Lazy load abaixo do fold
WebP fallback format
```

**Adaptação FVS:**
```
Property images: srcset 375w, 768w, 1024w, 1440w
Format: WebP + PNG fallback
Lazy loading: loading="lazy"
Before-After slider: ambas imagens otimizadas
```
- **Componentes:** Property Cards, Image Gallery, Before-After Slider

---

## 🎨 SÍNTESE: Adaptações Específicas por Componente

### Hero Section
- **De LUMEN:** Navegação linear, transições contemplatias (600ms entrance)
- **De Lunchlab:** Heading grande (80px), spacing limpo
- **Cores FVS:** Verde Serra background, Off-White text, Cobre separator
- **Especial:** Paralax background montanha + scroll indicator bounce

### Property Cards
- **De LUMEN:** Revelação progressiva (Before-After)
- **De Lunchlab:** Grid auto-fit, card hover elevation, image optimization
- **Cores FVS:** Off-White container, Névoa border, Pedra hover
- **Especial:** Aspect ratio 4/5, srcset lazy loading

### Navigation Bar
- **De LUMEN:** Linear, posição fixa (sticky)
- **De Lunchlab:** Mobile-first responsive (hamburger drawer)
- **Cores FVS:** Verde Serra background, Off-White text, Cobre separator logo
- **Especial:** 64px height, sticky positioning

### Forms
- **De LUMEN:** Transições suaves (300ms)
- **De Lunchlab:** 44px minimum touch targets, labels claros
- **Cores FVS:** Verde Serra focus border, Cobre error state
- **Especial:** Validação inline, error messages Cobre

### Footer
- **De LUMEN:** Escuro, layout grid
- **De Lunchlab:** Mobile-first (4 cols → 2 cols → 1 col)
- **Cores FVS:** Verde Serra background, Off-White text, Cobre links
- **Especial:** Newsletter signup integrado, social icons

---

## ✅ Checklist: Conformidade com Referências

- [x] LUMEN: Navegação linear e revelação progressiva implementadas
- [x] LUMEN: Transições contemplativas em 150-1000ms scale
- [x] LUMEN: Tipografia Cormorant Garamond (serif elegante)
- [x] LUMEN: Layout grid centralizado
- [x] Lunchlab: Grid simétrico auto-fit com lazy load
- [x] Lunchlab: Card hover elevation com shadows
- [x] Lunchlab: Mobile-first 375px breakpoint
- [x] Lunchlab: Touch targets 44x44px mínimo
- [x] FVS Brand: Verde Serra + Pedra + Cobre (sem ouro genérico)
- [x] FVS Brand: Outfit sans + Cormorant serif pairing
- [x] FVS Brand: Expressões aprovadas em copywriting

---

## 📝 Componentes Prontos para Build (design-squad)

1. ✅ Hero Section (paralax, entrance animations, CTA)
2. ✅ Property Cards (grid, Before-After, lazy load)
3. ✅ Navigation Bar (sticky, mobile drawer, logo)
4. ✅ Buttons (Primary, Secondary, Tertiary + hover states)
5. ✅ Forms (inputs, validations, errors)
6. ✅ Footer (4-column grid, newsletter, social)
7. ✅ Image Gallery (lightbox, thumbnails, zoom)
8. ✅ Map Embed (Google Maps, marker, proximity info)

---

**Documento Confidencial — FVS Incorporações**  
**Próxima Fase:** design-squad:design-system-architect (design tokens + high-fidelity prototypes)
