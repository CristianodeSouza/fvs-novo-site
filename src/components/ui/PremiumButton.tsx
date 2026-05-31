import React from 'react'

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
    'px-8 py-4 font-sans font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer'

  const variantStyles = {
    primary: 'bg-pedra text-verde-serra hover:bg-pedra-clara',
    secondary: 'bg-verde-serra text-off-white hover:bg-verde-profundo border border-pedra',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
