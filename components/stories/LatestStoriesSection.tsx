'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin, Tag } from 'lucide-react';
import { STORIES, CATEGORIES } from '@/lib/content/stories';
import { StoryCategory } from '@/types';

export const LatestStoriesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredStories =
    selectedCategory === 'All'
      ? STORIES
      : STORIES.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className="py-16 md:py-24 bg-[#141414] border-t border-white/10" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-white/10">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-accent-orange uppercase mb-1">
              CHRONICLES & DISPATCHES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
              Latest Stories
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-md">
            Unfiltered local journalism, cultural chronicles, and community dispatches straight from the streets of Kamptee.
          </p>
        </div>

        {/* Category Filter Pills (Horizontal scrollable on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 border ${
              selectedCategory === 'All'
                ? 'bg-accent-pink text-white border-accent-pink shadow-glow-pink'
                : 'bg-white/5 text-primary-muted border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            All Categories ({STORIES.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = STORIES.filter((s) => s.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? 'bg-accent-pink text-white border-accent-pink shadow-glow-pink'
                    : 'bg-white/5 text-primary-muted border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredStories.map((story) => (
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent" />

                {/* Category Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-black/70 backdrop-blur-md border border-white/15 text-white">
                    {story.category}
                  </span>
                </div>
              </Link>

              {/* Story Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-primary-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-accent-pink" />
                      {story.readTime}
                    </span>
                    <span>{story.publishedDateFormatted}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wide text-white leading-tight group-hover:text-accent-pink transition-colors mb-3">
                    <Link href={`/stories/${story.slug}`}>
                      {story.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-sans line-clamp-3 leading-relaxed mb-4">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  {story.location && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-primary-subtle mb-3 truncate">
                      <MapPin className="w-3 h-3 text-accent-orange flex-shrink-0" />
                      <span className="truncate">{story.location}</span>
                    </div>
                  )}

                  <Link
                    href={`/stories/${story.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-mono uppercase tracking-widest text-primary-muted group-hover:text-white transition-colors"
                  >
                    <span>Read Dispatch</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-accent-pink" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Stories CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 hover:border-accent-pink bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-widest text-white transition-all duration-300 group"
          >
            <span>Explore The Full Archive</span>
            <ArrowRight className="w-4 h-4 text-accent-pink group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
