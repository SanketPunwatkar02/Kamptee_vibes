import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Play, Instagram, Eye, Heart, ArrowUpRight } from 'lucide-react';
import { REELS } from '@/lib/content/reels';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Instagram Reels & Video Dispatches',
  description:
    'Watch trending vertical video stories, festival celebrations, street food tours, and community moments from @kamptee_vibezzz.',
  alternates: {
    canonical: '/reels',
  },
};

export default function ReelsPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#101010] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-pink mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>OFFICIAL FEED • @KAMPTEE_VIBEZZZ</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight text-white leading-tight">
              Reels & Video Dispatches
            </h1>
            <p className="text-neutral-400 font-sans text-sm sm:text-base mt-2 max-w-xl">
              Immerse yourself in Kamptee’s visual rhythm. Watch curated festival highlights, street food explorations, and neighborhood moments.
            </p>
          </div>

          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-pink text-white font-semibold text-xs font-mono uppercase tracking-wider hover:bg-[#d91370] transition-colors shadow-glow-pink whitespace-nowrap"
          >
            <span>Follow @kamptee_vibezzz</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {REELS.map((reel) => (
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
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 font-bold">
                    {reel.category}
                  </span>
                  <Instagram className="w-4 h-4 text-white/80 group-hover:text-accent-pink transition-colors" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-accent-pink/80 backdrop-blur-md flex items-center justify-center text-white opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all shadow-glow-pink">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 z-10">
                  <div className="flex items-center justify-between text-xs font-mono text-white/80 mb-1.5">
                    <span className="flex items-center gap-1 font-semibold text-accent-orange">
                      <Eye className="w-3.5 h-3.5" />
                      {reel.views}
                    </span>
                    {reel.likes && (
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 fill-accent-pink text-accent-pink" />
                        {reel.likes}
                      </span>
                    )}
                  </div>
                  <h2 className="text-sm font-sans font-medium text-white line-clamp-2 leading-snug group-hover:text-accent-pink transition-colors">
                    {reel.title}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
