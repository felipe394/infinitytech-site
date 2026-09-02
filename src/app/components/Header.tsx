import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { MagneticButton } from './gsap/MagneticButton';

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
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        background: scrolled
          ? 'rgba(10, 15, 30, 0.88)'
          : 'rgba(5, 10, 24, 0.65)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: scrolled
          ? '1px solid rgba(0, 212, 255, 0.2)'
          : '1px solid rgba(255,255,255,0.06)',
        boxShadow: scrolled ? '0 10px 35px rgba(0, 0, 0, 0.5)' : 'none',
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
              onMouseEnter={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 16px rgba(0,212,255,0.7))')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
            >
              <Logo className="h-14 w-auto" variant="white" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.03)',
                padding: '4px 6px',
                borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.06)',
                gap: '4px',
              }}
            >
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      position: 'relative',
                      color: active ? '#ffffff' : 'rgba(255,255,255,0.75)',
                      fontWeight: active ? 600 : 400,
                      fontSize: '14px',
                      textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif',
                      padding: '8px 18px',
                      borderRadius: '100px',
                      transition: 'color 0.2s ease',
                      display: 'inline-block',
                      zIndex: 1,
                    }}
                  >
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '100px',
                          background: 'linear-gradient(135deg, rgba(0,212,255,0.25) 0%, rgba(99,102,241,0.25) 100%)',
                          border: '1px solid rgba(0,212,255,0.4)',
                          boxShadow: '0 0 16px rgba(0,212,255,0.25)',
                          zIndex: -1,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA Contact with MagneticButton */}
            <div style={{ marginLeft: '12px' }}>
              <MagneticButton strength={0.25}>
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
                    boxShadow: isActive('/contato') ? '0 0 24px rgba(0,212,255,0.5)' : undefined,
                  }}
                >
                  Solicitar Orçamento →
                </Link>
              </MagneticButton>
            </div>
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

        {/* Mobile Menu with Motion AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{
                background: 'rgba(10, 15, 30, 0.98)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(0, 212, 255, 0.25)',
                borderRadius: '20px',
                padding: '24px',
                marginBottom: '16px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
              }}
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={item.path}
                      style={{
                        color: isActive(item.path) ? '#00d4ff' : 'rgba(255,255,255,0.85)',
                        fontWeight: isActive(item.path) ? 600 : 400,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '16px',
                        fontFamily: 'Inter, sans-serif',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        background: isActive(item.path) ? 'rgba(0,212,255,0.1)' : 'transparent',
                        border: isActive(item.path) ? '1px solid rgba(0,212,255,0.2)' : 'none',
                      }}
                    >
                      <span>{item.label}</span>
                      {isActive(item.path) && <span style={{ color: '#00d4ff' }}>●</span>}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/contato"
                    className="shimmer-btn"
                    style={{
                      color: '#fff',
                      padding: '14px 24px',
                      borderRadius: '100px',
                      fontWeight: 700,
                      fontSize: '15px',
                      textDecoration: 'none',
                      display: 'block',
                      textAlign: 'center',
                      marginTop: '10px',
                    }}
                  >
                    Solicitar Orçamento →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}