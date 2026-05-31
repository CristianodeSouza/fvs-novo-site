'use client'

import Link from 'next/link'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-verde-serra/95 backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-off-white font-serif text-2xl font-light">
          FVS
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-off-white hover:text-pedra transition-colors">Home</Link>
          <Link href="/about" className="text-off-white hover:text-pedra transition-colors">Sobre</Link>
          <Link href="/empreendimentos" className="text-off-white hover:text-pedra transition-colors">Empreendimentos</Link>
          <Link href="/contato" className="text-off-white hover:text-pedra transition-colors">Contato</Link>
        </nav>
      </div>
    </header>
  )
}
