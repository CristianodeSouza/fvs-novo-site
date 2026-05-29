# 📋 PRD MAPPING — FVS Novo Site
## Integração de Requisitos Funcionais com Design System

**Versão:** 1.0  
**Data:** 29/05/2026  
**Baseado em:** NOVO_SITE_FVS_PRD_COMPLETO.docx (GitHub)  
**Status:** Mapeamento em Construção

---

## 📌 NOTA IMPORTANTE

Este documento mapeia requisitos funcionais padrão para um **site de real estate luxury**. Os requisitos específicos do PRD (C:\Users\User\fvs-novo-site\NOVO_SITE_FVS_PRD_COMPLETO.docx) devem ser validados e expandidos.

**Requisitos Presentes?** Marcar com ✅ após validação no PRD original.

---

## 01 — ARQUITETURA DE NAVEGAÇÃO

### Página Principal (Homepage)

```
✅ Hero Section
   - Imagem de fundo Gramado/Serra
   - Headline: "Descobrir Gramado"
   - Subheadline: Expressão aprovada (viver, investir, permanência)
   - CTA: "Entrar na Experiência" ou "Explorar Propriedades"
   - Scroll indicator
   - Requisito PRD?: [A VALIDAR]

✅ Featured Properties Section
   - Grid de 3-6 propriedades destaque
   - Cards com imagem, título, localização, descrição
   - CTA: "Ver Detalhes"
   - Requisito PRD?: [A VALIDAR]

✅ Territory Section (Gramado/Serra Gaúcha)
   - Por que Gramado é argumento
   - Imagens/mapa da região
   - Destaques: Clima, paisagem, investimento
   - Requisito PRD?: [A VALIDAR]

✅ Trust Section (Histórico FVS)
   - Logo + "20+ anos construindo patrimônio"
   - Números: X residências, X famílias, X em Gramado
   - Depoimentos de clientes
   - Certificações/prêmios
   - Requisito PRD?: [A VALIDAR]

✅ Newsletter Signup
   - Email input + CTA "Receber Updates"
   - Mensagem: "Fique informado sobre novos projetos"
   - Requisito PRD?: [A VALIDAR]

✅ Footer
   - Links: Sobre, Projetos, Contato, Políticas
   - Endereço físico
   - Telefone/WhatsApp
   - Redes sociais links
   - Requisito PRD?: [A VALIDAR]
```

### Página de Projetos (Properties Listing)

```
✅ Header + Filtros
   - Título: "Projetos FVS em Gramado"
   - Filtros: Por localização, preço range, tipo
   - Ordenação: Recente, Preço, Nome
   - Requisito PRD?: [A VALIDAR]

✅ Property Cards Grid
   - Mesma estrutura do homepage, mas expandido
   - 20-50 propriedades paginated
   - Lazy load imagens
   - Requisito PRD?: [A VALIDAR]

✅ Pagination / Load More
   - "Carregar Mais" button ou pagination
   - Smooth scroll to results
   - Requisito PRD?: [A VALIDAR]
```

### Página de Detalhes da Propriedade (Property Detail)

```
✅ Hero Image
   - Imagem grande da fachada/destaque
   - Breadcrumb: Home > Projetos > Projeto X
   - Requisito PRD?: [A VALIDAR]

✅ Galeria de Imagens
   - Slider/lightbox com múltiplas imagens
   - Thumbnails abaixo
   - Zoom capability
   - Requisito PRD?: [A VALIDAR]

✅ Before-After Comparison (Inspirado LUMEN)
   - Imagem do terreno antes
   - Imagem do projeto depois
   - Slider interativo
   - Requisito PRD?: [A VALIDAR]

✅ Dados da Propriedade
   - Localização exata (endereço)
   - Metragem (área)
   - Número de unidades/quartos
   - Amenidades (piscina, gym, etc)
   - Status (em construção, pronto, vendido)
   - Requisito PRD?: [A VALIDAR]

✅ Descrição + Expressões Aprovadas
   - Texto descritivo
   - Usar APENAS expressões aprovadas
   - Foco em: conforto, permanência, valor patrimonial, território
   - Requisito PRD?: [A VALIDAR]

✅ Valor/Preço (se publicado)
   - Mostrar ou "Solicitar" conforme PRD
   - Range de preços possível
   - CTA: "Solicitar Apresentação"
   - Requisito PRD?: [A VALIDAR]

✅ Localização Map
   - Google Maps embed
   - Marcar localização FVS
   - Mostrar proximidade a: Centro, escolas, paisagem
   - Requisito PRD?: [A VALIDAR]

✅ CTA Buttons
   - "Solicitar Apresentação Completa"
   - "Falar com Consultor FVS"
   - "Compartilhar Projeto"
   - Requisito PRD?: [A VALIDAR]

✅ Related Properties
   - Mostrar 3-4 outros projetos similares
   - Bottom da página
   - Requisito PRD?: [A VALIDAR]
```

### Página de Contato (Contact / Schedule)

