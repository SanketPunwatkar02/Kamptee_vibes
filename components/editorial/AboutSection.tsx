import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#101010] border-t border-white/10 relative overflow-hidden" id="about">
      {/* Subtle background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent-pink/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Oversized Editorial Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="text-[11px] font-mono tracking-widest text-accent-pink uppercase mb-2">
              BRAND IDENTITY & MISSION
            </div>

            <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tight text-white leading-[0.9] mb-4">
              ABOUT
              <br />
              KAMPTEE
              <br />
              <span className="text-white relative inline-block">
                VIBEZ
                {/* Handcrafted brush-style underline accent matching mockup */}
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

          {/* Middle Column: Editorial Copy & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <p className="text-lg sm:text-xl text-neutral-200 font-sans font-normal leading-relaxed mb-6">
              A digital space for everything that makes Kamptee special — its people, culture, events and stories that matter.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-8">
              We chronicle the authentic pulse of Kamptee: from historical cantonment heritage and sacred festivals to emerging youth culture and local food legacies. Unbiased, local-first, and community-driven.
            </p>

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

          {/* Right Column: Iconic Kamptee Water Tank Landmark Photo */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-surface-card aspect-square max-w-xs mx-auto lg:max-w-none shadow-editorial group">
              <Image
                src="/images/kamptee_water_tank.jpg"
                alt="Iconic Kamptee Water Tank landmark against dramatic sky"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
                sizes="(max-width: 1024px) 70vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Water Tank Metadata Badge */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[10px] font-mono text-white/90">
                <span className="uppercase tracking-widest">KAMPTEE LANDMARK</span>
                <span className="text-accent-orange font-bold">HISTORIC BEACON</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
