const teamMembers = [
  {
    name: 'Stefani Ribeiro',
    role: 'Desenvolvedora Front-End',
    description: 'Responsável pelo desenvolvimento e design do site, transformando o conhecimento em uma experiência digital acessível a todos.',
    github: 'https://github.com/StefaniRibeiro',
    username: 'StefaniRibeiro',
    avatar: 'https://github.com/StefaniRibeiro.png',
    emoji: '👩‍💻',
    gradient: 'from-primary-500 to-accent-500',
    tags: ['React', 'TypeScript', 'UI/UX'],
  },
  {
    name: 'Arthur Magno',
    role: 'Criador de Conteúdo',
    description: 'Co-criador dos e-books, dedicado a transformar conceitos complexos de TI em material didático claro e acessível para iniciantes.',
    github: 'https://github.com/Magnao0507',
    username: 'Magnao0507',
    avatar: 'https://github.com/Magnao0507.png',
    emoji: '📚',
    gradient: 'from-emerald-500 to-teal-600',
    tags: ['Conteúdo', 'Didática', 'TI'],
  },
  {
    name: 'Ryan Anry',
    role: 'Criador de Conteúdo',
    description: 'Co-criador dos e-books, apaixonado por democratizar o acesso ao conhecimento tecnológico e ajudar iniciantes a darem seus primeiros passos.',
    github: 'https://github.com/kl3inn',
    username: 'kl3inn',
    avatar: 'https://github.com/kl3inn.png',
    emoji: '✍️',
    gradient: 'from-amber-500 to-orange-600',
    tags: ['Conteúdo', 'Educação', 'Tech'],
  },
  {
    name: 'Rogério Fatico',
    role: 'Criador de Conteúdo',
    description: 'Co-criador dos e-books, dedicado a desenvolver conteúdos práticos e didáticos para capacitar novos talentos na área de tecnologia.',
    github: 'https://github.com/Rogerfatico',
    username: 'Rogerfatico',
    avatar: 'https://github.com/Rogerfatico.png',
    emoji: '📖',
    gradient: 'from-blue-500 to-cyan-600',
    tags: ['Conteúdo', 'TI', 'Didática'],
  },
  {
    name: 'Pablo Deodato',
    role: 'Designer',
    description: 'Responsável pela identidade visual dos e-books e pelos materiais de divulgação do projeto — panfletos, cartazes e peças gráficas que levam o conhecimento ainda mais longe.',
    github: 'https://github.com/PabloDeodato',
    username: 'PabloDeodato',
    avatar: 'https://github.com/PabloDeodato.png',
    emoji: '🎨',
    gradient: 'from-purple-500 to-violet-600',
    tags: ['Design', 'Divulgação', 'Panfletos', 'Cartazes'],
  },
];

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-2 mb-4">
            <span className="text-primary-500 text-sm">👥</span>
            <span className="text-sm text-primary-600 font-medium">Quem faz acontecer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Nossa <span className="text-primary-600">Equipe</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Pessoas apaixonadas por tecnologia e educação, unidas pelo objetivo de tornar o
            conhecimento em TI acessível para todos.
          </p>
        </div>

        {/* Team flex/grid centered */}
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <a
              key={member.username}
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)] min-w-[220px] max-w-sm"
              aria-label={`Ver GitHub de ${member.name}`}
            >
              {/* Avatar area — sem overflow-hidden para não cortar o avatar */}
              <div className="relative">
                {/* Gradient header */}
                <div className={`bg-gradient-to-br ${member.gradient} h-28 rounded-t-2xl overflow-hidden relative`}>
                  {/* Decorative circles */}
                  <div className="absolute top-3 right-3 w-16 h-16 bg-white/10 rounded-full" />
                  <div className="absolute top-8 right-8 w-8 h-8 bg-white/10 rounded-full" />
                </div>

                {/* Avatar centralizado na borda inferior do header */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 bg-gray-100">
                    <img
                      src={member.avatar}
                      alt={`Avatar de ${member.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.classList.add('flex', 'items-center', 'justify-center');
                          const span = document.createElement('span');
                          span.className = 'text-3xl';
                          span.textContent = member.emoji;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-14 px-5 pb-5 flex flex-col flex-1 text-center">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    @{member.username}
                  </p>
                  <p className="text-sm font-semibold text-primary-600 mt-1.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                  {member.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link indicator */}
                <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-500 group-hover:text-primary-600 group-hover:bg-primary-50 py-2 px-3 rounded-xl transition-all duration-200 border-t border-gray-100">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Ver perfil no GitHub</span>
                  <svg
                    className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
