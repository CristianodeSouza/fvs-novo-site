# CLAUDE.md — FVS Incorporações: Novo Site
## Guia completo para execução via Claude CLI

**Versão:** 2.0 — Autoridade única. Ignore todos os outros arquivos .md do repositório.
**Repositório:** github.com/CristianodeSouza/fvs-novo-site
**Preview atual:** https://htmlpreview.github.io/?https://github.com/CristianodeSouza/fvs-novo-site/blob/main/preview-fvs-layout.html
**Referência de layout:** https://springs.estate/
**Stack:** Next.js 14 (App Router) + TypeScript + CSS Modules

---

## 1. OBJETIVO DO PROJETO

Construir o novo site da FVS Incorporações com layout estruturalmente idêntico ao Springs.estate, adaptado para a identidade visual FVS. O site deve transmitir: presença territorial em Gramado e Serra Gaúcha, permanência patrimonial, refinamento arquitetônico.

---

## 2. BRAND FVS — PALETA DE CORES OFICIAL

```css
:root {
  /* Primárias */
  --color-verde-serra:  #2B3A2C;   /* Principal — fundos escuros, texto em off-white */
  --color-pedra:        #C2AE8F;   /* Dourado mineral — botões, destaques, divisores */
  --color-off-white:    #F4F0E8;   /* Fundos claros, texto sobre verde */

  /* Secundárias */
  --color-cobre:        #8C6A3F;   /* Hover de botões, detalhes de ícones */
  --color-pedra-clara:  #DDD0BB;   /* Fundo cards, seções alternadas */
  --color-preto-quente: #1A1A18;   /* Texto corpo sobre fundos claros */

  /* Overlay */
  --color-verde-overlay: rgba(43, 58, 44, 0.55);  /* Hero overlay */
  --color-verde-gradient: linear-gradient(180deg, rgba(43,58,44,0) 0%, rgba(43,58,44,0.85) 100%);
}
```

**Combinações aprovadas:**
- Verde Serra + Off-White → seções escuras (hero, footer, gradient sections)
- Off-White + Preto Quente → corpo de texto
- Pedra Clara + Verde Serra → cards e stats
- Pedra + Preto Quente → botões primários

---

## 3. TIPOGRAFIA

```css
/* Google Fonts — importar no _document.tsx ou globals.css */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');

:root {
  --font-serif: 'Cormorant Garamond', Georgia, serif;   /* Headings, títulos, números grandes */
  --font-sans:  'Outfit', system-ui, sans-serif;         /* Body, labels, UI, navegação */
}
```

**Escala tipográfica (baseada no Springs — Victor Serif 92.9px → Cormorant adaptado):**

| Token             | Valor          | Uso                                  |
|-------------------|----------------|--------------------------------------|
| --fs-hero         | clamp(56px, 8vw, 110px) | H1 hero — título principal    |
| --fs-display      | clamp(120px, 14vw, 200px)| Palavras decorativas de fundo |
| --fs-h2           | clamp(32px, 3.5vw, 48px) | Títulos de seção              |
| --fs-h3           | clamp(20px, 2vw, 28px)   | Subtítulos                    |
| --fs-stat         | clamp(64px, 7vw, 96px)   | Números estatísticos grandes  |
| --fs-body         | 16px / 1.6             | Corpo de texto                  |
| --fs-body-sm      | 14px / 1.5             | Captions, secundário            |
| --fs-label        | 11px / 1.2             | Labels, tags, botões            |
| --ls-label        | 0.08em               | Letter-spacing labels           |
| --ls-hero         | -0.02em              | Letter-spacing hero             |

**Regras tipográficas:**
- Cormorant Garamond weight 300-400 para todos os headings — NUNCA bold
- Cormorant em itálico para citações e depoimentos
- Outfit weight 400 para corpo, 500 para labels e navegação
- NUNCA usar font-weight > 500 em qualquer elemento

---

## 4. SISTEMA DE EASING E TRANSIÇÕES

Extraído diretamente do código-fonte do Springs.estate via getComputedStyle:

```css
:root {
  /* Easing principal — idêntico ao Springs */
  --ease-springs:   cubic-bezier(0.25, 0.74, 0.22, 0.99);  /* Premium, suave */
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);           /* Saída rápida */
  --ease-in-out:    cubic-bezier(0.45, 0, 0.55, 1);          /* Equilibrado */

  /* Durações */
  --dur-fast:       0.15s;   /* Micro-interações (hover imediato) */
  --dur-normal:     0.4s;    /* Links, cores */
  --dur-slow:       0.8s;    /* Botões, cards, transforms */
  --dur-enter:      1.2s;    /* Animações de entrada de seção */
  --dur-page:       0.6s;    /* Page transitions */
}
```

**Transições por elemento (conforme capturado do Springs):**

```css
/* Links — extraído do Springs: color 0.4s cubic-bezier(0.25, 0.74, 0.22, 0.99) */
a {
  transition: color 0.4s var(--ease-springs);
}

/* Botões — extraído do Springs: 0.8s em todas as propriedades */
button, .btn {
  transition:
    color            0.8s var(--ease-springs),
    background-color 0.8s var(--ease-springs),
    border-color     0.8s var(--ease-springs),
    box-shadow       0.8s var(--ease-springs),
    transform        0.8s var(--ease-springs);
}

/* Cards — extraído do Springs: height 0.8s cubic-bezier(0.25, 0.74, 0.22, 0.99) */
.card {
  transition: height 0.8s var(--ease-springs), transform 0.8s var(--ease-springs);
}

/* Imagens com zoom no hover */
.img-zoom img {
  transition: transform 0.8s var(--ease-springs);
}
.img-zoom:hover img {
  transform: scale(1.05);
}
```

---

## 5. SISTEMA DE SCROLL — LOCOMOTIVE SCROLL

O Springs usa **Locomotive Scroll** (detectado via classes HTML: `has-scroll-init has-scroll-smooth`).

Para o projeto FVS, implementar com o mesmo comportamento:

```bash
npm install locomotive-scroll@4
```

```tsx
// src/hooks/useLocomotiveScroll.ts
import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export function useLocomotiveScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    locomotiveRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.9,        // Velocidade de scroll (Springs usa ~0.9)
      lerp: 0.08,             // Interpolação suave (0.08 = muito suave)
      smartphone: { smooth: false },
      tablet: { smooth: false, breakpoint: 1024 },
    })

    return () => locomotiveRef.current?.destroy()
  }, [])

  return { scrollRef, locomotiveRef }
}
```

**Atributos de scroll para elementos:**
```html
<!-- Container principal -->
<main data-scroll-container>

<!-- Elemento com parallax -->
<div data-scroll data-scroll-speed="-2">  <!-- negativo = mais lento que o scroll -->

<!-- Elemento sticky dentro de uma seção -->
<div data-scroll data-scroll-sticky data-scroll-target="#section-id">

<!-- Elemento com fade-in ao entrar na viewport -->
<div data-scroll data-scroll-class="is-inview" data-scroll-repeat="false">
```

---

## 6. ANIMAÇÕES CSS KEYFRAMES

Keyframes capturados do Springs.estate:

```css
/* Gradientes animados de fundo (Springs usa 4 instâncias) */
@keyframes grad_1 {
  0%   { transform: translate(0px); }
  50%  { transform: translate(20vw, -5vw) rotate(45deg); }
  100% { transform: translate(0px); }
}

@keyframes grad_2 {
  0%   { transform: translate(0px); }
  50%  { transform: translateY(10vw) rotate(45deg); }
  100% { transform: translate(0px); }
}

@keyframes grad_3 {
  0%   { transform: translate(0px); }
  50%  { transform: translate(-41vw, 41vw); }
  100% { transform: translate(0px); }
}

/* Fade in com translateY — usado em todas as seções */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Fade in simples */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Reveal de texto — linha por linha */
@keyframes textReveal {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0% 0 0); }
}

/* Borda se expandindo */
@keyframes borderExpand {
  from { width: 0; }
  to   { width: 100%; }
}
```

