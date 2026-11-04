import { Button } from '../ui/Button';

const stats = [
  { value: '7', label: 'Ebooks Gratuitos' },
  { value: '500+', label: 'Páginas de Conteúdo' },
  { value: '100%', label: 'Gratuito' },
];

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900" />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-24 lg:py-0">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-primary-300 text-sm">✨</span>
              <span className="text-sm text-white/80 font-medium">
                Conhecimento em TI para todos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Destrave sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">
                carreira em TI
              </span>{' '}
              de graça
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Ebooks gratuitos e completos sobre as principais áreas da
              tecnologia. Do zero ao profissional, no seu ritmo, sem pagar nada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => handleScroll('#ebooks')}
                className="group"
              >
                <span>📚</span>
                Ver todos os Ebooks
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScroll('#faq')}
                className="!border-white/40 !text-white hover:!bg-white/10"
              >
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Stats / Visual */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {/* Floating card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-72 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl flex items-center justify-center text-xl">
                  🎓
                </div>
                <div>
                  <p className="text-white font-semibold">Aprenda no seu ritmo</p>
                  <p className="text-white/60 text-sm">PDFs para ler em qualquer lugar</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 rounded-xl p-3 text-center"
                  >
                    <p className="text-white font-bold text-xl">{stat.value}</p>
                    <p className="text-white/60 text-xs leading-tight mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ebook cards preview */}
            <div className="flex gap-3">
              {['💻', '🤖', '🔐', '🗄️'].map((icon, i) => (
                <div
                  key={icon}
                  className="w-16 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                  style={{ transform: `rotate(${(i - 1.5) * 3}deg)` }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="lg:hidden grid grid-cols-3 gap-4 pb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
            >
              <p className="text-white font-bold text-2xl">{stat.value}</p>
              <p className="text-white/60 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/40 text-xs">Role para baixo</span>
        <svg
          className="w-5 h-5 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
