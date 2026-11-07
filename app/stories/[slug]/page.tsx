import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, MapPin, Share2, ArrowLeft, ArrowRight, Bookmark, Check } from 'lucide-react';
import { STORIES, getStoryBySlug } from '@/lib/content/stories';
import { SITE_CONFIG, getArticleSchema, getBreadcrumbSchema } from '@/lib/seo';
import { SocialShareButtons } from '@/components/stories/SocialShareButtons';

interface StoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return STORIES.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const story = getStoryBySlug(params.slug);
  if (!story) {
    return {
      title: 'Story Not Found',
    };
  }

  const url = `${SITE_CONFIG.url}/stories/${story.slug}`;

  return {
    title: story.title,
    description: story.excerpt,
    keywords: [...story.tags, 'Kamptee news', 'Kamptee local stories'],
    alternates: {
      canonical: `/stories/${story.slug}`,
    },
    openGraph: {
      title: `${story.title} | Kamptee Vibez`,
      description: story.excerpt,
      url,
      type: 'article',
      publishedTime: story.publishedAt,
      authors: [story.author.name],
      tags: story.tags,
      images: [
        {
          url: story.coverImage,
          width: 1200,
          height: 630,
          alt: story.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: story.title,
      description: story.excerpt,
      images: [story.coverImage],
    },
  };
}

export default function StoryDetailPage({ params }: StoryPageProps) {
  const story = getStoryBySlug(params.slug);

  if (!story) {
    notFound();
  }

  const articleSchema = getArticleSchema(story);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Stories', url: '/stories' },
    { name: story.title, url: `/stories/${story.slug}` },
  ]);

  // Find related stories
  const relatedStories = STORIES.filter(
    (s) => s.slug !== story.slug && (story.relatedSlugs?.includes(s.slug) || s.category === story.category)
  ).slice(0, 3);

  const storyUrl = `${SITE_CONFIG.url}/stories/${story.slug}`;

  return (
    <article className="pt-24 md:pt-32 pb-24 bg-[#101010] min-h-screen">
      {/* Schema.org Article & Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-primary-muted">
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/stories" className="hover:text-white transition-colors">
            STORIES
          </Link>
          <span>/</span>
          <span className="text-accent-pink uppercase font-semibold">{story.category}</span>
        </nav>

        {/* Back Link */}
        <Link
          href="/stories"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary-muted hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Stories</span>
        </Link>

        {/* Category Badge & Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-wider bg-accent-pink text-white">
            {story.category}
          </span>
          <span className="text-xs font-mono text-primary-muted">
            {story.publishedDateFormatted}
          </span>
          <span className="text-primary-muted">•</span>
          <span className="flex items-center gap-1 text-xs font-mono text-accent-orange">
            <Clock className="w-3.5 h-3.5" />
            {story.readTime}
          </span>
          <span className="text-primary-muted">•</span>
          <span className="text-xs font-mono text-primary-muted">
            {story.views}
          </span>
        </div>

        {/* Story H1 Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-[1.05] mb-6">
          {story.title}
        </h1>

        {/* Excerpt / Lead */}
        <p className="text-lg sm:text-xl text-neutral-300 font-sans leading-relaxed mb-8 font-light">
          {story.excerpt}
        </p>

        {/* Author Byline & Social Sharing Row */}
        <div className="py-4 border-y border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-pink/20 border border-accent-pink/40 flex items-center justify-center font-display text-accent-pink text-lg uppercase">
              KV
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{story.author.name}</div>
              <div className="text-xs font-mono text-primary-muted">{story.author.role}</div>
            </div>
          </div>

          {/* Social Share Buttons */}
          <SocialShareButtons url={storyUrl} title={story.title} />
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-surface-card mb-8 shadow-editorial">
          <Image
            src={story.coverImage}
            alt={story.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
          {story.location && (
            <div className="absolute bottom-4 left-4 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-mono text-white">
                <MapPin className="w-3.5 h-3.5 text-accent-orange" />
                <span>{story.location}</span>
              </div>
            </div>
          )}
        </div>

        {/* Story Formatted Body Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-neutral-300 font-sans text-base sm:text-lg leading-relaxed">
          {story.content.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white pt-6 pb-1 border-b border-white/10"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={idx}
                  className="my-8 pl-6 border-l-4 border-accent-pink italic text-xl sm:text-2xl text-white font-serif bg-white/[0.02] py-4 pr-4 rounded-r-lg"
                >
                  &ldquo;{block.text}&rdquo;
                </blockquote>
              );
            }
            if (block.type === 'highlight') {
              return (
                <div
                  key={idx}
                  className="my-6 p-5 rounded-xl bg-accent-orange/10 border border-accent-orange/30 text-white font-sans text-base leading-relaxed"
                >
                  <span className="font-mono text-accent-orange text-xs uppercase tracking-widest block mb-1">
                    KEY DISPATCH INSIGHT
                  </span>
                  {block.text}
                </div>
              );
            }
            if (block.type === 'alert') {
              return (
                <div
                  key={idx}
                  className="my-6 p-5 rounded-xl bg-accent-pink/10 border border-accent-pink/40 text-white font-sans text-base leading-relaxed"
                >
                  <span className="font-mono text-accent-pink text-xs uppercase tracking-widest block mb-1">
                    CIVIC NOTICE & ADVISORY
                  </span>
                  {block.text}
                </div>
              );
            }
            return (
              <p key={idx} className="text-neutral-300 leading-relaxed">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Story Tags */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="text-xs font-mono uppercase tracking-widest text-primary-muted mb-3">
            Tags & Keywords
          </div>
          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300 hover:border-accent-pink hover:text-white transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Share & News Tip Prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-surface border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-display uppercase tracking-wider text-white">
              Have a story or update about this?
            </h4>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">
              Send tips, photos, or updates straight to our editorial desk on WhatsApp.
            </p>
          </div>
          <a
            href={`${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
              `Hello Kamptee Vibez! Regarding the story "${story.title}", I have an update or photo:`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-[#20ba59] transition-colors whitespace-nowrap"
          >
            Submit Tip on WhatsApp
          </a>
        </div>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="text-[11px] font-mono tracking-widest text-accent-pink uppercase mb-1">
                  MORE FROM KAMPTEE VIBEZ
                </div>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white">
                  Related Dispatches
                </h3>
              </div>
              <Link
                href="/stories"
                className="text-xs font-mono uppercase tracking-wider text-accent-pink hover:underline"
              >
                All Stories &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStories.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/stories/${rel.slug}`}
                  className="group flex flex-col rounded-xl overflow-hidden border border-white/10 bg-surface hover:border-accent-pink/40 transition-colors"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={rel.coverImage}
                      alt={rel.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-accent-pink font-semibold">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-semibold text-white line-clamp-2 mt-1 group-hover:text-accent-pink transition-colors">
                        {rel.title}
                      </h4>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 text-[11px] font-mono text-primary-muted flex items-center justify-between">
                      <span>{rel.readTime}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-accent-pink group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
