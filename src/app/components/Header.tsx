import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { Logo } from './Logo';

const navItems = [
  { path: '/home', label: 'Início' },
  { path: '/servicos', label: 'Serviços' },
  { path: '/portfolio', label: 'Portfólio' },
  { path: '/porquenos', label: 'Por Que Nós' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(10, 15, 30, 0.95)'
          : 'rgba(5, 10, 24, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(0, 212, 255, 0.15)'
          : '1px solid rgba(255,255,255,0.05)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/home"
              aria-label="Ir para o início"
              style={{ display: 'block', transition: 'filter 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(0,212,255,0.6))')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
            >
              <Logo className="h-14 w-auto" variant="white" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover-underline"
                style={{
                  color: isActive(item.path) ? '#00d4ff' : 'rgba(255,255,255,0.8)',
                  fontWeight: isActive(item.path) ? 600 : 400,
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.01em',
                  padding: '4px 0',
                  position: 'relative',
                }}
                onMouseEnter={e => { if (!isActive(item.path)) (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={e => { if (!isActive(item.path)) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; }}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA Contact */}
            <Link
              to="/contato"
              className="shimmer-btn"
              style={{
                color: '#fff',
                padding: '10px 24px',
                borderRadius: '100px',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-block',
                letterSpacing: '0.02em',
                fontFamily: 'Inter, sans-serif',
                ...(isActive('/contato') ? { boxShadow: '0 0 20px rgba(0,212,255,0.4)' } : {}),
              }}
            >
              Solicitar Orçamento →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              color: '#fff',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '10px',
              padding: '8px',
              cursor: 'pointer',
            }}
            className="md:hidden"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            style={{
              background: 'rgba(10, 15, 30, 0.97)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 212, 255, 0.15)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '12px',
            }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    color: isActive(item.path) ? '#00d4ff' : 'rgba(255,255,255,0.8)',
                    fontWeight: isActive(item.path) ? 600 : 400,
                    textDecoration: 'none',
                    display: 'block',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {isActive(item.path) && (
                    <span style={{ color: '#00d4ff', marginRight: '8px' }}>→</span>
                  )}
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contato"
                className="shimmer-btn"
                style={{
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                  marginTop: '10px',
                }}
              >
                Solicitar Orçamento →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}