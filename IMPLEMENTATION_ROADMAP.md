# 🚀 IMPLEMENTATION ROADMAP — FVS NOVO SITE
## Blueprint Executável para Design Squad Agents

**Versão:** 1.0  
**Data:** 29/05/2026  
**Status:** ✅ Design Architecture Completa — Pronto para Build

---

## 📊 ESTRUTURA DOCUMENTARIA (Fonte Única de Verdade)

```
FVS_NOVO_SITE/
├── 📄 DESIGN_ARCHITECTURE.md         ← Identidade Visual (obrigatória)
├── 📄 DESIGN_SYSTEM_INTEGRATED.md    ← Sistema + ui-ux-pro-max
├── 📄 COMPONENTS_SPECIFICATION.md    ← Componentes detalhados
├── 📄 PRD_MAPPING.md                 ← Requisitos funcionais
├── 📄 IMPLEMENTATION_ROADMAP.md      ← Este arquivo
├── 📄 FVS - Identidade Visual.pdf    ← Manual visual oficial
├── 📄 NOVO_SITE_FVS_PRD_COMPLETO.docx ← Spec funcional oficial
├── 🎨 design/                        ← Artifacts (tokens, prototypes)
└── 💻 src/                           ← Code (próxima fase)
```

---

## ✅ O QUE JÁ FOI FEITO

### Fase 1: Design Architecture ✅ CONCLUÍDA

#### 1.1 Extração de Identidade Visual
- ✅ Leitura completa do PDF "FVS - Identidade Visual.pdf" (95.2KB, 9 seções)
- ✅ Codificação rigorosa em DESIGN_ARCHITECTURE.md
- ✅ Paleta cromática completa com hex codes
  - Verde Serra #2B3A2C (primária)
  - Pedra #C2AE8F (secundária)
  - Cobre #8C6A3F (accent)
  - Off-White Quente #F4F0E8 (background)
  - + 3 cores secundárias
- ✅ Tipografia: Cormorant Garamond + Outfit (sistema único)
- ✅ Logo variações, linha separadora cobre
- ✅ 6 pilares marca: Conforto, Permanência, Confiança, Território, Valor Patrimonial, Cuidado
- ✅ 6 dimensões tom/voz
- ✅ Expressões aprovadas vs. proibidas (comunicação rigorosa)

#### 1.2 Integração com ui-ux-pro-max Skill
- ✅ Invocação do skill: "real estate luxury property incorporation elegant professional Gramado Serra Gaúcha"
- ✅ Recomendações recebidas: Before-After Transformation pattern + Exaggerated Minimalism
- ✅ Adaptação para cores FVS (rejeitou sugestões genéricas Teal, manteve Verde Serra)
- ✅ Integração de best practices: transições contemplativas, hover states, responsividade

#### 1.3 Análise de Referências Elegantes
- ✅ Leitura design.md (LUMEN — La Chambre Noire)
  - Dark immersive experience, Cormorant Garamond + Inter
  - Linear navigation, progressive revelation
  - Contemplative transitions (240ms-1800ms)
- ✅ Análise lunchlab.fr (Lunchlab)
  - Grid simétrico, navegação linear, elevação progressiva
  - Botões elegantes, cards padronizados
  - Padrão de revelação visual

#### 1.4 Especificação de Componentes
- ✅ COMPONENTS_SPECIFICATION.md completo com:
  - Hero section (100vh, paralax, tipografia escalonada)
  - Property cards (grid responsivo, Before-After slider)
  - Navigation bar (sticky, mobile drawer, logo com linha cobre)
  - Buttons (Primary, Secondary, Tertiary com estados completos)
  - Form fields (inputs, labels, validações, error states)
  - Footer (grid 4 colunas, newsletter, sociais)
  - Transições & animações (4 escalas: fast, base, slow, cine)
  - Responsividade móvel-first (375px, 768px, 1024px, 1440px)
  - Acessibilidade WCAG AA (contraste 4.5:1, focus states, alt text)

#### 1.5 Mapeamento de Requisitos PRD
- ✅ PRD_MAPPING.md com:
  - Arquitetura navegação: 5 páginas principais + estrutura
  - Fluxos usuário: exploração, busca, compartilhamento
  - Formulários & validações
  - Integrações: email, CRM, analytics, SEO
  - Compliance com brand voice
  - Roadmap 5 fases

---

## ⏳ PRÓXIMAS FASES (Roadmap)

### Fase 2: Design Tokens & High-Fidelity Prototypes (Próxima — Dias 1-3)

**Responsável:** design-squad:design-system-architect

