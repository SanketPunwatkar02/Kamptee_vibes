import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Eye, Clock } from 'lucide-react';
import { getTrendingStories } from '@/lib/content/stories';

export const TrendingSection: React.FC = () => {
  const trendingStories = getTrendingStories();
  const mainTrending = trendingStories[0];
  const sideTrending = trendingStories.slice(1, 3);

  return (
    <section className="py-16 md:py-24 bg-[#101010] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header with Thin Separator Line */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-accent-pink uppercase mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-pink" />
              HOT THIS WEEK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
              Trending in Kamptee
            </h2>
          </div>

          <Link
            href="/stories"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-pink hover:text-white transition-colors group"
          >
            <span>See All Stories</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Featured Trending Card (7 cols) */}
          {mainTrending && (
            <div className="lg:col-span-7">
              <Link
                href={`/stories/${mainTrending.slug}`}
                className="group block relative rounded-2xl overflow-hidden border border-white/15 bg-surface-card hover:border-accent-pink/40 transition-all duration-300 shadow-editorial"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={mainTrending.coverImage}
                    alt={mainTrending.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/30 to-transparent" />

                  {/* Play badge for multimedia story */}
                  <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-accent-pink/90 backdrop-blur-md flex items-center justify-center text-white shadow-glow-pink group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase font-bold tracking-wider bg-accent-pink text-white">
                      {mainTrending.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 text-xs font-mono text-primary-muted mb-3">
                    <span className="flex items-center gap-1 text-accent-orange">
                      <Eye className="w-3.5 h-3.5" />
                      {mainTrending.views}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {mainTrending.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-wide text-white leading-tight group-hover:text-accent-pink transition-colors mb-3">
                    {mainTrending.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-300 font-sans line-clamp-2 leading-relaxed mb-6">
                    {mainTrending.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white group-hover:text-accent-pink transition-colors">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Secondary Trending Cards (5 cols stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideTrending.map((story, idx) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="group flex-1 flex flex-col sm:flex-row lg:flex-col rounded-2xl overflow-hidden border border-white/10 bg-surface hover:border-white/20 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-square lg:aspect-[16/8] sm:w-48 lg:w-full flex-shrink-0 overflow-hidden">
                  <Image
                    src={story.coverImage}
                    alt={story.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-white">
                      {story.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-primary-muted mb-2">
                      <span className="text-accent-orange font-semibold">{story.views}</span>
                      <span>•</span>
                      <span>0{idx + 2} IN RANK</span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-display uppercase tracking-wide text-white leading-snug group-hover:text-accent-pink transition-colors mb-2">
                      {story.title}
                    </h4>

                    <p className="text-xs text-neutral-400 font-sans line-clamp-2">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-primary-muted group-hover:text-white">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
