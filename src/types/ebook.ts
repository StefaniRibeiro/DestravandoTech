export interface Ebook {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: EbookCategory;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  pages: number;
  fileName: string;
  coverGradient: string;
  icon: string;
  tags: string[];
  highlights: string[];
}

export type EbookCategory =
  | 'Programação'
  | 'Banco de Dados'
  | 'Redes'
  | 'Segurança'
  | 'Inteligência Artificial'
  | 'Informática';

export interface FaqItem {
  question: string;
  answer: string;
}
