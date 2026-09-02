import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface AnimeProgressRingProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  duration?: number;
  children?: React.ReactNode;
}

export function AnimeProgressRing({
  progress,
  size = 120,
  strokeWidth = 8,
  color = '#00d4ff',
  bgColor = 'rgba(255, 255, 255, 0.08)',
  duration = 1800,
  children,
}: AnimeProgressRingProps) {
  const circleRef = useRef<SVGCircleElement>(null);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const offset = circumference - (progress / 100) * circumference;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const anim = animate(circle, {
      strokeDashoffset: offset,
      duration,
      ease: 'outExpo',
    });

    return () => {
      anim.pause();
    };
  }, [progress, circumference, duration]);

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background track */}
        <circle
          stroke={bgColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Animated colored progress */}
        <circle
          ref={circleRef}
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            filter: `drop-shadow(0 0 8px ${color})`,
            transition: 'stroke 0.3s ease',
          }}
        />
      </svg>
      {children && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
