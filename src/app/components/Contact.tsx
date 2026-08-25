import { Mail, Phone, Instagram, Send, MessageCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Contact({ standalone }: { standalone?: boolean }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
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
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.05)',
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
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '8px',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)';
    e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.15)';
    e.target.style.background = 'rgba(0, 212, 255, 0.05)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.12)';
    e.target.style.boxShadow = 'none';
    e.target.style.background = 'rgba(255,255,255,0.05)';
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: standalone ? '60px 0 120px' : '120px 0',
        background: 'linear-gradient(180deg, #080c1f 0%, #050a18 100%)',
        minHeight: standalone ? '100vh' : undefined,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="tech-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

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
            Contato
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#fff',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Vamos{' '}
            <span className="gradient-text">Conversar?</span>
          </h2>
          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            Entre em contato e descubra como podemos transformar seu negócio
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease 0.15s',
          }}
        >
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#fff',
                marginBottom: '12px',
              }}>
                Entre em Contato
              </h3>
              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                fontFamily: 'Inter, sans-serif',
              }}>
                Estou pronto para ajudar você a encontrar a melhor solução em tecnologia
                para o seu negócio ou necessidade pessoal.
              </p>
            </div>

            {[
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: '(11) 94583-1201',
                href: 'https://wa.me/5511945831201',
                color: '#25D366',
                glow: 'rgba(37, 211, 102, 0.2)',
              },
              {
                icon: Phone,
                label: 'Telefone',
                value: '(11) 94583-1201',
                href: 'tel:+5511945831201',
                color: '#00d4ff',
                glow: 'rgba(0, 212, 255, 0.2)',
              },
              {
                icon: Instagram,
                label: 'Instagram',
                value: '@infinitytechservices',
                href: 'https://instagram.com/infinitytechservices',
                color: '#a855f7',
                glow: 'rgba(168, 85, 247, 0.2)',
              },
              {
                icon: Mail,
                label: 'E-mail',
                value: 'contato@infinitytechservices.com.br',
                href: 'mailto:contato@infinitytechservices.com.br',
                color: '#f59e0b',
                glow: 'rgba(245, 158, 11, 0.2)',
              },
            ].map((item) => {
              const [hov, setHov] = useState(false);
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHov(true)}
                  onMouseLeave={() => setHov(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: hov ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                    border: hov ? `1px solid ${item.color}40` : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: hov ? `0 8px 30px ${item.glow}` : 'none',
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: hov ? item.color : '#fff', fontFamily: 'Inter, sans-serif', transition: 'color 0.3s ease' }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}

            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '20px',
            }}>
              <p style={{ fontWeight: 700, color: '#fff', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '4px' }}>
                Atendimento Personalizado
              </p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                Horários flexíveis para melhor atendê-lo. Entre em contato para agendar.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 212, 255, 0.15)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#fff',
              marginBottom: '28px',
            }}>
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
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
                  placeholder="Como podemos ajudar você?"
                />
              </div>
              <button
                type="submit"
                className="shimmer-btn"
                style={{
                  color: '#fff',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  fontWeight: 700,
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontFamily: 'Inter, sans-serif',
                  marginTop: '4px',
                }}
              >
                <Send size={18} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}