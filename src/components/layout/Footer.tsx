export const Footer = () => {
  return (
    <footer className="bg-verde-serra text-off-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-light mb-4">FVS</h3>
            <p className="text-off-white/80 font-light">Residências premium em Gramado</p>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4 uppercase text-xs tracking-wider">Empresa</h4>
            <ul className="space-y-2 text-off-white/80 font-light">
              <li><a href="#" className="hover:text-pedra transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-pedra transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4 uppercase text-xs tracking-wider">Empreendimentos</h4>
            <ul className="space-y-2 text-off-white/80 font-light">
              <li><a href="#" className="hover:text-pedra transition-colors">Springs</a></li>
              <li><a href="#" className="hover:text-pedra transition-colors">Gramado</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4 uppercase text-xs tracking-wider">Contato</h4>
            <p className="text-off-white/80 font-light">contato@fvs.com.br</p>
          </div>
        </div>
        <div className="border-t border-off-white/20 pt-8">
          <p className="text-off-white/60 font-light text-sm text-center">
            © 2026 FVS Incorporadora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
