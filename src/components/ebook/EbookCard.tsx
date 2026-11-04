import { useState } from 'react';
import type { Ebook } from '../../types/ebook';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { EbookModal } from './EbookModal';

interface EbookCardProps {
  ebook: Ebook;
}

export function EbookCard({ ebook }: EbookCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = `/ebooks/${ebook.fileName}`;
    link.download = ebook.fileName;
    link.click();
  };

  return (
    <>
      <article
        className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
        aria-label={`Ver detalhes do ebook: ${ebook.title}`}
      >
        {/* Cover */}
        <div
          className={`relative bg-gradient-to-br ${ebook.coverGradient} h-44 flex items-center justify-center overflow-hidden`}
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
          <span className="text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
            {ebook.icon}
          </span>

          {/* Level badge */}
          <div className="absolute top-3 right-3">
            <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {ebook.level}
            </span>
          </div>

          {/* Free badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
              GRÁTIS
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="mb-1">
            <Badge variant="secondary">{ebook.category}</Badge>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mt-2 leading-tight group-hover:text-primary-600 transition-colors">
            {ebook.title}
          </h3>
          <p className="text-sm text-primary-500 font-medium mb-2">{ebook.subtitle}</p>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
            {ebook.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
            {ebook.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {ebook.pages} páginas
            </span>
            <Button size="sm" onClick={handleDownload}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Baixar PDF
            </Button>
          </div>
        </div>
      </article>

      <EbookModal
        ebook={ebook}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