**Intersection Observer para scroll reveals:**
```tsx
// src/hooks/useScrollReveal.ts
import { useEffect } from 'react'

export function useScrollReveal(selector = '[data-reveal]') {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview')
            // Remove observer após revelar (Springs não repete)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
```

---

## 7. ESTRUTURA DE SEÇÕES — MAPEAMENTO COMPLETO DO SPRINGS

O Springs usa um sistema de **sticky layers** via Locomotive Scroll. Cada seção é empilhada sobre a anterior com `position: sticky`, criando a ilusão de que as seções "empurram" umas às outras durante o scroll.

**Estrutura de IDs detectados no Springs:**

| ID / Classe           | Altura (px) | Tipo                          | Comportamento de Scroll         |
|-----------------------|-------------|-------------------------------|---------------------------------|
| `#l-gallery-sticky`   | 1102        | Hero Mosaico                  | Sticky, sai com a próxima seção |
| `#about`              | 3306        | Intro / Split section         | Sticky, slide sobre hero        |
| `#wellness`           | 2755        | Tabs + imagem lateral         | Sticky, slide sobre intro       |
| `#nature`             | 5510        | Gradient + parallax           | Sticky, slide sobre wellness    |
| `#l-place-content`    | 2204        | Vídeo + stats                 | Sticky, slide sobre nature      |
| `#l-place-sticky-1/2/3`| 1653 cada  | Split com estatísticas        | Sticky sequencial               |
| `#l-residences`       | variável    | Grid 3 colunas + tabs         | Normal scroll                   |
| `#l-interiors`        | variável    | Strip horizontal scrollável   | Scroll horizontal interno       |
| `.footer`             | 516         | Footer escuro                 | Normal                          |

---

## 8. SEÇÃO 1 — HERO MOSAICO (replicar exatamente)

**Referência visual:** Springs hero com mosaico de imagens rotacionadas + título grande canto inferior direito.

**Estrutura HTML:**
```tsx
// src/components/sections/HeroMosaic.tsx
export function HeroMosaic() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Navbar sobre o hero */}
      <nav className={styles.nav}>
        <button className={styles.navMenu}>
          <span className={styles.navMenuIcon} />
          MENU
        </button>
        <a href="/" className={styles.navLogo}>FVS</a>
        <a href="#contato" className={styles.navContact}>CONTATO</a>
      </nav>

      {/* Grade de imagens mosaico — 6 imagens rotacionadas */}
      <div className={styles.mosaicGrid}>
        <div className={styles.mosaicItem} style={{ transform: 'rotate(-3deg) translateY(-10%)' }}>
          <img src="/images/hero/floresta-gramado.jpg" alt="Floresta Gramado" />
        </div>
        <div className={styles.mosaicItem} style={{ transform: 'rotate(2deg) translateY(5%)' }}>
          <img src="/images/hero/agua-cristalina.jpg" alt="Lago Serra Gaúcha" />
        </div>
        <div className={styles.mosaicItem} style={{ transform: 'rotate(-1deg) translateY(-5%)' }}>
          <img src="/images/hero/fachada-fvs.jpg" alt="Edificio FVS" />
        </div>
        <div className={styles.mosaicItem} style={{ transform: 'rotate(3deg) translateY(8%)' }}>
          <img src="/images/hero/mulher-natureza.jpg" alt="Bem-estar" />
        </div>
        <div className={styles.mosaicItem} style={{ transform: 'rotate(-2deg) translateY(-3%)' }}>
          <img src="/images/hero/interior-premium.jpg" alt="Interior" />
        </div>
        <div className={styles.mosaicItem} style={{ transform: 'rotate(1.5deg) translateY(12%)' }}>
          <img src="/images/hero/vista-gramado.jpg" alt="Vista Gramado" />
        </div>
      </div>

      {/* Overlay verde */}
      <div className={styles.overlay} />

      {/* Texto descritivo — canto inferior esquerdo */}
      <p className={styles.heroTagline}>
        Residências exclusivas com infraestrutura<br />
        de bem-estar na Serra Gaúcha
      </p>

      {/* Título principal — canto inferior direito, tipografia Cormorant grande */}
      <div className={styles.heroTitle}>
        <h1>Esplendor<br />de Renovação</h1>
      </div>

      {/* Seta de scroll down */}
      <button className={styles.scrollDown} aria-label="Rolar para baixo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12l4 4 4-4" />
        </svg>
      </button>
    </section>
  )
}
```

**CSS do Hero:**
```css
/* HeroMosaic.module.css */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: var(--color-verde-serra);
  overflow: hidden;
  display: grid;
}

/* Nav flutuante sobre o hero */
.nav {
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 24px 40px;
  color: var(--color-off-white);
}

.navLogo {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 400;
  color: var(--color-off-white);
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.05em;
}

.navMenu, .navContact {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.navContact { justify-content: flex-end; }

/* Grade mosaico — posicionamento absoluto das imagens */
.mosaicGrid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  padding: 20px;
  transform: rotate(-2deg) scale(1.1);
}

.mosaicItem {
  overflow: hidden;
  border-radius: 4px;
  transition: transform 0.8s var(--ease-springs);
}

.mosaicItem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease-springs);
}

.mosaicItem:hover img { transform: scale(1.05); }

/* Overlay gradiente verde */
.overlay {
  position: absolute;
  inset: 0;
  background: var(--color-verde-overlay);
  /* Gradiente mais intenso na base para legibilidade do título */
  background: linear-gradient(
    135deg,
    rgba(43, 58, 44, 0.3) 0%,
    rgba(43, 58, 44, 0.5) 40%,
    rgba(43, 58, 44, 0.75) 100%
  );
  z-index: 10;
}

/* Tagline — canto inferior esquerdo */
.heroTagline {
  position: absolute;
  bottom: 15%;
  left: 5%;
  z-index: 20;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-off-white);
  opacity: 0.85;
  max-width: 280px;
}

/* Título principal — canto inferior direito */
.heroTitle {
  position: absolute;
  bottom: 8%;
  right: 5%;
  z-index: 20;
  text-align: right;
}

.heroTitle h1 {
  font-family: var(--font-serif);
  font-size: var(--fs-hero);        /* clamp(56px, 8vw, 110px) */
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-pedra);         /* Dourado sobre verde escuro */
  margin: 0;
  /* Animação de entrada */
  animation: fadeInUp 1.4s var(--ease-springs) 0.3s both;
}

/* Seta scroll down */
.scrollDown {
  position: absolute;
  bottom: 32px;
  left: 40px;
  z-index: 20;
  width: 44px; height: 44px;
  background: none; border: none; cursor: pointer;
  color: var(--color-off-white);
  opacity: 0.7;
  transition: opacity 0.3s;
  animation: bounceDown 2s ease-in-out infinite;
}

@keyframes bounceDown {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}

@media (max-width: 768px) {
  .mosaicGrid { grid-template-columns: repeat(2, 1fr); }
  .heroTitle h1 { font-size: clamp(44px, 12vw, 72px); }
  .nav { padding: 20px 24px; }
}
```

---

## 9. SEÇÃO 2 — INTRO / ABOUT (Split Section com Sticky Scroll)

**Comportamento de scroll:** Esta seção "desliza" sobre o hero conforme o usuário rola. A imagem fica fixa (sticky) enquanto o texto sobe.

**Conteúdo FVS adaptado do Springs ("Open the doors of Springs → Abra as portas da FVS"):**

