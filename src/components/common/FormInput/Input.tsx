'use client'

import { InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  error?: string
  helperText?: ReactNode
}

export const Input = ({ label, error, helperText, className, ...props }: InputProps) => {
  const inputClasses = cn(
    'w-full px-md py-sm rounded-md border-2 border-nevoa bg-off-white text-preto-quente placeholder-pedra-clara transition-colors duration-base focus:border-verde-serra focus:outline-none',
    error && 'border-erro focus:border-erro',
    props.disabled && 'opacity-50 cursor-not-allowed bg-nevoa/20',
    className
  )

  return (
    <div className="flex flex-col gap-xs">
      {label && (
        <label className="text-label font-medium text-preto-quente">
          {label}
        </label>
      )}
      <input className={inputClasses} {...props} />
      {error && (
        <p className="text-sm text-erro font-light">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-nevoa font-light">{helperText}</p>
      )}
    </div>
  )
}

export default Input
