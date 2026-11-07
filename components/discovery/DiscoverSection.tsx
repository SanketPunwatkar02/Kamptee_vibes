import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

const EXPLORE_ITEMS = [
  {
    id: 'food',
    title: 'Food & Bites',
    category: 'Food',
    image: '/images/local_discoveries.jpg',
    description: 'Iconic Saoji spice trails, century-old bakeries, and evening market stalls.',
    badge: '01 / FOOD',
  },
  {
    id: 'places',
    title: 'Historic Places',
    category: 'Lifestyle',
    image: '/images/lifestyle_street.jpg',
    description: 'Heritage military barracks, Dragon Palace Temple, and scenic Kanhan ghats.',
    badge: '02 / PLACES',
  },
  {
    id: 'events',
    title: 'City Events',
    category: 'Events',
    image: '/images/city_events.jpg',
    description: 'Annual cultural festivals, youth tournaments, and grand holiday processions.',
    badge: '03 / EVENTS',
  },
  {
    id: 'discoveries',
    title: 'Local Discoveries',
    category: 'Culture',
    image: '/images/public_alerts.jpg',
    description: 'Artisan handloom weavers, hidden tea spots, and neighborhood heroes.',
    badge: '04 / DISCOVERY',
  },
];

export const DiscoverSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#141414] border-t border-white/10" id="discover">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* IA Hierarchy: Level 1 (Identifier), Level 2 (Headline), Level 3 (Description) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-accent-orange uppercase mb-1 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-accent-orange" />
              <span>CITY GUIDE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-none">
              Explore Kamptee
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-2 max-w-lg">
              Curated insider trails uncovering culinary landmarks, heritage architecture, and neighborhood culture.
            </p>
          </div>
        </div>

        {/* Level 4: 4 Vertical Curated Cards with concise 8-10 word descriptions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {EXPLORE_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/stories?category=${encodeURIComponent(item.category)}`}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-surface hover:border-accent-pink/40 transition-all duration-300 shadow-lg block"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white/90 border border-white/10">
                    {item.badge}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 z-10">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-white leading-tight group-hover:text-accent-pink transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 font-sans mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-2.5 flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-accent-pink group-hover:text-white transition-colors">
                    <span>View Beat</span>
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
