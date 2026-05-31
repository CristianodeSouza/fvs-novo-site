'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { motionTokens, animationVariants } from '@/lib/motion-tokens'

interface PremiumButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export const PremiumButton = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: PremiumButtonProps) => {
  const baseStyles =
    'px-8 py-4 font-sans font-medium uppercase tracking-wider cursor-pointer rounded-sm'

  const variantStyles = {
    primary: 'bg-pedra text-verde-serra',
    secondary: 'border border-pedra text-pedra bg-transparent',
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={animationVariants.buttonHover}
      whileTap={animationVariants.buttonTap}
      transition={{ duration: motionTokens.durationFast, ease: motionTokens.easePremium }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}
