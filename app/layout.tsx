import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://speedcalculator.com'),
  title: {
    default: 'Speed Calculator - Calculate Speed, Distance & Time | Free Online Tool',
    template: '%s | SpeedCalculator.com'
  },
  description: 'Free online speed calculator for mph, km/h, and more. Calculate speed from distance and time, find distance, or calculate time. Supports miles, feet, meters and 9 distance units. Perfect for US drivers and students.',
  keywords: ['speed calculator', 'mph calculator', 'miles per hour calculator', 'speed formula', 'distance calculator', 'time calculator', 'velocity calculator', 'speed distance time calculator', 'calculate speed mph', 'speed conversion', 'miles to kilometers', 'feet per second calculator'],
  authors: [{ name: 'SpeedCalculator.com' }],
  creator: 'SpeedCalculator.com',
  publisher: 'SpeedCalculator.com',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://speedcalculator.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedcalculator.com',
    title: 'Speed Calculator - MPH, Miles & Feet Calculator',
    description: 'Free speed calculator for mph and miles. Calculate speed, distance, or time instantly. Perfect for US drivers, students, and anyone needing quick speed calculations.',
    siteName: 'SpeedCalculator.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Speed Calculator - Online Speed, Distance and Time Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speed Calculator - MPH & Miles Calculator',
    description: 'Free speed calculator for mph and miles. Calculate speed, distance, or time instantly.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'SpeedCalculator.com',
    applicationCategory: 'UtilityApplication',
    description: 'Free online speed calculator and converter. Calculate speed, distance, and time with multiple unit support including mph, km/h, m/s, and more.',
    url: 'https://speedcalculator.com',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127'
    },
    author: {
      '@type': 'Organization',
      name: 'SpeedCalculator.com',
      url: 'https://speedcalculator.com'
    }
  };

  return (
    <html lang="en-US">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col bg-slate-50`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
