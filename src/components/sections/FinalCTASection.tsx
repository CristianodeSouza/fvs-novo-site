'use client'

import { EditorialTitle, ScrollReveal, PremiumButton } from '@/components/ui'

export const FinalCTASection = () => {
  return (
    <section className="py-32 md:py-48 bg-verde-serra">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <ScrollReveal>
          <EditorialTitle level="h2" className="text-off-white mb-8">
            Seu Território de Confiança Aguarda
          </EditorialTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-areia font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Explore as residências premium FVS e descubra por que tantas famílias escolheram Gramado como seu refúgio permanente.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex gap-4 justify-center">
            <PremiumButton variant="primary">
              Agendar Visita
            </PremiumButton>
            <PremiumButton variant="secondary">
              Solicitar Informações
            </PremiumButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <div className="mt-16 pt-16 border-t border-off-white/20">
            <p className="text-sm text-areia/80 uppercase tracking-wider">
              Entre em contato conosco
            </p>
            <p className="text-lg text-off-white font-light mt-4">
              +55 (54) 9999-9999
            </p>
            <p className="text-lg text-off-white font-light">
              contato@fvs.com.br
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
