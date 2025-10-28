'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SpeedConverter() {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState<'mph' | 'kmh' | 'ms' | 'knots'>('mph');

  const convert = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) return null;

    // Convert everything to m/s first
    let ms = 0;
    switch (inputUnit) {
      case 'mph':
        ms = num * 0.44704;
        break;
      case 'kmh':
        ms = num / 3.6;
        break;
      case 'ms':
        ms = num;
        break;
      case 'knots':
        ms = num * 0.514444;
        break;
    }

    return {
      mph: ms / 0.44704,
      kmh: ms * 3.6,
      ms: ms,
      knots: ms / 0.514444,
      fps: ms * 3.28084, // feet per second
      mach: ms / 343, // approximate at sea level
    };
  };

  const results = inputValue ? convert(inputValue) : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Back to Speed Calculator
          </Link>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-stone-500">
              Unit Conversion Tool
            </p>
            <h1 className="mb-5 text-5xl font-light tracking-tight text-stone-900 sm:text-6xl">
              Speed Converter
            </h1>
            <p className="text-lg font-light leading-relaxed text-stone-600">
              Convert between miles per hour (mph), kilometers per hour (km/h), meters per second, knots, and other speed units instantly.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Quick Reference */}
        <div className="mb-12 border-l-2 border-stone-900 bg-stone-50 px-6 py-5">
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-stone-500">
            Common Conversions
          </div>
          <div className="grid gap-2 text-sm font-light text-stone-600 sm:grid-cols-2">
            <div>1 mph = 1.609 km/h</div>
            <div>1 km/h = 0.621 mph</div>
            <div>1 m/s = 3.6 km/h</div>
            <div>1 knot = 1.852 km/h</div>
          </div>
        </div>

        {/* Converter */}
        <div className="mb-24">
          <div className="rounded-sm border border-stone-200 bg-white">
            <div className="border-b border-stone-200 bg-stone-50 px-8 py-5">
              <h2 className="text-lg font-medium text-stone-900">Convert Speed Units</h2>
              <p className="mt-1 text-sm font-light text-stone-500">
                Enter a value and select the unit to convert
              </p>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-stone-700">
                  Input Value
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    step="0.01"
                    placeholder="60"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="h-12 flex-1 rounded-sm border border-stone-300 px-4 text-lg font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  <select
                    value={inputUnit}
                    onChange={(e) => setInputUnit(e.target.value as 'mph' | 'kmh' | 'ms' | 'knots')}
                    className="h-12 rounded-sm border border-stone-300 px-4 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  >
                    <option value="mph">mph (miles per hour)</option>
                    <option value="kmh">km/h (kilometers per hour)</option>
                    <option value="ms">m/s (meters per second)</option>
                    <option value="knots">knots</option>
                  </select>
                </div>
              </div>

              {results && (
                <div>
                  <div className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
                    Converted Values
                  </div>
                  <div className="space-y-3">
                    {/* MPH */}
                    <div className="flex items-center justify-between border-l-2 border-stone-900 bg-stone-50 px-5 py-4">
                      <div>
                        <div className="text-sm font-light text-stone-500">Miles per hour</div>
                        <div className="mt-1 text-xs font-light text-stone-400">mph</div>
                      </div>
                      <div className="text-3xl font-light tabular-nums text-stone-900">
                        {results.mph.toFixed(3)}
                      </div>
                    </div>

                    {/* KM/H */}
                    <div className="flex items-center justify-between border-l-2 border-stone-900 bg-stone-50 px-5 py-4">
                      <div>
                        <div className="text-sm font-light text-stone-500">Kilometers per hour</div>
                        <div className="mt-1 text-xs font-light text-stone-400">km/h</div>
                      </div>
                      <div className="text-3xl font-light tabular-nums text-stone-900">
                        {results.kmh.toFixed(3)}
                      </div>
                    </div>

                    {/* M/S */}
                    <div className="flex items-center justify-between border-l border-stone-400 bg-stone-50 px-5 py-4">
                      <div>
                        <div className="text-sm font-light text-stone-500">Meters per second</div>
                        <div className="mt-1 text-xs font-light text-stone-400">m/s</div>
                      </div>
                      <div className="text-3xl font-light tabular-nums text-stone-900">
                        {results.ms.toFixed(3)}
                      </div>
                    </div>

                    {/* Knots */}
                    <div className="flex items-center justify-between border-l border-stone-400 bg-stone-50 px-5 py-4">
                      <div>
                        <div className="text-sm font-light text-stone-500">Knots</div>
                        <div className="mt-1 text-xs font-light text-stone-400">kn</div>
                      </div>
                      <div className="text-3xl font-light tabular-nums text-stone-900">
                        {results.knots.toFixed(3)}
                      </div>
                    </div>

                    {/* Feet per second */}
                    <div className="flex items-center justify-between border-l border-stone-400 bg-stone-50 px-5 py-4">
                      <div>
                        <div className="text-sm font-light text-stone-500">Feet per second</div>
                        <div className="mt-1 text-xs font-light text-stone-400">ft/s</div>
                      </div>
                      <div className="text-3xl font-light tabular-nums text-stone-900">
                        {results.fps.toFixed(3)}
                      </div>
                    </div>

                    {/* Mach */}
                    <div className="flex items-center justify-between border-l border-stone-400 bg-stone-50 px-5 py-4">
                      <div>
                        <div className="text-sm font-light text-stone-500">Mach (approx)</div>
                        <div className="mt-1 text-xs font-light text-stone-400">at sea level</div>
                      </div>
                      <div className="text-3xl font-light tabular-nums text-stone-900">
                        {results.mach.toFixed(5)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Conversion Tables */}
        <div className="mb-24">
          <h2 className="mb-6 text-2xl font-light text-stone-900">MPH to KM/H Conversion Table</h2>
          <div className="overflow-hidden rounded-sm border border-stone-200">
            <table className="w-full">
              <thead className="bg-stone-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-widest text-stone-700">
                    Miles per hour (mph)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-widest text-stone-700">
                    Kilometers per hour (km/h)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((mph) => (
                  <tr key={mph} className="bg-white">
                    <td className="px-6 py-3 font-mono text-sm font-light text-stone-900">{mph}</td>
                    <td className="px-6 py-3 font-mono text-sm font-light text-stone-900">
                      {(mph * 1.60934).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="mb-6 text-2xl font-light text-stone-900">KM/H to MPH Conversion Table</h2>
          <div className="overflow-hidden rounded-sm border border-stone-200">
            <table className="w-full">
              <thead className="bg-stone-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-widest text-stone-700">
                    Kilometers per hour (km/h)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-widest text-stone-700">
                    Miles per hour (mph)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120].map((kmh) => (
                  <tr key={kmh} className="bg-white">
                    <td className="px-6 py-3 font-mono text-sm font-light text-stone-900">{kmh}</td>
                    <td className="px-6 py-3 font-mono text-sm font-light text-stone-900">
                      {(kmh * 0.621371).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Educational Content */}
        <div className="border-t border-stone-200 pt-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-5 text-xl font-light text-stone-900">
                Understanding Speed Units
              </h2>
              <div className="space-y-4 text-sm font-light leading-relaxed text-stone-600">
                <p>
                  <strong className="font-medium text-stone-900">Miles per hour (mph)</strong> is primarily used in the United States and United Kingdom for road speeds and vehicle speedometers.
                </p>
                <p>
                  <strong className="font-medium text-stone-900">Kilometers per hour (km/h)</strong> is the most widely used unit globally, standard in most countries for road traffic and general speed measurements.
                </p>
                <p>
                  <strong className="font-medium text-stone-900">Meters per second (m/s)</strong> is the SI unit of speed, commonly used in physics and scientific contexts.
                </p>
                <p>
                  <strong className="font-medium text-stone-900">Knots</strong> are used primarily in maritime and aviation contexts. One knot equals one nautical mile per hour.
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-5 text-xl font-light text-stone-900">
                Conversion Formulas
              </h2>
              <div className="space-y-3">
                <div className="rounded-sm border border-stone-200 bg-white p-4">
                  <div className="text-sm font-medium text-stone-900">MPH to KM/H</div>
                  <div className="mt-2 font-mono text-sm font-light text-stone-600">
                    km/h = mph × 1.60934
                  </div>
                </div>
                <div className="rounded-sm border border-stone-200 bg-white p-4">
                  <div className="text-sm font-medium text-stone-900">KM/H to MPH</div>
                  <div className="mt-2 font-mono text-sm font-light text-stone-600">
                    mph = km/h × 0.621371
                  </div>
                </div>
                <div className="rounded-sm border border-stone-200 bg-white p-4">
                  <div className="text-sm font-medium text-stone-900">M/S to KM/H</div>
                  <div className="mt-2 font-mono text-sm font-light text-stone-600">
                    km/h = m/s × 3.6
                  </div>
                </div>
                <div className="rounded-sm border border-stone-200 bg-white p-4">
                  <div className="text-sm font-medium text-stone-900">Knots to KM/H</div>
                  <div className="mt-2 font-mono text-sm font-light text-stone-600">
                    km/h = knots × 1.852
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