**Entregáveis:**
- [ ] Design tokens file (CSS, JSON, Figma)
  - Colors: variáveis para todas as 7 cores
  - Typography: scales, weights, families
  - Spacing: 8px grid (8px, 16px, 24px, 32px, 48px, 64px)
  - Shadows: elevation system (0-24px)
  - Transitions: durations & easings
  - Breakpoints: 375px, 768px, 1024px, 1440px

- [ ] High-fidelity prototypes (Figma)
  - Frame por página: Homepage, Projects, Property Detail, Contact, About
  - Component library: Button variants, Card, Form, Nav, Footer
  - Responsive layouts: Desktop 1440px + Tablet 768px + Mobile 375px
  - Anotações: constraint settings, auto-layout, components
  - Verificação: 100% conformidade a DESIGN_SYSTEM_INTEGRATED.md

**Critério de Sucesso:**
- ✅ Cada cor usa hex exato (sem aproximações)
- ✅ Tipografia usa apenas Cormorant + Outfit
- ✅ Contraste mínimo 4.5:1 verificado (WebAIM contrast checker)
- ✅ Botões em variação: Normal, Hover, Active, Disabled, Focus
- ✅ Componentes têm estados de vazio, loading, erro
- ✅ Responsividade testada em 3 breakpoints

---

### Fase 3: UI Engineering (Componentes Reutilizáveis) — Dias 4-8

**Responsável:** design-squad:ui-engineer

**Entregáveis:**

#### 3.1 Frontend Stack Setup
- [ ] Next.js/React project scaffolding
- [ ] Tailwind CSS com design tokens
  - Custom colors (Verde Serra, Pedra, Cobre, etc)
  - Custom typography (Cormorant + Outfit)
  - Custom breakpoints
  - Custom spacing scale
- [ ] Directory structure:
  ```
  src/
  ├── components/
  │   ├── Button/
  │   ├── Card/
  │   ├── Form/
  │   ├── Hero/
  │   ├── Navigation/
  │   └── ...
  ├── styles/
  │   ├── globals.css
  │   └── tokens.css
  ├── pages/
  │   ├── index.tsx
  │   ├── projects/
  │   ├── contact/
  │   └── ...
  ├── lib/
  │   └── constants.ts (colors, sizes, etc)
  └── public/
  ```

#### 3.2 Atomic Component Build

**Button Component Suite**
- [ ] Primary button (Pedra bg, Preto Quente text)
- [ ] Secondary button (border Verde Serra)
- [ ] Tertiary button (link style)
- [ ] Estados: normal, hover, active, disabled, focus
- [ ] Responsividade: 44x44px minimum touch target
- [ ] Transições: 150ms ease-in-out, no layout shift
- [ ] Acessibilidade: aria-label, focus-visible, cursor-pointer

**Card Component**
- [ ] Property card (imagem + meta + cta)
- [ ] Hover: subtle shadow (Verde Serra 8% opacity), no scale
- [ ] Lazy loading image
- [ ] Srcset: 375w, 768w, 1024w, 1440w
- [ ] Accessibility: alt text, heading hierarchy

**Form Component Suite**
- [ ] Input field (text, email, tel)
- [ ] Textarea
- [ ] Select/dropdown
- [ ] Checkbox
- [ ] Validações: required, email, min-length, etc
- [ ] Error states: border Cobre, message below
- [ ] Focus: border Verde Serra 2px, background subtle whitening
- [ ] Touch targets: 44x44px mínimo

**Navigation Components**
- [ ] Sticky navbar (desktop + mobile)
- [ ] Desktop menu (horizontal)
- [ ] Mobile drawer (slide from left)
- [ ] Logo component (with separator line)
- [ ] Breadcrumbs

**Hero Component**
- [ ] Full-screen container (100vh)
- [ ] Parallax background image
- [ ] Tipografia escalonada (H1 + subheading)
- [ ] CTA button
- [ ] Scroll indicator com bounce animation

#### 3.3 Page Templates

**Homepage Template**
- [ ] Hero section
- [ ] Featured properties grid
- [ ] Territory section
- [ ] Trust/About section
- [ ] Newsletter signup
- [ ] Footer

**Projects Listing Page**
- [ ] Header + filtros
- [ ] Property cards grid (responsive)
- [ ] Pagination / Load more
- [ ] Integração com dados reais

**Property Detail Page**
- [ ] Breadcrumbs
- [ ] Hero image
- [ ] Image gallery/slider
- [ ] Before-after comparison slider
- [ ] Property metadata
- [ ] Description (conformidade expressões)
- [ ] Map (Google Maps embed)
- [ ] CTAs: Solicitar, Compartilhar
- [ ] Related properties

**Contact Page**
- [ ] Hero
- [ ] Contact form (integrated)
- [ ] Contact info
- [ ] Map location

