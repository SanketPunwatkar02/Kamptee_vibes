export type StoryCategory =
  | 'Culture'
  | 'Events'
  | 'Local News'
  | 'Food'
  | 'Lifestyle'
  | 'Public Alerts';

export interface Story {
  id: string;
  slug: string;
  title: string;
  headline: string;
  excerpt: string;
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'alert' | 'highlight';
    text: string;
  }[];
  category: StoryCategory;
  coverImage: string;
  imageAlt: string;
  publishedAt: string;
  publishedDateFormatted: string;
  views: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  featured?: boolean;
  trending?: boolean;
  tags: string[];
  location?: string;
  relatedSlugs?: string[];
}

export interface Reel {
  id: string;
  title: string;
  category: StoryCategory;
  thumbnail: string;
  views: string;
  instagramUrl: string;
  publishedAgo: string;
  likes?: string;
}

export interface DiscoveryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  badge: string;
  location: string;
}

export interface CollaborationFormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  collaborationType: string;
  campaignDescription: string;
}
