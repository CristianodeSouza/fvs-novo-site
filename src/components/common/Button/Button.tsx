'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  fullWidth?: boolean
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-sm rounded-md font-medium transition-colors duration-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-serra disabled:opacity-50 disabled:cursor-not-allowed',
    fullWidth && 'w-full',

    // Size variants
    size === 'sm' && 'px-md py-sm text-sm h-10',
    size === 'md' && 'px-lg py-md text-base h-12',
    size === 'lg' && 'px-xl py-lg text-lg h-14',

    // Color variants
    variant === 'primary' && 'bg-pedra text-preto-quente hover:bg-pedra/90 active:bg-pedra/80',
    variant === 'secondary' && 'border-2 border-verde-serra text-verde-serra bg-transparent hover:bg-verde-serra hover:text-off-white active:bg-verde-serra/90',
    variant === 'tertiary' && 'text-cobre bg-transparent hover:bg-cobre/10 active:bg-cobre/20 border border-transparent',

    className
  )

  return (
    <button
      className={baseClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="w-4 h-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}

export default Button
