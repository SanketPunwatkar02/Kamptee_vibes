import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { STORIES } from '@/lib/content/stories';

export const LatestStoriesSection: React.FC = () => {
  // Client requirement: Show 3 relevant stories on homepage with concise previews
  const featuredThree = STORIES.slice(3, 6);

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#141414] border-t border-white/10" id="stories">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* IA Hierarchy: Level 1 (Identifier), Level 2 (Headline), Level 3 (Description) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-accent-orange uppercase mb-1">
              CURATED DISPATCHES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-none">
              Latest Stories
            </h2>
            {/* Level 3: 13 words concise description */}
            <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-2 max-w-lg">
              Unfiltered local reporting, cultural chronicles, and essential community news straight from Kamptee&apos;s neighborhoods.
            </p>
          </div>

          <Link
            href="/stories"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-orange hover:text-white transition-colors group flex-shrink-0"
          >
            <span>All Stories ({STORIES.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Level 4: Exactly Three Selected Stories in Asymmetric 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredThree.map((story) => (
            <article
              key={story.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-surface hover:border-accent-pink/40 transition-all duration-300"
            >
              {/* Cover Image */}
              <Link
                href={`/stories/${story.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden block"
                tabIndex={-1}
              >
                <Image
                  src={story.coverImage}
                  alt={story.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-black/75 backdrop-blur-md border border-white/15 text-white">
                    {story.category}
                  </span>
                </div>
              </Link>

              {/* Story Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-primary-muted mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-accent-pink" />
                      {story.readTime}
                    </span>
                    <span>{story.publishedDateFormatted}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wide text-white leading-tight group-hover:text-accent-pink transition-colors mb-2">
                    <Link href={`/stories/${story.slug}`}>
                      {story.headline}
                    </Link>
                  </h3>

                  {/* Concise 16-20 word preview */}
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans line-clamp-2 leading-relaxed mb-4">
                    {story.excerpt.slice(0, 110)}...
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <Link
                    href={`/stories/${story.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-mono uppercase tracking-widest text-primary-muted group-hover:text-white transition-colors"
                  >
                    <span>Read Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-accent-pink" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Level 5: Action */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-accent-pink bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-widest text-white transition-all duration-300 group"
          >
            <span>Explore The Full Archive</span>
            <ArrowRight className="w-4 h-4 text-accent-pink group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
