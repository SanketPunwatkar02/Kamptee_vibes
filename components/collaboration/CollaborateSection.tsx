'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

export const CollaborateSection: React.FC = () => {
  const whatsappUrl = `${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    'Hello Kamptee Vibez! I would like to inquire about advertising / collaboration opportunities.'
  )}`;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#141414] border-t border-white/10 relative overflow-hidden" id="collaborate">
      {/* Background panoramic bridge/skyline backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <Image
          src="/images/kamptee_city_skyline.jpg"
          alt="Kamptee skyline at dusk"
          fill
          className="object-cover object-center filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/85 to-[#141414]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* IA Hierarchy: Level 1 (Identifier), Level 2 (Headline), Level 3 (Description) */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          
          {/* Level 1: Section Identifier */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-pink/15 border border-accent-pink/30 text-accent-pink text-[11px] font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            PARTNERSHIPS
          </div>

          {/* Level 2: Strong Headline */}
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-tight">
            PUT YOUR BRAND
            <br />
            IN THE SPOTLIGHT.
          </h2>

          {/* Level 3: One short description (14 words) */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Reach thousands of engaged local audiences across Kamptee with authentic editorial video features and community spotlights.
          </p>

          {/* Level 4: Clear service pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-neutral-300">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Sponsored Reels</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Business Features</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Event Promotions</span>
          </div>

          {/* Level 5: Clear Enquiry Action CTAs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-lg group"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/collaborate"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-accent-pink border border-white/15 hover:border-accent-pink text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-glow-pink group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
