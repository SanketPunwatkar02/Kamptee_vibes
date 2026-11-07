import React from 'react';
import Image from 'next/image';
import { Play, Instagram, Eye, Heart, ArrowUpRight } from 'lucide-react';
import { REELS } from '@/lib/content/reels';
import { SITE_CONFIG } from '@/lib/seo';

export const ReelsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#101010] border-t border-white/10" id="reels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-accent-pink uppercase mb-1 flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5 text-accent-pink" />
              <span>@KAMPTEE_VIBEZZZ REELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
              Watch The Vibez
            </h2>
          </div>

          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-pink hover:text-white transition-colors group"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Reels Horizontal Scroll on Mobile / Grid on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {REELS.map((reel) => (
            <a
              key={reel.id}
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden border border-white/10 bg-surface hover:border-accent-pink/50 transition-all duration-300 shadow-lg"
            >
              {/* Vertical Reel Aspect Ratio 9:16 */}
              <div className="relative aspect-[9/16] w-full overflow-hidden">
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                  <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 font-bold">
                    {reel.category}
                  </span>
                  <Instagram className="w-3.5 h-3.5 text-white/80 group-hover:text-accent-pink transition-colors" />
                </div>

                {/* Center Play Button Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-accent-pink/80 backdrop-blur-md flex items-center justify-center text-white opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all shadow-glow-pink">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Metadata & Title */}
                <div className="absolute bottom-0 inset-x-0 p-3 z-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/80 mb-1">
                    <span className="flex items-center gap-1 font-semibold text-accent-orange">
                      <Eye className="w-3 h-3" />
                      {reel.views}
                    </span>
                    {reel.likes && (
                      <span className="flex items-center gap-1 text-white/70">
                        <Heart className="w-3 h-3 fill-accent-pink text-accent-pink" />
                        {reel.likes}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs font-sans font-medium text-white line-clamp-2 leading-snug group-hover:text-accent-pink transition-colors">
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