**About Page**
- [ ] Brand story
- [ ] Missão/Visão/Valores
- [ ] Timeline/histórico
- [ ] Depoimentos
- [ ] Team (optional)

#### 3.4 Integrations

- [ ] Form submission → Email
- [ ] Form submission → CRM
- [ ] Email templates (welcome, confirmation)
- [ ] Google Analytics 4 setup
- [ ] Google Search Console integration
- [ ] Meta tags & structured data (SEO)

**Critério de Sucesso:**
- ✅ Todos os componentes passam Accessibility Insights
- ✅ Lighthouse score: 90+ em Performance, Accessibility, Best Practices
- ✅ CLS < 0.1 (zero layout shift em hover)
- ✅ LCP < 2.5s
- ✅ Responsividade testada em 375px, 768px, 1024px, 1440px
- ✅ Contraste verificado WebAIM em light/dark modes

---

### Fase 4: Content & Copy — Dias 9-10

**Responsável:** Content writer + FVS team

**Entregáveis:**
- [ ] Homepage copy (Hero, sections)
- [ ] Property descriptions (DEVEM usar expressões aprovadas)
- [ ] About page content
- [ ] Contact page messaging
- [ ] Meta descriptions (SEO)
- [ ] Alt texts (imagens)
- [ ] Form labels & help text
- [ ] Email templates

**Constraint:**
- ✅ **ZERO desvios de comunicação** — todas expressões da lista aprovada
- ✅ Foco: Conforto, Permanência, Confiança, Território, Valor Patrimonial
- ✅ Rejeitar: Luxo, Premium, Exclusivo, Inovação, Vanguarda

---

### Fase 5: Testing & QA — Dias 11-14

**Entregáveis:**

#### 5.1 Functional Testing
- [ ] Formulário: submit, validação, confirmação
- [ ] Navegação: todos links funcionam
- [ ] Filtros (projects): filtering funciona
- [ ] Imagens: load corretamente, lazy loading funciona
- [ ] Responsividade: sem scroll horizontal, sem bugs em breakpoints
- [ ] Compartilhamento: buttons funcionam (WhatsApp, Facebook, etc)

#### 5.2 Accessibility Audit
- [ ] axe-core: zero critical + major issues
- [ ] WAVE: zero errors
- [ ] Lighthouse accessibility: 100 ou 95+
- [ ] Keyboard navigation: site completamente navegável
- [ ] Focus visible: todos interativos têm focus ring
- [ ] Color contrast: 4.5:1 minimum em todas combinações
- [ ] Alt text: todas imagens significativas têm alt
- [ ] Form labels: todos inputs têm label

#### 5.3 Performance Optimization
- [ ] Imagens: WebP + srcset + lazy loading
- [ ] CSS: minified, critical inline
- [ ] JavaScript: code splitting, lazy loading
- [ ] Fonts: font-display: swap, preload fonts
- [ ] Metrics:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
  - TTFB: < 600ms

#### 5.4 SEO & Meta
- [ ] Sitemap.xml gerado
- [ ] Meta tags em todas páginas
- [ ] Open Graph tags
- [ ] Structured data (Organization, LocalBusiness, Product)
- [ ] robots.txt
- [ ] Google Search Console verification
- [ ] Google Analytics 4 tracking

#### 5.5 Security
- [ ] HTTPS only
- [ ] CSP (Content Security Policy)
- [ ] Form validation (server-side)
- [ ] CSRF protection
- [ ] No SQL injection
- [ ] No XSS vulnerabilities
- [ ] Security headers

#### 5.6 Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (Chrome, Safari)

**Critério de Sucesso:**
- ✅ Lighthouse: 90+ em todos metrics
- ✅ axe-core: zero critical issues
- ✅ Responsividade: 100% em 375px, 768px, 1024px, 1440px
- ✅ Accessibility: WCAG AA compliant
- ✅ Performance: CLS < 0.1, LCP < 2.5s
- ✅ Todos testes manuais passam

---

### Fase 6: Staging & Launch — Dias 15-16

**Entregáveis:**
- [ ] Staging deployment
- [ ] Final QA na staging
- [ ] Copy final review (FVS team)
- [ ] Go/No-go decision
- [ ] Production deployment
- [ ] Post-launch monitoring
- [ ] Email notification aos stakeholders

---

## 🎯 COMANDOS PARA DESIGN SQUAD AGENTS

### Agent 1: design-squad:design-system-architect
**Tarefa:** Gerar design tokens e high-fidelity prototypes

