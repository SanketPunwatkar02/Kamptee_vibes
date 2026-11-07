import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { TrendingSection } from '@/components/editorial/TrendingSection';
import { LatestStoriesSection } from '@/components/stories/LatestStoriesSection';
import { ReelsSection } from '@/components/reels/ReelsSection';
import { DiscoverSection } from '@/components/discovery/DiscoverSection';
import { AboutSection } from '@/components/editorial/AboutSection';
import { CollaborateSection } from '@/components/collaboration/CollaborateSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section — THE CITY HAS A STORY */}
      <Hero />

      {/* Trending in Kamptee */}
      <TrendingSection />

      {/* Latest Stories with Category Filtering */}
      <LatestStoriesSection />

      {/* Instagram Reels Showcase */}
      <ReelsSection />

      {/* Discover Kamptee / Explore More */}
      <DiscoverSection />

      {/* About Kamptee Vibez */}
      <AboutSection />

      {/* Collaborate With Us */}
      <CollaborateSection />
    </>
  );
}
