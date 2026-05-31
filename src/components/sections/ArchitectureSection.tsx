'use client'

import { EditorialTitle, SectionLabel, ScrollReveal, ImageFrame } from '@/components/ui'

export const ArchitectureSection = () => {
  return (
    <section className="py-32 md:py-48 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <SectionLabel>Design & Construção</SectionLabel>
          <EditorialTitle level="h2" className="mb-12">
            Arquitetura que Permanece
          </EditorialTitle>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <ImageFrame
              src="/images/architecture-detail.jpg"
              alt="Detalhe arquitetônico"
              ratio="16/9"
            />
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <p className="text-lg text-preto-quente font-light leading-relaxed mb-6">
                Cada residência é concebida com materiais premium e atenção obsessiva aos detalhes construtivos. A arquitetura respeita a paisagem e complementa o território natural.
              </p>
              <ul className="space-y-3 text-preto-quente font-light">
                <li className="flex gap-3">
                  <span className="text-pedra">▪</span>
                  <span>Estrutura em concreto de alta resistência</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pedra">▪</span>
                  <span>Isolamento térmico e acústico premium</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pedra">▪</span>
                  <span>Acabamentos em materiais naturais</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
