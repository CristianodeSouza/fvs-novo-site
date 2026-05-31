# CLAUDE.md — Regras de Desenvolvimento FVS Novo Site

**Lido primeiro? Sim → Continua. Não? Leia tudo abaixo antes de alterar qualquer código.**

---

## 📋 LEITURA OBRIGATÓRIA ANTES DE CODIFICAR

Antes de alterar QUALQUER código ou tomar decisão de implementação, leia INTEGRALMENTE:

1. **DOCUMENTO_MESTRE_FVS_SITE_PREMIUM_CLAUDE_CODE.md** ← SOURCE OF TRUTH ABSOLUTA
2. **docs/00-project-vision.md** (será criado em Fase 1)
3. **docs/01-visual-dna.md** (será criado em Fase 1)
4. **docs/02-design-system.md** (será criado em Fase 1)
5. **docs/03-ux-storytelling.md** (será criado em Fase 1)
6. **docs/04-motion-system.md** (será criado em Fase 1)
7. **docs/07-acceptance-criteria.md** (será criado em Fase 1)
8. **docs/08-visual-qa-checklist.md** (será criado em Fase 1)

**Nenhuma implementação deve avançar sem ler DOCUMENTO_MESTRE.**

---

## 🎯 PRINCÍPIO CENTRAL

Este NÃO é um site institucional comum.

Este é uma **experiência digital premium** para uma incorporadora de alto padrão, onde:

- A **qualidade visual é a prioridade máxima**
- A estética tem o mesmo peso que a arquitetura técnica
- A implementação só avança quando a experiência estética está validada
- A Home DEVE ser aprovada antes de qualquer outra página

**Objetivo:** Reproduzir a sensação premium do Springs.estate, adaptada à identidade FVS.

---

## 🏗️ STACK TÉCNICO (OBRIGATÓRIO)

```
Framework:        Next.js 14 + App Router (NOT Pages Router)
Styling:          Tailwind CSS + CSS Modules (para customização visual)
UI Components:    shadcn/ui (customizado visualmente)
Motion:           Framer Motion (animações premium)
Fonte:            Cormorant Garamond (serif) + Outfit (sans)
Hospedagem:       Vercel
TypeScript:       Strict mode habilitado
```

**NÃO use:**
- Pages Router (obsoleto para este projeto)
- CSS-in-JS genérico (use CSS Modules ou Tailwind)
- shadcn/ui cru sem customização visual
- Animações Framer Motion saltitantes/genéricas

---

## 📁 ESTRUTURA DE PROJETO

```
fvs-site-novo/
├── app/
│   ├── layout.tsx                    # Layout raiz (App Router)
│   ├── page.tsx                      # Home /
│   ├── about/
│   │   └── page.tsx                  # /about
│   ├── empreendimentos/
│   │   ├── page.tsx                  # /empreendimentos (listagem)
│   │   └── [slug]/
│   │       └── page.tsx              # /empreendimentos/[slug] (detalhe)
│   └── contato/
│       └── page.tsx                  # /contato
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── ui/
│   │   ├── PremiumButton.tsx         # Botão customizado (pedra + verde)
│   │   ├── EditorialTitle.tsx        # Título editorial (Cormorant)
│   │   ├── ImageFrame.tsx            # Frame para imagens premium
│   │   ├── ScrollReveal.tsx          # Componente de reveal com Framer Motion
│   │   ├── SectionLabel.tsx
│   │   └── index.ts
│   └── sections/
│       ├── HeroSection.tsx           # Hero cinematográfico
│       ├── ManifestoSection.tsx      # Seção manifesto (visão FVS)
│       ├── NatureSection.tsx         # Natureza/Lugar (Gramado)
│       ├── ArchitectureSection.tsx   # Arquitetura (design, obra)
│       ├── ResidencesSection.tsx     # Empreendimentos
│       ├── LegacySection.tsx         # Confiança/Legado
│       ├── FinalCTASection.tsx       # CTA final
│       └── index.ts
│
├── docs/
│   ├── 00-project-vision.md          # Visão estratégica
│   ├── 01-visual-dna.md              # DNA visual (cores, tipografia, espaçamento)
│   ├── 02-design-system.md           # Design system (componentes, tokens)
│   ├── 03-ux-storytelling.md         # Jornada emocional do usuário
│   ├── 04-motion-system.md           # Sistema de animação (Framer Motion)
│   ├── 05-functional-requirements.md # RF — Requisitos funcionais
│   ├── 06-non-functional-requirements.md # RNF — Performance, acessibilidade
│   ├── 07-acceptance-criteria.md     # Critérios de aceite visual
│   ├── 08-visual-qa-checklist.md     # Checklist de QA visual
│   ├── 09-component-specs.md         # Especificações de componentes
│   ├── 10-content-model.md           # Modelo de conteúdo
│   ├── 11-implementation-log.md      # Log de implementação
│   └── visual-qa/
│       └── screenshots/              # Screenshots de validação
│
├── lib/
│   ├── data.ts                       # Conteúdo hardcoded (empreendimentos, stats)
│   └── utils.ts
│
├── content/
│   ├── site.ts                       # Copy global (header, footer)
│   └── empreendimentos.ts            # Dados de empreendimentos
│
├── styles/
│   ├── globals.css                   # CSS global + Tailwind imports
│   └── animations.css                # Keyframes customizados
│
├── public/                           # Imagens, icones, assets
├── tailwind.config.ts                # Configuração Tailwind (tokens)
├── next.config.js                    # Configuração Next.js
├── tsconfig.json                     # TypeScript strict
├── package.json
├── CLAUDE.md                         # Este arquivo
└── README.md                         # Instruções projeto
```

