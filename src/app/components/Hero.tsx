import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import heroImage from '../assets/hero-it.png';

const typewriterWords = ['Seu Negócio', 'Sua Empresa', 'Seu Futuro'];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.5 + 0.2,
}));

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Typewriter effect
  useEffect(() => {
    const word = typewriterWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 50);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typewriterWords.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  // Reveal animation
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #050a18 0%, #0a0f2e 40%, #0d1535 70%, #080c1f 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
      }}
    >
      {/* Tech Grid Background */}
      <div
        className="tech-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.6 }}
      />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.id % 2 === 0
              ? 'rgba(0, 212, 255, 0.6)'
              : 'rgba(99, 102, 241, 0.6)',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
            {/* Badge */}
            <div
              className="animate-fade-up-delay-1"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.25)',
                borderRadius: '100px',
                padding: '6px 16px',
                marginBottom: '28px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#00d4ff',
                letterSpacing: '0.08em',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00d4ff', display: 'inline-block', boxShadow: '0 0 8px #00d4ff' }} />
              🚀 Tecnologia • Suporte • Desenvolvimento Web
            </div>

            {/* H1 */}
            <h1
              className="animate-fade-up-delay-2"
              style={{
                fontFamily: 'Space Grotesk, Inter, sans-serif',
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Soluções em T.I.{' '}
              <span style={{ display: 'block', marginTop: '4px' }}>
                Para{' '}
                <span className="gradient-text-animated typewriter-cursor">
                  {displayed}
                </span>
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 600,
                  marginTop: '8px',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                Crescer Sem Limites
              </span>
            </h1>

            {/* Description */}
            <p
              className="animate-fade-up-delay-3"
              style={{
                fontSize: '17px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.75,
                marginBottom: '36px',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '520px',
              }}
            >
              Oferecemos soluções completas em tecnologia: desde backups e formatação
              até desenvolvimento web, infraestrutura de rede e muito mais. Seu parceiro
              ideal em T.I.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up-delay-4"
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <Link
                to="/contato"
                className="shimmer-btn"
                style={{
                  color: '#fff',
                  padding: '14px 32px',
                  borderRadius: '100px',
                  fontWeight: 700,
                  fontSize: '16px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.01em',
                }}
              >
                Solicitar Orçamento →
              </Link>

              <Link
                to="/servicos"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  padding: '14px 32px',
                  borderRadius: '100px',
                  fontWeight: 600,
                  fontSize: '16px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.06)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.4)';
                  (e.currentTarget as HTMLElement).style.color = '#00d4ff';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                }}
              >
                Ver Serviços
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="animate-fade-up-delay-5"
              style={{
                display: 'flex',
                gap: '32px',
                marginTop: '48px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {[
                { value: '100%', label: 'Dedicação' },
                { value: '24/7', label: 'Suporte' },
                { value: '∞', label: 'Soluções' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'left' }}>
                  <div
                    className="gradient-text counter-glow"
                    style={{
                      fontSize: '28px',
                      fontWeight: 800,
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="animate-fade-up-delay-3"
            style={{ position: 'relative' }}
          >
            {/* Glow ring */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(99,102,241,0.2))',
              filter: 'blur(30px)',
              zIndex: 0,
            }} />

            {/* Neon border frame */}
            <div
              className="neon-border"
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '24px',
                border: '1px solid rgba(0,212,255,0.3)',
                overflow: 'hidden',
                boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src={heroImage}
                alt="Ambiente profissional de T.I. com servidores e monitores"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(10,15,30,0.7), transparent)',
              }} />
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-16px',
                left: '-16px',
                background: 'rgba(10,15,30,0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(0,212,255,0.25)',
                borderRadius: '16px',
                padding: '14px 20px',
                zIndex: 2,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="gradient-text">99.9%</span>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>Uptime Garantido</div>
            </div>

            <div
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                background: 'rgba(10,15,30,0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: '16px',
                padding: '14px 20px',
                zIndex: 2,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>
                <span style={{ background: 'linear-gradient(135deg,#a855f7,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Rápido</span>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>Atendimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}