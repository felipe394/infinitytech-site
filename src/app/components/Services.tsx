import { useState } from 'react';
import { Cloud, Code, Shield, Smartphone, HardDrive, Network, Sparkles } from 'lucide-react';
import { AIDiagnosticQuiz } from './AIDiagnosticQuiz';
import { TiltCard } from './motion/TiltCard';
import { GsapReveal } from './gsap/GsapReveal';
import { AnimeCircuit } from './anime/AnimeCircuit';

const services = [
  {
    icon: HardDrive,
    title: 'Backups & Formatação',
    description: 'Backup completo de dados, formatação de computadores e reinstalação de sistemas operacionais.',
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(0, 212, 255, 0.4)',
    accent: '#00d4ff',
    number: '01',
  },
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites profissionais, WordPress e soluções web personalizadas para seu negócio.',
    color: 'from-purple-400 to-pink-500',
    glow: 'rgba(168, 85, 247, 0.4)',
    accent: '#a855f7',
    number: '02',
  },
  {
    icon: Network,
    title: 'Redes & Cabeamento',
    description: 'Instalação e configuração de redes, cabeamento estruturado e infraestrutura de T.I.',
    color: 'from-emerald-400 to-green-500',
    glow: 'rgba(52, 211, 153, 0.4)',
    accent: '#34d399',
    number: '03',
  },
  {
    icon: Shield,
    title: 'Instalação de Sistemas',
    description: 'Instalação profissional de sistemas operacionais Windows, Linux e configuração completa.',
    color: 'from-orange-400 to-red-500',
    glow: 'rgba(251, 146, 60, 0.4)',
    accent: '#fb923c',
    number: '04',
  },
  {
    icon: Smartphone,
    title: 'Suporte Técnico',
    description: 'Assistência técnica especializada para resolver problemas de hardware e software.',
    color: 'from-indigo-400 to-blue-500',
    glow: 'rgba(99, 102, 241, 0.4)',
    accent: '#6366f1',
    number: '05',
  },
  {
    icon: Cloud,
    title: 'Hospedagem & WordPress',
    description: 'Hospedagem de sites, configuração de WordPress e gestão de domínios.',
    color: 'from-violet-400 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.4)',
    accent: '#8b5cf6',
    number: '06',
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <TiltCard
      glowColor={service.glow}
      maxTilt={10}
      scaleHover={1.03}
      style={{
        borderRadius: '24px',
        height: '100%',
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered
            ? 'rgba(255,255,255,0.06)'
            : 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: hovered
            ? `1px solid ${service.accent}`
            : '1px solid rgba(255,255,255,0.08)',
          borderRadius: '24px',
          padding: '36px 32px',
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
          boxShadow: hovered
            ? `0 24px 60px rgba(0,0,0,0.5), 0 0 35px ${service.glow}`
            : '0 8px 30px rgba(0,0,0,0.25)',
        }}
      >
        {/* Background number with cyber gradient */}
        <div
          style={{
            position: 'absolute',
            top: '-5px',
            right: '20px',
            fontSize: '85px',
            fontWeight: 900,
            fontFamily: 'Space Grotesk, sans-serif',
            lineHeight: 1,
            userSelect: 'none',
            transition: 'opacity 0.3s ease',
            opacity: hovered ? 0.25 : 0.12,
            background: 'linear-gradient(135deg, #00d4ff 0%, #6366f1 60%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {service.number}
        </div>

        {/* Decorative corner circuit */}
        <div style={{ position: 'absolute', top: '12px', right: '12px', opacity: hovered ? 1 : 0.4, transition: 'opacity 0.3s ease' }}>
          <AnimeCircuit color={service.accent} width={60} height={20} />
        </div>

        {/* Icon */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${service.accent}, #1e1b4b)`,
            border: `1px solid ${service.accent}50`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
            transform: hovered ? 'scale(1.1) rotate(-6deg)' : 'scale(1)',
            boxShadow: hovered ? `0 10px 30px ${service.glow}` : '0 4px 15px rgba(0,0,0,0.3)',
          }}
        >
          <Icon className="text-white" size={28} />
        </div>

        {/* Content */}
        <h3
          style={{
            fontSize: '20px',
            fontWeight: 700,
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#fff',
            marginBottom: '12px',
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: '14.5px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
            flex: 1,
          }}
        >
          {service.description}
        </p>

        {/* Bottom accent glow line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      </div>
    </TiltCard>
  );
}

export function Services({ standalone }: { standalone?: boolean }) {
  return (
    <section
      id="services"
      style={{
        padding: standalone ? '60px 0 120px' : '120px 0',
        background: 'linear-gradient(180deg, #080c1f 0%, #0a0f2e 50%, #080c1f 100%)',
        minHeight: standalone ? '100vh' : undefined,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background tech grid */}
      <div className="tech-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with GSAP Reveal */}
        <GsapReveal>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '100px',
                padding: '6px 20px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#00d4ff',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '20px',
                boxShadow: '0 0 20px rgba(0,212,255,0.15)',
              }}
            >
              Nossos Serviços
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#fff',
                marginBottom: '16px',
                lineHeight: 1.2,
              }}
            >
              Soluções Completas{' '}
              <span className="gradient-text">em Tecnologia</span>
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.7,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Oferecemos uma gama completa de serviços de T.I. para levar sua empresa ao próximo nível
            </p>
          </div>
        </GsapReveal>

        {/* Grid with GSAP Staggered Reveal */}
        <GsapReveal stagger={0.12} duration={0.9}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '28px',
              marginBottom: '100px',
            }}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </GsapReveal>

        {/* AI Diagnostic Quiz Section */}
        <GsapReveal>
          <div style={{ paddingTop: '48px', borderTop: '1px solid rgba(0, 212, 255, 0.2)' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.35)',
                  borderRadius: '100px',
                  padding: '6px 20px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#a855f7',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px',
                  boxShadow: '0 0 20px rgba(168,85,247,0.2)',
                }}
              >
                <Sparkles size={16} /> Diagnóstico Inteligente
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: '#fff',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}
              >
                Descubra o Potencial de IA{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #00d4ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  na Sua Empresa
                </span>
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: 1.7,
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Responda a este rápido questionário de 10 perguntas e receba um diagnóstico exclusivo com as melhores oportunidades de Inteligência Artificial para o seu negócio.
              </p>
            </div>

            <AIDiagnosticQuiz />
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}