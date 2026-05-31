import { EditorialTitle, SectionLabel, ScrollReveal, PremiumButton } from '@/components/ui'

export const ResidencesSection = () => {
  const residences = [
    {
      id: 1,
      name: 'Penthouse Premium',
      area: '320m²',
      bedrooms: 4,
      description: 'Vista panorâmica das montanhas',
    },
    {
      id: 2,
      name: 'Residência Clássica',
      area: '280m²',
      bedrooms: 4,
      description: 'Integração total com natureza',
    },
    {
      id: 3,
      name: 'Apartamento Premium',
      area: '240m²',
      bedrooms: 3,
      description: 'Acabamento impecável',
    },
  ]

  return (
    <section className="py-32 md:py-48 bg-areia">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <SectionLabel>Empreendimentos</SectionLabel>
          <EditorialTitle level="h2" className="mb-16">
            Residências Disponíveis
          </EditorialTitle>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {residences.map((residence, i) => (
            <ScrollReveal key={residence.id} delay={i * 0.1}>
              <div className="bg-off-white rounded-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full min-h-[520px]">
                <div className="flex-1 p-8 flex flex-col">
                  <h3 className="font-serif text-3xl font-light text-verde-serra mb-4">
                    {residence.name}
                  </h3>
                  <p className="text-lg text-pedra font-light mb-6">{residence.area}</p>
                  <p className="text-base text-preto-quente font-light mb-8 flex-1">{residence.description}</p>
                  <div className="mb-8 text-preto-quente font-light border-t border-pedra pt-4">
                    <p className="text-sm uppercase tracking-wider">{residence.bedrooms} quartos</p>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <PremiumButton variant="secondary" className="w-full justify-center">
                    Saiba Mais
                  </PremiumButton>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
