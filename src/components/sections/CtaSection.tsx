import { Button } from '../ui/Button';

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Orbs */}
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
        <span className="text-5xl mb-6 block">🚀</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          Pronto para começar sua jornada em TI?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Baixe agora os ebooks gratuitos e comece a aprender hoje mesmo. São mais de 500 páginas de conteúdo pensados para você!
        </p>
        <Button
          size="lg"
          onClick={() => {
            const el = document.querySelector('#ebooks');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="!bg-white !text-primary-700 hover:!bg-gray-50 !shadow-xl"
        >
          <span>📚</span>
          Explorar todos os ebooks
        </Button>
      </div>
    </section>
  );
}
