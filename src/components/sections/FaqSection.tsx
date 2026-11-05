import { useState } from 'react';
import { faqItems } from '../../data/ebooks';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-100 rounded-full px-4 py-2 mb-4">
            <span className="text-accent-500 text-sm">❓</span>
            <span className="text-sm text-accent-600 font-medium">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Perguntas <span className="text-primary-600">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-500">
            Tudo que você precisa saber sobre os e-books da Destravando Tech.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-primary-200 shadow-md shadow-primary-50'
                    : 'border-gray-200 hover:border-primary-200'
                }`}
              >
                <button
                  className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-base transition-colors ${
                      isOpen ? 'text-primary-600' : 'text-gray-800 group-hover:text-primary-600'
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary-600 text-white rotate-45'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-primary-50 group-hover:text-primary-600'
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p className="px-5 pb-5 text-gray-600 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 rounded-2xl p-6 text-center">
          <p className="text-gray-700 font-medium mb-1">Ainda tem dúvidas?</p>
          <p className="text-gray-500 text-sm">
            Entre em contato conosco pelas redes sociais. Estamos sempre por aqui!
          </p>
        </div>
      </div>
    </section>
  );
}
