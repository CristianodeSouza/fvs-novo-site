import type { Metadata } from 'next'
import { Header, Footer } from '@/components'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'FVS Springs | Residências Premium em Gramado',
  description: 'Experiência digital premium. Residências com conforto, permanência e valor patrimonial em Gramado.',
  openGraph: {
    title: 'FVS Springs | Residências Premium em Gramado',
    description: 'Experiência digital premium. Residências com conforto, permanência e valor patrimonial.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#2B3A2C" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Outfit:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
