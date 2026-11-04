import { useState } from 'react';
import type { Ebook, EbookCategory } from '../../types/ebook';
import { ebooks } from '../../data/ebooks';
import { EbookCard } from '../ebook/EbookCard';

const categories: Array<{ label: string; value: EbookCategory | 'Todos' }> = [
  { label: 'Todos', value: 'Todos' },
  { label: '💻 Programação', value: 'Programação' },
  { label: '🗄️ Banco de Dados', value: 'Banco de Dados' },
  { label: '🌐 Redes', value: 'Redes' },
  { label: '🔐 Segurança', value: 'Segurança' },
  { label: '🤖 Inteligência Artificial', value: 'Inteligência Artificial' },
  { label: '🖥️ Informática', value: 'Informática' },
];

export function EbooksSection() {
  const [activeCategory, setActiveCategory] = useState<EbookCategory | 'Todos'>('Todos');

  const filteredEbooks: Ebook[] =
    activeCategory === 'Todos'
      ? ebooks
      : ebooks.filter((e) => e.category === activeCategory);

  return (
    <section id="ebooks" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-2 mb-4">
            <span className="text-primary-500 text-sm">📚</span>
            <span className="text-sm text-primary-600 font-medium">Biblioteca Gratuita</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Nossos <span className="text-primary-600">Ebooks</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Materiais completos e acessíveis para você entrar ou avançar na carreira de TI.
            Tudo 100% gratuito, em PDF, pronto para baixar agora.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Ebook grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEbooks.map((ebook) => (
            <EbookCard key={ebook.id} ebook={ebook} />
          ))}
        </div>

        {filteredEbooks.length === 0 && (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-gray-500">Nenhum ebook encontrado nessa categoria ainda.</p>
          </div>
        )}
      </div>
    </section>
  );
}
