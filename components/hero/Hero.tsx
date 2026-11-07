'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mandala3D } from '@/components/hero/Mandala3D';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#101010]">
      
      {/* 1. Thin Celestial Orbital Curved Line Arcs in the Night Sky */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-25 z-0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Large sweeping orbits centered toward top-right */}
        <circle cx="82%" cy="25%" r="220" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.4" />
        <circle cx="82%" cy="25%" r="360" stroke="#FFFFFF" strokeWidth="0.8" fill="none" opacity="0.6" />
        <circle cx="82%" cy="25%" r="520" stroke="#FFFFFF" strokeWidth="0.6" fill="none" opacity="0.35" />
        <circle cx="82%" cy="25%" r="700" stroke="#FFFFFF" strokeWidth="0.5" fill="none" opacity="0.2" />
      </svg>

      {/* 2. Ambient Color Aura */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-accent-pink/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-accent-orange/10 rounded-full blur-[120px]" />
      </div>

      {/* 3. The Clock Tower Seamless Right Backdrop */}
      <div className="absolute right-0 bottom-0 top-0 w-[55%] sm:w-[50%] md:w-[48%] lg:w-[46%] xl:w-[42%] pointer-events-none select-none z-0">
        <div className="relative w-full h-full flex items-end justify-end">
          {/* Vertical Rotated Outline "KAMPTEE" text on desktop */}
          <div
            className="hidden xl:block absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[8.5rem] font-display uppercase tracking-widest text-transparent z-0 opacity-15"
            style={{
              writingMode: 'vertical-rl',
              WebkitTextStroke: '1.5px #FFFFFF',
            }}
          >
            KAMPTEE
          </div>

          {/* Clock Tower Image */}
          <div className="relative w-full h-[95%] sm:h-full">
            <Image
              src="/images/hero_clock_tower_seamless.png"
              alt="Kamptee Clock Tower illuminated at night during city festivities"
              fill
              priority
              className="object-contain object-bottom-right sm:object-cover sm:object-bottom-right"
              sizes="(max-width: 768px) 60vw, 45vw"
            />
          </div>

          {/* Left edge seamless gradient mask */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#101010] via-[#101010]/60 to-transparent" />
          {/* Bottom seamless gradient mask */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#101010] to-transparent" />
        </div>
      </div>

      {/* 4. Main Hero Content Layout */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full z-10">
        <div className="max-w-xl sm:max-w-2xl relative">
          
          {/* 3D Rotating Mandala positioned directly behind the text */}
          <Mandala3D className="top-1/2 left-1/3 sm:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] lg:w-[640px] lg:h-[640px] opacity-75 sm:opacity-85" />

          {/* Foreground Typography & Call to Action */}
          <div className="relative z-10">
            {/* The Stacked Oversized Headline */}
            <h1 className="font-display uppercase text-[3.8rem] xs:text-[4.5rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] tracking-tight text-white leading-[0.86] select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              THE CITY
              <br />
              HAS A
              <br />
              <span className="inline-flex items-baseline">
                STORY
                <span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full bg-[#F72585] ml-1.5 sm:ml-2.5 align-baseline flex-shrink-0 animate-pulse shadow-glow-pink" />
              </span>
            </h1>

            {/* Exactly 2 lines of supporting copy */}
            <p className="mt-5 sm:mt-7 text-base sm:text-xl md:text-2xl text-neutral-200 font-sans font-normal leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Your city. Your people.
              <br />
              Your stories.
            </p>

            {/* Hot Pink Pill CTA Button */}
            <div className="mt-6 sm:mt-8">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold tracking-wide text-white bg-[#F72585] hover:bg-[#d91370] transition-all duration-300 shadow-glow-pink group"
              >
                <span>Explore Latest</span>
                <span className="text-lg leading-none transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