```tsx
// src/components/sections/IntroSection.tsx
export function IntroSection() {
  return (
    <section id="intro" className={styles.intro} data-scroll-section>
      <div className={styles.sticky} data-scroll data-scroll-sticky data-scroll-target="#intro">
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <img
              src="/images/intro/gramado-vista-aerea.jpg"
              alt="Vista aérea Gramado"
              data-scroll data-scroll-speed="-1"
            />
          </div>
        </div>

        <div className={styles.contentCol}>
          {/* Label pequeno */}
          <span className={styles.label}>SOBRE A FVS</span>

          {/* Título grande — Cormorant weight 300 */}
          <h2 className={styles.title}>
            Permanência<br />
            com<br />
            Elegância
          </h2>

          {/* Subtítulo */}
          <p className={styles.subtitle}>
            Apartamentos, casas sobrepostas e coberturas duplex em Gramado, 
            rodeados pela Serra Gaúcha.
          </p>

          {/* Descrição */}
          <p className={styles.body}>
            Há mais de 20 anos a FVS constrói percepção de valor sobre viver, 
            investir e permanecer em Gramado. Nossos projetos nascem do respeito 
            ao lugar — à neblina da manhã, às araucárias, ao ritmo único da Serra Gaúcha.
          </p>

          {/* CTA outline */}
          <a href="#residencias" className={styles.ctaOutline}>
            Ver Residências
          </a>
        </div>
      </div>
    </section>
  )
}
```

**CSS:**
```css
/* IntroSection.module.css */
.intro {
  position: relative;
  background-color: var(--color-off-white);
}

.sticky {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  align-items: center;
}

.imageCol {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.imageWrap {
  position: absolute;
  inset: 0;
}

.imageWrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  will-change: transform;
}

.contentCol {
  padding: 80px 60px 80px 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.label {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-cobre);
}

.title {
  font-family: var(--font-serif);
  font-size: var(--fs-h2);          /* clamp(32px, 3.5vw, 48px) */
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--color-verde-serra);
  margin: 0;
}

.subtitle {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-preto-quente);
  opacity: 0.75;
  max-width: 440px;
}

.body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-preto-quente);
  max-width: 440px;
}

/* Botão outline verde */
.ctaOutline {
  display: inline-flex;
  align-items: center;
  padding: 14px 36px;
  border: 1.5px solid var(--color-verde-serra);
  color: var(--color-verde-serra);
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  width: fit-content;
  transition:
    background-color 0.8s var(--ease-springs),
    color 0.8s var(--ease-springs);
}

.ctaOutline:hover {
  background-color: var(--color-verde-serra);
  color: var(--color-off-white);
}
```

---

## 10. SEÇÃO 3 — WELLNESS / BEM-ESTAR (Sistema de Tabs com Imagem Dinâmica)

**Comportamento:** Título "Wellness" em tamanho gigante (167px no Springs) com ~5% opacidade como palavra de fundo decorativa. 4 tabs (Spa / Yoga / Fitness / Café) — ao clicar, a imagem lateral troca com fade 0.4s.

**Conteúdo FVS:**
- Tab 1: Spa — "Deixe os pensamentos fluírem livremente na piscina termal da Serra"
- Tab 2: Yoga — "A sessão de yoga ao amanhecer revela a leveza de viver em Gramado"
- Tab 3: Fitness — "Prepare-se para o dia com seu personal trainer vista às araucárias"
- Tab 4: Café — "O café colonial reúne os moradores na hora mais acolhedora do dia"

```tsx
// src/components/sections/WellnessSection.tsx
'use client'
import { useState } from 'react'

const TABS = [
  { id: 'spa',     label: 'Spa',     img: '/images/wellness/spa.jpg',     text: 'Deixe os pensamentos fluírem livremente na piscina termal da Serra Gaúcha. Água mineral, vapor de eucalipto, silêncio.' },
  { id: 'yoga',    label: 'Yoga',    img: '/images/wellness/yoga.jpg',    text: 'A sessão de yoga ao amanhecer revela a leveza de viver em Gramado. Mente clara, corpo leve, vista infinita.' },
  { id: 'fitness', label: 'Fitness', img: '/images/wellness/fitness.jpg', text: 'Prepare-se para o dia com seu personal trainer com vista às araucárias. Academia equipada, sem desculpas.' },
  { id: 'cafe',    label: 'Café',    img: '/images/wellness/cafe.jpg',    text: 'O café colonial reúne os moradores na hora mais acolhedora do dia. Pão, queijo serrano e a névoa da Serra.' },
]

export function WellnessSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="wellness" className={styles.wellness} data-scroll-section>
      {/* Palavra decorativa de fundo */}
      <span className={styles.bgWord} aria-hidden="true">Bem-Estar</span>

      <div className={styles.grid}>
        {/* Coluna esquerda — conteúdo + tabs */}
        <div className={styles.contentCol}>
          <span className={styles.label}>INFRAESTRUTURA DE BEM-ESTAR</span>
          <h2 className={styles.title}>Essência<br />do Autocuidado</h2>
          <p className={styles.body}>
            A FVS integra o bem-estar ao cotidiano. Uma infraestrutura 
            completa pensada para que você nunca precise sair de casa 
            para se sentir em um spa de montanha.
          </p>

          {/* Tabs */}
          <nav className={styles.tabs}>
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Conteúdo da tab ativa */}
          <p key={active} className={styles.tabContent}>
            {TABS[active].text}
          </p>
        </div>

        {/* Coluna direita — imagem troca com fade */}
        <div className={styles.imageCol}>
          <img
            key={active}
            src={TABS[active].img}
            alt={TABS[active].label}
            className={styles.tabImage}
          />
        </div>
      </div>
    </section>
  )
}
```

**CSS:**
```css
/* WellnessSection.module.css */
.wellness {
  position: relative;
  min-height: 100vh;
  background-color: var(--color-verde-serra);
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* Palavra gigante de fundo — 5% opacidade (exato do Springs) */
.bgWord {
  position: absolute;
  top: 50%;
  left: -2%;
  transform: translateY(-50%);
  font-family: var(--font-serif);
  font-size: var(--fs-display);   /* clamp(120px, 14vw, 200px) */
  font-weight: 300;
  color: var(--color-off-white);
  opacity: 0.05;                  /* EXATO do Springs: 5% */
  pointer-events: none;
  white-space: nowrap;
  z-index: 0;
  letter-spacing: -0.03em;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

.contentCol {
  padding: 80px 60px 80px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
}

.label {
  font-family: var(--font-sans);
  font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-pedra);
}

.title {
  font-family: var(--font-serif);
  font-size: var(--fs-h2);
  font-weight: 300; line-height: 1.05;
  color: var(--color-off-white);
  margin: 0;
}

.body {
  font-family: var(--font-sans);
  font-size: 16px; line-height: 1.7;
  color: var(--color-off-white);
  opacity: 0.75;
  max-width: 420px;
}

/* Tabs — linha de botões */
.tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid rgba(194, 174, 143, 0.3);
}

.tab {
  padding: 12px 20px;
  font-family: var(--font-sans);
  font-size: 11px; font-weight: 500;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--color-off-white);
  opacity: 0.5;
  background: none; border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: opacity 0.4s var(--ease-springs), border-color 0.4s var(--ease-springs);
  margin-bottom: -1px;
}

.tabActive {
  opacity: 1;
  border-bottom-color: var(--color-pedra);
}

.tab:hover { opacity: 0.8; }

/* Texto da tab ativa */
.tabContent {
  font-family: var(--font-sans);
  font-size: 15px; line-height: 1.7;
  color: var(--color-off-white);
  opacity: 0.8;
  max-width: 400px;
  animation: fadeIn 0.4s var(--ease-springs) forwards;
}

/* Imagem lateral — fade ao trocar de tab */
.imageCol {
  position: relative;
  overflow: hidden;
}

.tabImage {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  animation: fadeIn 0.4s var(--ease-springs) forwards;
}
```

---

## 11. SEÇÃO 4 — NATUREZA (Gradient Section com Parallax)

**Comportamento no Springs:** Seção de altura equivalente a ~10x a viewport (5510px detectados). Enquanto o usuário scrola, elementos internos se movem em velocidades diferentes (parallax). O fundo é verde escuro com imagem de floresta/natureza em parallax lento.

