import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export const SectionLabel = ({
  children,
  className = '',
}: SectionLabelProps) => {
  return (
    <span
      className={`inline-block font-sans text-xs uppercase tracking-[0.16em] text-pedra mb-4 ${className}`}
    >
      {children}
    </span>
  )
}
