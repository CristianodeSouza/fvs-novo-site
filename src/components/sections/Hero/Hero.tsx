'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'

export interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  backgroundImageAlt: string
  ctaText?: string
  ctaHref?: string
  parallaxIntensity?: number
}

export const Hero = ({
  title,
  subtitle,
  backgroundImage,
  backgroundImageAlt,
  ctaText = 'Explorar',
  ctaHref = '#',
  parallaxIntensity = 0.5,
}: HeroProps) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * parallaxIntensity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [parallaxIntensity])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-preto-quente">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-preto-quente/40 via-transparent to-preto-quente/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-md">
        <div className="max-w-4xl text-center animate-fade-in">
          {/* Main Title */}
          <h1 className="text-h1 text-off-white mb-md font-serif font-light leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-nevoa mb-2xl font-light leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          {/* CTA Button */}
          <a
            href={ctaHref}
            className={cn(
              'inline-flex items-center justify-center gap-sm rounded-md font-medium transition-colors duration-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-serra px-xl py-lg text-lg h-14 bg-pedra text-preto-quente hover:bg-pedra/90 active:bg-pedra/80 animate-fade-in-delay',
              'cursor-pointer no-underline'
            )}
          >
            {ctaText}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-xl left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-off-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.6s ease-out 0.2s both;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
