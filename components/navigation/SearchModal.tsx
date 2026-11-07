'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { STORIES } from '@/lib/content/stories';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredStories = query.trim()
    ? STORIES.filter(
        (story) =>
          story.title.toLowerCase().includes(query.toLowerCase()) ||
          story.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          story.category.toLowerCase().includes(query.toLowerCase()) ||
          story.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      )
    : STORIES.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#141414] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Search Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <Search className="w-5 h-5 text-accent-pink flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Kamptee news, food, events, culture..."
            className="w-full bg-transparent text-white placeholder-primary-muted text-base md:text-lg focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-primary-muted hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs uppercase tracking-wider text-primary-muted hover:text-white bg-white/5 rounded border border-white/10"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-primary-muted uppercase px-2 mb-2">
            {query.trim() ? `Search Results (${filteredStories.length})` : 'Popular & Trending Stories'}
          </div>

          {filteredStories.length === 0 ? (
            <div className="py-12 text-center text-primary-muted">
              <p>No stories found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1 text-primary-subtle">
                Try searching for &quot;Ganesh&quot;, &quot;Food&quot;, &quot;Cantonment&quot;, or &quot;Alerts&quot;.
              </p>
            </div>
          ) : (
            filteredStories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                onClick={onClose}
                className="group flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
              >
                <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden bg-neutral-900">
                  <Image
                    src={story.coverImage}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-accent-pink/15 text-accent-pink font-semibold">
                      {story.category}
                    </span>
                    <span className="text-[11px] text-primary-muted">
                      {story.views}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-white line-clamp-1 group-hover:text-accent-pink transition-colors">
                    {story.title}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-primary-muted group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 bg-[#101010] text-[11px] text-primary-muted font-mono">
          <div className="flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-accent-orange" />
            <span>Trending: Ganesh 2025 • Street Food • Kanhan Bridge</span>
          </div>
          <Link
            href="/stories"
            onClick={onClose}
            className="text-accent-pink hover:underline"
          >
            All Stories &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
