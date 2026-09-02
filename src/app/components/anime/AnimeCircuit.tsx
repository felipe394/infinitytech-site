import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface AnimeCircuitProps {
  color?: string;
  className?: string;
  width?: number;
  height?: number;
}

export function AnimeCircuit({
  color = '#00d4ff',
  className = '',
  width = 120,
  height = 40,
}: AnimeCircuitProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const anim = animate(path, {
      strokeDashoffset: [length, 0],
      duration: 2200,
      ease: 'inOutQuad',
      loop: true,
      alternate: true,
    });

    if (dot) {
      animate(dot, {
        scale: [1, 1.8, 1],
        opacity: [0.5, 1, 0.5],
        duration: 1500,
        ease: 'inOutSine',
        loop: true,
      });
    }

    return () => {
      anim.pause();
    };
  }, []);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: 'visible' }}
    >
      <path
        ref={pathRef}
        d={`M 2,${height - 4} L ${width * 0.4},${height - 4} L ${width * 0.6},4 L ${width - 10},4`}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          filter: `drop-shadow(0 0 6px ${color})`,
        }}
      />
      <circle
        ref={dotRef}
        cx={width - 8}
        cy="4"
        r="3"
        fill={color}
        style={{
          filter: `drop-shadow(0 0 8px ${color})`,
        }}
      />
    </svg>
  );
}