```bash
# Instruções:
1. Ler DESIGN_SYSTEM_INTEGRATED.md + COMPONENTS_SPECIFICATION.md
2. Criar design tokens (CSS, JSON, Figma)
   - Colors: 7 cores com RGB, HSL
   - Typography: scales, weights, line-heights
   - Spacing: 8px grid
   - Shadows: elevation system
   - Transitions: durations & easings
3. Criar Figma prototypes
   - 5 páginas (Homepage, Projects, Property, Contact, About)
   - 3 breakpoints: 1440px, 768px, 375px
   - Component library: 20+ componentes
4. Verificação: 100% conformidade to docs
5. Entregar: Figma link + tokens file
```

### Agent 2: design-squad:ui-engineer
**Tarefa:** Build componentes reutilizáveis + páginas

```bash
# Instruções:
1. Ler COMPONENTS_SPECIFICATION.md + DESIGN_SYSTEM_INTEGRATED.md
2. Setup: Next.js + Tailwind + design tokens
3. Build componentes Atomic:
   - Button (3 variações, 5 estados)
   - Card (property)
   - Form (input, textarea, select, validation)
   - Navigation (sticky bar, mobile drawer)
   - Hero (parallax, typography scale)
4. Build páginas templates
5. Integração: forms → email + CRM (endpoints mock)
6. QA: Lighthouse 90+, axe-core clean, responsividade
7. Entregar: GitHub PR com componentes + pages
```

### Agent 3: design-squad:ux-designer
**Tarefa:** Validar fluxos, refinar microinterações

```bash
# Instruções:
1. Ler PRD_MAPPING.md + DESIGN_SYSTEM_INTEGRATED.md
2. Validar fluxos de usuário:
   - Exploração passiva (visitor)
   - Busca ativa (investor)
   - Compartilhamento (social)
3. Definir microinterações:
   - Transições de página
   - Hover states (sans layout shift)
   - Form feedback
   - Loading states
4. Criar wireframes de fluxos chave
5. Documentar: user journey maps
```

---

## 📋 CHECKLIST DE CONFORMIDADE FINAL

### Visual Design
- [ ] Cores: Verde Serra #2B3A2C, Pedra #C2AE8F, Cobre #8C6A3F, Off-White #F4F0E8
- [ ] Tipografia: Cormorant Garamond (títulos) + Outfit (body/UI)
- [ ] Logo: linha separadora cobre PRESENTE
- [ ] Espaçamento: área respiro logo respeita proporção
- [ ] Sem distorções: logo não inclinado, opaco, esticado

### Comunicação
- [ ] Expressões APENAS da lista aprovada
- [ ] Zero jargões imobiliários genéricos
- [ ] Foco: conforto, permanência, confiança, território, valor patrimonial
- [ ] Tom: sofisticado, próximo, seguro, territorial, claro, maduro

### UX/UI
- [ ] Contraste: 4.5:1 mínimo (WebAIM verificado)
- [ ] Touch targets: 44x44px mínimo
- [ ] Ícones: SVG apenas, zero emojis
- [ ] Hover states: smooth 150-300ms, zero layout shift
- [ ] Focus states: Verde Serra outline visível
- [ ] Responsividade: 375px, 768px, 1024px, 1440px testados

### Acessibilidade
- [ ] Axe-core: zero critical issues
- [ ] WCAG AA: compliant
- [ ] Keyboard nav: Tab order correto
- [ ] Alt text: todas imagens significativas
- [ ] Form labels: todos inputs têm label

### Performance
- [ ] Lighthouse: 90+ em todos metrics
- [ ] LCP: < 2.5s
- [ ] CLS: < 0.1 (zero shift)
- [ ] Imagens: WebP + srcset + lazy loading

### Segurança
- [ ] HTTPS only
- [ ] CSP headers
- [ ] Form validation (server-side)
- [ ] No vulnerabilities (OWASP)

---

## 📞 PRÓXIMOS PASSOS IMEDIATOS

1. **Validar PRD Completo** ← CRÍTICO
   - Ler NOVO_SITE_FVS_PRD_COMPLETO.docx no GitHub
   - Preencher checklist em PRD_MAPPING.md
   - Validar contra design system se precisa ajustes

2. **Invocar design-squad:design-system-architect**
   - Gerar tokens + Figma prototypes
   - Entregar em 2-3 dias

3. **Invocar design-squad:ui-engineer**
   - Build componentes + páginas
   - Entregar em 5-7 dias

4. **Parallel: Content & Copy**
   - FVS team escreve copy aprovado
   - Validação de expressões

5. **QA & Testing**
   - Lighthouse, axe-core, browsers
   - User testing

6. **Deploy: Staging → Production**

---

**Documento Confidencial — FVS Incorporações**  
**Última atualização:** 29/05/2026  
**Status:** ✅ Pronto para Phase 2 (Design Tokens & Prototypes)
