import { Mail, Phone, Instagram, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { TiltCard } from './motion/TiltCard';
import { GsapReveal } from './gsap/GsapReveal';
import { MagneticButton } from './gsap/MagneticButton';
import { AnimeCircuit } from './anime/AnimeCircuit';

const contactChannels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '(11) 94583-1201',
    href: 'https://wa.me/5511945831201',
    color: '#25D366',
    glow: 'rgba(37, 211, 102, 0.35)',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(11) 94583-1201',
    href: 'tel:+5511945831201',
    color: '#00d4ff',
    glow: 'rgba(0, 212, 255, 0.35)',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@infinitytechservices',
    href: 'https://instagram.com/infinitytechservices',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.35)',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@infinitytechservices.com.br',
    href: 'mailto:contato@infinitytechservices.com.br',
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.35)',
  },
];

function ContactItem({ item }: { item: typeof contactChannels[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: hovered ? `1px solid ${item.color}` : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '18px',
        padding: '18px 24px',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? `0 12px 35px ${item.glow}` : 'none',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '14px',
          background: `${item.color}18`,
          border: `1px solid ${item.color}40`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'transform 0.3s ease',
          transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
        }}
      >
        <Icon size={22} style={{ color: item.color }} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>
          {item.label}
        </div>
        <div style={{ fontSize: '15px', fontWeight: 600, color: hovered ? item.color : '#fff', fontFamily: 'Inter, sans-serif', transition: 'color 0.3s ease' }}>
          {item.value}
        </div>
      </div>
    </a>
  );
}

export function Contact({ standalone }: { standalone?: boolean }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '5511945831201';
    const text = `Olá! Vim pelo site InfinityTech Services.%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Telefone:* ${formData.phone}%0A%0A` +
      `*Mensagem:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '15px 20px',
    borderRadius: '14px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
    fontSize: '15px',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '8px',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(0, 212, 255, 0.6)';
    e.target.style.boxShadow = '0 0 25px rgba(0, 212, 255, 0.2)';
    e.target.style.background = 'rgba(0, 212, 255, 0.06)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.12)';
    e.target.style.boxShadow = 'none';
    e.target.style.background = 'rgba(255,255,255,0.04)';
  };

  return (
    <section
      id="contact"
      style={{
        padding: standalone ? '60px 0 120px' : '120px 0',
        background: 'linear-gradient(180deg, #080c1f 0%, #050a18 100%)',
        minHeight: standalone ? '100vh' : undefined,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
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
              Contato
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
              Vamos <span className="gradient-text">Conversar?</span>
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
              Entre em contato e descubra como podemos acelerar sua empresa através da tecnologia
            </p>
          </div>
        </GsapReveal>

        <GsapReveal delay={0.15}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '44px',
              alignItems: 'start',
            }}
          >
            {/* Contact Info Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <h3
                    style={{
                      fontSize: '26px',
                      fontWeight: 700,
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: '#fff',
                    }}
                  >
                    Canais Diretos
                  </h3>
                  <AnimeCircuit color="#00d4ff" width={70} height={20} />
                </div>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.8,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Estamos prontos para atender você via WhatsApp, telefone ou email com soluções
                  personalizadas para sua infraestrutura.
                </p>
              </div>

              {contactChannels.map((item) => (
                <ContactItem key={item.label} item={item} />
              ))}

              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(0, 212, 255, 0.2)',
                  borderRadius: '18px',
                  padding: '24px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                }}
              >
                <p style={{ fontWeight: 700, color: '#fff', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '6px' }}>
                  ⚡ Atendimento Rápido e Consultivo
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
                  Horários flexíveis e diagnósticos ágeis para melhor atender a sua demanda.
                </p>
              </div>
            </div>

            {/* Contact Form with TiltCard & Magnetic Submit */}
            <TiltCard maxTilt={5} scaleHover={1.01} style={{ borderRadius: '28px' }}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.035)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(0, 212, 255, 0.25)',
                  borderRadius: '28px',
                  padding: '44px 36px',
                  boxShadow: '0 25px 70px rgba(0,0,0,0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: '#fff',
                    }}
                  >
                    Envie sua Mensagem
                  </h3>
                  <AnimeCircuit color="#a855f7" width={60} height={20} />
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      required
                      style={inputStyle}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
                    <div>
                      <label htmlFor="email" style={labelStyle}>Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        style={inputStyle}
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" style={labelStyle}>Telefone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        style={inputStyle}
                        placeholder="(11) 98765-4321"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" style={labelStyle}>Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={handleFocus as any}
                      onBlur={handleBlur as any}
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'none' }}
                      placeholder="Como podemos ajudar sua empresa?"
                    />
                  </div>

                  <MagneticButton strength={0.25} style={{ width: '100%' }}>
                    <button
                      type="submit"
                      className="shimmer-btn"
                      style={{
                        width: '100%',
                        color: '#fff',
                        padding: '18px 36px',
                        borderRadius: '100px',
                        fontWeight: 700,
                        fontSize: '16px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        fontFamily: 'Inter, sans-serif',
                        boxShadow: '0 10px 35px rgba(0,212,255,0.35)',
                      }}
                    >
                      <Send size={18} />
                      Enviar via WhatsApp
                    </button>
                  </MagneticButton>
                </form>
              </div>
            </TiltCard>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}