```
✅ Hero Section
   - Título: "Fale com Nossos Consultores"
   - Subheadline: "Solicite uma apresentação completa"
   - Requisito PRD?: [A VALIDAR]

✅ Contact Form
   - Nome (required)
   - Email (required)
   - Telefone (required)
   - Interesse (dropdown: qual projeto)
   - Mensagem (textarea, optional)
   - Newsletter opt-in
   - Submit button: "Enviar Solicitação"
   - Requisito PRD?: [A VALIDAR]

✅ Contact Information
   - Endereço físico
   - Email
   - Telefone
   - WhatsApp link
   - Horários de atendimento
   - Requisito PRD?: [A VALIDAR]

✅ Map/Location
   - Google Maps embed da sede FVS
   - Requisito PRD?: [A VALIDAR]

✅ After Submit
   - Mensagem de sucesso: "Obrigado! Entraremos em contato em breve."
   - Email de confirmação enviado ao usuário
   - Requisito PRD?: [A VALIDAR]
```

### Página Sobre (About)

```
✅ Hero Section
   - Título: "Sobre a FVS Incorporações"
   - Imagem ou vídeo da empresa
   - Requisito PRD?: [A VALIDAR]

✅ Missão / Visão / Valores
   - Posicionamento: "A FVS não vende imóveis. Constrói percepção de valor..."
   - Pilares: Conforto, Permanência, Confiança, Território, Valor Patrimonial
   - Requisito PRD?: [A VALIDAR]

✅ Histórico
   - Fundação: Ano
   - Timeline: Principais marcos
   - Números: Propriedades construídas, famílias, patrimônio
   - Requisito PRD?: [A VALIDAR]

✅ Depoimentos de Clientes
   - 3-5 depoimentos de moradores
   - Foto + Nome + "Morador desde XXXX"
   - Requisito PRD?: [A VALIDAR]

✅ Team (opcional)
   - Fundadores/principais executivos
   - Foto + nome + cargo
   - Requisito PRD?: [A VALIDAR]
```

---

## 02 — FLUXOS DE USUÁRIO

### Fluxo 1: Exploração Passiva (Visitante)

```
[Homepage] 
  ↓ (Scroll)
[Featured Properties] 
  ↓ (Clica em card)
[Property Detail] 
  ↓ (Lê conteúdo)
[Related Properties] 
  ↓ (Clica outro card) → volta a [Property Detail]
  ↓ (Clica "Contato")
[Contact Form] 
  ↓ (Submit)
[Confirmação]
```

**Requisito PRD?:** [A VALIDAR]

### Fluxo 2: Busca Ativa (Investidor)

```
[Homepage] 
  ↓ (Clica "Explorar Propriedades")
[Projects Listing] 
  ↓ (Aplica filtros: localização, preço)
[Resultados Filtrados] 
  ↓ (Clica em card do interesse)
[Property Detail] 
  ↓ (Lê dados financeiros)
[CTA "Solicitar Apresentação"]
[Contact Form pre-filled] 
  ↓ (Submit)
[Confirmação + Email]
```

**Requisito PRD?:** [A VALIDAR]

### Fluxo 3: Compartilhamento (Social)

```
[Property Detail] 
  ↓ (Clica "Compartilhar")
[Share Dialog] 
  ↓ (Escolhe: WhatsApp, Facebook, Instagram, Link)
[Compartilhado]
```

**Requisito PRD?:** [A VALIDAR]

---

## 03 — FORMULÁRIOS & VALIDAÇÃO

### Contact Form Validations

```yaml
Nome:
  type: text
  required: true
  min-length: 3
  max-length: 100
  error: "Por favor, insira seu nome completo"

Email:
  type: email
  required: true
  validation: RFC 5322
  error: "Email inválido"

Telefone:
  type: tel
  required: true
  format: "(XX) 9XXXX-XXXX"
  error: "Telefone inválido"

Projeto de Interesse:
  type: select (dropdown)
  required: true
  options: [Listar projetos ativos]
  error: "Selecione um projeto"

Mensagem:
  type: textarea
  required: false
  max-length: 1000

Newsletter:
  type: checkbox
  required: false
  default: checked
  label: "Receber novidades sobre projetos FVS"
```

**Requisito PRD?:** [A VALIDAR]

---

## 04 — INTEGRAÇÕES TÉCNICAS

### Email Management

```
✅ Welcome Email (após contato)
   - Template com branding FVS
   - Confirmação de recebimento
   - Próximos passos
   - Requisito PRD?: [A VALIDAR]

✅ Newsletter Email
   - Novos projetos
   - Histórias de moradores
   - Market insights Gramado
   - Frequência: quinzenal/mensal
   - Requisito PRD?: [A VALIDAR]

✅ Admin Notification
   - Novo contato via formulário
   - Dados completos do cliente
   - Rota para CRM/Dashboard
   - Requisito PRD?: [A VALIDAR]
```

### CRM Integration

