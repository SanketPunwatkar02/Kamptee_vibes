import React from 'react';
import Image from 'next/image';
import { Play, Instagram, Eye, ArrowUpRight } from 'lucide-react';
import { REELS } from '@/lib/content/reels';
import { SITE_CONFIG } from '@/lib/seo';

export const ReelsSection: React.FC = () => {
  // Client requirement: Maximum 3 selected reels, avoid explanatory bloat
  const topThreeReels = REELS.slice(0, 3);

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#101010] border-t border-white/10" id="reels">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* IA Hierarchy: Level 1 (Identifier), Level 2 (Headline), Level 3 (Description), Level 5 (Action) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-accent-pink uppercase mb-1 flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5 text-accent-pink" />
              <span>@KAMPTEE_VIBEZZ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-none">
              Featured Reels
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-2 max-w-lg">
              Short-form video chronicles capturing festivals, street food, and authentic city culture.
            </p>
          </div>

          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-pink hover:text-white transition-colors group flex-shrink-0"
          >
            <span>Watch All on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Level 4: Exactly 3 Reels in a balanced 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {topThreeReels.map((reel) => (
            <a
              key={reel.id}
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden border border-white/10 bg-surface hover:border-accent-pink/50 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden">
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 font-bold">
                    {reel.category}
                  </span>
                  <Instagram className="w-4 h-4 text-white/80 group-hover:text-accent-pink transition-colors" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-accent-pink/85 backdrop-blur-md flex items-center justify-center text-white opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all shadow-glow-pink">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 z-10">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-accent-orange font-semibold mb-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{reel.views}</span>
                  </div>

                  <h3 className="text-sm font-sans font-medium text-white line-clamp-2 leading-snug group-hover:text-accent-pink transition-colors">
                    {reel.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
