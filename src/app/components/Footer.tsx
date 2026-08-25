import { Instagram, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';
import { Logo } from './Logo';

const waLink = 'https://wa.me/5511945831201';

export function Footer() {
  const linkStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.45)',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    display: 'block',
    padding: '3px 0',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    textAlign: 'left',
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #050a18 0%, #030711 100%)',
        borderTop: '1px solid rgba(0, 212, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top glow line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), rgba(99, 102, 241, 0.4), transparent)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/home" style={{ display: 'block', marginBottom: '16px' }}>
              <Logo className="h-12 w-auto" variant="white" />
            </Link>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.7,
              fontFamily: 'Inter, sans-serif',
              marginBottom: '20px',
            }}>
              Transformando negócios através da tecnologia. Seu parceiro ideal em T.I.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { href: 'https://instagram.com/infinitytechservices', icon: Instagram, label: 'Instagram', color: '#a855f7' },
                { href: waLink, icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
                { href: 'tel:+5511945831201', icon: Phone, label: 'Telefone', color: '#00d4ff' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${social.color}20`;
                      el.style.borderColor = `${social.color}40`;
                      el.style.color = social.color;
                      el.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = 'rgba(255,255,255,0.06)';
                      el.style.borderColor = 'rgba(255,255,255,0.1)';
                      el.style.color = 'rgba(255,255,255,0.5)';
                      el.style.transform = 'translateY(0)';
                    }}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#fff',
              marginBottom: '16px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Serviços
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {['Backups & Formatação', 'Desenvolvimento Web', 'Redes & Cabeamento', 'Instalação de SO', 'WordPress & Hospedagem', 'Suporte Técnico'].map((s) => (
                <Link
                  key={s}
                  to="/servicos"
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#fff',
              marginBottom: '16px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Links Rápidos
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {[
                { path: '/home', label: 'Início' },
                { path: '/servicos', label: 'Serviços' },
                { path: '/portfolio', label: 'Portfólio' },
                { path: '/porquenos', label: 'Por Que Nós' },
                { path: '/contato', label: 'Contato' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#fff',
              marginBottom: '16px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
              >
                <MessageCircle size={15} style={{ color: '#25D366', flexShrink: 0 }} />
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>(11) 94583-1201</span>
              </a>
              <a
                href="https://instagram.com/infinitytechservices"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
              >
                <Instagram size={15} style={{ color: '#a855f7', flexShrink: 0 }} />
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>@infinitytechservices</span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '20px',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: '#fff',
                padding: '10px 18px',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(37,211,102,0.35)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
            >
              <MessageCircle size={15} />
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
            © 2026 InfinityTech Services. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
            Feito com <span style={{ color: '#ef4444' }}>❤</span> para transformar seu negócio
          </p>
        </div>
      </div>
    </footer>
  );
}