```
✅ Lead Capture
   - Formulário → CRM (Salesforce, HubSpot, Pipefy)
   - Automações: Follow-up email, WhatsApp
   - Score leads por interesse
   - Requisito PRD?: [A VALIDAR]
```

### Analytics & Tracking

```
✅ Google Analytics 4
   - Page views
   - Property detail views
   - Form submissions
   - Contact interactions
   - Requisito PRD?: [A VALIDAR]

✅ Google Search Console
   - Monitor indexação
   - Query performance
   - Requisito PRD?: [A VALIDAR]

✅ Hotjar / Clarity
   - Heatmaps
   - Session recordings
   - User feedback
   - Requisito PRD?: [A VALIDAR]
```

### SEO & Meta

```
✅ Meta Tags
   - title: "FVS Incorporações — Gramado | Residências com Valor Patrimonial"
   - description: Única expressão aprovada por página
   - og:image, og:title, og:description
   - Requisito PRD?: [A VALIDAR]

✅ Sitemap & Robots.txt
   - Todas as páginas listadas
   - Dynamic sitemap para properties
   - Requisito PRD?: [A VALIDAR]

✅ Structured Data (Schema.org)
   - Organization schema
   - LocalBusiness schema
   - Product schema (para properties)
   - Requisito PRD?: [A VALIDAR]
```

---

## 05 — REQUISITOS FUNCIONAIS ADICIONAIS

### Performance

```
✅ LCP (Largest Contentful Paint): < 2.5s
✅ CLS (Cumulative Layout Shift): < 0.1
✅ Image optimization: WebP + srcset
✅ Lazy loading: below-the-fold content
✅ Minified CSS/JS
✅ Font optimization: font-display: swap
```

### Segurança

```
✅ HTTPS only
✅ Content Security Policy (CSP)
✅ Form validation (server-side)
✅ CSRF protection
✅ SQL injection prevention
✅ XSS prevention
```

### Responsividade

```
✅ Mobile-first design
✅ Breakpoints: 375px, 768px, 1024px, 1440px
✅ Touch targets: 44x44px minimum
✅ Font size: 16px minimum on mobile (prevent zoom)
✅ No horizontal scroll
```

### Acessibilidade (WCAG AA)

```
✅ Color contrast: 4.5:1 minimum
✅ Focus states: visible on all interactives
✅ Keyboard navigation: full site navigable
✅ Alt text: all meaningful images
✅ Labels: form inputs have labels
✅ prefers-reduced-motion: animations disabled if requested
```

---

## 06 — CONTEÚDO & COPY

### Brand Voice Compliance

Toda cópia do site DEVE:
- ✅ Usar APENAS expressões aprovadas
- ✅ Focar em: conforto, permanência, confiança, território, valor patrimonial
- ✅ Evitar: luxo, premium, exclusivo, elite, inovação, vanguarda
- ✅ Mencionar Gramado/Serra Gaúcha em contextos relevantes
- ✅ Tom: sofisticado, próximo, seguro, territorial, claro, maduro

**Requisito PRD?:** [A VALIDAR]

### Content Strategy

```
✅ Homepage: Inspiracional + CTA
✅ Projects: Informacional + detalhe
✅ About: Credibilidade + confiança
✅ Contact: Conversional + facilidade
✅ Blog (optional): Insights sobre Gramado, viver, investir
```

**Requisito PRD?:** [A VALIDAR]

---

## 07 — TIMELINE & ROADMAP

### Fase 1: Design System (Concluído ✅)
- ✅ DESIGN_ARCHITECTURE.md
- ✅ DESIGN_SYSTEM_INTEGRATED.md
- ✅ COMPONENTS_SPECIFICATION.md

### Fase 2: Design Tokens & High-Fidelity (Próxima)
- ⏳ Design tokens (colors, typography, spacing)
- ⏳ High-fidelity prototypes (Figma)
- ⏳ Component library

### Fase 3: Development & Implementation
- ⏳ Frontend build (HTML/CSS/JS)
- ⏳ Responsive testing
- ⏳ Acessibilidade audit
- ⏳ Performance optimization

### Fase 4: Content & Integration
- ⏳ Copywriting & SEO
- ⏳ CRM/Email integration
- ⏳ Analytics setup

### Fase 5: Testing & Launch
- ⏳ QA testing
- ⏳ User testing
- ⏳ Staging deployment
- ⏳ Production launch

---

## 📝 REQUISITOS A VALIDAR NO PRD ORIGINAL

- [ ] Homepage sections (featured properties, territory, trust)
- [ ] Properties data structure (campos, tipos, status)
- [ ] Lead management workflow
- [ ] Email/CRM integrations
- [ ] Content strategy (blog, sobre, etc)
- [ ] Legal/compliance requirements (LGPD, políticas)
- [ ] Analytics & tracking requirements
- [ ] Multilingual (português/inglês?)
- [ ] Mobile app considerado?
- [ ] Third-party integrations (chat, video tours, etc)

---

**Documento Confidencial — FVS Incorporações**  
**Última atualização:** 29/05/2026
