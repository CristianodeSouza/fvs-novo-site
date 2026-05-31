'use client'

import { EditorialTitle, SectionLabel, ScrollReveal } from '@/components/ui'

export const LegacySection = () => {
  const stats = [
    {
      number: '25+',
      label: 'Anos de trajetória',
    },
    {
      number: '500+',
      label: 'Famílias atendidas',
    },
    {
      number: '98%',
      label: 'Taxa de satisfação',
    },
    {
      number: '1°',
      label: 'Lugar em confiança',
    },
  ]

  return (
    <section className="py-32 md:py-48 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <SectionLabel>Confiança e Legado</SectionLabel>
          <EditorialTitle level="h2" className="mb-12">
            Construído sobre permanência
          </EditorialTitle>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-light text-pedra mb-2">
                  {stat.number}
                </p>
                <p className="text-sm uppercase tracking-wider text-preto-quente font-light">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-preto-quente font-light leading-relaxed mb-6">
              FVS é construída sobre três pilares: qualidade inquestionável, transparência total e permanência garantida. Não vendemos imóveis. Vendemos território de confiança.
            </p>
            <p className="text-lg md:text-xl text-preto-quente font-light leading-relaxed">
              Cada cliente FVS sabe que está investindo em mais que uma residência — está investindo em um legado patrimonial que resistirá às mudanças do tempo.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
