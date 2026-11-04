export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl text-white">
                Destravando <span className="text-primary-400">Tech</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Democratizando o conhecimento em tecnologia através de materiais
              gratuitos, acessíveis e de qualidade para todos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Início', href: '#hero' },
                { label: 'Catálogo de Ebooks', href: '#ebooks' },
                { label: 'Equipe', href: '#equipe' },
                { label: 'Perguntas Frequentes', href: '#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-white mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Programação',
                'Banco de Dados',
                'Redes',
                'Segurança',
                'Inteligência Artificial',
                'Informática',
              ].map((cat) => (
                <li key={cat} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {currentYear} Destravando Tech. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Feito com 💜 para a comunidade de TI
          </p>
        </div>
      </div>
    </footer>
  );
}