**Conteúdo FVS (baseado no Springs "Nature / Lightness of Breathing"):**

```tsx
// src/components/sections/NatureSection.tsx
export function NatureSection() {
  return (
    <section id="natureza" className={styles.nature} data-scroll-section>
      {/* Imagem de fundo com parallax */}
      <div className={styles.bgImageWrap} data-scroll data-scroll-speed="-3">
        <img src="/images/nature/araucarias-gramado.jpg" alt="Araucárias Gramado" className={styles.bgImage} />
      </div>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Palavra decorativa fundo */}
      <span className={styles.bgWord} aria-hidden="true">Natureza</span>

      <div className={styles.content}>
        {/* Label */}
        <span className={styles.label}>AMBIÊNCIA NATURAL</span>

        {/* Título principal */}
        <h2 className={styles.title} data-scroll data-scroll-speed="1">
          Leveza<br />de Respirar
        </h2>

        {/* Texto descritivo */}
        <p className={styles.body}>
          Aqui, a natureza se funde com a arquitetura e torna-se parte integrante 
          do seu lar. As araucárias centenárias enquadram cada janela. A neblina da 
          manhã é sua cortina. A Serra Gaúcha é o seu quintal.
        </p>

        {/* Setas de navegação — Springs usa ← → */}
        <div className={styles.navArrows}>
          <button className={styles.arrow} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <button className={styles.arrow} aria-label="Próximo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Cards de características da natureza */}
        <div className={styles.cards}>
          {[
            { title: 'Terraços Paisagísticos', desc: 'Plantas escaladoras, topiária, gramados esmeralda.' },
            { title: 'Jardim Sombreado', desc: 'Trilhas sinuosas entre araucárias e clareiras ensolaradas.' },
            { title: 'Áreas de Contemplação', desc: 'Decks com vista panorâmica para a Serra Gaúcha.' },
          ].map((card) => (
            <div key={card.title} className={styles.card} data-reveal>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**CSS:**
```css
/* NatureSection.module.css */
.nature {
  position: relative;
  min-height: 100vh;
  background-color: var(--color-verde-serra);
  overflow: hidden;
  display: grid;
  align-items: center;
}

.bgImageWrap {
  position: absolute;
  inset: -20%;  /* Margem extra para o parallax não mostrar borda */
  will-change: transform;
}

.bgImage {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: saturate(0.7) brightness(0.6);
}

.overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    135deg,
    rgba(43, 58, 44, 0.6) 0%,
    rgba(26, 26, 24, 0.4) 100%
  );
  z-index: 1;
}

.bgWord {
  position: absolute;
  bottom: -5%;
  right: -2%;
  font-family: var(--font-serif);
  font-size: var(--fs-display);
  font-weight: 300;
  color: var(--color-off-white);
  opacity: 0.04;
  pointer-events: none;
  z-index: 1;
  white-space: nowrap;
}

.content {
  position: relative;
  z-index: 2;
  padding: 120px 80px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.label {
  font-family: var(--font-sans);
  font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-pedra);
}

.title {
  font-family: var(--font-serif);
  font-size: clamp(48px, 6vw, 80px);
  font-weight: 300; line-height: 1.0;
  letter-spacing: -0.02em;
  color: var(--color-off-white);
  margin: 0;
}

.body {
  font-family: var(--font-sans);
  font-size: 16px; line-height: 1.8;
  color: var(--color-off-white);
  opacity: 0.8;
  max-width: 500px;
}

/* Setas ← → */
.navArrows {
  display: flex;
  gap: 16px;
  align-items: center;
}

.arrow {
  width: 48px; height: 48px;
  border: 1.5px solid rgba(244, 240, 232, 0.4);
  border-radius: 50%;
  background: none;
  color: var(--color-off-white);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition:
    border-color 0.4s var(--ease-springs),
    background-color 0.4s var(--ease-springs);
}

.arrow:hover {
  border-color: var(--color-pedra);
  background-color: rgba(194, 174, 143, 0.15);
}

.arrow svg { width: 18px; height: 18px; }

/* Cards */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 24px;
}

.card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s var(--ease-springs), transform 0.6s var(--ease-springs);
  border-top: 1px solid rgba(194, 174, 143, 0.3);
  padding-top: 20px;
}

.card.is-inview { opacity: 1; transform: translateY(0); }

.cardTitle {
  font-family: var(--font-serif);
  font-size: 20px; font-weight: 400;
  color: var(--color-off-white);
  margin: 0 0 8px;
}

