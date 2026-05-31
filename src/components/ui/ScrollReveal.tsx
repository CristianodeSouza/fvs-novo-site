'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { motionTokens, transitionVariant } from '@/lib/motion-tokens'

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
    up: { initial: { y: motionTokens.yMedium, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -motionTokens.yMedium, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: motionTokens.yMedium, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: -motionTokens.yMedium, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  }

  const variants = directionVariants[direction]

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...transitionVariant(motionTokens.durationMedium), delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
