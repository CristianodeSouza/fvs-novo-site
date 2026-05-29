'use client'

import { TextareaHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode
  error?: string
  helperText?: ReactNode
  rows?: number
}

export const Textarea = ({
  label,
  error,
  helperText,
  rows = 4,
  className,
  ...props
}: TextareaProps) => {
  const textareaClasses = cn(
    'w-full px-md py-sm rounded-md border-2 border-nevoa bg-off-white text-preto-quente placeholder-pedra-clara transition-colors duration-base focus:border-verde-serra focus:outline-none resize-none',
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
      <textarea className={textareaClasses} rows={rows} {...props} />
      {error && (
        <p className="text-sm text-erro font-light">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-nevoa font-light">{helperText}</p>
      )}
    </div>
  )
}

export default Textarea
