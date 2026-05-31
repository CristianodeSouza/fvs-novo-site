import React from 'react'

interface EditorialTitleProps {
  children: React.ReactNode
  level?: 'h1' | 'h2' | 'h3'
  className?: string
}

export const EditorialTitle = ({
  children,
  level = 'h2',
  className = '',
}: EditorialTitleProps) => {
  const baseStyles =
    'font-serif font-light text-verde-serra leading-tight tracking-tight'

  const sizeStyles = {
    h1: 'text-[clamp(80px,9vw,156px)]',
    h2: 'text-[clamp(64px,7vw,120px)]',
    h3: 'text-[clamp(48px,5vw,88px)]',
  }

  const Component = level as React.ElementType
  return (
    <Component className={`${baseStyles} ${sizeStyles[level]} ${className}`}>
      {children}
    </Component>
  )
}
