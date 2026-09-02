import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import heroImage from '../assets/hero-it.png';
import { Hero3DCanvas } from './3d/Hero3DCanvas';
import { MagneticButton } from './gsap/MagneticButton';
import { GsapCounter } from './gsap/GsapCounter';
import { AnimeCircuit } from './anime/AnimeCircuit';

const typewriterWords = ['Seu Negócio', 'Sua Empresa', 'Seu Futuro'];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 50% 20%, #0d1535 0%, #050a18 70%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '90px',
        paddingBottom: '60px',
      }}
    >
      {/* Three.js Interactive 3D Canvas in Hero */}
      <Hero3DCanvas />

      {/* Tech Grid Background */}
      <div
        className="tech-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }}
      />

      {/* Glowing atmospheric orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(0, 212, 255, 0.1)',
                  border: '1px solid rgba(0, 212, 255, 0.35)',
                  borderRadius: '100px',
                  padding: '6px 18px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#00d4ff',
                  letterSpacing: '0.06em',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 0 20px rgba(0,212,255,0.2)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#00d4ff',
                    display: 'inline-block',
                    boxShadow: '0 0 10px #00d4ff',
                  }}
                />
                🚀 Tecnologia • Suporte • Desenvolvimento Web
              </motion.div>
              <AnimeCircuit color="#00d4ff" width={80} height={26} />
            </div>

            {/* H1 Headline */}
            <h1
              style={{
                fontFamily: 'Space Grotesk, Inter, sans-serif',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: '20px',
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
                  fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
                  fontWeight: 600,
                  marginTop: '10px',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                Crescer Sem Limites
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '17px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.75,
                marginBottom: '36px',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '520px',
              }}
            >
              Oferecemos soluções completas em tecnologia: desde backups e formatação
              até desenvolvimento web, infraestrutura de rede e diagnóstico de IA. Seu parceiro
              ideal em T.I.
            </p>

            {/* CTAs with MagneticButton */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <MagneticButton strength={0.3}>
                <Link
                  to="/contato"
                  className="shimmer-btn"
                  style={{
                    color: '#fff',
                    padding: '16px 36px',
                    borderRadius: '100px',
                    fontWeight: 700,
                    fontSize: '16px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.01em',
                    boxShadow: '0 8px 30px rgba(0, 212, 255, 0.4)',
                  }}
                >
                  Solicitar Orçamento →
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <Link
                  to="/servicos"
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    padding: '16px 34px',
                    borderRadius: '100px',
                    fontWeight: 600,
                    fontSize: '16px',
                    border: '1px solid rgba(255,255,255,0.25)',
                    background: 'rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.6)';
                    (e.currentTarget as HTMLElement).style.color = '#00d4ff';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.12)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  }}
                >
                  Ver Serviços
                </Link>
              </MagneticButton>
            </div>

            {/* Stats row with GsapCounter */}
            <div
              style={{
                display: 'flex',
                gap: '36px',
                marginTop: '48px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div>
                <div
                  className="gradient-text counter-glow"
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  <GsapCounter value={100} suffix="%" duration={1.8} />
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>
                  Dedicação
                </div>
              </div>

              <div>
                <div
                  className="gradient-text counter-glow"
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  24/7
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>
                  Suporte
                </div>
              </div>

              <div>
                <div
                  className="gradient-text counter-glow"
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  ∞
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>
                  Soluções
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive 3D Floating Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Glow ring */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '32px',
                background: 'linear-gradient(135deg, rgba(0,212,255,0.25), rgba(168,85,247,0.25))',
                filter: 'blur(35px)',
                zIndex: 0,
              }}
            />

            {/* Neon border frame with Motion hover levitation */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              className="neon-border"
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '28px',
                border: '1px solid rgba(0,212,255,0.4)',
                overflow: 'hidden',
                boxShadow: '0 30px 90px rgba(0,0,0,0.6), 0 0 30px rgba(0,212,255,0.2)',
                background: 'rgba(10, 15, 30, 0.8)',
              }}
            >
              <img
                src={heroImage}
                alt="Ambiente profissional de T.I. com servidores e monitores"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Overlay gradient */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '45%',
                  background: 'linear-gradient(to top, rgba(5,10,24,0.9), transparent)',
                }}
              />
            </motion.div>

            {/* Floating badge 1 (Uptime) with Motion Levitation */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-16px',
                background: 'rgba(10,15,30,0.92)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,212,255,0.4)',
                borderRadius: '18px',
                padding: '16px 24px',
                zIndex: 2,
                boxShadow: '0 12px 36px rgba(0,0,0,0.5), 0 0 20px rgba(0,212,255,0.25)',
              }}
            >
              <div style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="gradient-text">
                  <GsapCounter value={99.9} decimals={1} suffix="%" duration={2.2} />
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                Uptime Garantido
              </div>
            </motion.div>

            {/* Floating badge 2 (Agilidade) */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-16px',
                background: 'rgba(10,15,30,0.92)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(168,85,247,0.4)',
                borderRadius: '18px',
                padding: '16px 24px',
                zIndex: 2,
                boxShadow: '0 12px 36px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.25)',
              }}
            >
              <div style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Rápido
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                Atendimento Ágil
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}