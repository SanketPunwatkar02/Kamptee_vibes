import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import { DISCOVERIES } from '@/lib/content/discoveries';

export const DiscoverSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#141414] border-t border-white/10" id="discover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-accent-orange uppercase mb-1 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-accent-orange" />
              <span>COMMUNITY DIRECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
              Explore More
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            Curated trails through Kamptee’s culinary landmarks, historic monuments, and neighborhood traditions.
          </p>
        </div>

        {/* 4 Vertical Editorial Cards matching reference mockup */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {DISCOVERIES.map((item) => (
            <Link
              key={item.id}
              href={`/stories?category=${encodeURIComponent(item.category)}`}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-surface hover:border-accent-pink/40 transition-all duration-300 shadow-lg block"
            >
              {/* Card Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Badge Number */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white/90 border border-white/10">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-10">
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-white leading-tight group-hover:text-accent-pink transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 font-sans line-clamp-2 mt-1 hidden sm:block">
                    {item.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-accent-pink group-hover:text-white">
                    <span>Explore Archive</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
