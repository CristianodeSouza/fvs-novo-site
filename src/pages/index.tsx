import Head from 'next/head'
import { Nav, Hero } from '@/components'
import { BeforeAfterSlider, HowItWorksSection } from '@/components/sections'
import styles from '@/styles/home.module.css'

const HOME_BEFORE_IMAGE = 'https://images.unsplash.com/photo-1512656371341-6a55d668eaf3?w=800&q=85'
const HOME_AFTER_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85'

const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: 'Localização Estratégica',
    description: 'Cada projeto FVS está situado nos melhores pontos de Gramado, garantindo valorização contínua.',
    icon: '📍',
    color: 'pedra',
  },
  {
    number: 2,
    title: 'Design Pensado',
    description: 'Arquitetura e design que respeitam o entorno natural, criando harmonia entre o espaço construído.',
    icon: '🏗️',
    color: 'cobre',
  },
  {
    number: 3,
    title: 'Confiança Patrimonial',
    description: 'Investimentos que crescem em segurança e valor ao longo dos anos. A FVS está aqui para permanecer.',
    icon: '✓',
    color: 'verde-serra',
  },
]

const TESTIMONIALS = [
  {
    quote: 'Escolher um imóvel FVS foi a melhor decisão de investimento que fizemos. A qualidade é incomparável.',
    author: 'Fernando Costa',
    role: 'Investidor',
  },
  {
    quote: 'O conforto de estar em um espaço que FVS criou é algo que se sente no primeiro dia. Permanência real.',
    author: 'Beatriz Mendes',
    role: 'Proprietária',
  },
  {
    quote: 'A FVS não apenas vende imóveis. Constrói histórias de valor e segurança para as famílias. Confio plenamente.',
    author: 'Roberto Silva',
    role: 'Empresário',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>FVS Incorporações | Imóveis em Gramado</title>
        <meta
          name="description"
          content="A FVS constrói percepção de valor sobre viver, investir e permanecer em Gramado."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="FVS Incorporações | Imóveis em Gramado" />
        <meta
          name="og:description"
          content="A FVS constrói percepção de valor sobre viver, investir e permanecer em Gramado."
        />
      </Head>

      <Nav />

      <Hero
        title="Viver em Gramado é uma Escolha que Permanece"
        subtitle="Imóveis que refletem o conforto de estar nos melhores locais da Serra Gaúcha"
        backgroundImage="https://images.unsplash.com/photo-1512656371341-6a55d668eaf3?w=1440&q=85"
        backgroundImageAlt="Paisagem de Gramado"
        ctaText="Explorar Projetos"
        ctaHref="/projects"
      />

      <section className={styles.beforeAfterSection}>
        <div className={styles.beforeAfterContainer}>
          <div>
            <h2 className={styles.sectionTitle}>A Transformação que Permanece</h2>
            <p style={{ color: 'var(--color-preto-quente)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Veja como a FVS reimagina espaços em Gramado, respeitando a paisagem e criando territórios de conforto.
            </p>
            <div className={styles.ctaContainer}>
              <button className={styles.ctaPrimary}>Explorar Projetos</button>
              <button className={styles.ctaSecondary}>Falar com Consultor FVS</button>
            </div>
          </div>

          <div className={styles.beforeAfterSlider}>
            <BeforeAfterSlider
              beforeSrc={HOME_BEFORE_IMAGE}
              afterSrc={HOME_AFTER_IMAGE}
              beforeAlt="Antes da transformação FVS"
              afterAlt="Depois da transformação FVS"
              initialPosition={50}
            />
          </div>
        </div>
      </section>

      <HowItWorksSection
        title="Como Funciona o Investimento FVS"
        subtitle="Três pilares que sustentam a confiança de quem escolhe permanecer em Gramado com a FVS."
        steps={HOW_IT_WORKS_STEPS}
      />

      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsHeader}>
          <h2 className={styles.sectionTitle}>O que Nossos Clientes Dizem</h2>
          <p style={{ color: 'var(--color-preto-quente)', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            Histórias reais de famílias e investidores que escolheram viver e investir com a FVS.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.author} className={styles.testimonialCard}>
              <blockquote className={styles.testimonialQuote}>"{testimonial.quote}"</blockquote>
              <p className={styles.testimonialAuthor}>— {testimonial.author}</p>
              <p className={styles.testimonialRole}>{testimonial.role}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className={styles.ctaPrimary}>Ver Projetos Disponíveis</button>
        </div>
      </section>
    </>
  )
}
