import { DiscoveryItem } from '@/types';

export const DISCOVERIES: DiscoveryItem[] = [
  {
    id: 'disc-1',
    title: 'Local Discoveries',
    category: 'Local',
    image: '/images/local_discoveries.jpg',
    description: 'Hidden gem tea stalls, century-old bakeries, and artisan handloom weavers tucked away in historic lanes.',
    badge: '01 / DISCOVER',
    location: 'Old Bazaar & Station Road',
  },
  {
    id: 'disc-2',
    title: 'City Events',
    category: 'Events',
    image: '/images/city_events.jpg',
    description: 'Upcoming cultural festivals, local sports tournaments, and community gatherings that bring the city alive.',
    badge: '02 / EVENTS',
    location: 'Cantonment Grounds & Kanhan Bank',
  },
  {
    id: 'disc-3',
    title: 'Public Alerts',
    category: 'Public Alerts',
    image: '/images/public_alerts.jpg',
    description: 'Real-time verified civic announcements, bridge traffic updates, weather notices, and emergency advisories.',
    badge: '03 / ALERTS',
    location: 'City-wide & Highways',
  },
  {
    id: 'disc-4',
    title: 'Lifestyle',
    category: 'Lifestyle',
    image: '/images/lifestyle_street.jpg',
    description: 'Colonial bungalow tours, youth creative scenes, morning walking clubs, and street photography trails.',
    badge: '04 / LIFESTYLE',
    location: 'Cantonment & Riverside',
  },
];
