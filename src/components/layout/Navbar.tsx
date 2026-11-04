import { useState } from 'react';
import { useScrollY } from '../../hooks/useScroll';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Ebooks', href: '#ebooks' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollY();
  const isScrolled = scrollY > 50;

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span
              className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Destravando{' '}
              <span className="text-primary-400">Tech</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-primary-50 hover:text-primary-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button
              size="sm"
              onClick={() => handleNavClick('#ebooks')}
              variant={isScrolled ? 'primary' : 'outline'}
              className={!isScrolled ? '!border-white !text-white hover:!bg-white/20' : ''}
            >
              Ver Ebooks Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Abrir menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 mt-1 border-t border-gray-100">
              <Button size="sm" fullWidth onClick={() => handleNavClick('#ebooks')}>
                Ver Ebooks Grátis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
