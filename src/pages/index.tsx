import Head from 'next/head'
import { Nav, Hero } from '@/components'

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

      <section className="py-2xl px-md max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {[
            {
              title: 'Conforto',
              description: 'Espaços projetados para bem-estar e tranquilidade',
            },
            {
              title: 'Permanência',
              description: 'Investimentos que crescem em valor ao longo do tempo',
            },
            {
              title: 'Confiança',
              description: 'Parceria sólida com décadas de experiência no mercado',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border-t-2 border-verde-serra pt-lg hover:shadow-lg transition-shadow duration-base"
            >
              <h3 className="text-lg font-serif font-normal text-preto-quente mb-md">
                {item.title}
              </h3>
              <p className="text-base font-light text-preto-quente leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
