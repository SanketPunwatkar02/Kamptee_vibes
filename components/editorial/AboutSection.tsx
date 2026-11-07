import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#101010] border-t border-white/10 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Level 1 & Level 2: Section Identifier & Oversized Brutalist Headline */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Level 1: Section Identifier */}
            <div className="text-[11px] font-mono tracking-widest text-accent-pink uppercase mb-2">
              BRAND IDENTITY
            </div>

            {/* Level 2: Main Headline */}
            <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl tracking-tight text-white leading-[0.9]">
              ABOUT
              <br />
              KAMPTEE
              <br />
              <span className="text-white relative inline-block">
                VIBEZ
                {/* Handcrafted brush-style underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-accent-pink"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 8 Q 50 1 98 6"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Level 3 & Level 5: Concise Supporting Description & Clear Action */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Level 3: One concise sentence (17 words) */}
            <p className="text-base sm:text-lg text-neutral-200 font-sans font-normal leading-relaxed mb-6">
              A dedicated digital publication chronicling everything that makes Kamptee special — its people, heritage, and stories that matter.
            </p>

            {/* Level 5: One clear Action CTA */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-accent-pink border border-white/15 hover:border-accent-pink text-xs font-mono uppercase tracking-widest text-white transition-all duration-300 group"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Level 4: Featured Content (The Iconic Landmark Photo) */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-surface-card aspect-square max-w-[280px] mx-auto lg:max-w-none shadow-editorial group">
              <Image
                src="/images/kamptee_water_tank.jpg"
                alt="Iconic Kamptee Water Tank landmark"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
                sizes="(max-width: 1024px) 70vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[10px] font-mono text-white/90">
                <span className="uppercase tracking-widest">KAMPTEE LANDMARK</span>
                <span className="text-accent-orange font-bold">CIVIC BEACON</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