.cardDesc {
  font-family: var(--font-sans);
  font-size: 14px; line-height: 1.6;
  color: var(--color-off-white);
  opacity: 0.65;
  margin: 0;
}
```

---

## 12. SEÇÃO 5 — LUGAR / LOCALIZAÇÃO (Vídeo com Stats de Distância)

**Comportamento Springs:** Vídeo de fundo autoplay muted loop com estatísticas em overlay.
**Stats reais do Springs:** 3 min a pé ao Nature Park | 9 min a pé ao calçadão | 16 min de carro ao MIBC.

**Conteúdo FVS adaptado:**
- **3 min** a pé ao centro histórico de Gramado
- **9 min** a pé à Rua Coberta
- **20 min** de carro ao aeroporto regional

```tsx
// src/components/sections/LocationSection.tsx
export function LocationSection() {
  const STATS = [
    { number: '3',  unit: 'MIN A PÉ',     desc: 'AO CENTRO HISTÓRICO' },
    { number: '9',  unit: 'MIN A PÉ',     desc: 'À RUA COBERTA' },
    { number: '20', unit: 'MIN DE CARRO', desc: 'AO AEROPORTO REGIONAL' },
  ]

  return (
    <section id="localizacao" className={styles.location} data-scroll-section>
      {/* Vídeo de fundo autoplay */}
      <div className={styles.videoWrap}>
        <video
          autoPlay muted loop playsInline
          className={styles.video}
          poster="/images/location/gramado-poster.jpg"
        >
          <source src="/videos/gramado-aerial.mp4" type="video/mp4" />
          <source src="/videos/gramado-aerial.webm" type="video/webm" />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      {/* Conteúdo */}
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.label}>LOCALIZAÇÃO PRIVILEGIADA</span>
          <h2 className={styles.title}>O Melhor<br />de Gramado</h2>
          <p className={styles.body}>
            A FVS escolhe localizações únicas. Cada projeto é estrategicamente 
            posicionado para oferecer o máximo da experiência de viver em Gramado.
          </p>
        </div>

        {/* Grid de stats — números grandes Cormorant */}
        <div className={styles.statsGrid}>
          {STATS.map((stat, i) => (
            <div
              key={stat.number}
              className={styles.statItem}
              style={{ animationDelay: `${i * 0.15}s` }}
              data-reveal
            >
              {/* Número gigante — 92.9px no Springs */}
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statUnit}>{stat.unit}</span>
              <span className={styles.statDesc}>{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**CSS:**
```css
/* LocationSection.module.css */
.location {
  position: relative;
  min-height: 100vh;
  background-color: var(--color-preto-quente);
  overflow: hidden;
  display: grid;
  align-items: end;
}

.videoWrap {
  position: absolute; inset: 0;
  z-index: 0;
}

/* Vídeo: autoplay, muted, loop, playsInline — obrigatório para mobile */
.video {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}

.videoOverlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    to top,
    rgba(26, 26, 24, 0.9) 0%,
    rgba(26, 26, 24, 0.3) 60%,
    transparent 100%
  );
}

.content {
  position: relative;
  z-index: 1;
  padding: 60px 80px 80px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.header { max-width: 500px; }

.label {
  font-family: var(--font-sans);
  font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--color-pedra);
  display: block; margin-bottom: 16px;
}

.title {
  font-family: var(--font-serif);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 300; line-height: 1.05;
  color: var(--color-off-white);
  margin: 0 0 20px;
}

.body {
  font-family: var(--font-sans);
  font-size: 16px; line-height: 1.7;
  color: var(--color-off-white); opacity: 0.75;
}

/* Grid de estatísticas */
.statsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}

.statItem {
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0;
  animation: fadeInUp 0.8s var(--ease-springs) forwards;
}

.statItem.is-inview { opacity: 1; }

/* Número grande — equivalente ao h0 de 92.9px do Springs */
.statNumber {
  font-family: var(--font-serif);
  font-size: var(--fs-stat);   /* clamp(64px, 7vw, 96px) */
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--color-pedra);
}

.statUnit {
  font-family: var(--font-sans);
  font-size: 11px; font-weight: 500;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--color-off-white); opacity: 0.6;
}

.statDesc {
  font-family: var(--font-sans);
  font-size: 11px; letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-pedra); opacity: 0.8;
}
```

---

## 13. SEÇÃO 6 — DESIGN / ARQUITETURA (Split Reverso)

**Comportamento:** Grid 50/50 com imagem à esquerda e texto à direita. Botão outline. Palavra decorativa de fundo "Design".

```tsx
// src/components/sections/DesignSection.tsx
export function DesignSection() {
  return (
    <section id="design" className={styles.design} data-scroll-section>
      <span className={styles.bgWord} aria-hidden="true">Design</span>
      <div className={styles.grid}>
        {/* Imagem esquerda */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <img
              src="/images/design/fachada-crystal.jpg"
              alt="Arquitetura FVS"
              data-scroll data-scroll-speed="-1"
            />
          </div>
        </div>

        {/* Conteúdo direita */}
        <div className={styles.contentCol}>
          <span className={styles.label}>ARQUITETURA INSPIRADA</span>
          <h2 className={styles.title}>
            Um Edifício<br />
            que Emerge<br />
            da Serra
          </h2>
          <p className={styles.body}>
            Uma torre singular que ascende acima das copas das araucárias. 
            Arquitetura que dialoga com a paisagem — fachadas de vidro que 
            refletem a neblina, terraços que emolduram o horizonte serrano.
          </p>
          <a href="/projetos" className={styles.ctaOutline}>
            Explorar Arquitetura
          </a>
        </div>
      </div>
    </section>
  )
}
```

**CSS:**
```css
/* DesignSection.module.css */
.design {
  position: relative;
  background-color: var(--color-off-white);
  overflow: hidden;
}

.bgWord {
  position: absolute;
  top: 50%; right: -3%;
  transform: translateY(-50%);
  font-family: var(--font-serif);
  font-size: var(--fs-display);
  font-weight: 300; color: var(--color-preto-quente);
  opacity: 0.04; pointer-events: none;
  white-space: nowrap; z-index: 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  position: relative; z-index: 1;
}

.imageCol {
  position: relative; overflow: hidden;
}

.imageWrap {
  position: absolute; inset: -10%;
  will-change: transform;
}

.imageWrap img {
  width: 100%; height: 100%;
  object-fit: cover;
}

.contentCol {
  padding: 80px 80px 80px 60px;
  display: flex; flex-direction: column;
  justify-content: center; gap: 28px;
  background-color: var(--color-off-white);
}

.label {
  font-family: var(--font-sans);
  font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--color-cobre);
}

.title {
  font-family: var(--font-serif);
  font-size: var(--fs-h2);
  font-weight: 300; line-height: 1.05;
  color: var(--color-verde-serra);
  margin: 0;
}

.body {
  font-family: var(--font-sans);
  font-size: 16px; line-height: 1.7;
  color: var(--color-preto-quente);
  max-width: 440px;
}

.ctaOutline {
  display: inline-flex; align-items: center;
  padding: 14px 36px;
  border: 1.5px solid var(--color-verde-serra);
  color: var(--color-verde-serra);
  font-family: var(--font-sans);
  font-size: 11px; font-weight: 500;
  letter-spacing: 0.08em; text-transform: uppercase;
  text-decoration: none; width: fit-content;
  transition:
    background-color 0.8s var(--ease-springs),
    color 0.8s var(--ease-springs);
}

.ctaOutline:hover {
  background-color: var(--color-verde-serra);
  color: var(--color-off-white);
}
```

---

## 14. SEÇÃO 7 — RESIDÊNCIAS (Grid 3 Colunas + Tabs)

**Comportamento Springs:** Grid com 3 cards de tipos de imóvel (Flats, Townhouses, Penthouses). Stats: 138 flats panorâmicos | 5 tipos de planta | até 3.1m de pé-direito. Tabs para filtrar. Botão "BUSCAR".

**Conteúdo FVS:**
- Apartamentos — designer acabamento | 86 unidades panorâmicas | pé-direito 2.9m
- Coberturas — 2 andares | terraço privativo | vista 360° Serra Gaúcha
- Studios — investimento | alto retorno | Gramado temporada

```tsx
// src/components/sections/ResidencesSection.tsx
'use client'
import { useState } from 'react'

const TYPES = [
  {
    id: 'aptos',
    label: 'Apartamentos',
    img: '/images/residences/apto.jpg',
    tag: 'Acabamento designer',
    stats: [
      { value: '86', label: 'unidades com vista panorâmica' },
      { value: '2.9m', label: 'pé-direito' },
      { value: '3', label: 'dormitórios' },
    ],
    cta: 'VER APARTAMENTOS',
  },
  {
    id: 'coberturas',
    label: 'Coberturas',
    img: '/images/residences/cobertura.jpg',
    tag: 'Exclusividade duplex',
    stats: [
      { value: '2',    label: 'andares privativos' },
      { value: '360°', label: 'vista Serra Gaúcha' },
      { value: '180',  label: 'm² de terraço' },
    ],
    cta: 'VER COBERTURAS',
  },
  {
    id: 'studios',
    label: 'Studios',
    img: '/images/residences/studio.jpg',
    tag: 'Investimento inteligente',
    stats: [
      { value: '12%',  label: 'retorno estimado ao ano' },
      { value: '100%', label: 'gerenciado pela FVS' },
      { value: '1',    label: 'dormitório premium' },
    ],
    cta: 'VER STUDIOS',
  },
]

export function ResidencesSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="residencias" className={styles.residences} data-scroll-section>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Residências</h2>
          <p className={styles.subtitle}>COLEÇÃO DE ESPAÇOS DE VIDA EXCLUSIVOS</p>
        </div>
        {/* Tabs de tipo */}
        <nav className={styles.tabs}>
          {TYPES.map((type, i) => (
            <button
              key={type.id}
              className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
            >
              {type.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Grid de cards */}
      <div className={styles.grid}>
        {TYPES.map((type, i) => (
          <div
            key={type.id}
            className={`${styles.card} ${i === active ? styles.cardActive : ''}`}
            onClick={() => setActive(i)}
          >
            <div className={styles.cardImage}>
              <img src={type.img} alt={type.label} />
              <span className={styles.cardTag}>{type.tag}</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{type.label}</h3>
              <div className={styles.cardStats}>
                {type.stats.map((stat) => (
                  <div key={stat.label} className={styles.cardStat}>
                    <span className={styles.cardStatValue}>{stat.value}</span>
                    <span className={styles.cardStatLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
              <a href={`/imoveis?tipo=${type.id}`} className={styles.cardCta}>
                {type.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

**CSS:**
```css
/* ResidencesSection.module.css */
.residences {
  background-color: var(--color-pedra-clara);
  padding: 80px 80px 120px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;
}

.title {
  font-family: var(--font-serif);
  font-size: var(--fs-h2);
  font-weight: 300; color: var(--color-verde-serra);
  margin: 0 0 8px;
}

.subtitle {
  font-family: var(--font-sans);
  font-size: 11px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--color-cobre);
  margin: 0;
}

.tabs {
  display: flex; gap: 8px;
}

.tab {
  padding: 10px 20px;
  font-family: var(--font-sans);
  font-size: 11px; font-weight: 500;
  letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--color-preto-quente);
  background: transparent;
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: border-color 0.4s var(--ease-springs);
}

.tabActive {
  border-color: var(--color-verde-serra);
}

/* Grid 3 colunas */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  cursor: pointer;
  transition: transform 0.8s var(--ease-springs);
}

.card:hover { transform: translateY(-4px); }

.cardImage {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/4;
  border-radius: 2px;
}

.cardImage img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease-springs);
}

