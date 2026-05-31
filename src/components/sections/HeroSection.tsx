'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { EditorialTitle, PremiumButton } from '@/components/ui'

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[100vh] overflow-hidden bg-verde-serra" style={{minHeight: '100vh'}}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-gramado.jpg"
          alt="Residências premium em Gramado"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-verde-profundo/60 to-verde-serra/40 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.74, 0.22, 0.99] }}
          className="text-center max-w-4xl"
        >
          <EditorialTitle level="h1" className="text-off-white mb-6">
            Residências Premium em Gramado
          </EditorialTitle>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.74, 0.22, 0.99] }}
            className="text-lg md:text-xl text-areia mb-8 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Uma experiência de conforto, permanência e valor patrimonial no coração das montanhas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <PremiumButton variant="primary">
              Explorar
            </PremiumButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-off-white rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-off-white rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
