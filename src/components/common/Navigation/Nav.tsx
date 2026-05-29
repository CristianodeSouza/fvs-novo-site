'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { Button } from '@/components/common/Button'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/projects', label: 'Projetos' },
    { href: '/about', label: 'Sobre' },
    { href: '/contact', label: 'Contato' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-md left-md right-md z-40 rounded-lg transition-all duration-base',
        isScrolled
          ? 'bg-verde-serra/95 backdrop-blur-sm shadow-lg border border-verde-serra'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-lg py-md flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-serif font-light text-preto-quente hover:text-verde-serra transition-colors duration-base">
          FVS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-light transition-colors duration-base',
                isScrolled ? 'text-off-white hover:text-cobre' : 'text-preto-quente hover:text-verde-serra'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="tertiary" size="sm" className={isScrolled ? 'text-cobre' : ''}>
            Entrar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'md:hidden w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-serra',
            isScrolled ? 'text-off-white hover:bg-verde-serra/20' : 'text-preto-quente hover:bg-verde-serra/10'
          )}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-verde-serra border-t border-verde-serra/30 rounded-b-lg">
          <div className="flex flex-col gap-md p-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-off-white hover:text-cobre transition-colors duration-base font-light"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="secondary" size="sm" fullWidth>
              Entrar
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
