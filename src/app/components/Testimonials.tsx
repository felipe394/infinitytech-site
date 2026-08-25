import { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Comprometidos com excelência em cada projeto que realizamos.',
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(0, 212, 255, 0.25)',
  },
  {
    icon: CheckCircle,
    title: 'Soluções Personalizadas',
    description: 'Cada cliente recebe atendimento único e adaptado às suas necessidades.',
    color: 'from-purple-400 to-pink-500',
    glow: 'rgba(168, 85, 247, 0.25)',
  },
  {
    icon: Clock,
    title: 'Suporte Rápido',
    description: 'Respondemos rapidamente para resolver suas demandas de T.I.',
    color: 'from-emerald-400 to-green-500',
    glow: 'rgba(52, 211, 153, 0.25)',
  },
];

function useCountUp(target: number, visible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, duration]);

  return count;
}

function StatCard({ value, label, suffix = '' }: { value: number | string; label: string; suffix?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isNumber = typeof value === 'number';
  const count = useCountUp(isNumber ? value : 0, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '24px 32px',
        textAlign: 'center',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="gradient-text counter-glow" style={{ fontSize: '36px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1 }}>
        {isNumber ? `${count}${suffix}` : value}
      </div>
      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', marginTop: '6px' }}>{label}</div>
    </div>
  );
}

export function Testimonials({ standalone }: { standalone?: boolean }) {
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
      id="testimonials"
      ref={ref}
      style={{
        padding: standalone ? '60px 0 120px' : '120px 0',
        background: 'linear-gradient(180deg, #050a18 0%, #0a0f2e 50%, #080c1f 100%)',
        minHeight: standalone ? '100vh' : undefined,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="tech-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

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
            background: 'rgba(52, 211, 153, 0.1)',
            border: '1px solid rgba(52, 211, 153, 0.25)',
            borderRadius: '100px',
            padding: '4px 16px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#34d399',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '20px',
          }}>
            Por Que Escolher a InfinityTech
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#fff',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Nosso Compromisso{' '}
            <span style={{
              background: 'linear-gradient(135deg, #34d399, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Com Você
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
            Estamos iniciando nossa jornada com foco total na satisfação do cliente
          </p>
        </div>

        {/* Benefits grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '64px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease 0.1s',
          }}
        >
          {benefits.map((benefit, index) => {
            const [hovered, setHovered] = useState(false);
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                  flex: '1 1 300px',
                  maxWidth: '380px',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(16px)',
                  border: hovered ? `1px solid ${benefit.glow}` : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '36px',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.3), 0 0 30px ${benefit.glow}` : '0 4px 20px rgba(0,0,0,0.2)',
                  transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Icon */}
                <div
                  className={`bg-gradient-to-br ${benefit.color}`}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    transition: 'all 0.4s ease',
                    transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
                    boxShadow: hovered ? `0 8px 30px ${benefit.glow}` : 'none',
                  }}
                >
                  <Icon className="text-white" size={30} />
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: '#fff',
                  marginBottom: '12px',
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7,
                  fontFamily: 'Inter, sans-serif',
                }}>
                  {benefit.description}
                </p>

                {/* Bottom glow line */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${benefit.glow}, transparent)`,
                  opacity: hovered ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }} />
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '48px',
            textAlign: 'center',
            opacity: visible ? 1 : 0,
            transition: 'all 0.9s ease 0.3s',
          }}
        >
          <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 800,
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#fff',
            marginBottom: '12px',
          }}>
            Construindo Nossa Reputação Juntos
          </h3>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '560px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            Estamos começando nossa trajetória e cada cliente é especial para nós.
            Seja um dos primeiros a experimentar nosso serviço dedicado e personalizado!
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <StatCard value={100} suffix="%" label="Dedicação" />
            <StatCard value="24/7" label="Suporte" />
            <StatCard value={2026} label="Início" />
          </div>
        </div>
      </div>
    </section>
  );
}