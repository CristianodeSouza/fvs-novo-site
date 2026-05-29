'use client'

import Link from 'next/link'
import { Input, Button } from '@/components/common'

export const Footer = () => {
  return (
    <footer className="bg-bg-dark text-off-white py-2xl px-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2xl mb-2xl">
        {/* Brand */}
        <div>
          <h4 className="text-lg font-serif font-light mb-md">FVS</h4>
          <p className="text-sm font-light text-nevoa leading-relaxed">
            Construindo percepção de valor sobre viver, investir e permanecer em Gramado.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="text-label font-medium mb-md uppercase text-off-white">
            Navegação
          </h5>
          <ul className="space-y-sm">
            {['Início', 'Projetos', 'Sobre', 'Contato'].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-light text-nevoa hover:text-verde-serra transition-colors duration-base"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-label font-medium mb-md uppercase text-off-white">
            Contato
          </h5>
          <ul className="space-y-sm text-sm font-light text-nevoa">
            <li>
              <a href="tel:+5554123456789" className="hover:text-verde-serra transition-colors duration-base">
                +55 54 1234-5678
              </a>
            </li>
            <li>
              <a href="mailto:contato@fvs.com.br" className="hover:text-verde-serra transition-colors duration-base">
                contato@fvs.com.br
              </a>
            </li>
            <li>
              Gramado, RS
              <br />
              Brasil
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="text-label font-medium mb-md uppercase text-off-white">
            Newsletter
          </h5>
          <form className="flex flex-col gap-sm">
            <Input
              type="email"
              placeholder="Seu email"
              className="bg-preto-quente/30 border-nevoa/50 text-off-white placeholder-nevoa"
            />
            <Button variant="primary" size="sm">
              Inscrever
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-nevoa/20 pt-2xl flex flex-col md:flex-row items-center justify-between gap-md text-sm font-light text-nevoa">
        <p>© 2026 FVS Incorporações. Todos os direitos reservados.</p>
        <div className="flex gap-lg">
          {['Privacidade', 'Termos', 'Cookies'].map((item) => (
            <Link
              key={item}
              href="#"
              className="hover:text-verde-serra transition-colors duration-base"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
