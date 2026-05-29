'use client'

import { SelectHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface SelectOption {
  value: string | number
  label: ReactNode
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode
  error?: string
  helperText?: ReactNode
  options: SelectOption[]
  placeholder?: string
}

export const Select = ({
  label,
  error,
  helperText,
  options,
  placeholder,
  className,
  ...props
}: SelectProps) => {
  const selectClasses = cn(
    'w-full px-md py-sm rounded-md border-2 border-nevoa bg-off-white text-preto-quente transition-colors duration-base focus:border-verde-serra focus:outline-none appearance-none',
    error && 'border-erro focus:border-erro',
    props.disabled && 'opacity-50 cursor-not-allowed bg-nevoa/20',
    className
  )

  return (
    <div className="flex flex-col gap-xs relative">
      {label && (
        <label className="text-label font-medium text-preto-quente">
          {label}
        </label>
      )}
      <div className="relative">
        <select className={selectClasses} {...props}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-md top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5 text-preto-quente"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      {error && (
        <p className="text-sm text-erro font-light">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-nevoa font-light">{helperText}</p>
      )}
    </div>
  )
}

export default Select
