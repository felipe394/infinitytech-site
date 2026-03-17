interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export function Logo({ className = '', variant = 'default' }: LogoProps) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#1B4172';

  return (
    <svg 
      viewBox="0 0 340 90" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Linear gradient matching the user's image exactly, from dark blue to vibrant light blue */}
        <linearGradient id="inf-gradient" x1="5" y1="0" x2="95" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B2046" />
          <stop offset="35%" stopColor="#124A8D" />
          <stop offset="65%" stopColor="#1E80CE" />
          <stop offset="100%" stopColor="#2EAEE5" />
        </linearGradient>

        <filter id="crossover-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="-1" dy="1" stdDeviation="1.5" floodColor="#061225" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Símbolo do Infinito - escala maior */}
      <g transform="translate(5, 16) scale(1.15)">
        {/* Camada 1: Lado esquerdo e travessia por baixo */}
        <path 
          d="M 25 4 A 16 16 0 0 0 25 36 C 47.5 36 47.5 4 70 4" 
          stroke={variant === 'white' ? '#FFFFFF' : 'url(#inf-gradient)'} 
          strokeWidth="12" 
          strokeLinecap="butt"
          strokeLinejoin="round"
        />
        
        {/* Sombra pequena usada APENAS onde a Camada 2 cruza a Camada 1 no centro */}
        {variant !== 'white' && (
          <path 
            d="M 52 22 C 43 32.5 37 36 29 36" 
            stroke="transparent" 
            strokeWidth="12" 
            strokeLinecap="round"
            filter="url(#crossover-shadow)"
          />
        )}

        {/* Camada 2: Lado direito e travessia por cima */}
        <path 
          d="M 70 4 A 16 16 0 0 1 70 36 C 47.5 36 47.5 4 25 4" 
          stroke={variant === 'white' ? '#FFFFFF' : 'url(#inf-gradient)'} 
          strokeWidth="12" 
          strokeLinecap="butt"
          strokeLinejoin="round"
        />
      </g>

      {/* Texto INFINITYTECH - espaçamento ajustado */}
      <g transform="translate(115, 24)">
        <text 
          x="0" 
          y="20" 
          fontFamily="Georgia, serif" 
          fontSize="24" 
          fontWeight="700" 
          fill={textColor}
          letterSpacing="1.5"
        >
          INFINITYTECH
        </text>
        <text 
          x="1" 
          y="42" 
          fontFamily="system-ui, sans-serif" 
          fontSize="14" 
          fontWeight="600" 
          fill={textColor}
          letterSpacing="5"
        >
          SERVICES
        </text>
      </g>
    </svg>
  );
}