.card:hover .cardImage img,
.cardActive .cardImage img {
  transform: scale(1.04);
}

.cardTag {
  position: absolute;
  top: 16px; left: 16px;
  padding: 6px 12px;
  font-family: var(--font-sans);
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--color-off-white);
  background-color: rgba(43, 58, 44, 0.8);
  backdrop-filter: blur(4px);
}

.cardContent {
  padding: 20px 0;
}

.cardTitle {
  font-family: var(--font-serif);
  font-size: 24px; font-weight: 400;
  color: var(--color-verde-serra);
  margin: 0 0 16px;
}

.cardStats {
  display: flex; gap: 24px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(43, 58, 44, 0.15);
}

.cardStat {
  display: flex; flex-direction: column; gap: 2px;
}

.cardStatValue {
  font-family: var(--font-serif);
  font-size: 28px; font-weight: 400;
  color: var(--color-verde-serra);
  line-height: 1;
}

.cardStatLabel {
  font-family: var(--font-sans);
  font-size: 10px; letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-preto-quente); opacity: 0.6;
}

.cardCta {
  font-family: var(--font-sans);
  font-size: 11px; font-weight: 500;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--color-cobre);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  transition: color 0.4s var(--ease-springs);
}

.cardCta:hover { color: var(--color-verde-serra); }
```

---

## 15. SEÇÃO 8 — INTERIORES (Strip Horizontal Scrollável)

**Comportamento Springs:** Galeria horizontal que rola com as setas ← → ou arrasto. Imagens de interiores em tela quase cheia, scrollam horizontalmente.

```tsx
// src/components/sections/InteriorsStrip.tsx
'use client'
import { useRef } from 'react'

const IMAGES = [
  { src: '/images/interiors/sala-principal.jpg',     alt: 'Sala principal' },
  { src: '/images/interiors/cozinha-integrada.jpg',  alt: 'Cozinha integrada' },
  { src: '/images/interiors/suite-master.jpg',       alt: 'Suíte master' },
  { src: '/images/interiors/varanda-gramado.jpg',    alt: 'Varanda com vista' },
  { src: '/images/interiors/banheiro-spa.jpg',       alt: 'Banheiro spa' },
  { src: '/images/interiors/hall-entrada.jpg',       alt: 'Hall de entrada' },
]

export function InteriorsStrip() {
  const stripRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!stripRef.current) return
    const amount = stripRef.current.offsetWidth * 0.75
    stripRef.current.scrollBy({
      left: dir === 'right' ? amount : -amount,
      behavior: 'smooth'
    })
  }

  return (
    <section id="interiores" className={styles.interiors} data-scroll-section>
      <div className={styles.header}>
        <div>
          <span className={styles.label}>INTERIORES</span>
          <h2 className={styles.title}>Detalhes que<br />Elevam o Cotidiano</h2>
        </div>
        <div className={styles.arrows}>
          <button onClick={() => scroll('left')}  className={styles.arrow} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <button onClick={() => scroll('right')} className={styles.arrow} aria-label="Próximo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div ref={stripRef} className={styles.strip}>
        {IMAGES.map((img) => (
          <div key={img.src} className={styles.stripItem}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}
```

**CSS:**
```css
/* InteriorsStrip.module.css */
.interiors {
  background-color: var(--color-off-white);
  padding: 80px 0 0;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 80px 48px;
}

.label {
  font-family: var(--font-sans);
  font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--color-cobre);
  display: block; margin-bottom: 12px;
}

.title {
  font-family: var(--font-serif);
  font-size: var(--fs-h2);
  font-weight: 300; line-height: 1.1;
  color: var(--color-verde-serra);
  margin: 0;
}

.arrows { display: flex; gap: 12px; }

.arrow {
  width: 48px; height: 48px;
  border: 1.5px solid var(--color-verde-serra);
  border-radius: 50%;
  background: none; cursor: pointer;
  color: var(--color-verde-serra);
  display: flex; align-items: center; justify-content: center;
  transition:
    background-color 0.4s var(--ease-springs),
    color 0.4s var(--ease-springs);
}

.arrow:hover {
  background-color: var(--color-verde-serra);
  color: var(--color-off-white);
}

.arrow svg { width: 18px; height: 18px; }

/* Strip horizontal */
.strip {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;    /* Firefox */
  gap: 16px;
  padding: 0 80px 80px;
  cursor: grab;
}

.strip::-webkit-scrollbar { display: none; }
.strip:active { cursor: grabbing; }

.stripItem {
  flex: 0 0 auto;
  width: 60vw;
  max-width: 800px;
  aspect-ratio: 16/10;
  overflow: hidden;
  border-radius: 2px;
}

.stripItem img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease-springs);
  pointer-events: none;
}

.stripItem:hover img { transform: scale(1.03); }

@media (max-width: 768px) {
  .header { padding: 0 24px 32px; }
  .strip  { padding: 0 24px 60px; }
  .stripItem { width: 85vw; }
}
```

---

## 16. SEÇÃO 9 — FOOTER

**Estrutura:** Fundo verde serra escuro. Logo FVS à esquerda. Links de navegação ao centro. CTA primário à direita. Rodapé com copyright.

```tsx
// src/components/Footer.tsx
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* Logo */}
        <div className={styles.logoCol}>
          <a href="/" className={styles.logo}>FVS</a>
          <p className={styles.tagline}>
            Construindo permanência<br />na Serra Gaúcha desde 2002
          </p>
        </div>

        {/* Links */}
        <nav className={styles.links}>
          <div className={styles.linkGroup}>
            <span className={styles.linkGroupTitle}>Residências</span>
            <a href="/imoveis?tipo=aptos">Apartamentos</a>
            <a href="/imoveis?tipo=coberturas">Coberturas</a>
            <a href="/imoveis?tipo=studios">Studios</a>
          </div>
          <div className={styles.linkGroup}>
            <span className={styles.linkGroupTitle}>A FVS</span>
            <a href="/sobre">Nossa História</a>
            <a href="/projetos">Projetos</a>
            <a href="/blog">Conteúdo</a>
          </div>
          <div className={styles.linkGroup}>
            <span className={styles.linkGroupTitle}>Contato</span>
            <a href="tel:+555417991234">+55 54 9999-0000</a>
            <a href="mailto:contato@fvs.com.br">contato@fvs.com.br</a>
            <a href="/contato">Fale Conosco</a>
          </div>
        </nav>

        {/* CTA */}
        <div className={styles.ctaCol}>
          <p className={styles.ctaText}>Pronto para viver em Gramado?</p>
          <a href="/contato" className={styles.ctaButton}>
            AGENDAR VISITA
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <span>© 2024 FVS Incorporações. Todos os direitos reservados.</span>
        <span>CRECI/RS 00000-J</span>
      </div>
    </footer>
  )
}
```

**CSS:**
```css
/* Footer.module.css */
.footer {
  background-color: var(--color-verde-serra);
  color: var(--color-off-white);
  padding: 80px 80px 40px;
}

.main {
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  gap: 80px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(244, 240, 232, 0.15);
}

.logoCol { display: flex; flex-direction: column; gap: 16px; }

.logo {
  font-family: var(--font-serif);
  font-size: 32px; font-weight: 400;
  color: var(--color-off-white);
  text-decoration: none;
  letter-spacing: 0.05em;
}

