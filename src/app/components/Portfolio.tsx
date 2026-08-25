import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Sistema de Cloud Enterprise',
    category: 'Cloud Computing',
    image: 'https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjBkYXRhY2VudGVyfGVufDF8fHx8MTc3MzczNDUwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Migração completa de infraestrutura para AWS com 99.9% de uptime',
    accent: '#00d4ff',
  },
  {
    title: 'Plataforma de E-commerce',
    category: 'Desenvolvimento Web',
    image: 'https://images.unsplash.com/photo-1649698145660-d30f91023b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwc2NyZWVufGVufDF8fHx8MTc3MzcxNTQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sistema completo de vendas online com + 100k transações/mês',
    accent: '#a855f7',
  },
  {
    title: 'Site para Casamento',
    category: 'Sites Especiais',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sites personalizados com lista de presentes, confirmação de presença e galeria',
    accent: '#f59e0b',
  },
  {
    title: 'Sistema de Segurança',
    category: 'Cibersegurança',
    image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzczNzE4NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Implementação de firewall avançado e proteção contra ameaças',
    accent: '#ef4444',
  },
  {
    title: 'App Mobile Corporativo',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MzY5Njk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Aplicativo para gestão de equipes com + 50k downloads',
    accent: '#22d3ee',
  },
  {
    title: 'Solução de IA',
    category: 'Inteligência Artificial',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM3MDQxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sistema de Machine Learning para análise preditiva de vendas',
    accent: '#8b5cf6',
  },
];

function PortfolioCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: hovered ? `1px solid ${project.accent}40` : '1px solid rgba(255,255,255,0.08)',
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${project.accent}20`
          : '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Image */}
      <div
        style={{
          aspectRatio: '16/10',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
          className=""
        />
        {/* Color overlay on hover */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? `linear-gradient(to top, ${project.accent}90 0%, rgba(0,0,0,0.3) 60%, transparent 100%)`
            : 'linear-gradient(to top, rgba(10,15,30,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
          transition: 'all 0.4s ease',
        }} />

        {/* Hover CTA */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '100px',
            padding: '10px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            transform: hovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'transform 0.3s ease',
          }}>
            <ExternalLink size={16} />
            Ver Projeto
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 24px' }}>
        <span style={{
          display: 'inline-block',
          background: `${project.accent}18`,
          border: `1px solid ${project.accent}40`,
          borderRadius: '100px',
          padding: '3px 12px',
          fontSize: '12px',
          fontWeight: 600,
          color: project.accent,
          letterSpacing: '0.05em',
          fontFamily: 'Inter, sans-serif',
          marginBottom: '10px',
        }}>
          {project.category}
        </span>
        <h3 style={{
          fontSize: '17px',
          fontWeight: 700,
          fontFamily: 'Space Grotesk, sans-serif',
          color: '#fff',
          marginBottom: '8px',
          lineHeight: 1.3,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.6,
          fontFamily: 'Inter, sans-serif',
        }}>
          {project.description}
        </p>
      </div>
    </div>
  );
}

export function Portfolio({ standalone }: { standalone?: boolean }) {
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
      id="portfolio"
      ref={ref}
      style={{
        padding: standalone ? '60px 0 120px' : '120px 0',
        background: 'linear-gradient(180deg, #080c1f 0%, #050a18 100%)',
        minHeight: standalone ? '100vh' : undefined,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '72px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease',
        }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            borderRadius: '100px',
            padding: '4px 16px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#a855f7',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '20px',
          }}>
            Portfólio
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#fff',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Projetos de{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a855f7, #6366f1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Sucesso
            </span>
          </h2>
          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            Conheça alguns dos projetos que transformaram negócios
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease 0.2s',
          }}
        >
          {projects.map((project, index) => (
            <PortfolioCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
