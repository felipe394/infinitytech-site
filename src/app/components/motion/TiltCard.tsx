import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glowColor?: string;
  maxTilt?: number;
  scaleHover?: number;
  onClick?: () => void;
}

export function TiltCard({
  children,
  className = '',
  style = {},
  glowColor = 'rgba(0, 212, 255, 0.4)',
  maxTilt = 12,
  scaleHover = 1.03,
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normX = clientX / width - 0.5;
    const normY = clientY / height - 0.5;

    mouseX.set(normX);
    mouseY.set(normY);

    setGlarePos({
      x: (clientX / width) * 100,
      y: (clientY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        scale: isHovered ? scaleHover : 1,
        transition: 'scale 0.3s cubic-bezier(0.2, 0, 0, 1)',
        position: 'relative',
        ...style,
      }}
    >
      {/* Glare spotlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, ${glowColor}, transparent 80%)`,
          opacity: isHovered ? 0.35 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
      {children}
    </motion.div>
  );
}
