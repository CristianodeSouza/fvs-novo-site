import { EditorialTitle, SectionLabel, ScrollReveal } from '@/components/ui'

export const ManifestoSection = () => {
  return (
    <section className="py-32 md:py-48 bg-off-white">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <SectionLabel>Nossa Visão</SectionLabel>
          <EditorialTitle level="h2" className="mb-8">
            Um Manifesto de Conforto e Permanência
          </EditorialTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-preto-quente font-light leading-relaxed mb-6 max-w-3xl">
            Em FVS, acreditamos que uma residência é mais que um imóvel. É um território de confiança, um espaço onde a permanência é garantida pelo valor patrimonial inquestionável.
          </p>
          <p className="text-lg md:text-xl text-preto-quente font-light leading-relaxed max-w-3xl">
            Cada detalhe, cada espaço é pensado para oferecer conforto genuíno — aquele que permanece através das estações, das mudanças e do tempo.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
