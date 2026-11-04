<div align="center">

# 🚀 Destravando Tech — Frontend

### *Plataforma web para disponibilização gratuita de guias e ebooks sobre carreiras em TI.*

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 💻 Sobre a Aplicação

Aplicação Single Page Application (SPA) construída com **React 19**, **TypeScript** e **Tailwind CSS v4**, desenvolvida com foco em performance, acessibilidade e experiência do usuário (UX).

---

## 🛠️ Tecnologias e Bibliotecas

- **React 19**
- **TypeScript 5.7**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Vite 8**

---

## 👥 Equipe do Projeto

- **Stefani Ribeiro** ([@StefaniRibeiro](https://github.com/StefaniRibeiro)) — *Desenvolvedora Front-End*
- **Arthur Magno** ([@Magnao0507](https://github.com/Magnao0507)) — *Criador de Conteúdo*
- **Ryan Anry** ([@kl3inn](https://github.com/kl3inn)) — *Criador de Conteúdo*
- **Rogerfatico** ([@Rogerfatico](https://github.com/Rogerfatico)) — *Criador de Conteúdo*
- **Pablo Deodato** ([@PabloDeodato](https://github.com/PabloDeodato)) — *Designer & Divulgação*

---

## 📁 Estrutura de Código

```bash
src/
├── components/
│   ├── ebook/
│   │   ├── EbookCard.tsx     # Card do catálogo de ebooks
│   │   └── EbookModal.tsx    # Modal de detalhes e download
│   ├── layout/
│   │   ├── Navbar.tsx        # Navegação com scroll dinâmico
│   │   └── Footer.tsx        # Rodapé com links e categorias
│   ├── sections/
│   │   ├── HeroSection.tsx   # Banner principal animado
│   │   ├── FeaturesSection.tsx # Seção de diferenciais
│   │   ├── EbooksSection.tsx # Grade com filtros por categoria
│   │   ├── CtaSection.tsx    # Banner de incentivo
│   │   ├── TeamSection.tsx   # Seção da equipe com cards do GitHub
│   │   └── FaqSection.tsx    # Acordeão interativo de dúvidas
│   └── ui/
│       ├── Badge.tsx         # Tag customizável
│       └── Button.tsx        # Botão com variantes e tamanhos
├── data/
│   └── ebooks.ts             # Dados dos ebooks e FAQ
├── hooks/
│   └── useScroll.ts          # Hooks de scroll spy e posição da página
├── types/
│   └── ebook.ts              # Definições de tipos TypeScript
├── App.tsx                   # Composição das seções da página
├── index.css                 # Configuração Tailwind v4 e tema
└── main.tsx                  # Ponto de entrada React DOM
```

---

## 🚀 Comandos Disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento (`http://localhost:5173`) |
| `npm run build` | Compila o TypeScript e empacota a aplicação para produção na pasta `dist/` |
| `npm run preview` | Pré-visualiza localmente o build de produção |

---

## ➕ Adicionando Novos Ebooks

1. Copie o PDF para a pasta `public/ebooks/`.
2. Adicione os metadados do ebook em `src/data/ebooks.ts`.
