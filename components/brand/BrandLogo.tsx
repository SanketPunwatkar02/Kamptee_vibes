import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 56 : 42;

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Kamptee Vibez Homepage"
    >
      <div className="relative flex-shrink-0" style={{ width: iconSize, height: iconSize }}>
        <Image
          src="/images/logo_mandala.svg"
          alt="Kamptee Vibez Mandala Logo"
          width={iconSize}
          height={iconSize}
          className="transition-transform duration-500 group-hover:rotate-45"
          priority
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-display tracking-widest text-white uppercase leading-none ${
            size === 'sm'
              ? 'text-lg'
              : size === 'lg'
              ? 'text-2xl md:text-3xl'
              : 'text-xl md:text-2xl'
          }`}
        >
          KAMPTEE
        </span>
        <span
          className={`font-display tracking-[0.3em] text-white/90 uppercase leading-tight ${
            size === 'sm'
              ? 'text-xs'
              : size === 'lg'
              ? 'text-sm md:text-base'
              : 'text-xs md:text-sm'
          }`}
        >
          VIBEZ
        </span>

        {showTagline && (
          <span className="text-[10px] tracking-wider text-primary-muted mt-1 uppercase">
            The new story which matters.
          </span>
        )}
      </div>
    </Link>
  );
};
