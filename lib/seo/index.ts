import { Story } from '@/types';

export const SITE_CONFIG = {
  name: 'Kamptee Vibez',
  legalName: 'Kamptee Vibez Media',
  tagline: 'The new story which matters.',
  headline: 'THE CITY HAS A STORY.',
  description:
    'Kamptee Vibez is the premier independent digital editorial and community publication covering local news, culture, events, food, public alerts, and stories across Kamptee.',
  url: 'https://kampteevibez.com',
  ogImage: '/images/kamptee_clock_tower.jpg',
  instagram: 'https://www.instagram.com/kamptee_vibezz/',
  instagramHandle: '@kamptee_vibezz',
  youtube: 'https://youtube.com/@kampteevibez',
  whatsapp: 'https://wa.me/919876543210',
  city: 'Kamptee',
  region: 'Maharashtra',
  country: 'India',
};

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo_mandala.svg`,
    sameAs: [SITE_CONFIG.instagram, SITE_CONFIG.youtube],
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kamptee',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    slogan: SITE_CONFIG.tagline,
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/stories?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getArticleSchema(story: Story) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/stories/${story.slug}`,
    },
    headline: story.title,
    description: story.excerpt,
    image: [`${SITE_CONFIG.url}${story.coverImage}`],
    datePublished: story.publishedAt,
    dateModified: story.publishedAt,
    author: {
      '@type': 'Organization',
      name: story.author.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo_mandala.svg`,
      },
    },
    articleSection: story.category,
    keywords: story.tags.join(', '),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}
