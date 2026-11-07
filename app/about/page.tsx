import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';

export const metadata: Metadata = {
  title: 'About Kamptee Vibez — Independent Digital Editorial',
  description:
    'A digital space for everything that makes Kamptee special — its people, culture, events and stories that matter.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#101010] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Banner */}
        <div className="mb-16 pb-12 border-b border-white/10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-pink mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-pink" />
              EDITORIAL MANIFESTO
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white leading-[0.95] mb-6">
              A digital space for everything that makes Kamptee special.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-sans font-light leading-relaxed">
              Kamptee Vibez was created with a clear singular focus: to document our city’s living history, celebrate its cultural harmony, and give every neighborhood an authentic voice.
            </p>
          </div>
        </div>

        {/* 2-Column Story & Landmark Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-neutral-300 font-sans text-base sm:text-lg leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white">
              The Living Fabric of Kamptee
            </h2>
            <p>
              Situated along the banks of the Kanhan River in Nagpur district, Kamptee is a town shaped by rich dualities: two centuries of military cantonment discipline alongside ancient handloom traditions, sacred Buddhist pilgrimage sites, and fiery Saoji cuisine.
            </p>
            <p>
              In a media landscape dominated by distant metropolitan news, the hyper-local stories that matter most to our families — road repairs, local festival schedules, culinary landmarks, youth sporting feats, and neighborhood heroes — frequently went untold.
            </p>
            <p className="border-l-2 border-accent-pink pl-4 italic text-white">
              &ldquo;The new story which matters&rdquo; is not merely our tagline — it is the editorial standard guiding every dispatch, video, and community alert we publish.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/kamptee_water_tank.jpg"
                alt="Kamptee elevated water tank landmark"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-mono text-white text-center">
                CIVIC SENTINEL
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 mt-8">
              <Image
                src="/images/kamptee_clock_tower.jpg"
                alt="Kamptee clock tower at night"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-mono text-white text-center">
                HERITAGE CLOCK TOWER
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Pillars */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-orange mb-3">
            GUIDING PRINCIPLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white mb-8">
            How We Operate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-surface border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent-pink/15 text-accent-pink flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display uppercase tracking-wider text-white">
                Hyper-Local Focus
              </h3>
              <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                We do not chase generic national trends. Every story centers on Kamptee, Kanhan, and the immediate surrounding communities.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent-orange/15 text-accent-orange flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display uppercase tracking-wider text-white">
                Verified Civic Alerts
              </h3>
              <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                Public safety, weather notifications, and bridge repair alerts are cross-checked with municipal sources before publication.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display uppercase tracking-wider text-white">
                Community-Driven
              </h3>
              <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                We empower neighborhood voices, local shopkeepers, artisans, and students to tell their own stories through our digital platform.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Collaborate Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-surface-elevated border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white">
              Want to share a story or collaborate?
            </h3>
            <p className="text-sm text-neutral-400 font-sans">
              Connect with our editorial team or discover business promotion opportunities.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/collaborate"
              className="px-6 py-3 rounded-full bg-accent-pink text-white font-semibold text-xs font-mono uppercase tracking-wider hover:bg-[#d91370] transition-colors shadow-glow-pink"
            >
              Collaborate With Us
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
