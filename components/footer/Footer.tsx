import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, Twitter, MessageCircle, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { SITE_CONFIG } from '@/lib/seo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0d0d0d] border-t border-white/10 pt-12 sm:pt-16 pb-10 overflow-hidden">
      {/* Decorative Bottom Mandala Arc */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-30 translate-x-12 translate-y-8 select-none">
        <Image
          src="/images/mandala_arc.svg"
          alt="Mandala motif artwork"
          width={400}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" showTagline={true} />

            <p className="text-xs text-neutral-400 font-sans leading-relaxed max-w-sm">
              Independent digital publication chronicling local news, culture, and community stories in Kamptee.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent-pink text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Twitter / X"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-black text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Essential Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/90">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/" className="text-primary-muted hover:text-accent-pink transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-primary-muted hover:text-accent-pink transition-colors">
                  STORIES & ARCHIVE
                </Link>
              </li>
              <li>
                <Link href="/reels" className="text-primary-muted hover:text-accent-pink transition-colors">
                  INSTAGRAM REELS
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-muted hover:text-accent-pink transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/collaborate" className="text-primary-muted hover:text-accent-pink transition-colors">
                  COLLABORATE
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-muted hover:text-accent-pink transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Coverage Beats (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/90">
              Coverage Beats
            </h4>
            <ul className="space-y-1.5 text-xs font-mono text-primary-muted">
              <li>
                <Link href="/stories?category=Culture" className="hover:text-white transition-colors">
                  CULTURE
                </Link>
              </li>
              <li>
                <Link href="/stories?category=Events" className="hover:text-white transition-colors">
                  EVENTS
                </Link>
              </li>
              <li>
                <Link href="/stories?category=Local%20News" className="hover:text-white transition-colors">
                  LOCAL NEWS
                </Link>
              </li>
              <li>
                <Link href="/stories?category=Food" className="hover:text-white transition-colors">
                  FOOD
                </Link>
              </li>
              <li>
                <Link href="/stories?category=Lifestyle" className="hover:text-white transition-colors">
                  LIFESTYLE
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/90">
              Editorial Desk
            </h4>
            <div className="space-y-2 text-xs text-neutral-400 font-sans">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-pink flex-shrink-0 mt-0.5" />
                <span>Kamptee, Maharashtra, 441001</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-accent-orange flex-shrink-0" />
                <span className="font-mono text-[11px]">editorial@kampteevibez.com</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono uppercase text-[#25D366] hover:underline"
              >
                <span>News Tip Line</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-primary-muted">
          <div>
            &copy; {new Date().getFullYear()} Kamptee Vibez. All rights reserved.
          </div>

          <div className="text-center sm:text-right text-primary-subtle">
            &ldquo;The new story which matters.&rdquo;
          </div>
        </div>

      </div>
    </footer>
  );
};
