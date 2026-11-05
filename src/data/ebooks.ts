import type { Ebook, FaqItem } from '../types/ebook';

export const ebooks: Ebook[] = [
  {
    id: 'programacao-iniciantes',
    title: 'Programação para Iniciantes',
    subtitle: 'Do zero ao primeiro código',
    description:
      'Um guia completo para quem está dando os primeiros passos no mundo da programação. Aprenda os conceitos fundamentais com exemplos práticos e exercícios.',
    category: 'Programação',
    level: 'Iniciante',
    pages: 85,
    fileName: 'ebook_programacao_iniciantes_azul_corrigido_v2.pdf',
    coverGradient: 'from-blue-500 to-indigo-700',
    icon: '💻',
    tags: ['Lógica', 'Algoritmos', 'Fundamentos'],
    highlights: [
      'Lógica de programação do zero',
      'Exemplos práticos e visuais',
      'Exercícios com soluções comentadas',
      'Glossário completo de termos',
    ],
  },
  {
    id: 'python-logica',
    title: 'Primeiro Código',
    subtitle: 'Guia Prático de Lógica e Python',
    description:
      'Domine a linguagem Python partindo da lógica básica até criar seus primeiros programas funcionais. Ideal para quem quer entrar no mercado de tecnologia.',
    category: 'Programação',
    level: 'Iniciante',
    pages: 92,
    fileName: 'Primeiro Código - Guia Prático de Lógica e Python.pdf',
    coverGradient: 'from-yellow-400 to-orange-600',
    icon: '🐍',
    tags: ['Python', 'Lógica', 'Prática'],
    highlights: [
      'Fundamentos de Python explicados',
      'Projetos práticos guiados',
      'Sintaxe simplificada para iniciantes',
      'Do pseudocódigo ao Python real',
    ],
  },
  {
    id: 'banco-de-dados',
    title: 'Banco de Dados',
    subtitle: 'Guia completo para iniciantes',
    description:
      'Entenda como funcionam os bancos de dados relacionais, aprenda SQL e descubra como armazenar e consultar informações de forma eficiente.',
    category: 'Banco de Dados',
    level: 'Iniciante',
    pages: 68,
    fileName: 'ebook_banco_de_dados_letras_maiores_sem_cortes.pdf',
    coverGradient: 'from-green-500 to-teal-700',
    icon: '🗄️',
    tags: ['SQL', 'Relacional', 'Dados'],
    highlights: [
      'Conceitos de modelagem de dados',
      'SQL do básico ao avançado',
      'Exercícios práticos com exemplos reais',
      'Dicionário de comandos SQL',
    ],
  },
  {
    id: 'redes-computadores',
    title: 'Redes de Computadores',
    subtitle: 'Para iniciantes em TI',
    description:
      'Aprenda como a internet funciona, entenda protocolos, topologias e como configurar redes básicas. Essencial para qualquer profissional de TI.',
    category: 'Redes',
    level: 'Iniciante',
    pages: 54,
    fileName: 'ebook_guia_redes_computadores_iniciantes_PRETO_capa_corrigida.pdf',
    coverGradient: 'from-purple-500 to-violet-700',
    icon: '🌐',
    tags: ['TCP/IP', 'Protocolos', 'Infraestrutura'],
    highlights: [
      'Como a internet realmente funciona',
      'Modelos OSI e TCP/IP descomplicados',
      'Configuração de redes básicas',
      'Glossário de termos de redes',
    ],
  },
  {
    id: 'seguranca-digital',
    title: 'Segurança Digital',
    subtitle: 'Proteja-se no mundo virtual',
    description:
      'Conheça as principais ameaças digitais e aprenda como se proteger. Um guia acessível sobre cibersegurança para usuários e profissionais iniciantes.',
    category: 'Segurança',
    level: 'Iniciante',
    pages: 47,
    fileName: 'ebook_guia_seguranca_digital_comunidade_azul_titulos.pdf',
    coverGradient: 'from-red-500 to-rose-700',
    icon: '🔐',
    tags: ['Cibersegurança', 'Privacidade', 'Proteção'],
    highlights: [
      'Principais tipos de ataques digitais',
      'Como criar senhas seguras',
      'Boas práticas de segurança online',
      'Ferramentas gratuitas de proteção',
    ],
  },
  {
    id: 'ia-iniciantes',
    title: 'Inteligência Artificial',
    subtitle: 'Guia prático para iniciantes',
    description:
      'Desmistifique a IA! Entenda o que é machine learning, como as ferramentas de IA funcionam e como usá-las no dia a dia e na carreira.',
    category: 'Inteligência Artificial',
    level: 'Iniciante',
    pages: 61,
    fileName: 'ebook_guia_pratico_ia_iniciantes_UNIP_2026_MODELO_FINAL_SEM_MARCA.pdf',
    coverGradient: 'from-cyan-500 to-sky-700',
    icon: '🤖',
    tags: ['Machine Learning', 'ChatGPT', 'Automação'],
    highlights: [
      'O que é IA de forma simples',
      'Ferramentas de IA mais usadas',
      'Como usar IA na sua carreira',
      'Casos de uso práticos',
    ],
  },
  {
    id: 'informatica-basica',
    title: 'Informática Básica',
    subtitle: 'Guia para a comunidade',
    description:
      'Do mouse ao computador completo: um guia descomplicado para quem está começando a usar tecnologia. Ideal para iniciantes de todas as idades.',
    category: 'Informática',
    level: 'Iniciante',
    pages: 43,
    fileName: 'ebook_guia_informatica_basica_comunidade_PRETO_lateral.pdf',
    coverGradient: 'from-slate-500 to-gray-700',
    icon: '🖥️',
    tags: ['Windows', 'Office', 'Internet'],
    highlights: [
      'Uso básico do computador e internet',
      'Microsoft Office para iniciantes',
      'Como se proteger online',
      'Dicas práticas do dia a dia',
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'Os e-books são realmente gratuitos?',
    answer:
      'Sim! Todos os e-books da Destravando Tech são 100% gratuitos. Acreditamos que o conhecimento em tecnologia deve ser acessível a todos, independente de condição financeira.',
  },
  {
    question: 'Qual nível de conhecimento preciso ter para ler os e-books?',
    answer:
      'Todos os nossos e-books foram criados pensando em iniciantes! Você não precisa ter nenhum conhecimento prévio em TI. Os conteúdos são apresentados de forma progressiva, do mais simples ao mais complexo.',
  },
  {
    question: 'Em qual formato estão os e-books?',
    answer:
      'Todos os e-books estão no formato PDF, que pode ser lido em qualquer dispositivo: computador, tablet, smartphone ou até impresso.',
  },
  {
    question: 'Posso compartilhar os e-books com outras pessoas?',
    answer:
      'Sim! Incentivamos o compartilhamento do conhecimento. Você pode compartilhar os PDFs livremente com amigos, colegas e familiares. Quanto mais pessoas aprenendo tecnologia, melhor!',
  },
  {
    question: 'Com que frequência novos e-books são lançados?',
    answer:
      'Estamos sempre trabalhando em novos conteúdos! Fique de olho no site para novidades. Nosso objetivo é cobrir cada vez mais áreas da tecnologia de forma acessível.',
  },
  {
    question: 'Os e-books têm certificado?',
    answer:
      'Atualmente os e-books não acompanham certificado. São materiais de estudo para ajudar na sua jornada de aprendizado. Para certificações oficiais, recomendamos buscar cursos formais reconhecidos pelo mercado.',
  },
];
