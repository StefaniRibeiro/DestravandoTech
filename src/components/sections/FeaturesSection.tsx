const features = [
  {
    icon: '🆓',
    title: '100% Gratuito',
    description: 'Todos os e-books são completamente gratuitos. Sem cadastro, sem cartão, sem pegadinhas.',
  },
  {
    icon: '📱',
    title: 'Leia em qualquer lugar',
    description: 'Formato PDF compatível com celular, tablet, computador ou para imprimir.',
  },
  {
    icon: '🎯',
    title: 'Feito para iniciantes',
    description: 'Linguagem simples e didática. Você não precisa saber nada de tecnologia para começar.',
  },
  {
    icon: '🚀',
    title: 'Conteúdo Atualizado',
    description: 'Materiais desenvolvidos com foco no mercado de trabalho atual em TI.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
