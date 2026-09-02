import { useEffect } from 'react';
import { animate } from 'animejs';

export function AnimeClickBurst() {
  useEffect(() => {
    const colors = ['#00d4ff', '#a855f7', '#38bdf8', '#6366f1', '#34d399'];

    const handleClick = (e: MouseEvent) => {
      // Don't burst on input or text selection
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      const count = 12;
      const originX = e.clientX;
      const originY = e.clientY;

      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'anime-click-spark';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 6 + 3;

        Object.assign(particle.style, {
          position: 'fixed',
          left: `${originX}px`,
          top: `${originY}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          backgroundColor: color,
          boxShadow: `0 0 ${size * 2}px ${color}`,
          pointerEvents: 'none',
          zIndex: '99999',
          transform: 'translate(-50%, -50%) scale(1)',
        });

        document.body.appendChild(particle);

        const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
        const distance = Math.random() * 60 + 35;
        const destX = Math.cos(angle) * distance;
        const destY = Math.sin(angle) * distance;

        animate(particle, {
          translateX: destX,
          translateY: destY,
          scale: [1, 0],
          opacity: [1, 0],
          duration: 650 + Math.random() * 200,
          ease: 'outExpo',
          onComplete: () => {
            if (document.body.contains(particle)) {
              document.body.removeChild(particle);
            }
          },
        });
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null;
}