---

## 🎨 PALETA DE CORES (OBRIGATÓRIA)

```css
:root {
  /* Primárias */
  --color-verde-serra:   #2B3A2C;   /* Principal — fundos escuros, hero, footer */
  --color-verde-profundo: #1D281F;  /* Overlays, seções de impacto */
  --color-pedra:         #C2AE8F;   /* Botões, detalhes, labels */
  --color-pedra-clara:   #DDD0B8;   /* Cards, seções alternadas */
  --color-off-white:     #F4F0E8;   /* Fundos claros, leitura */
  --color-areia:         #E8DDC8;   /* Transições suaves */

  /* Textos */
  --color-preto-quente:  #171713;   /* Texto corpo em fundos claros */
  --color-branco-quente: #FAF7F0;   /* Texto sobre fundos verdes */
}
```

**Regra de uso:**
- Verde profundo: hero, footer, overlays, seções de impacto
- Off-white: seções editoriais, leitura, transições
- Pedra: botões, detalhes, labels, estados ativos
- Preto/branco quente: NUNCA usar preto puro (#000) ou branco puro (#FFF)

**Validação:** Todas as cores DEVEM vir de CSS variables. Nenhuma cor hard-coded.

---

## 📝 TIPOGRAFIA (OBRIGATÓRIA)

```css
:root {
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans:  'Outfit', system-ui, sans-serif;

  /* Hierarquia — clamp para responsividade */
  --hero-title-desktop: clamp(80px, 9vw, 156px);
  --hero-title-mobile:  clamp(44px, 13vw, 72px);
  
  --section-title-desktop: clamp(64px, 7vw, 120px);
  --section-title-mobile:  clamp(38px, 12vw, 64px);
  
  --editorial-title-desktop: clamp(48px, 5vw, 88px);
  --editorial-title-mobile:  clamp(34px, 10vw, 52px);
  
  --body-large: clamp(20px, 1.5vw, 28px);
  --body-medium: 18px;
  --body-small: 15px;
  
  --label-size: 12px;
  --label-letter-spacing: 0.16em;
}
```

**Regras tipográficas:**
1. Títulos = Cormorant Garamond weight 300-400 (NUNCA bold)
2. Corpo/UI = Outfit weight 400-500
3. NUNCA usar font-weight > 500
4. Line-height generoso (1.5-1.75 para body)
5. Limitar blocos de texto a 720px máximo
6. No mobile, textos nunca devem parecer longos

---

## ⏱️ SISTEMA DE ANIMAÇÃO (Framer Motion)

```ts
// Motion tokens
export const motionTokens = {
  easePremium: [0.25, 0.74, 0.22, 0.99],  // Springs cubic-bezier
  easeSlow: [0.16, 1, 0.3, 1],
  durationFast: 0.35,     // Micro-interações
  durationMedium: 0.8,    // Botões, cards
  durationSlow: 1.2,      // Entrada de seção
  staggerSmall: 0.08,     // Delay entre elementos
  staggerMedium: 0.14,
}
```

**Padrões animação Framer Motion:**

- **Entrada de título:** opacity 0→1, y 48→0, duration 1.0s, ease premium
- **Entrada de texto:** opacity 0→1, y 24→0, delay 0.15s, duration 0.8s
- **Entrada de imagem:** scale 1.04→1, opacity 0→1, duration 1.2s
- **Parallax sutil:** movimento máx 40-120px (NUNCA exagerado)
- **Hover botão:** background suave, leve translateY -2px, SEM zoom exagerado

**Proibido:**
- Animações rápidas demais (parecer template)
- Parallax exagerado (gerar náusea)
- Scroll-jacking pesado
- Efeitos "divertidos" ou saltitantes

---

## 🏗️ FASES OBRIGATÓRIAS

### **Fase 1 — Preparação (2-3 horas)**

Antes de codar QUALQUER componente:

- ✅ Criar `/docs/` com 12 arquivos obrigatórios
- ✅ Criar `CLAUDE.md` (este arquivo)
- ✅ Criar design tokens (tailwind.config.ts)
- ✅ Instalar dependências: Framer Motion, shadcn/ui
- ✅ Criar conteúdo base (`lib/data.ts`, `content/`)
- ✅ Criar estrutura vazia de componentes
- ✅ Validar build: `npm run build` sucede

**Checkpoint:** `npm run dev` inicia sem erros.

---

### **Fase 2 — Design System**

Implementar base visual:

- Colores, fontes, spacing, shadows
- PremiumButton (pedra + verde)
- EditorialTitle (Cormorant)
- ScrollReveal (Framer Motion)
- Image optimization

**Checkpoint:** Página `/design-system` (temporária) mostra todos elementos funcionando.

---

### **Fase 3 — Home Acima da Dobra (PARADA OBRIGATÓRIA)**

Implementar APENAS:

- Header (sticky, navegação discreta)
- Hero (100vh, cinematográfico, Framer Motion)

**VALIDAÇÃO VISUAL OBRIGATÓRIA:**
- Compare contra Springs.estate em: impacto, composição, escala tipográfica, imagens
- Nota de 0-10 cada critério
- **Mínimo 8.5 média, nenhum < 8**
- Se <8.5, PARE e ajuste

**NÃO AVANÇAR até aprovação visual.**

---

### **Fase 4 — Home Completa**

Implementar:

- Manifesto (visão FVS)
- Natureza/Lugar (Gramado, stats)
- Arquitetura (gallery, design)
- Empreendimentos (grid, tabs, cards)
- Legado/Confiança (números)
- CTA final (conversão elegante)
- Footer

---

### **Fase 5 — QA Visual Completo**

Gerar screenshots (375px, 430px, 768px, 1440px, 1920px).

Executar **Matriz de QA Comparativa** (Springs):

1. Impacto do Hero → nota 0-10
2. Uso de imagens grandes → nota 0-10
3. Ritmo editorial → nota 0-10
4. Escala tipográfica → nota 0-10
5. Respiro entre seções → nota 0-10
6. Sofisticação botões → nota 0-10
7. Ausência de visual genérico → nota 0-10
8. Qualidade mobile → nota 0-10
9. Harmonia paleta → nota 0-10
10. Fluidez animações → nota 0-10

**Critério aprovação:** Nota média >= 8.5, nenhum < 8.

**Reprovação automática se:**
- Parecer template
- Parecer site institucional antigo
- Hero sem impacto
- Cards pequenos demais
- Excesso textos/ícones
- Ausência respiro
- shadcn/ui visualmente cru
- Mobile quebrado

---

### **Fase 6 — Ajustes Finos**

- Espaçamentos
- Tipografia
- Crop de imagens
- Velocidade animações
- Proporções
- Contraste
- Comportamento mobile

---

### **Fase 7 — Outras Páginas**

**SÓ DEPOIS DA HOME APROVADA.**

---

## ✅ REQUISITOS VISUAIS OBRIGATÓRIOS

### Hero
- ✅ Ocupa mínimo 100vh
- ✅ Imagem/mosaico tem impacto
- ✅ Título grande e memorável
- ✅ Texto curto
- ✅ CTA discreto
- ✅ Sensação de profundidade
- ❌ NÃO parecer banner comum
- ❌ NÃO parecer layout centralizado genérico

### Tipografia
- ✅ Títulos em escala premium
- ✅ Serif bem aplicada (Cormorant)
- ✅ Textos respiram
- ✅ Hierarquia clara
- ❌ NÃO parecer tudo mesmo tamanho
- ❌ NÃO parecer blocos institucionais

### Espaçamento
- ✅ Há respiro visual
- ✅ Seções parecem luxuosas
- ✅ Nada parecer apertado
- ❌ NÃO parecer compacto
- ❌ NÃO haver excesso conteúdo por tela

### Imagens
- ✅ Dominam a experiência
- ✅ Crops elegantes
- ✅ Fotografia premium
- ❌ NÃO parecer banco genérico
- ❌ NÃO parecer pequenas demais

---

## 🛠️ COMPONENTES BASE OBRIGATÓRIOS

Criar com **shadcn/ui customizado** (nunca cru):

```
components/layout/Header.tsx
components/layout/Footer.tsx
components/ui/PremiumButton.tsx         (pedra bg, verde text, uppercase, sans)
components/ui/EditorialTitle.tsx        (Cormorant, escala premium)
components/ui/SectionLabel.tsx
components/ui/ImageFrame.tsx            (proporções obrigatórias)
components/ui/ScrollReveal.tsx          (Framer Motion + Intersection Observer)
components/sections/HeroSection.tsx
components/sections/ManifestoSection.tsx
components/sections/NatureSection.tsx
components/sections/ArchitectureSection.tsx
components/sections/ResidencesSection.tsx
components/sections/LegacySection.tsx
components/sections/FinalCTASection.tsx
```

---

## 🚫 REGRAS ABSOLUTA — NUNCA FAZER

1. ❌ Criar layout genérico (parecer template)
2. ❌ Transformar em landing page comum
3. ❌ Usar aparência SaaS ou dashboard
4. ❌ Usar shadcn/ui cru sem customização visual
5. ❌ Improvisar direção de arte
6. ❌ Substituir Springs por padrões próprios
7. ❌ Reduzir espaçamentos para "caber mais conteúdo"
8. ❌ Criar cards pequenos demais
9. ❌ Criar seções com excesso de texto
10. ❌ Avançar para novas páginas antes da Home estar visualmente aprovada
11. ❌ Deixar decisões importantes apenas no local
12. ❌ Usar cores hard-coded (SEMPRE CSS variables)
13. ❌ Usar animações Framer Motion genéricas/saltitantes
14. ❌ Parecer site institucional antigo

---

## 📊 PERFORMANCE MÍNIMA

- Lighthouse Performance desktop: 90+
- Lighthouse Performance mobile: 80+
- LCP: < 2.8s
- CLS: < 0.1
- WCAG AA acessibilidade

---

## 📝 EXPRESSÕES OBRIGATÓRIAS

**Aprovadas (use):**
- ✅ conforto
- ✅ permanência
- ✅ confiança
- ✅ valor patrimonial
- ✅ território

**Proibidas (nunca use):**
- ❌ luxo
- ❌ premium
- ❌ exclusivo
- ❌ elite
- ❌ inovação
- ❌ vanguarda

---

## 🚀 COMANDOS

```bash
npm install                  # Instalar dependências
npm run dev                  # Dev server (localhost:3000)
npm run build                # Build production
npm run lint                 # TypeScript + ESLint check
```

---

## 🔗 REFERÊNCIAS

- **DOCUMENTO_MESTRE:** C:\Users\User\Downloads\DOCUMENTO_MESTRE_FVS_SITE_PREMIUM_CLAUDE_CODE.md
- **Referência Visual:** https://springs.estate/
- **GitHub:** github.com/CristianodeSouza/fvs-novo-site
- **Live:** https://fvs-novo-site.vercel.app

---

## 💾 REPOSITÓRIO

Toda decisão deve estar versionada no GitHub.

**Proibido:**
- Depender de arquivos soltos na máquina local
- Instruções não versionadas
- Mudanças sem commit
- Prompts avulsos sem registro

---

**Versão:** 1.0 (alinhado com DOCUMENTO_MESTRE)  
**Última atualização:** 2026-05-30  
**Status:** Ready for Phase 1 Execution

