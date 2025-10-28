import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speed Converter - MPH to KM/H Calculator & Speed Unit Converter',
  description: 'Free speed converter tool. Convert between mph, km/h, m/s, knots, feet per second, and Mach. Includes conversion tables and formulas for all speed units.',
  keywords: ['mph calculator', 'miles per hour calculator', 'miles per hour to kilometers calculator', 'mph to kmh', 'kmh to mph', 'speed converter', 'speed unit converter', 'mph to km/h converter', 'kilometers per hour to miles per hour', 'knots to mph', 'm/s to mph', 'mach to mph'],
  alternates: {
    canonical: 'https://speedcalculator.com/speed-converter',
  },
  openGraph: {
    title: 'Speed Converter - MPH to KM/H Calculator',
    description: 'Convert between mph, km/h, m/s, knots and more. Free online speed unit converter with conversion tables.',
    url: 'https://speedcalculator.com/speed-converter',
    type: 'website',
    siteName: 'SpeedCalculator.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Speed Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speed Converter - MPH to KM/H Calculator',
    description: 'Convert speed units instantly. Miles per hour to kilometers calculator.',
    images: ['/og-image.png'],
  },
};

export default function SpeedConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
