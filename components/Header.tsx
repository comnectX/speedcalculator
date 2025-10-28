import Link from 'next/link';
import { Gauge } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-xl font-light text-stone-900 transition-colors hover:text-stone-600">
            <Gauge className="h-6 w-6 text-stone-900" strokeWidth={1.5} />
            <span className="tracking-tight">SpeedCalculator.com</span>
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-light text-stone-600 transition-colors hover:text-stone-900"
            >
              Speed Calculator
            </Link>
            <Link
              href="/speed-converter"
              className="text-sm font-light text-stone-600 transition-colors hover:text-stone-900"
            >
              Speed Converter
            </Link>
            <Link
              href="/running-pace-calculator"
              className="text-sm font-light text-stone-600 transition-colors hover:text-stone-900"
            >
              Running Pace
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
