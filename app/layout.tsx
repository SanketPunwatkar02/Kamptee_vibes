import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SITE_CONFIG, getOrganizationSchema, getWebSiteSchema } from '@/lib/seo';

export const viewport: Viewport = {
  themeColor: '#101010',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Kamptee Vibez — Premium Digital Editorial & Local News',
    template: '%s | Kamptee Vibez',
  },
  description:
    'Kamptee Vibez is the premier independent digital publication covering local news, community stories, culture, food, events, and public alerts in Kamptee, Maharashtra.',
  keywords: [
    'Kamptee news',
    'Kamptee latest updates',
    'Kamptee events',
    'Kamptee local news',
    'Things to do in Kamptee',
    'Local businesses in Kamptee',
    'Advertising in Kamptee',
    'Kamptee Vibez',
    'Ganesh Festival Kamptee',
    'Dragon Palace Temple',
    'Kanhan River',
  ],
  authors: [{ name: 'Kamptee Vibez Media' }],
  creator: 'Kamptee Vibez',
  publisher: 'Kamptee Vibez',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kamptee Vibez — Premium Digital Editorial & Local News',
    description: 'The new story which matters. Your city. Your people. Your stories.',
    url: SITE_CONFIG.url,
    siteName: 'Kamptee Vibez',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/kamptee_clock_tower.jpg',
        width: 1200,
        height: 630,
        alt: 'Kamptee Vibez - The City Has A Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kamptee Vibez — Premium Digital Editorial',
    description: 'The new story which matters. Your city. Your people. Your stories.',
    images: ['/images/kamptee_clock_tower.jpg'],
  },
  icons: {
    icon: '/images/logo_mandala.svg',
    shortcut: '/images/logo_mandala.svg',
    apple: '/images/logo_mandala.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-[#101010] text-white min-h-screen flex flex-col font-sans selection:bg-accent-pink selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