.tagline {
  font-family: var(--font-sans);
  font-size: 13px; line-height: 1.6;
  color: var(--color-off-white); opacity: 0.6;
  margin: 0;
}

.links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.linkGroup {
  display: flex; flex-direction: column; gap: 12px;
}

.linkGroupTitle {
  font-family: var(--font-sans);
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--color-pedra);
  margin-bottom: 4px;
}

.linkGroup a {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--color-off-white); opacity: 0.7;
  text-decoration: none;
  transition: opacity 0.4s var(--ease-springs);
}

.linkGroup a:hover { opacity: 1; }

.ctaCol {
  display: flex; flex-direction: column;
  justify-content: flex-end; gap: 20px;
}

.ctaText {
  font-family: var(--font-serif);
  font-size: 20px; font-weight: 300;
  color: var(--color-off-white); line-height: 1.3;
  margin: 0;
}

.ctaButton {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 14px 28px;
  background-color: var(--color-pedra);
  color: var(--color-preto-quente);
  font-family: var(--font-sans);
  font-size: 11px; font-weight: 500;
  letter-spacing: 0.08em; text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.8s var(--ease-springs);
}

.ctaButton:hover { background-color: var(--color-cobre); }

.bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--color-off-white); opacity: 0.4;
}
```

---

## 17. EFEITO DE VÍDEO DA CAPA — ESPECIFICAÇÃO TÉCNICA DETALHADA

**Comportamento exato do Springs (copiado para FVS):**

O vídeo da capa NÃO é um vídeo atrás de um fundo — é um **mosaico animado de imagens rotacionadas** que simula movimento cinematográfico. No Springs, isso é feito com CSS transforms e JavaScript.

**Implementação do efeito de entrada do hero:**

```tsx
// src/components/sections/HeroMosaic.tsx — efeito de entrada
'use client'
import { useEffect, useRef } from 'react'

export function HeroMosaic() {
  const mosaicRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Efeito: as imagens entram com scale 1.2 → 1.0 + opacity 0 → 1
    const items = mosaicRef.current?.querySelectorAll('[data-mosaic-item]')
    items?.forEach((item, i) => {
      const el = item as HTMLElement
      el.style.opacity = '0'
      el.style.transform = el.style.transform + ' scale(1.15)'

      setTimeout(() => {
        el.style.transition = `opacity 1.2s cubic-bezier(0.25, 0.74, 0.22, 0.99) ${i * 0.1}s, transform 1.4s cubic-bezier(0.25, 0.74, 0.22, 0.99) ${i * 0.1}s`
        el.style.opacity = '1'
        el.style.transform = el.style.transform.replace(' scale(1.15)', '')
      }, 100)
    })
  }, [])

  // Parallax suave nas imagens com mousemove
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mosaicRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20   // ±10px
      const y = (clientY / innerHeight - 0.5) * 20  // ±10px

      const items = mosaicRef.current.querySelectorAll('[data-mosaic-item]')
      items.forEach((item, i) => {
        const depth = (i % 3 + 1) * 0.5  // Profundidade variável
        const el = item as HTMLElement
        const baseTransform = el.dataset.baseTransform || ''
        el.style.transform = baseTransform + ` translate(${x * depth}px, ${y * depth}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className={styles.hero}>
      <div ref={mosaicRef} className={styles.mosaicGrid}>
        {MOSAIC_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className={styles.mosaicItem}
            data-mosaic-item
            data-base-transform={img.transform}
            style={{ transform: img.transform }}
          >
            <img src={img.src} alt={img.alt} loading={i === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>
      {/* ... resto do hero */}
    </section>
  )
}

const MOSAIC_IMAGES = [
  { src: '/images/hero/floresta.jpg',    alt: 'Floresta',    transform: 'rotate(-3deg) translateY(-8%)  scale(1.05)' },
  { src: '/images/hero/agua.jpg',        alt: 'Lago',        transform: 'rotate(2deg)  translateY(6%)   scale(1.02)' },
  { src: '/images/hero/fachada.jpg',     alt: 'Fachada',     transform: 'rotate(-1deg) translateY(-4%)  scale(1.03)' },
  { src: '/images/hero/bem-estar.jpg',   alt: 'Bem-estar',   transform: 'rotate(3deg)  translateY(9%)   scale(1.04)' },
  { src: '/images/hero/interior.jpg',    alt: 'Interior',    transform: 'rotate(-2deg) translateY(-2%)  scale(1.02)' },
  { src: '/images/hero/vista-serra.jpg', alt: 'Vista Serra', transform: 'rotate(1.5deg) translateY(11%) scale(1.06)' },
]
```

---

## 18. EXPERIÊNCIA DO USUÁRIO — FLUXO COMPLETO DE SCROLL

**Sequência de eventos ao rolar a página (baseada no sistema Springs):**

```
POSIÇÃO 0vh — HERO MOSAICO
├── Estado inicial: 6 imagens rotacionadas com overlay verde
├── Título "Esplendor de Renovação" entra com fadeInUp 1.4s
├── Mouse move → parallax suave nas imagens (±10px)
├── Scroll down → mosaico sai deslizando para cima (sticky)
└── Próxima seção "desliza sobre" o hero

POSIÇÃO 100vh — INTRO / SOBRE
├── Entrada: seção desliza sobre o hero como uma "página nova"
├── Imagem esquerda: parallax data-scroll-speed="-1" (move mais devagar)
├── Texto direito: fade-in-up sequencial (delay 0.1s por elemento)
├── Ao continuar scrollando → seção fica sticky e wellness sobe sobre ela
└── Transição de cor: off-white → verde serra

POSIÇÃO 300vh — WELLNESS (Tabs)
├── Fundo: verde serra com palavra "Bem-Estar" a 5% opacity
├── Tab ativa: Spa (padrão) — imagem lateral carregada
├── Clique em tab → imagem fade 0.4s cubic-bezier
├── Texto da tab → fadeIn 0.4s com translateY(8px)
└── Seção fica sticky até nature subir

POSIÇÃO 500vh — NATUREZA
├── Parallax agressivo: imagem fundo move a -3x velocidade do scroll
├── Título aparece com scroll-triggered fadeInUp
├── Cards entram com delay 0.1s cada (Intersection Observer)
├── Setas ← → funcionais para navegar entre pontos de destaque
└── Gradiente de fundo do verde serra ao transparente

POSIÇÃO 700vh — LOCALIZAÇÃO (Vídeo)
├── Vídeo autoplay muted loop playsInline começa imediatamente
├── Overlay gradiente de baixo (forte na base, transparente no topo)
├── Estatísticas entram com fadeInUp ao entrar na viewport
├── Números grandes em Cormorant 96px com cor pedra dourada
└── Cada stat tem delay: 0s / 0.15s / 0.30s

POSIÇÃO 900vh — RESIDÊNCIAS
├── Grid 3 colunas aparece com staggered animation (cada card +0.1s)
├── Hover no card: translateY(-4px) + scale(1.04) na imagem
├── Click no card: ativa estado e mostra info detalhada
├── Botão "VER APARTAMENTOS/etc" com underline animado
└── Tabs no topo filtram tipo

POSIÇÃO 1100vh — INTERIORES (Strip)
├── Strip horizontal visível com overflow-x auto
├── Setas ← → scrollBy(0.75 * containerWidth, smooth)
├── Drag/swipe funcional em mobile e desktop
├── Hover na imagem: scale(1.03) em 0.8s
└── Nenhum snap — scroll livre

POSIÇÃO 1300vh — FOOTER
├── Entrada: fadeIn simples
├── Links: opacity 0.7 → 1.0 em 0.4s hover
├── Botão CTA: background-color 0.8s ease-springs
└── Sem scroll adicional
```

---

## 19. ESPECIFICAÇÃO DO VÍDEO COVER (Seção Localização)

**Configuração obrigatória para autoplay funcionar em todos os browsers/mobile:**

```html
<video
  autoplay          <!-- Necessário: inicia automaticamente -->
  muted             <!-- OBRIGATÓRIO para autoplay mobile funcionar -->
  loop              <!-- Loop infinito sem pausa -->
  playsinline       <!-- OBRIGATÓRIO iOS — evita fullscreen automático -->
  preload="metadata" <!-- Carrega metadados mas não o vídeo todo -->
  poster="/images/location/gramado-poster.jpg"  <!-- Frame inicial -->
>
  <source src="/videos/gramado-aerial.webm" type="video/webm" />  <!-- Prioridade: webm menor -->
  <source src="/videos/gramado-aerial.mp4"  type="video/mp4"  />  <!-- Fallback: mp4 universal -->
</video>
```

**Especificações do arquivo de vídeo:**
- Duração: 15-30 segundos (loopável sem corte perceptível)
- Resolução: 1920x1080 mínimo, 2560x1440 ideal
- FPS: 24fps (cinematográfico) ou 30fps
- Bitrate MP4: ~4 Mbps (qualidade x peso)
- Bitrate WebM: ~2.5 Mbps (mais eficiente)
- Codec MP4: H.264 (compatibilidade máxima)
- Codec WebM: VP9 (melhor compressão)
- Tom visual: dourado/quente, saturação +10%, exposição natural
- Conteúdo sugerido: drone sobre Gramado ao entardecer, araucárias, névoa

**Fallback CSS para quando vídeo não carrega:**
```css
.videoWrap {
  background-image: url('/images/location/gramado-poster.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## 20. TRANSIÇÕES ENTRE PÁGINAS

**Implementar com Framer Motion (opcional) ou CSS puro:**

```tsx
// src/components/PageTransition.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.25, 0.74, 0.22, 0.99] } },
  exit:     { opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.25, 0.74, 0.22, 0.99] } },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
