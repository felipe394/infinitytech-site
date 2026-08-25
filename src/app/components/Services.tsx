import { useEffect, useRef, useState } from 'react';
import { Cloud, Code, Shield, Smartphone, HardDrive, Network, Sparkles } from 'lucide-react';
import { AIDiagnosticQuiz } from './AIDiagnosticQuiz';

const services = [
  {
    icon: HardDrive,
    title: 'Backups & Formatação',
    description: 'Backup completo de dados, formatação de computadores e reinstalação de sistemas operacionais.',
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(0, 212, 255, 0.3)',
    number: '01',
  },
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites profissionais, WordPress e soluções web personalizadas para seu negócio.',
    color: 'from-purple-400 to-pink-500',
    glow: 'rgba(168, 85, 247, 0.3)',
    number: '02',
  },
  {
    icon: Network,
    title: 'Redes & Cabeamento',
    description: 'Instalação e configuração de redes, cabeamento estruturado e infraestrutura de T.I.',
    color: 'from-emerald-400 to-green-500',
    glow: 'rgba(52, 211, 153, 0.3)',
    number: '03',
  },
  {
    icon: Shield,
    title: 'Instalação de Sistemas',
    description: 'Instalação profissional de sistemas operacionais Windows, Linux e configuração completa.',
    color: 'from-orange-400 to-red-500',
    glow: 'rgba(251, 146, 60, 0.3)',
    number: '04',
  },
  {
    icon: Smartphone,
    title: 'Suporte Técnico',
    description: 'Assistência técnica especializada para resolver problemas de hardware e software.',
    color: 'from-indigo-400 to-blue-500',
    glow: 'rgba(99, 102, 241, 0.3)',
    number: '05',
  },
  {
    icon: Cloud,
    title: 'Hospedagem & WordPress',
    description: 'Hospedagem de sites, configuração de WordPress e gestão de domínios.',
    color: 'from-violet-400 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.3)',
    number: '06',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="card-3d"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'rgba(255,255,255,0.07)'
          : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: hovered
          ? `1px solid ${service.glow}`
          : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'all 0.4s ease',
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${service.glow}`
          : '0 4px 20px rgba(0,0,0,0.2)',
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Background number — blue/cyan gradient */}
      <div style={{
        position: 'absolute',
        top: '-10px',
        right: '20px',
        fontSize: '80px',
        fontWeight: 900,
        fontFamily: 'Space Grotesk, sans-serif',
        lineHeight: 1,
        userSelect: 'none',
        transition: 'opacity 0.3s ease',
        opacity: hovered ? 0.22 : 0.12,
        background: 'linear-gradient(135deg, #00d4ff 0%, #6366f1 60%, #a855f7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        {service.number}
      </div>

      {/* Glow overlay */}
      {hovered && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${service.glow} 0%, transparent 70%)`,
          opacity: 0.15,
          borderRadius: '20px',
          pointerEvents: 'none',
        }} />
      )}

      {/* Icon */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: `linear-gradient(135deg, ${service.color.split(' ')[0].replace('from-','').replace('-400','').replace('-500','')})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
          boxShadow: hovered ? `0 8px 30px ${service.glow}` : 'none',
          // using tailwind gradient directly
          backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
        }}
        className={`bg-gradient-to-br ${service.color}`}
      >
        <Icon className="text-white" size={26} />
      </div>

      {/* Content */}
      <h3 style={{
        fontSize: '19px',
        fontWeight: 700,
        fontFamily: 'Space Grotesk, sans-serif',
        color: '#fff',
        marginBottom: '12px',
        transition: 'color 0.3s ease',
        ...(hovered ? { color: '#fff' } : {}),
      }}>
        {service.title}
      </h3>
      <p style={{
        fontSize: '14px',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.7,
        fontFamily: 'Inter, sans-serif',
      }}>
        {service.description}
      </p>

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, transparent, ${service.glow}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />
    </div>
  );
}

export function Services({ standalone }: { standalone?: boolean }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: standalone ? '60px 0 120px' : '120px 0',
        background: 'linear-gradient(180deg, #080c1f 0%, #0a0f2e 50%, #080c1f 100%)',
        minHeight: standalone ? '100vh' : undefined,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div className="tech-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '72px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          <span style={{
            display: 'inline-block',
            background: 'rgba(0, 212, 255, 0.1)',
            border: '1px solid rgba(0, 212, 255, 0.25)',
            borderRadius: '100px',
            padding: '4px 16px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#00d4ff',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '20px',
          }}>
            Nossos Serviços
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#fff',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Soluções Completas{' '}
            <span className="gradient-text">em Tecnologia</span>
          </h2>
          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            Oferecemos uma gama completa de serviços de T.I. para levar sua empresa ao próximo nível
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '100px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease 0.2s',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* AI Diagnostic Quiz Section */}
        <div style={{ paddingTop: '40px', borderTop: '1px solid rgba(0, 212, 255, 0.15)' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(168, 85, 247, 0.12)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '100px',
              padding: '6px 18px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#a855f7',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '20px',
            }}>
              <Sparkles size={16} /> Diagnóstico Inteligente
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#fff',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}>
              Descubra o Potencial de IA{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #00d4ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                na Sua Empresa
              </span>
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: 'Inter, sans-serif',
            }}>
              Responda a este rápido questionário de 10 perguntas e receba um diagnóstico exclusivo com as melhores oportunidades de Inteligência Artificial para o seu negócio.
            </p>
          </div>

          <AIDiagnosticQuiz />
        </div>
      </div>
    </section>
  );
}