import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, MessageCircle, CheckCircle, Sparkles, TrendingUp, Users, Target } from 'lucide-react';
import { CollaborateSection } from '@/components/collaboration/CollaborateSection';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Collaborate & Advertise With Kamptee Vibez',
  description:
    'Put your brand in the spotlight. Reach engaged local audiences across Kamptee with sponsored reels, business features, and event promotions.',
  alternates: {
    canonical: '/collaborate',
  },
};

export default function CollaboratePage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#101010] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching the middle-right ADVERTISE mockup */}
        <div className="relative mb-16 pb-12 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Giant Rotated / Brutalist Word ADVERTISE */}
            <div className="md:col-span-4 flex items-center">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase tracking-wider text-white select-none leading-none">
                ADVERTISE
              </span>
            </div>

            {/* Middle: Headline & Value Proposition */}
            <div className="md:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-pink">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MEDIA PARTNERSHIPS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-tight">
                Grow Your Brand with Kamptee Vibez.
              </h1>
              <p className="text-neutral-400 font-sans text-sm sm:text-base">
                Reach thousands of engaged local audiences across Kamptee, Kanhan, and Nagpur District. Authentic storytelling tailored to your product or service.
              </p>

              <div className="pt-2">
                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-pink text-white font-semibold text-xs font-mono uppercase tracking-wider hover:bg-[#d91370] transition-colors shadow-glow-pink"
                >
                  <span>Start a Campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Studio Production Photo matching mockup */}
            <div className="md:col-span-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/15 bg-surface-card shadow-editorial group">
                <Image
                  src="/images/podcast_studio.jpg"
                  alt="High quality media production studio microphone"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-[10px] font-mono text-white/90 uppercase tracking-wider text-center">
                  STUDIO PRODUCTION
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Why Partner With Us Section */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-orange mb-3">
            AUDIENCE ENGAGEMENT
          </div>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white mb-8">
            Why Local Brands Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-surface border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-accent-pink/15 text-accent-pink flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display uppercase tracking-wider text-white">
                Hyper-Local Reach
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Your message is seen directly by active residents, families, and young consumers living in Kamptee and surrounding townships.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-accent-orange/15 text-accent-orange flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display uppercase tracking-wider text-white">
                Editorial Authenticity
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                We craft narratives that feel organic and engaging rather than intrusive popups or sterile corporate banners.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display uppercase tracking-wider text-white">
                Direct WhatsApp Inquiries
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Drive instant customer interaction with WhatsApp call-to-actions directly tied to your campaign content.
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Form with Target Anchor */}
        <div id="inquiry">
          <CollaborateSection />
        </div>

      </div>
    </div>
  );
}
