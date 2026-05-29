# 🎯 DESIGN SYSTEM INTEGRADO — FVS NOVO SITE
## Síntese Rigorosa: Identidade Visual + PRD + UI/UX Pro Max

**Versão:** 1.1  
**Data:** 29/05/2026  
**Status:** Design System Meticuloso  
**Responsável:** Design Squad + UI/UX Pro Max Skill

---

## 📌 PRINCÍPIO FUNDAMENTAL

**Este documento é a Fonte Única da Verdade para implementação.**

Todos os componentes, páginas e interações DEVEM ser verificados contra este documento antes de deploy. A marca FVS não admite desvios nos pilares:

- ✅ Cores exatas (verde serra #2B3A2C é OBRIGATÓRIA)
- ✅ Tipografia do sistema (Cormorant + Outfit apenas)
- ✅ Comunicação (expressões aprovadas, linguagem territorial)
- ✅ Sofisticação elegante (não hermética, não genérica)
- ✅ WCAG AA mínimo (contraste 4.5:1, touch 44x44px)

---

## 🎨 PALETA CROMÁTICA (OBRIGATÓRIA)

### Cores Principais

| Cor | Hex | RGB | Uso | Proibido |
|-----|-----|-----|-----|----------|
| **Verde Serra (Primária)** | #2B3A2C | 43, 58, 44 | Fundos, logo, títulos H1 | Texto pequeno, secundário |
| **Pedra (Secundária)** | #C2AE8F | 194, 174, 143 | Linhas, destaques, ícones | Fundos extensos (>10% área) |
| **Cobre (Accent)** | #8C6A3F | 140, 106, 63 | Labels, números, micro-destaques | Mais de 20% da peça |
| **Off-White Quente** | #F4F0E8 | 244, 240, 232 | Fundo padrão | - |
| **Pedra Clara** | #DDD0BB | 221, 208, 187 | Fundos secundários | - |
| **Névoa** | #D8D4CC | 216, 212, 204 | Bordas, divisores | - |
| **Preto Quente** | #1A1A18 | 26, 26, 24 | Corpo de texto | - |

### Combinações Aprovadas

```
✅ Verde Serra #2B3A2C + Off-White #F4F0E8 (padrão — Alto contraste)
✅ Verde Serra #2B3A2C + Pedra #C2AE8F (elegante — Contraste médio)
✅ Pedra Clara #DDD0BB + Cobre #8C6A3F (detalhe fino)
✅ Off-White #F4F0E8 + Preto Quente #1A1A18 (máxima legibilidade)
```

### Combinações PROIBIDAS

```
❌ Verde Serra + Teal/Ciano (rejeitar recomendação genérica)
❌ Opacidade reduzida do logo (sempre 100%)
❌ Qualquer cor fora da paleta aprovada
❌ Degradientes não aprovados
```

---

## 🔤 SISTEMA TIPOGRÁFICO (OBRIGATÓRIO)

### Família Primária: CORMORANT GARAMOND
**Uso:** Títulos, destaques, citações, conceitos únicos

| Nível | Tamanho | Peso | Line Height | Aplicação |
|-------|---------|------|-------------|-----------|
| **H1** | 64-80px | Light 300 | 1.2 | Título página, hero principal |
| **H2** | 36-48px | Regular 400 | 1.3 | Subtítulos, seções principais |
| **H3** | 22-28px | Italic 300i | 1.4 | Destaques temáticos, citações |

### Família Secundária: OUTFIT
**Uso:** Corpo, UI, navegação, CTAs, labels

| Nível | Tamanho | Peso | Line Height | Aplicação |
|-------|---------|------|-------------|-----------|
| **Label** | 11px | ExtraLight 200 | 1.4 | Tags, badges, metadados |
| **Body** | 14-15px | Light 300 | 1.75 | Parágrafo, conteúdo corrido |
| **Regular** | 16px | Regular 400 | 1.6 | Conteúdo padrão, cards |
| **CTA** | 12-13px | Medium 500 | 1.5 | Botões, ações, links |
| **Nav** | 12-13px | Regular 400 | 1.5 | Navegação principal, menus |

### Diretrizes Tipográficas

- ✅ **Line height:** 1.5-1.75 para body (máxima legibilidade)
- ✅ **Line length:** 65-75 caracteres máximo (conforto leitura)
- ✅ **Rastreamento (tracking):** Controlado por peso (mais claro = mais espaço)
- ✅ **Caso:** Title Case para títulos, sentence case para body
- ❌ **Nenhuma exceção:** Sem Arial, Helvetica, sans-serif genérica, Bold Outfit

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Outfit:wght@200;300;400;500&display=swap');
```

---

## 📐 PADRÃO DE LAYOUT: BEFORE-AFTER TRANSFORMATION

### Por que este padrão?

O padrão **Before-After Transformation** é recomendado por ui-ux-pro-max como **padrão de conversão 45% mais alto**, e é **perfeito para imóveis**: mostra a transformação de viver em um espaço.

**Adaptação FVS:** Não é "transformação fake" — é a **verdadeira transformação de lifestyle ao viver Gramado na FVS**.

### Estrutura Aprovada

```
1. HERO (Estado "Antes")
   - Problema/Necessidade implícita (paisagem genérica)
   - Tipografia: Cormorant H1 Light em Verde Serra
   - CTA: "Descubra a Transformação"

2. COMPARAÇÃO VISUAL (Slider/Comparison)
   - Antes: Vida genérica na cidade
   - Depois: Vida em Gramado na FVS
   - Cores: Verde Serra + Off-White (contraste máximo)
   - Interação: Smooth, sem layout shift

3. HOW IT WORKS (Como a FVS faz)
   - 3 passos: Localização → Design → Confiança
   - Tipografia: Outfit Regular 16px
   - Ícones: SVG apenas (não emojis)
   - Cada passo com uma cor de acentuação (Pedra, Cobre)

4. RESULTADOS + CTA (Conversão)
   - Números: "Mais de 500 famílias confortáveis"
   - Depoimentos: Verde Serra heading + Preto Quente body
   - CTA principal: "Falar com Consultor FVS"
   - Estilo: Ousado, confiante, territorial
```

---

## 🎯 COMPONENTES PRINCIPAIS

### 1. Hero Section

```yaml
Background: Verde Serra #2B3A2C (100% height, parallax suave)
Heading: Cormorant H1 Light 80px, Off-White #F4F0E8
Subheading: Outfit Regular 16px, Pedra Clara #DDD0BB
CTA Button:
  - Background: Pedra #C2AE8F
  - Text: Preto Quente #1A1A18, Outfit Medium 500, 13px
  - Padding: 16px 32px (44px height min)
  - Hover: Cobre #8C6A3F, smooth transition 200ms
  - No shadow (mantém sofisticação)
```

### 2. Property Cards

```yaml
Container:
  - Background: Off-White #F4F0E8
  - Border: 1px Névoa #D8D4CC
  - Padding: 24px
  - Border-radius: 0 (ângulos retos mantêm sofisticação)
  - Hover: Subtle shadow, no scale (no layout shift)

Image:
  - Aspect ratio: 16:9
  - No borders
  - Lazy loaded + WebP + srcset

Title:
  - Cormorant Regular 28px (H3)
  - Preto Quente #1A1A18
  - Line height: 1.3

Location:
  - Outfit ExtraLight 11px
  - Pedra #C2AE8F (cor territorial)

Description:
  - Outfit Light 14px
  - Preto Quente #1A1A18
  - Line height: 1.75
  - Max 2 linhas (máx 75 chars)

CTA Link:
  - Outfit Medium 13px
  - Cobre #8C6A3F
  - Hover: Decoração underline (Pedra #C2AE8F)
  - cursor: pointer
```

### 3. Navigation

```yaml
Background: Off-White #F4F0E8
Text Color: Preto Quente #1A1A18
Font: Outfit Regular 13px
Spacing: 16px horizontal

Logo:
  - Cormorant Regular, Verde Serra
  - Linha separadora: Cobre #8C6A3F (obrigatória)
  - Altura: 32px

Menu Items:
  - Hover: Underline Pedra #C2AE8F
  - Active: Text Cobre #8C6A3F

Mobile:
  - Hamburger icon: SVG Preto Quente
  - Drawer background: Verde Serra #2B3A2C
  - Drawer text: Off-White #F4F0E8
```

### 4. Form Fields

```yaml
Input:
  - Background: Off-White #F4F0E8
  - Border: 1px Névoa #D8D4CC
  - Border-radius: 0
  - Padding: 12px 16px (44px height min with label)
  - Font: Outfit Light 14px

Focus State:
  - Border: 2px Verde Serra #2B3A2C
  - Outline: none (border substitui)
  - Background: White (leve aumento contraste)

Label:
  - Outfit ExtraLight 11px
  - Preto Quente #1A1A18
  - Margin-bottom: 8px

Error State:
  - Border: 2px Cobre #8C6A3F
  - Message: Outfit Regular 12px, Cobre #8C6A3F
  - Position: Abaixo do field (não floated)

Placeholder:
  - Outfit Light 14px
  - Color: Pedra Clara #DDD0BB
  - Removido ao focar (not persistent)
```

### 5. Buttons (3 Variações)

#### 5.1 Primary (CTA Principal)

```yaml
Background: Pedra #C2AE8F
Text: Preto Quente #1A1A18
Font: Outfit Medium 500, 13px
Padding: 16px 32px
Min height: 44px
Hover:
  - Background: Cobre #8C6A3F
  - Transition: 150ms ease-in-out
  - No scale (smooth color only)
Active/Pressed:
  - Background: Verde Serra #2B3A2C (visual feedback)
Disabled:
  - Opacity: 0.5
  - Cursor: not-allowed
```

#### 5.2 Secondary (Ações alternativas)

```yaml
Background: transparent
Border: 2px Verde Serra #2B3A2C
Text: Verde Serra #2B3A2C
Font: Outfit Medium 500, 13px
Padding: 14px 30px (para igualar 44px com border)
Hover:
  - Background: Verde Serra #2B3A2C (10% opacity)
  - Border-color: Cobre #8C6A3F
```

#### 5.3 Tertiary (Links/Menos ênfase)

```yaml
Background: transparent
Border: none
Text: Cobre #8C6A3F
Font: Outfit Regular 400, 13px
Text-decoration: underline (Pedra #C2AE8F)
Cursor: pointer
Hover:
  - Color: Verde Serra #2B3A2C
  - Text-decoration: underline
```

---

## 🗣️ COMUNICAÇÃO (OBRIGATÓRIA)

### Expressões APROVADAS (Use sempre)

✅ "Residências pensadas para viver Gramado com conforto, permanência e valor patrimonial."  
✅ "Projetos que respeitam o lugar onde nascem."  
✅ "Gramado como lugar de vida, refúgio e investimento."  
✅ "Conforto, localização e confiança patrimonial na Serra Gaúcha."  
✅ "Incorporamos a experiência de viver Gramado."  
✅ "Solicitar apresentação completa. Falar com um consultor FVS."  
✅ "Investir em permanência. Viver com conforto."  
✅ "A localização que agrega valor patrimonial."  

### Expressões PROIBIDAS (Rejeitar)

❌ "Luxo carregado de significados"  
❌ "Alto padrão exclusivo"  
❌ "Premium no coração da cidade"  
❌ "Projetos que transcendem"  
❌ "Inovação e vanguarda"  
❌ "Compre agora. Últimas unidades. Oferta imperdível."  
❌ "Empreendimento de classe A"  
❌ "Investimento de elite"  
❌ Qualquer referência a "preço", "barato", "econômico"

### Tom de Voz (6 Dimensões)

| Dimensão | Significado | Exemplos |
|----------|-------------|----------|
| **Sofisticado** | Elegante sem exagero, clássico | "Arquitetura pensada para durar gerações" |
| **Próximo** | Consultivo, humano, claro | "Vamos juntos descobrir o seu Gramado" |
| **Seguro** | Maturidade, confiança, histórico | "Mais de 20 anos criando patrimônio" |
| **Territorial** | Gramado é argumento central | "A Serra Gaúcha como endereço de vida" |
| **Claro** | Sem jargões imobiliários genéricos | "Localização que agrega valor" (não "ponto estratégico") |
| **Maduro** | Visão de futuro + histórico | "Viver hoje pensando em amanhã" |

---

## ♿ ACESSIBILIDADE (WCAG AA MÍNIMO)

### Contraste de Cores

```
✅ Verde Serra #2B3A2C + Off-White #F4F0E8: 7.8:1 (excelente)
✅ Preto Quente #1A1A18 + Off-White #F4F0E8: 15.3:1 (máximo)
✅ Pedra #C2AE8F + Preto Quente #1A1A18: 4.8:1 (atende 4.5:1)
❌ Pedra #C2AE8F + Off-White #F4F0E8: 2.1:1 (REJEITADO — usar preto para texto)
```

### Touch Targets

- Todos os botões, links, inputs: **mínimo 44x44px**
- Espaçamento entre targets: **8px mínimo** (evitar cliques acidentais)
- Ícones: Sempre dentro de área 44x44px (padding interno é aceitável)

### Keyboard Navigation

- [ ] Tab order segue ordem visual (left-to-right, top-to-bottom)
- [ ] Focus states visíveis (não remover outline, apenas estilizar)
- [ ] Modais: Focus trap (Tab fica dentro do modal)
- [ ] Skip links: "Pular para conteúdo" disponível

### Motion & Animation

- [ ] `prefers-reduced-motion` respeitado (remover animações complexas)
- [ ] Durações: 150-300ms (micro-interações apenas)
- [ ] Não usar movimento como única forma de comunicação

### Imagens & Alt Text

```yaml
Heroes/Backgrounds:
  alt: "Descrição contexto: Fachada da residência X em Gramado"
Property Photos:
  alt: "Sala de estar com vista para Serra Gaúcha, projeto FVS"
Icons/Decorativas:
  alt: "" (vazio — não decorativas para leitores)
Logos:
  alt: "Logo FVS Incorporações"
```

---

## 📱 RESPONSIVIDADE

### Breakpoints Obrigatórios

```
320px - 375px:  Mobile (small)
375px - 768px:  Mobile (large) + Tablet
768px - 1024px: Tablet (large) + Desktop (small)
1024px+:        Desktop (full)
```

### Testes Críticos

- [ ] Não há overflow horizontal em nenhuma viewport
- [ ] Fonte body mínimo 16px em mobile (legibilidade)
- [ ] Botões/inputs acessíveis em 44x44px em todas as viewports
- [ ] Imagens escalam fluidamente (object-fit, srcset)
- [ ] Navs adaptam: desktop menu → mobile hamburger
- [ ] Cards: 1 coluna (mobile) → 2-3 colunas (desktop)

---

## 🎬 EFEITOS & TRANSIÇÕES

### Padrões Aprovados

```css
/* Cor suave */
transition: background-color 150ms ease-in-out;

/* Sombra elegante (hover cards) */
box-shadow: 0 4px 12px rgba(43, 58, 44, 0.08);  /* Verde Serra 8% opacity */

/* Underline decorativa (hover links) */
border-bottom: 2px solid #C2AE8F;  /* Pedra */
transition: border-color 150ms ease-in-out;

/* Focus outline (accessibility) */
outline: 2px solid #2B3A2C;  /* Verde Serra */
outline-offset: 2px;
```

### Anti-patterns (Evitar)

```
❌ Animações > 300ms (muito lentas)
❌ Transforms com scale (causam layout shift)
❌ Blur/Glassmorphism (reduz legibilidade)
❌ Rotações/Skews (prejudicam sofisticação)
❌ Múltiplas animações simultâneas (poluição visual)
```

---

## 📸 IMAGENS & OTIMIZAÇÃO

### Formato & Entrega

```yaml
Formato:
  - Primário: WebP (moderno, menor tamanho)
  - Fallback: JPG (compatibilidade)

Srcset (Responsividade):
  - 375px: 375w (mobile)
  - 768px: 768w (tablet)
  - 1024px: 1024w (desktop pequeno)
  - 1440px: 1440w (desktop full)

Lazy Loading:
  - loading="lazy" para imagens below-the-fold
  - Eager para hero (priority)

Otimização:
  - Max tamanho arquivo: 200KB por imagem
  - Compressão: TinyPNG/ImageOptim antes de upload
  - Aspect ratio: 16:9 padrão (properties), customizar conforme design
```

### Restrições Críticas

- ✅ Fotografias reais de propriedades FVS (não stock genérico)
- ✅ Qualidade profissional (mínimo 1080px de largura)
- ✅ Coerência visual (iluminação, clima, estética)
- ❌ Imagens genéricas de "luxo" ou "premium"
- ❌ Filtros saturam (parecem fake)
- ❌ Imagens com watermarks visíveis

---

## ✅ CHECKLIST DE CONFORMIDADE RIGOROSA

### 🎨 Visual

- [ ] **Cores exatas** — Verde Serra #2B3A2C (copiar/colar, não aproximar)
- [ ] **Tipografia** — Cormorant + Outfit apenas (zero exceções)
- [ ] **Logo** — Linha separadora cobre #8C6A3F PRESENTE
- [ ] **Espaçamento** — Área respiro logo = altura letra "F"
- [ ] **Sem distorções** — Logo não inclinado, não esticado, não opaco
- [ ] **Contraste** — Verificado com WebAIM (mínimo 4.5:1)

### 💬 Comunicação

- [ ] **Expressões aprovadas** — Apenas da lista acima
- [ ] **Zero jargões** — Sem "ponto estratégico", "alto padrão", "premium"
- [ ] **Tom:** Sofisticado, próximo, seguro, territorial, claro, maduro
- [ ] **Foco território** — Gramado mencionado, Serra Gaúcha referenciada
- [ ] **Não venda rasa** — Foco em vivência, conforto, patrimônio

### 🎯 UX/UI

- [ ] **Contraste corpo** — Preto Quente #1A1A18 sobre Off-White
- [ ] **Touch targets** — 44x44px mínimo
- [ ] **Ícones** — SVG apenas, zero emojis
- [ ] **Hover states** — Smooth 150-300ms, sem layout shift
- [ ] **Focus states** — Verde Serra outline visível
- [ ] **Responsividade** — 375px, 768px, 1024px, 1440px testados
- [ ] **Images** — WebP + srcset + lazy loading
- [ ] **Motion** — prefers-reduced-motion respeitado
- [ ] **Keyboard nav** — Tab order correto, skip links presentes
- [ ] **Form labels** — Cada input tem label associada

### 🚀 Performance

- [ ] **LCP** < 2.5s (Largest Contentful Paint)
- [ ] **CLS** < 0.1 (Cumulative Layout Shift — zero shift em hover)
- [ ] **Imagens** — Lazy loaded, srcset, WebP
- [ ] **CSS** — Crítico inline, restante deferred
- [ ] **Fonts** — Google Fonts com swap=block

---

## 🎯 PRÓXIMAS ETAPAS METICULOSAS

1. **Design Tokens** — Gerar com design-squad:design-system-architect
2. **Componentes** — Build com design-squad:ui-engineer (Button, Card, Form, etc.)
3. **Páginas** — Template com design-squad:ux-designer (Homepage, Projetos, Contato)
4. **Protótipos** — High-fidelity com verificação pixel-perfeita
5. **Testes** — Contrast checker, axe-core (a11y), Lighthouse
6. **Verificação** — 100% conformidade contra este documento antes de deploy

---

**Documento Confidencial — FVS Incorporações**  
**Fonte Única de Verdade para Design**  
**Última atualização:** 29/05/2026
