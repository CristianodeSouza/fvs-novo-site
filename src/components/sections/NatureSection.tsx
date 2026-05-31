'use client'

import { EditorialTitle, SectionLabel, ScrollReveal, ImageFrame } from '@/components/ui'

export const NatureSection = () => {
  return (
    <section className="py-32 md:py-48 bg-gradient-to-b from-verde-serra to-verde-profundo">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <SectionLabel className="text-off-white">Localização</SectionLabel>
          <EditorialTitle level="h2" className="text-off-white mb-12">
            O Território de Gramado
          </EditorialTitle>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="text-lg text-areia font-light leading-relaxed mb-6">
                Nestled nas montanhas do Rio Grande do Sul, Gramado oferece um microclima único, natureza exuberante e uma comunidade estabelecida de confiança.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-4xl font-light text-pedra">1.350m</p>
                  <p className="text-sm text-areia uppercase tracking-wider">Altitude média</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-pedra">Clima Subtropical</p>
                  <p className="text-sm text-areia uppercase tracking-wider">4 estações definidas</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <ImageFrame
              src="/images/gramado-landscape.jpg"
              alt="Paisagem de Gramado"
              ratio="16/9"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
