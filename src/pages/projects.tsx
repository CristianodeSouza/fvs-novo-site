import Head from 'next/head'
import { Nav, PropertyCard, Footer } from '@/components'
import type { Property } from '@/types'

const properties: Property[] = [
  {
    id: '1',
    title: 'Residência Serra Verde',
    location: 'Centro de Gramado',
    price: 'A consultar',
    image: 'https://images.unsplash.com/photo-1512657855309-e90ac3654578?w=500&q=85',
    imageAlt: 'Residência Serra Verde',
    description: 'Imóvel de luxo com vista para a serra',
    slug: 'residencia-serra-verde',
    featured: true,
  },
  {
    id: '2',
    title: 'Apartamento Conforto',
    location: 'Zona Residencial',
    price: 'A consultar',
    image: 'https://images.unsplash.com/photo-1512672522529-52657efd5fcf?w=500&q=85',
    imageAlt: 'Apartamento Conforto',
    description: 'Imóvel moderno com todas as comodidades',
    slug: 'apartamento-conforto',
    featured: true,
  },
  {
    id: '3',
    title: 'Casa de Repouso',
    location: 'Vale das Flores',
    price: 'A consultar',
    image: 'https://images.unsplash.com/photo-1512643489897-0c9556b1c024?w=500&q=85',
    imageAlt: 'Casa de Repouso',
    description: 'Casa aconchegante para investimento imobiliário',
    slug: 'casa-repouso',
    featured: false,
  },
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projetos | FVS Incorporações</title>
        <meta name="description" content="Conheça nossos projetos imobiliários em Gramado" />
        <meta name="og:title" content="Projetos | FVS Incorporações" />
      </Head>

      <Nav />

      {/* Hero Section */}
      <section className="min-h-80 bg-verde-serra text-off-white py-2xl px-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-h1 font-serif font-light mb-md">Nossos Projetos</h1>
          <p className="text-lg font-light max-w-2xl">
            Explore nossos empreendimentos cuidadosamente desenvolvidos em Gramado
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-2xl px-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
                href={`/projects/${property.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
