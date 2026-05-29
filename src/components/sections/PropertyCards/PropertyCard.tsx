'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { Button } from '@/components/common/Button'

export interface PropertyCardProps {
  id: string
  title: string
  location: string
  price: string
  image: string
  imageAlt: string
  beforeImage?: string
  beforeImageAlt?: string
  description?: string
  href?: string
}

export const PropertyCard = ({
  id,
  title,
  location,
  price,
  image,
  imageAlt,
  beforeImage,
  beforeImageAlt,
  description,
  href = `/projects/${id}`,
}: PropertyCardProps) => {
  return (
    <article className="group overflow-hidden rounded-lg bg-off-white shadow-md hover:shadow-lg transition-shadow duration-base">
      {/* Image Container with Before-After */}
      <div className="relative h-80 md:h-96 w-full overflow-hidden bg-nevoa">
        {beforeImage ? (
          <div className="relative h-full w-full">
            {/* Before Image */}
            <Image
              src={beforeImage}
              alt={beforeImageAlt || 'Antes'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* After Image Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover group-hover:opacity-0 transition-opacity duration-base"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {/* Comparison Label */}
            <div className="absolute top-md right-md bg-verde-serra text-off-white px-md py-sm rounded-md text-xs font-medium">
              Antes/Depois
            </div>
          </div>
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-slow"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-lg">
        <div className="flex items-start justify-between gap-md mb-md">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-serif font-normal text-preto-quente mb-xs truncate">
              {title}
            </h3>
            <p className="text-sm text-nevoa font-light">
              {location}
            </p>
          </div>
        </div>

        {description && (
          <p className="text-sm font-light text-preto-quente mb-md line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between gap-md mb-lg">
          <p className="text-lg font-serif font-normal text-verde-serra">
            {price}
          </p>
        </div>

        <Button
          as="a"
          href={href}
          variant="secondary"
          size="sm"
          fullWidth
        >
          Ver Detalhes
        </Button>
      </div>
    </article>
  )
}

export default PropertyCard
