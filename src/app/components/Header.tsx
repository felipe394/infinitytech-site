import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const sections = ['home', 'services', 'portfolio', 'testimonials', 'contact'];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItemClass = (id: string) =>
    activeSection === id
      ? 'text-blue-600 font-semibold transition-colors'
      : 'text-gray-700 hover:text-blue-600 transition-colors';

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('home')} className="cursor-pointer" aria-label="Ir para o início">
              <Logo className="h-16 w-auto" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className={menuItemClass('home')}>
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className={menuItemClass('services')}>
              Serviços
            </button>
            <button onClick={() => scrollToSection('portfolio')} className={menuItemClass('portfolio')}>
              Portfólio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className={menuItemClass('testimonials')}>
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className={`${menuItemClass('home')} text-left`}>
                Início
              </button>
              <button onClick={() => scrollToSection('services')} className={`${menuItemClass('services')} text-left`}>
                Serviços
              </button>
              <button onClick={() => scrollToSection('portfolio')} className={`${menuItemClass('portfolio')} text-left`}>
                Portfólio
              </button>
              <button onClick={() => scrollToSection('testimonials')} className={`${menuItemClass('testimonials')} text-left`}>
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-full">
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}