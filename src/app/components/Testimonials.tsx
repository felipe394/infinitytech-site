import { useState } from 'react';
import { Award, CheckCircle, Clock } from 'lucide-react';
import { TiltCard } from './motion/TiltCard';
import { GsapReveal } from './gsap/GsapReveal';
import { GsapCounter } from './gsap/GsapCounter';
import { AnimeCircuit } from './anime/AnimeCircuit';

const benefits = [
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Comprometidos com excelência técnica e metodologias modernas em cada projeto.',
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(0, 212, 255, 0.35)',
    accent: '#00d4ff',
  },
  {
    icon: CheckCircle,
    title: 'Soluções Personalizadas',
    description: 'Cada cliente recebe atendimento consultivo e arquitetura adaptada às suas metas.',
    color: 'from-purple-400 to-pink-500',
    glow: 'rgba(168, 85, 247, 0.35)',
    accent: '#a855f7',
  },
  {
    icon: Clock,
    title: 'Suporte Rápido',
    description: 'Atendimento ágil com monitoramento e prontidão para resolver demandas de T.I.',
    color: 'from-emerald-400 to-green-500',
    glow: 'rgba(52, 211, 153, 0.35)',
    accent: '#34d399',
  },
];

function BenefitCard({ benefit }: { benefit: typeof benefits[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = benefit.icon;

  return (
    <TiltCard
      glowColor={benefit.glow}
      maxTilt={8}
      scaleHover={1.03}
      style={{
        flex: '1 1 300px',
        maxWidth: '380px',
        borderRadius: '24px',
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          border: hovered ? `1px solid ${benefit.accent}` : '1px solid rgba(255,255,255,0.08)',
          borderRadius: '24px',
          padding: '40px 32px',
          textAlign: 'center',
          transition: 'all 0.4s ease',
          boxShadow: hovered
            ? `0 24px 60px rgba(0,0,0,0.4), 0 0 35px ${benefit.glow}`
            : '0 6px 20px rgba(0,0,0,0.2)',
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Decorative corner circuit */}
        <div style={{ position: 'absolute', top: '12px', right: '12px', opacity: hovered ? 1 : 0.3, transition: 'opacity 0.3s ease' }}>
          <AnimeCircuit color={benefit.accent} width={50} height={18} />
        </div>

        {/* Icon */}
        <div
          style={{
            width: '68px',
            height: '68px',
            borderRadius: '20px',
            background: `linear-gradient(135deg, ${benefit.accent}, #1e1b4b)`,
            border: `1px solid ${benefit.accent}60`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
            transform: hovered ? 'scale(1.12) rotate(-5deg)' : 'scale(1)',
            boxShadow: hovered ? `0 10px 35px ${benefit.glow}` : '0 4px 15px rgba(0,0,0,0.3)',
          }}
        >
          <Icon className="text-white" size={32} />
        </div>

        <h3
          style={{
            fontSize: '21px',
            fontWeight: 700,
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#fff',
            marginBottom: '14px',
          }}
        >
          {benefit.title}
        </h3>
        <p
          style={{
            fontSize: '14.5px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {benefit.description}
        </p>

        {/* Bottom glow line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${benefit.accent}, transparent)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      </div>
    </TiltCard>
  );
}

export function Testimonials({ standalone }: { standalone?: boolean }) {
  return (
    <section
      id="testimonials"
      style={{
        padding: standalone ? '60px 0 120px' : '120px 0',
        background: 'linear-gradient(180deg, #050a18 0%, #0a0f2e 50%, #080c1f 100%)',
        minHeight: standalone ? '100vh' : undefined,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="tech-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with GSAP Reveal */}
        <GsapReveal>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(52, 211, 153, 0.12)',
                border: '1px solid rgba(52, 211, 153, 0.3)',
                borderRadius: '100px',
                padding: '6px 20px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#34d399',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '20px',
                boxShadow: '0 0 20px rgba(52,211,153,0.15)',
              }}
            >
              Por Que Escolher a InfinityTech
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
              Nosso Compromisso{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #34d399, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Com Você
              </span>
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
              Estamos transformando a entrega de T.I. com foco total na satisfação do cliente
            </p>
          </div>
        </GsapReveal>

        {/* Benefits grid with GSAP Stagger */}
        <GsapReveal stagger={0.15}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '28px',
              marginBottom: '72px',
            }}
          >
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </GsapReveal>

        {/* Stats section with GsapCounter & TiltCard */}
        <GsapReveal delay={0.2}>
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '28px',
              padding: '52px 40px',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800,
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#fff',
                marginBottom: '14px',
              }}
            >
              Construindo Parcerias Sólidas e Duradouras
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '600px',
                margin: '0 auto 44px',
                lineHeight: 1.75,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Nossa trajetória é guiada por rigor técnico, transparência e soluções sob medida.
              Experimente um atendimento ágil e especializado.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
              <TiltCard maxTilt={6} scaleHover={1.04} style={{ borderRadius: '20px' }}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    borderRadius: '20px',
                    padding: '28px 44px',
                    minWidth: '200px',
                  }}
                >
                  <div className="gradient-text counter-glow" style={{ fontSize: '42px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1 }}>
                    <GsapCounter value={100} suffix="%" duration={2} />
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', marginTop: '8px' }}>
                    Dedicação ao Cliente
                  </div>
                </div>
              </TiltCard>

              <TiltCard maxTilt={6} scaleHover={1.04} style={{ borderRadius: '20px' }}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '20px',
                    padding: '28px 44px',
                    minWidth: '200px',
                  }}
                >
                  <div className="gradient-text counter-glow" style={{ fontSize: '42px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1 }}>
                    24/7
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', marginTop: '8px' }}>
                    Suporte & Prontidão
                  </div>
                </div>
              </TiltCard>

              <TiltCard maxTilt={6} scaleHover={1.04} style={{ borderRadius: '20px' }}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    borderRadius: '20px',
                    padding: '28px 44px',
                    minWidth: '200px',
                  }}
                >
                  <div className="gradient-text counter-glow" style={{ fontSize: '42px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1 }}>
                    <GsapCounter value={2026} duration={1.5} />
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', marginTop: '8px' }}>
                    Inovação Contínua
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}