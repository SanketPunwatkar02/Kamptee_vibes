'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { SearchModal } from '@/components/navigation/SearchModal';
import { SITE_CONFIG } from '@/lib/seo';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Stories', href: '/stories' },
  { name: 'Reels', href: '/reels' },
  { name: 'About', href: '/about' },
  { name: 'Collaborate', href: '/collaborate' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll position with passive listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync state on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setScrolled(window.scrollY > 20);
  }, [pathname]);

  // Lock body scroll when mobile menu is open to eliminate touch conflicts
  useEffect(() => {
    if (mobileMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [mobileMenuOpen]);

  // Close menu if viewport expanded past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Primary Fixed Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[66px] md:h-20 flex items-center transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#101010]/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-[#101010]/90 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <BrandLogo size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${
                      isActive
                        ? 'text-white'
                        : 'text-primary-muted hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-pink rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 text-primary-muted hover:text-white hover:bg-white/5 rounded-full transition-colors"
                aria-label="Search stories"
              >
                <Search className="w-4 h-4" />
              </button>

              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-white/5 hover:bg-accent-pink/20 border border-white/15 hover:border-accent-pink transition-all duration-300 group"
              >
                <span>Follow Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-pink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="p-2 text-primary-muted hover:text-white rounded-lg focus:outline-none transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 text-white hover:text-accent-pink rounded-lg focus:outline-none focus:ring-1 focus:ring-white/20 touch-manipulation transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 transition-transform duration-200" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer: Sibling to header at z-40, immune to backdrop-filter containing-block entrapment */}
      <div
        id="mobile-navigation-drawer"
        className={`lg:hidden fixed inset-x-0 top-[66px] bottom-0 z-40 bg-[#101010]/98 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-3 pointer-events-none invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="space-y-6">
          <div className="text-[11px] font-mono uppercase tracking-widest text-accent-pink">
            Navigation
          </div>
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link, idx) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 border-b border-white/5 group"
                >
                  <span
                    className={`text-2xl font-display uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'text-accent-pink'
                        : 'text-white group-hover:text-accent-pink'
                    }`}
                  >
                    {link.name}
                  </span>
                  <span className="text-xs font-mono text-primary-muted group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-8 space-y-4 border-t border-white/10">
          <div className="flex gap-3">
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium uppercase tracking-wider text-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-accent-pink" />
              <span>Instagram</span>
            </a>
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-medium uppercase tracking-wider text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="text-center text-xs text-primary-muted font-mono pt-2">
            &ldquo;The new story which matters.&rdquo;
          </div>
        </div>
      </div>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
