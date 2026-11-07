'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Mandala3DProps {
  className?: string;
}

export const Mandala3D: React.FC<Mandala3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 12, y: -8 }); // Initial 3D isometric tilt

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized offset from center (-1 to 1)
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Max tilt angles: ±22 degrees
      const targetTiltX = -deltaY * 20;
      const targetTiltY = deltaX * 20;

      setTilt({
        x: Number(targetTiltX.toFixed(2)),
        y: Number(targetTiltY.toFixed(2)),
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute select-none pointer-events-none transition-transform duration-700 ease-out ${className}`}
      style={{
        perspective: '1200px',
      }}
      aria-hidden="true"
    >
      {/* 3D Tilted Gimbal Container */}
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Layer 0: Ambient 3D Neon Backlight Glow */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-pink/40 via-accent-orange/30 to-transparent blur-3xl opacity-70 animate-pulse"
          style={{
            transform: 'translateZ(-40px) scale(0.95)',
          }}
        />

        {/* Layer 1: Continuous 3D Rotating Outer Gyro Ring */}
        <div
          className="absolute -inset-6 sm:-inset-10 rounded-full border border-accent-pink/20 border-dashed animate-[spin_60s_linear_infinite]"
          style={{
            transform: 'translateZ(-15px)',
          }}
        >
          {/* Orbital Satellite Dots */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-orange shadow-glow-orange" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-pink shadow-glow-pink" />
        </div>

        {/* Layer 2: Main 3D Rotating Mandala Disk (Uploaded Mandala Artwork) */}
        <div
          className="relative w-full h-full rounded-full animate-[spin_32s_linear_infinite]"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(10px)',
            filter: 'drop-shadow(0 0 35px rgba(247, 37, 133, 0.45)) drop-shadow(0 0 15px rgba(255, 157, 0, 0.35))',
          }}
        >
          {/* Uploaded Mandala Image (Centred & Transparent) */}
          <div className="relative w-full h-full">
            <Image
              src="/images/mandala_uploaded_square.png"
              alt="Kamptee Vibez 3D Rotating Mandala"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 380px, 600px"
            />
          </div>

          {/* Crisp Vector Overlay to Enhance Petal Sharpness in 3D */}
          <div
            className="absolute inset-0 opacity-80 mix-blend-screen pointer-events-none"
            style={{ transform: 'translateZ(15px)' }}
          >
            <Image
              src="/images/mandala_uploaded_vector.svg"
              alt="Mandala Vector Layer"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Layer 3: Floating 3D Glowing Core */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            transform: 'translateZ(35px)',
          }}
        >
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-radial from-white via-accent-orange to-accent-pink/0 blur-sm opacity-90 animate-ping duration-1000" />
        </div>

      </div>
    </div>
  );
};
