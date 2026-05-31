'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { animationVariants, motionTokens, transitionVariant } from '@/lib/motion-tokens'

interface EditorialTitleProps {
  children: React.ReactNode
  level?: 'h1' | 'h2' | 'h3'
  className?: string
  animated?: boolean
  delay?: number
}

export const EditorialTitle = ({
  children,
  level = 'h2',
  className = '',
  animated = true,
  delay = 0,
}: EditorialTitleProps) => {
  const baseStyles =
    'font-serif font-light text-verde-serra leading-tight tracking-tight'

  const sizeStyles = {
    h1: 'text-[clamp(80px,9vw,156px)]',
    h2: 'text-[clamp(64px,7vw,120px)]',
    h3: 'text-[clamp(48px,5vw,88px)]',
  }

  const Component = level as React.ElementType
  const classes = `${baseStyles} ${sizeStyles[level]} ${className}`

  if (!animated) {
    return (
      <Component className={classes}>
        {children}
      </Component>
    )
  }

  return (
    <motion.div
      initial={animationVariants.titleEnter.hidden}
      whileInView={animationVariants.titleEnter.visible}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...transitionVariant(motionTokens.durationMedium), delay }}
    >
      <Component className={classes}>
        {children}
      </Component>
    </motion.div>
  )
}
