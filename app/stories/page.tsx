'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Search, Clock, MapPin, ArrowRight } from 'lucide-react';
import { STORIES, CATEGORIES } from '@/lib/content/stories';

function StoriesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = useMemo(() => {
    return STORIES.filter((story) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        story.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        searchQuery.trim() === '' ||
        story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Filter Controls & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all border ${
              selectedCategory === 'All'
                ? 'bg-accent-pink text-white border-accent-pink shadow-glow-pink'
                : 'bg-surface text-primary-muted border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            All ({STORIES.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = STORIES.filter((s) => s.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? 'bg-accent-pink text-white border-accent-pink shadow-glow-pink'
                    : 'bg-surface text-primary-muted border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 flex-shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dispatches..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-surface border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-accent-pink transition-colors font-mono"
          />
        </div>
      </div>

      {/* Results Counter */}
      <div className="text-xs font-mono uppercase tracking-widest text-primary-muted mb-6">
        Showing {filteredStories.length} {filteredStories.length === 1 ? 'Dispatch' : 'Dispatches'}
      </div>

      {/* Story Grid */}
      {filteredStories.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl">
          <p className="text-neutral-400 font-sans text-lg">No dispatches match your query.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 px-6 py-2 rounded-full bg-accent-pink text-white text-xs font-mono uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredStories.map((story) => (
            <article
              key={story.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-surface hover:border-accent-pink/40 transition-all duration-300"
            >
              <Link
                href={`/stories/${story.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden block"
              >
                <Image
                  src={story.coverImage}
                  alt={story.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-black/70 backdrop-blur-md border border-white/15 text-white">
                    {story.category}
                  </span>
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-primary-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-accent-pink" />
                      {story.readTime}
                    </span>
                    <span>{story.publishedDateFormatted}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-display uppercase tracking-wide text-white leading-tight group-hover:text-accent-pink transition-colors mb-3">
                    <Link href={`/stories/${story.slug}`}>
                      {story.title}
                    </Link>
                  </h2>

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
                    <span>Read Story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-accent-pink" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default function StoriesIndexPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#101010] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching the top-right mockup: Vertical rotated STORIES banner */}
        <div className="relative mb-12 pb-8 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Giant Rotated / Brutalist Word */}
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase tracking-wider text-white select-none leading-none">
                STORIES
              </span>
            </div>

            {/* Right: Subtitle & Description */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-pink mb-2">
                <span className="w-2 h-2 rounded-full bg-accent-pink" />
                THE KAMPTEE VIBEZ DISPATCH ARCHIVE
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-wide text-white leading-tight mb-3">
                Stories that bring us together.
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-xl">
                From festivals to untold street stories, explore what’s happening in Kamptee. Everything that shapes our community, heritage, and daily life.
              </p>
            </div>

          </div>
        </div>

        <Suspense fallback={<div className="py-20 text-center font-mono text-primary-muted">Loading archive dispatches...</div>}>
          <StoriesContent />
        </Suspense>

      </div>
    </div>
  );
}
