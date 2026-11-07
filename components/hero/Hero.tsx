'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Instagram, Volume2, VolumeX } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';
import { Mandala3D } from '@/components/hero/Mandala3D';

interface Slide {
  id: string;
  number: string;
  tag: string;
  subtag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const HERO_SLIDES: Slide[] = [
  {
    id: 'slide-1',
    number: '01',
    tag: 'HERITAGE LANDMARK',
    subtag: 'EST. CANTONMENT',
    title: 'THE CLOCK TOWER OF KAMPTEE',
    description: 'Witness how our heritage architecture comes alive as the heartbeat of night-time celebrations.',
    image: '/images/kamptee_clock_tower.jpg',
    imageAlt: 'Kamptee Clock Tower illuminated at night during city festivities',
  },
  {
    id: 'slide-2',
    number: '02',
    tag: 'CIVIC SENTINEL',
    subtag: 'STATION ROAD',
    title: 'THE ELEVATED WATER TOWER',
    description: 'The iconic elevated silhouette that has welcomed travelers arriving into Kamptee for generations.',
    image: '/images/kamptee_water_tank.jpg',
    imageAlt: 'The elevated Kamptee water tank landmark against moody clouds',
  },
  {
    id: 'slide-3',
    number: '03',
    tag: 'SACRED SANCTUARY',
    subtag: 'KANHAN BASIN',
    title: 'DRAGON PALACE & LOTUS SHRINES',
    description: 'Lotus architecture, sacred contemplation, and glowing twilight processions along the Kanhan river.',
    image: '/images/temple_festival_night.jpg',
    imageAlt: 'Dragon Palace Temple and festival processions illuminated at night in Kamptee',
  },
];

export const Hero: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const activeSlide = HERO_SLIDES[activeSlideIndex];

  // Auto-rotation every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Web Audio API ambient sound generator
  const toggleSound = () => {
    try {
      if (isPlayingSound) {
        if (gainNodeRef.current && audioContextRef.current) {
          gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 0.5);
          setTimeout(() => {
            audioContextRef.current?.suspend();
            setIsPlayingSound(false);
          }, 500);
        } else {
          setIsPlayingSound(false);
        }
      } else {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioContextRef.current) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;

          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const gain = ctx.createGain();

          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(110, ctx.currentTime);
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(164.81, ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(450, ctx.currentTime);

          gain.gain.setValueAtTime(0.0001, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.2);

          osc1.connect(filter);
          osc2.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc1.start();
          osc2.start();

          gainNodeRef.current = gain;
        } else {
          audioContextRef.current.resume();
          if (gainNodeRef.current) {
            gainNodeRef.current.gain.linearRampToValueAtTime(0.04, audioContextRef.current.currentTime + 0.8);
          }
        }
        setIsPlayingSound(true);
      }
    } catch {
      setIsPlayingSound(!isPlayingSound);
    }
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center pt-24 md:pt-28 pb-12 overflow-hidden bg-[#101010]">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-pink/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-accent-orange/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 3D Rotating Mandala + Experimental Editorial Headlines */}
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            
            {/* 3D Rotating Mandala behind the Hero Text */}
            <Mandala3D className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] lg:w-[640px] lg:h-[640px] opacity-75 sm:opacity-85" />

            {/* Content sitting directly on top */}
            <div className="relative z-10">
              {/* Small Editorial Metadata */}
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-accent-pink animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-primary-muted uppercase">
                  DIGITAL MEDIA • EST. 2024 • KAMPTEE, MH
                </span>
              </div>

              {/* Oversized Condensed Headline */}
              <h1 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] tracking-tight text-white leading-[0.88] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                THE CITY
                <br />
                HAS A
                <br />
                <span className="text-white">
                  STORY
                  <span className="text-accent-pink inline-block animate-bounce ml-1">.</span>
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-sans font-light tracking-wide max-w-lg mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Your city. Your people. Your stories.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/stories"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase text-white bg-accent-pink hover:bg-[#d91370] transition-all duration-300 shadow-glow-pink group"
                >
                  <span>Explore Latest</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium tracking-wide text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors backdrop-blur-sm"
                >
                  <Instagram className="w-4 h-4 text-accent-pink" />
                  <span>@kamptee_vibezzz</span>
                </a>
              </div>

              {/* Editorial Micro-Bar */}
              <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-primary-muted">
                <div>
                  <span className="text-white font-semibold">21.2234° N, 79.1983° E</span>
                  <span className="mx-2 opacity-40">•</span>
                  <span>KANHAN BASIN</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-primary-subtle">
                  <span>SCROLL TO DISCOVER</span>
                  <span className="animate-pulse">&darr;</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Artwork with Vertical Outline Typography */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Vertical Rotated Outline "KAMPTEE" text on desktop */}
              <div
                className="hidden xl:block absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[8.5rem] font-display uppercase tracking-widest text-transparent z-0 opacity-20"
                style={{
                  writingMode: 'vertical-rl',
                  WebkitTextStroke: '1.5px #FFFFFF',
                }}
              >
                KAMPTEE
              </div>

              {/* Main Photo Card with Cinematic Framing */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-surface-card shadow-editorial group aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  key={activeSlide.id}
                  src={activeSlide.image}
                  alt={activeSlide.imageAlt}
                  fill
                  priority
                  className="object-cover object-center transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                />

                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
                    {activeSlide.tag}
                  </div>
                </div>

                {/* Bottom Story Snippet on Image */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 bg-gradient-to-t from-[#101010] via-[#101010]/80 to-transparent">
                  <div className="flex items-center justify-between text-[11px] font-mono text-accent-pink mb-1 uppercase tracking-wider">
                    <span>ICONIC SILHOUETTE</span>
                    <span className="text-white/60">{activeSlide.subtag}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white leading-tight">
                    {activeSlide.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans mt-1 line-clamp-2">
                    {activeSlide.description}
                  </p>
                </div>
              </div>

              {/* Slide Navigation Counter & Audio Pill */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-3 font-mono text-xs text-primary-muted">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`transition-colors py-1 ${
                        activeSlideIndex === idx
                          ? 'text-accent-pink font-bold border-b border-accent-pink'
                          : 'text-primary-muted hover:text-white'
                      }`}
                      aria-label={`Switch to slide ${slide.number}`}
                    >
                      {slide.number}
                    </button>
                  ))}
                </div>

                <button
                  onClick={toggleSound}
                  className="flex items-center gap-2 text-xs font-mono text-primary-muted bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10 transition-colors"
                  aria-label="Toggle ambient city sound"
                >
                  {isPlayingSound ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-accent-pink animate-pulse" />
                      <span className="text-accent-pink">AMBIENCE ON</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-accent-orange" />
                      <span>SOUND OF KAMPTEE</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
