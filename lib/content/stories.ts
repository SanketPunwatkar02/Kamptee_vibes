import { Story, StoryCategory } from '@/types';

export const STORIES: Story[] = [
  {
    id: 'story-1',
    slug: 'ganesh-festival-kamptee-2025',
    title: 'Ganesh Festival in Kamptee: Grand Processions, Historical Mandals & Kanhan Ghats',
    headline: 'Ganesh Festival in Kamptee',
    excerpt:
      'From 70-year-old traditional mandals to the dazzling lights illuminating Subhash Nagar and Old Kamptee, experience how our historic town unites during the grand 10-day celebration.',
    category: 'Culture',
    coverImage: '/images/ganesh_festival.jpg',
    imageAlt: 'Ganesh Festival celebrations and illuminated idol in Kamptee',
    publishedAt: '2025-09-12T19:00:00Z',
    publishedDateFormatted: 'September 12, 2025',
    views: '2.5M views',
    readTime: '4 min read',
    author: {
      name: 'Kamptee Vibez Editorial',
      role: 'Culture & Heritage Desk',
    },
    featured: true,
    trending: true,
    tags: ['Ganesh Chaturthi', 'Kamptee Culture', 'Kanhan River', 'Festivals', 'Traditions'],
    location: 'Subhash Chowk & Kanhan River Ghat, Kamptee',
    relatedSlugs: ['kamptee-dandiya-night-2025', 'dragon-palace-temple-peace-memorial', 'best-street-food-spots-kamptee'],
    content: [
      {
        type: 'paragraph',
        text: 'The beats of the dhol-tasha echo through the narrow alleys of Kamptee as thousands of devotees gather under cascading golden illumination. Every autumn, the historic cantonment town transforms into a living spectacle of devotion, artistic craftsmanship, and community brotherhood.',
      },
      {
        type: 'highlight',
        text: 'Over 65 registered sarvajanik mandals across Kamptee brought together artisans, local vendors, and generations of families this year, making it one of the largest cultural gatherings in the Nagpur metropolitan region.',
      },
      {
        type: 'heading',
        text: 'Decades of Heritage at Subhash Chowk and Cantonment',
      },
      {
        type: 'paragraph',
        text: 'What sets Kamptee apart is its secular harmony and deep-rooted neighborhood connections. Neighborhoods like Subhash Nagar, Modi Pada, and Railway Colony each prepare themes that address pressing social issues, environmental conservation, and local civic awareness.',
      },
      {
        type: 'quote',
        text: 'For our family, the visarjan procession towards Kanhan river is not just a ritual — it is a reunion of old classmates, shopkeepers, and neighbors who have called Kamptee home for four generations.',
      },
      {
        type: 'heading',
        text: 'Eco-Friendly Visarjan on the Banks of Kanhan',
      },
      {
        type: 'paragraph',
        text: 'This year saw a major civic milestone: artificial immersion tanks set up alongside the Kanhan River prevented plaster of Paris contamination, preserving our lifeline waterway while honoring time-honored spiritual rituals.',
      },
    ],
  },
  {
    id: 'story-2',
    slug: 'best-street-food-spots-kamptee',
    title: 'Top 5 Iconic Street Food Spots in Kamptee You Cannot Miss',
    headline: 'Best Street Food in Kamptee',
    excerpt:
      'From spicy Saoji gravies simmered over coal flames to legendary cantonment samosas and late-night rabdi falooda, here is our ultimate insider foodie trail.',
    category: 'Food',
    coverImage: '/images/street_food_market.jpg',
    imageAlt: 'Authentic bustling street food stalls in Kamptee evening market',
    publishedAt: '2025-09-10T14:30:00Z',
    publishedDateFormatted: 'September 10, 2025',
    views: '1.2M views',
    readTime: '3 min read',
    author: {
      name: 'Kamptee Vibez Editorial',
      role: 'Street Food & Lifestyle Curation',
    },
    featured: false,
    trending: true,
    tags: ['Kamptee Food', 'Saoji Special', 'Street Food', 'Foodies', 'Nagpur District'],
    location: 'Old Town Market & Station Road, Kamptee',
    relatedSlugs: ['ganesh-festival-kamptee-2025', 'kamptee-cantonment-heritage-walk'],
    content: [
      {
        type: 'paragraph',
        text: 'Ask any Kamptee native living abroad what they miss most, and the answer is almost always the distinct aroma of black-pepper Saoji spice roasting on iron tavas at 7:00 PM along the cantonment bypass.',
      },
      {
        type: 'heading',
        text: '1. The Legendary Saoji Corner at Station Road',
      },
      {
        type: 'paragraph',
        text: 'Operating for over 38 years, this unpretentious eatery serves mutton and patodi rassa that commands an uncompromising balance of dry-roasted cloves, stone-flower, and fiery local chilies.',
      },
      {
        type: 'heading',
        text: '2. Crispy Moong Bhajiya & Chutney at Gol Bazaar',
      },
      {
        type: 'paragraph',
        text: 'Served piping hot straight from the bubbling kadhai into newsprint wraps, the garlic-infused green chili chutney here has drawn food lovers from across the district for decades.',
      },
      {
        type: 'quote',
        text: 'Good food in Kamptee does not come in fancy packaging; it comes with heat, history, and real warmth from hands that have perfected the recipe over decades.',
      },
    ],
  },
  {
    id: 'story-3',
    slug: 'kamptee-dandiya-night-2025',
    title: 'Kamptee Dandiya Night 2025: Vibrant Beats, Royal Costumes & Electric Evenings',
    headline: 'Kamptee Dandiya Night 2025',
    excerpt:
      'Thousands of young dancers, traditional garba circles, and high-energy live orchestras came together under neon strobes for Kamptee’s most anticipated festive weekend.',
    category: 'Events',
    coverImage: '/images/dandiya_night.jpg',
    imageAlt: 'Energetic Dandiya and Garba celebrations at night in Kamptee',
    publishedAt: '2025-09-08T22:15:00Z',
    publishedDateFormatted: 'September 8, 2025',
    views: '980K views',
    readTime: '3 min read',
    author: {
      name: 'Kamptee Vibez Editorial',
      role: 'Events & Youth Beat',
    },
    featured: false,
    trending: true,
    tags: ['Dandiya 2025', 'Navratri', 'Kamptee Events', 'Nightlife', 'Music'],
    location: 'Cantonment Ground, Kamptee',
    relatedSlugs: ['ganesh-festival-kamptee-2025', 'dragon-marathon-youth-sports-alert'],
    content: [
      {
        type: 'paragraph',
        text: 'The energy at the annual Kamptee Navratri Dandiya Mahotsav reached a crescendo this Saturday, as more than 4,000 attendees adorned in mirror-embroidered chaniya cholis and kurtas synchronized their steps to booming live Gujarati and Hindi folk beats.',
      },
      {
        type: 'highlight',
        text: 'Special awards were distributed for Best Traditional Attire, Best Garba Circle, and Most Energetic Senior Performer by local community leaders.',
      },
      {
        type: 'paragraph',
        text: 'The sound system setup and 360-degree light rigs turned the historic grounds into a festival ground rivaling the biggest metropolitan arenas, while maintaining strict zero-noise pollution adherence at the midnight cutoff.',
      },
    ],
  },
  {
    id: 'story-4',
    slug: 'dragon-palace-temple-peace-memorial',
    title: 'Dragon Palace Temple: Architectural Grandeur, Global Pilgrims & Inner Stillness in Kamptee',
    headline: 'Dragon Palace Temple & Peace Center',
    excerpt:
      'Standing amidst sprawling landscaped lotus gardens, the Lotus Temple of Central India continues to attract international pilgrims, architecture admirers, and peace seekers.',
    category: 'Culture',
    coverImage: '/images/temple_festival_night.jpg',
    imageAlt: 'Dragon Palace Temple illuminated at twilight in Kamptee',
    publishedAt: '2025-09-02T11:00:00Z',
    publishedDateFormatted: 'September 2, 2025',
    views: '750K views',
    readTime: '5 min read',
    author: {
      name: 'Kamptee Vibez Editorial',
      role: 'Culture & Heritage Desk',
    },
    featured: false,
    trending: false,
    tags: ['Dragon Palace', 'Buddhist Heritage', 'Architecture', 'Tourism', 'Peace'],
    location: 'Dragon Palace Complex, New Kamptee',
    relatedSlugs: ['ganesh-festival-kamptee-2025', 'kamptee-cantonment-heritage-walk'],
    content: [
      {
        type: 'paragraph',
        text: 'Inaugurated in 1999 with support from the Ogawa Society of Japan, the Dragon Palace Temple (Lotus Temple of Central India) remains one of the architectural crown jewels of Maharashtra. Its brilliant white marble structure radiates serenity against the lush green groves.',
      },
      {
        type: 'quote',
        text: 'The temple does not simply belong to history; it is an active meditation sanctuary where people of all faiths sit side by side in reflective silence.',
      },
      {
        type: 'paragraph',
        text: 'Visitors from Japan, Thailand, Sri Lanka, and across India arrive weekly to pay homage to the magnificent sandalwood Buddha statue sculpted by renowned master carvers.',
      },
    ],
  },
  {
    id: 'story-5',
    slug: 'kanhan-river-bridge-traffic-advisory',
    title: 'Public Alert: Kanhan River Bridge Repair Schedule & Smart Diversion Route',
    headline: 'Kanhan Bridge Traffic Update',
    excerpt:
      'Authorities have announced timed structural maintenance along the northern span of the Kanhan River Bridge. Check the detour map and peak-hour advisory to avoid delays.',
    category: 'Public Alerts',
    coverImage: '/images/public_alerts.jpg',
    imageAlt: 'Public civic warning and traffic advisory notice in Kamptee',
    publishedAt: '2025-09-05T08:30:00Z',
    publishedDateFormatted: 'September 5, 2025',
    views: '430K views',
    readTime: '2 min read',
    author: {
      name: 'Kamptee Vibez Desk',
      role: 'Civic & Emergency Alerts',
    },
    featured: false,
    trending: false,
    tags: ['Public Alert', 'Traffic Update', 'Kanhan Bridge', 'Civic News', 'Nagpur Bypass'],
    location: 'Kanhan River Bridge, NH-44 Crossing',
    relatedSlugs: ['kamptee-cantonment-heritage-walk', 'ganesh-festival-kamptee-2025'],
    content: [
      {
        type: 'alert',
        text: 'NOTICE: Single-lane traffic restrictions will be in effect between 10:00 PM and 5:00 AM from Monday to Thursday. Heavy multi-axle freight vehicles are advised to take the Outer Ring Road diversion.',
      },
      {
        type: 'paragraph',
        text: 'Public Works Department engineers are conducting routine bearing replacements and expansion joint sealing to ensure long-term structural safety ahead of the winter transit influx.',
      },
      {
        type: 'paragraph',
        text: 'Two-wheelers, school buses, and emergency ambulance convoys will retain uninterrupted right-of-way via the designated service corridor.',
      },
    ],
  },
  {
    id: 'story-6',
    slug: 'kamptee-cantonment-heritage-walk',
    title: 'Kamptee Cantonment: Two Centuries of Military Architecture, Shaded Boulevards & Forgotten Stories',
    headline: 'Inside Kamptee Cantonment Heritage',
    excerpt:
      'Established in 1821, the cantonment is one of the oldest military stations in India. Step behind the colonial arches, St. Joseph’s Convent, and pristine barracks.',
    category: 'Lifestyle',
    coverImage: '/images/lifestyle_street.jpg',
    imageAlt: 'Historic shaded street and colonial architecture in Kamptee Cantonment',
    publishedAt: '2025-08-28T16:00:00Z',
    publishedDateFormatted: 'August 28, 2025',
    views: '620K views',
    readTime: '4 min read',
    author: {
      name: 'Kamptee Vibez Editorial',
      role: 'Urban History & Architecture',
    },
    featured: false,
    trending: false,
    tags: ['Cantonment', 'Military Heritage', 'Architecture', 'Colonial History', 'Walking Tour'],
    location: 'Cantonment Area, Kamptee',
    relatedSlugs: ['kamptee-water-tank-landmark-history', 'dragon-palace-temple-peace-memorial'],
    content: [
      {
        type: 'paragraph',
        text: 'With its broad, tree-lined boulevards and distinctive red-tiled rooflines, entering the Kamptee Cantonment feels like stepping across a temporal threshold. Founded over two centuries ago on the southern banks of the Kanhan, it continues to maintain an immaculate civic standard.',
      },
      {
        type: 'paragraph',
        text: 'Architectural highlights include the 19th-century garrison church, the Officers Mess with antique brass fixtures, and heritage stone water towers that supplied clean gravity-fed well water to early garrisons.',
      },
    ],
  },
  {
    id: 'story-7',
    slug: 'kamptee-water-tank-landmark-history',
    title: 'The Kamptee Water Tank: An Industrial Skyline Landmark That Watched the Town Grow',
    headline: 'The Story Behind Kamptee Water Tank',
    excerpt:
      'Elevated against the clouds with bold painted typography, this iconic water tower is Kamptee’s most recognizable industrial sentinel and community meeting beacon.',
    category: 'Local News',
    coverImage: '/images/kamptee_water_tank.jpg',
    imageAlt: 'The elevated Kamptee water tank landmark against moody clouds',
    publishedAt: '2025-08-20T10:00:00Z',
    publishedDateFormatted: 'August 20, 2025',
    views: '540K views',
    readTime: '3 min read',
    author: {
      name: 'Kamptee Vibez Editorial',
      role: 'Civic History Desk',
    },
    featured: false,
    trending: false,
    tags: ['Kamptee Landmark', 'Water Tank', 'Industrial Architecture', 'Local Pride'],
    location: 'Station Road Junction, Kamptee',
    relatedSlugs: ['kamptee-cantonment-heritage-walk', 'best-street-food-spots-kamptee'],
    content: [
      {
        type: 'paragraph',
        text: 'Few silhouettes are as immediately recognizable to locals as the cylindrical Kamptee water tank rising above the treetops. Marked with bold capital lettering, it has stood as a visual anchor for travelers arriving by rail, bus, or highway for generations.',
      },
      {
        type: 'quote',
        text: 'Whenever you see that tank emerging on the horizon from the Nagpur road, you instinctively know: you are finally home.',
      },
    ],
  },
  {
    id: 'story-8',
    slug: 'dragon-marathon-youth-sports-alert',
    title: 'Over 1,200 Runners Register for the Annual Kamptee Kanhan Youth Marathon',
    headline: 'Kamptee Kanhan Marathon 2025',
    excerpt:
      'Youth athletes, armed forces runners, and fitness enthusiasts gear up for the 10km scenic route tracing the Kanhan River bank this Sunday.',
    category: 'Events',
    coverImage: '/images/city_events.jpg',
    imageAlt: 'Vibrant youth marathon and festival crowd in Kamptee',
    publishedAt: '2025-08-15T07:00:00Z',
    publishedDateFormatted: 'August 15, 2025',
    views: '340K views',
    readTime: '2 min read',
    author: {
      name: 'Kamptee Vibez Editorial',
      role: 'Youth & Sports Beat',
    },
    featured: false,
    trending: false,
    tags: ['Marathon', 'Youth Sports', 'Fitness', 'Community', 'Kanhan River'],
    location: 'Kanhan River Bank Route, Kamptee',
    relatedSlugs: ['kamptee-dandiya-night-2025', 'kanhan-river-bridge-traffic-advisory'],
    content: [
      {
        type: 'paragraph',
        text: 'Registration for the 7th annual Kamptee Kanhan Youth Marathon officially crossed record capacity early this week. With categories spanning 5K Fun Run, 10K Competitive, and 3K Veterans Walk, participants from all walks of life are ready to lace up.',
      },
      {
        type: 'paragraph',
        text: 'Hydration stations and medical aid outposts will be deployed every kilometer, accompanied by live percussion bands to fuel the spirits of the runners.',
      },
    ],
  },
];

export const CATEGORIES: StoryCategory[] = [
  'Culture',
  'Events',
  'Local News',
  'Food',
  'Lifestyle',
  'Public Alerts',
];

export function getStoryBySlug(slug: string): Story | undefined {
  return STORIES.find((s) => s.slug === slug);
}

export function getTrendingStories(): Story[] {
  return STORIES.filter((s) => s.trending);
}

export function getFeaturedStory(): Story {
  return STORIES.find((s) => s.featured) || STORIES[0];
}

export function getStoriesByCategory(category: string): Story[] {
  if (category === 'All') return STORIES;
  return STORIES.filter((s) => s.category.toLowerCase() === category.toLowerCase());
}
