'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/utils/cn'

export interface GalleryItem {
  src: string
  alt: string
  title?: string
}

export interface GalleryProps {
  items: GalleryItem[]
  columns?: 2 | 3 | 4
}

export const Gallery = ({ items, columns = 3 }: GalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const colsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns]

  return (
    <>
      {/* Grid */}
      <div className={cn('grid grid-cols-1 gap-md', colsClass)}>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-nevoa hover:shadow-lg transition-shadow duration-base cursor-pointer group"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-slow"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {item.title && (
              <div className="absolute inset-0 bg-preto-quente/0 group-hover:bg-preto-quente/40 transition-colors duration-base flex items-end">
                <p className="text-off-white p-lg font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-base">
                  {item.title}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-preto-quente/95 flex items-center justify-center p-md"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-lg right-lg z-10 text-off-white hover:text-verde-serra transition-colors duration-base"
            aria-label="Fechar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full max-w-4xl h-full max-h-screen">
            <Image
              src={items[selectedIndex].src}
              alt={items[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Navigation */}
          <div className="absolute bottom-lg left-1/2 transform -translate-x-1/2 flex gap-md">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex((selectedIndex - 1 + items.length) % items.length)
              }}
              className="w-10 h-10 rounded-full bg-verde-serra text-off-white hover:bg-verde-serra/80 transition-colors duration-base flex items-center justify-center"
              aria-label="Anterior"
            >
              ←
            </button>
            <span className="text-off-white font-light">
              {selectedIndex + 1} de {items.length}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex((selectedIndex + 1) % items.length)
              }}
              className="w-10 h-10 rounded-full bg-verde-serra text-off-white hover:bg-verde-serra/80 transition-colors duration-base flex items-center justify-center"
              aria-label="Próximo"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