```

---

## 21. ESTRUTURA DE ARQUIVOS — ESTADO FINAL ESPERADO

```
fvs-novo-site/
├── src/
│   ├── app/                          # Next.js 14 App Router
│   │   ├── layout.tsx                # Root layout com fonts e scroll
│   │   ├── page.tsx                  # Homepage
│   │   ├── globals.css               # Tokens + imports
│   │   └── imoveis/
│   │       └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroMosaic.tsx        # Seção 1
│   │   │   ├── HeroMosaic.module.css
│   │   │   ├── IntroSection.tsx      # Seção 2
│   │   │   ├── IntroSection.module.css
│   │   │   ├── WellnessSection.tsx   # Seção 3 — tabs
│   │   │   ├── WellnessSection.module.css
│   │   │   ├── NatureSection.tsx     # Seção 4 — parallax
│   │   │   ├── NatureSection.module.css
│   │   │   ├── LocationSection.tsx   # Seção 5 — vídeo + stats
│   │   │   ├── LocationSection.module.css
│   │   │   ├── DesignSection.tsx     # Seção 6 — split reverso
│   │   │   ├── DesignSection.module.css
│   │   │   ├── ResidencesSection.tsx # Seção 7 — grid
│   │   │   ├── ResidencesSection.module.css
│   │   │   ├── InteriorsStrip.tsx    # Seção 8 — horizontal
│   │   │   └── InteriorsStrip.module.css
│   │   ├── Navbar.tsx
│   │   ├── Navbar.module.css
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── hooks/
│   │   ├── useLocomotiveScroll.ts
│   │   ├── useScrollReveal.ts
│   │   └── useParallax.ts
│   └── styles/
│       ├── globals.css               # @import tokens + animations
│       ├── design-tokens.css         # Todas as CSS vars
│       └── animations.css            # Keyframes + classes utilitárias
├── public/
│   ├── images/
│   │   ├── hero/                     # 6 imagens mosaico hero
│   │   ├── wellness/                 # 4 imagens tabs
│   │   ├── nature/                   # 3 imagens natureza
│   │   ├── design/                   # 2 imagens arquitetura
│   │   ├── residences/               # 3 imagens tipos
│   │   ├── interiors/                # 6 imagens strip
│   │   └── location/                 # poster vídeo
│   └── videos/
│       ├── gramado-aerial.mp4
│       └── gramado-aerial.webm
├── CLAUDE.md                         # ESTE ARQUIVO — autoridade única
└── package.json
```

---

## 22. COMANDOS DE INSTALAÇÃO E SETUP

```bash
# Clone e instale
git clone https://github.com/CristianodeSouza/fvs-novo-site.git
cd fvs-novo-site
npm install

# Dependências necessárias
npm install locomotive-scroll@4
npm install framer-motion          # Opcional — page transitions
npm install @types/locomotive-scroll --save-dev

# Dev server
npm run dev

# Build
npm run build
npm run start
```

---

## 23. CHECKLIST DE IMPLEMENTAÇÃO PARA O CLAUDE CLI

Execute nesta ordem exata:

```
[ ] 1.  Criar src/styles/design-tokens.css (todas as CSS vars da seção 2, 3, 4)
[ ] 2.  Criar src/styles/animations.css (keyframes seção 6)
[ ] 3.  Atualizar src/app/globals.css com @import dos tokens e animations
[ ] 4.  Instalar locomotive-scroll: npm install locomotive-scroll@4
[ ] 5.  Criar src/hooks/useLocomotiveScroll.ts
[ ] 6.  Criar src/hooks/useScrollReveal.ts
[ ] 7.  Criar src/components/Navbar.tsx + Navbar.module.css
[ ] 8.  Criar src/components/sections/HeroMosaic.tsx + .module.css (seção 8)
[ ] 9.  Criar src/components/sections/IntroSection.tsx + .module.css (seção 9)
[ ] 10. Criar src/components/sections/WellnessSection.tsx + .module.css (seção 10)
[ ] 11. Criar src/components/sections/NatureSection.tsx + .module.css (seção 11)
[ ] 12. Criar src/components/sections/LocationSection.tsx + .module.css (seção 12)
[ ] 13. Criar src/components/sections/DesignSection.tsx + .module.css (seção 13)
[ ] 14. Criar src/components/sections/ResidencesSection.tsx + .module.css (seção 14)
[ ] 15. Criar src/components/sections/InteriorsStrip.tsx + .module.css (seção 15)
[ ] 16. Criar src/components/Footer.tsx + Footer.module.css (seção 16)
[ ] 17. Atualizar src/app/page.tsx — montar todas as seções em ordem
[ ] 18. Atualizar src/app/layout.tsx — adicionar Google Fonts, Locomotive Scroll
[ ] 19. Adicionar imagens placeholder em /public/images/ para desenvolvimento
[ ] 20. Testar npm run dev — verificar sem erros de compilação
[ ] 21. Testar responsividade: 375px / 768px / 1024px / 1440px
[ ] 22. Testar scroll suave no desktop e mobile
[ ] 23. Verificar tabs do Wellness funcionando (image swap)
[ ] 24. Verificar strip de Interiores scrollável com setas
[ ] 25. Verificar vídeo autoplay na seção Localização
```

---

## 24. ARQUIVOS ANTIGOS A IGNORAR

Os seguintes arquivos existem no repositório mas são **obsoletos e devem ser ignorados**:
- DESIGN_ARCHITECTURE.md
- DESIGN_SYSTEM_INTEGRATED.md
- DESIGN_TOKENS_DOCUMENTATION.md
- FIGMA_ARCHITECTURE.md
- IMPLEMENTATION_ROADMAP.md
- NOVO_SITE_FVS_PRD_COMPLETO.md (e variações)
- PHASE_2_BRIEF.md
- PRD_MAPPING.md
- REFERENCE_ANALYSIS.md

**Autoridade única: apenas este arquivo CLAUDE.md é válido.**

---

*CLAUDE.md — FVS Incorporações — v2.0 — 30/05/2026*
*Gerado com análise técnica direta do código-fonte do Springs.estate*
