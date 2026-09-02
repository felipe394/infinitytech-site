import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GsapRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function GsapReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 30,
  stagger = 0,
  className = '',
  style = {},
}: GsapRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const childrenElements = stagger > 0 ? el.children : el;

    gsap.set(childrenElements, {
      opacity: 0,
      y,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(childrenElements, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger: stagger > 0 ? stagger : undefined,
            ease: 'power3.out',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, duration, y, stagger]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {children}
    </div>
  );
}
