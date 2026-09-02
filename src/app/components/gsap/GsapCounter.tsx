import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface GsapCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function GsapCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2,
  className = '',
  style = {},
}: GsapCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: value,
            duration,
            ease: 'power3.out',
            onUpdate: () => {
              setDisplayValue(counterObj.val);
            },
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.floor(displayValue).toString();

  return (
    <span ref={elementRef} className={className} style={style}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
