import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Eye } from 'lucide-react';
import { getTrendingStories } from '@/lib/content/stories';

export const TrendingSection: React.FC = () => {
  const trendingStories = getTrendingStories();
  const mainTrending = trendingStories[0];
  const sideTrending = trendingStories.slice(1, 3);

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#101010] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* IA Hierarchy: Level 1 (Identifier), Level 2 (Headline), Level 3 (Description), Level 5 (Action) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-white/10">
          <div>
            {/* Level 1: Section Identifier */}
            <div className="text-[11px] font-mono tracking-widest text-accent-pink uppercase mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-pink" />
              TRENDING NOW
            </div>
            {/* Level 2: Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-none">
              Trending in Kamptee
            </h2>
            {/* Level 3: Supporting Description (13 words) */}
            <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-2 max-w-lg">
              The most discussed local stories, cultural gatherings, and community moments across town this week.
            </p>
          </div>

          {/* Level 5: Action */}
          <Link
            href="/stories"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-pink hover:text-white transition-colors group flex-shrink-0"
          >
            <span>See All Stories</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Level 4: Featured Content Grid (1 Main + 2 Supporting) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Featured Trending Card (7 cols) */}
          {mainTrending && (
            <div className="lg:col-span-7">
              <Link
                href={`/stories/${mainTrending.slug}`}
                className="group block relative rounded-2xl overflow-hidden border border-white/15 bg-surface-card hover:border-accent-pink/40 transition-all duration-300 shadow-editorial h-full flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={mainTrending.coverImage}
                    alt={mainTrending.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/20" />

                  {/* Play badge */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-accent-pink/90 backdrop-blur-md flex items-center justify-center text-white shadow-glow-pink group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-accent-pink text-white">
                      {mainTrending.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-accent-orange font-semibold mb-2">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{mainTrending.views}</span>
                      <span className="text-white/30">•</span>
                      <span className="text-primary-muted font-normal">{mainTrending.publishedDateFormatted}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display uppercase tracking-wide text-white leading-tight group-hover:text-accent-pink transition-colors mb-2">
                      {mainTrending.title}
                    </h3>

                    {/* Concise 16-word story preview */}
                    <p className="text-xs sm:text-sm text-neutral-300 font-sans line-clamp-2 leading-relaxed">
                      From historical sarvajanik mandals to dazzling lights, experience how our town unites for grand celebrations.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white group-hover:text-accent-pink transition-colors">
                    <span>Read Story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* 2 Supporting Stories (5 cols stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 justify-between">
            {sideTrending.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="group flex-1 flex flex-col sm:flex-row lg:flex-row rounded-2xl overflow-hidden border border-white/10 bg-surface hover:border-white/20 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] sm:aspect-square sm:w-44 flex-shrink-0 overflow-hidden">
                  <Image
                    src={story.coverImage}
                    alt={story.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase font-bold tracking-wider bg-black/70 backdrop-blur-md border border-white/15 text-white">
                      {story.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-accent-orange font-semibold mb-1.5">
                      <span>{story.views}</span>
                      <span className="text-white/30">•</span>
                      <span className="text-primary-muted font-normal">{story.readTime}</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-display uppercase tracking-wide text-white leading-snug group-hover:text-accent-pink transition-colors line-clamp-2">
                      {story.title}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-primary-muted group-hover:text-white transition-colors">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-accent-pink" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
