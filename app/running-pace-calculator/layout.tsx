import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Running Pace Calculator - Calculate Pace, Time & Distance for Runners',
  description: 'Free running pace calculator with splits for 5K, 10K, half marathon and marathon training. Calculate running pace per km or mile, race times, and calories burned. Perfect for runners of all levels.',
  keywords: ['running pace calculator', 'running pace', 'pace calculator', 'running time calculator', 'marathon pace calculator', '5k pace calculator', '10k pace calculator', 'half marathon pace', 'running distance calculator', 'split times calculator', 'min per km', 'min per mile', 'running speed calculator', 'race pace calculator'],
  alternates: {
    canonical: 'https://speedcalculator.com/running-pace-calculator',
  },
  openGraph: {
    title: 'Running Pace Calculator - Calculate Pace, Time & Distance',
    description: 'Calculate running pace, race times, and splits for 5K, 10K, half marathon and marathon. Free tool for runners with km/mile support.',
    url: 'https://speedcalculator.com/running-pace-calculator',
    type: 'website',
    siteName: 'SpeedCalculator.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Running Pace Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Running Pace Calculator - Calculate Pace, Time & Distance',
    description: 'Calculate running pace, race times, and splits. Free tool for runners.',
    images: ['/og-image.png'],
  },
};

export default function RunningPaceCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
