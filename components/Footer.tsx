import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-light text-stone-900 tracking-tight">
              SpeedCalculator.com
            </Link>
            <p className="mt-4 text-sm font-light leading-relaxed text-stone-600">
              Professional speed and pace calculators for accurate measurements and conversions.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
              Calculators
            </h3>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/" className="text-stone-600 transition-colors hover:text-stone-900">
                  Speed Calculator
                </Link>
              </li>
              <li>
                <Link href="/speed-converter" className="text-stone-600 transition-colors hover:text-stone-900">
                  Speed Converter
                </Link>
              </li>
              <li>
                <Link href="/running-pace-calculator" className="text-stone-600 transition-colors hover:text-stone-900">
                  Running Pace Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
              Support
            </h3>
            <ul className="space-y-3 text-sm font-light text-stone-600">
              <li>
                <a href="mailto:hello@speedcalculator.com" className="transition-colors hover:text-stone-900">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-stone-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="transition-colors hover:text-stone-900">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Keywords */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
              Popular Searches
            </h3>
            <ul className="space-y-3 text-sm font-light text-stone-600">
              <li>
                <Link href="/speed-converter" className="transition-colors hover:text-stone-900">
                  MPH to KM/H
                </Link>
              </li>
              <li>
                <Link href="/running-pace-calculator" className="transition-colors hover:text-stone-900">
                  Running Pace
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-stone-900">
                  Speed Formula
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8">
          <p className="text-center text-sm font-light text-stone-500">
            © {new Date().getFullYear()} SpeedCalculator.com - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
