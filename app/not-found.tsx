import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-28 pb-20 bg-[#101010] px-4">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-pink/15 border border-accent-pink/30 text-accent-pink text-xs font-mono uppercase tracking-widest">
          <span>ERROR 404 • DISPATCH NOT FOUND</span>
        </div>

        <h1 className="font-display uppercase text-7xl sm:text-8xl md:text-9xl text-white tracking-tight leading-none">
          OFF THE
          <br />
          <span className="text-accent-pink">GRID.</span>
        </h1>

        <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          The street, story, or dispatch you are looking for has been moved, archived, or does not exist in our Kamptee records.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-pink hover:bg-[#d91370] text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-glow-pink"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/stories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-mono uppercase tracking-wider transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-accent-orange" />
            <span>Explore Dispatches</span>
          </Link>
        </div>

        <div className="pt-10 text-xs font-mono text-primary-subtle">
          KAMPTEE VIBEZ • THE NEW STORY WHICH MATTERS
        </div>
      </div>
    </div>
  );
}
