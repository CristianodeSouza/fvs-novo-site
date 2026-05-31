'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) => {
  const directionVariants = {
    up: { initial: { y: 48, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -48, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: 48, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: -48, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  }

  const variants = directionVariants[direction]

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.74, 0.22, 0.99],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
