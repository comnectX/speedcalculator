'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type CalcMode = 'pace' | 'time' | 'distance';

export default function RunningPaceCalculator() {
  const [mode, setMode] = useState<CalcMode>('pace');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [pace, setPace] = useState('');
  const [distanceUnit, setDistanceUnit] = useState<'km' | 'mi'>('km');

  const [result, setResult] = useState<{
    pace?: { minkm: string; minmi: string };
    speed?: { kmh: number; mph: number };
    time?: string;
    distance?: { km: number; mi: number };
    splits?: { km1: string; km5: string; km10: string; mi1: string };
    calories?: number;
  } | null>(null);

  const calculatePace = () => {
    const d = parseFloat(distance);
    const t = parseFloat(time); // in minutes
    if (!d || !t) return;

    const km = distanceUnit === 'km' ? d : d * 1.60934;
    const mi = distanceUnit === 'mi' ? d : d / 1.60934;
    const seconds = t * 60;

    const pacePerKm = seconds / km;
    const pacePerMi = seconds / mi;

    const formatPace = (sec: number) => {
      const min = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${min}:${s.toString().padStart(2, '0')}`;
    };

    const kmh = km / (seconds / 3600);
    const mph = mi / (seconds / 3600);

    setResult({
      pace: {
        minkm: formatPace(pacePerKm),
        minmi: formatPace(pacePerMi),
      },
      speed: { kmh, mph },
      splits: {
        km1: formatPace(pacePerKm),
        km5: formatPace(pacePerKm * 5),
        km10: formatPace(pacePerKm * 10),
        mi1: formatPace(pacePerMi),
      },
      calories: Math.round(km * 60),
    });
  };

  const calculateTime = () => {
    const d = parseFloat(distance);
    const p = parseFloat(pace); // pace in minutes per km or mi
    if (!d || !p) return;

    const km = distanceUnit === 'km' ? d : d * 1.60934;
    const totalMinutes = p * (distanceUnit === 'km' ? d : km);

    const formatTime = (min: number) => {
      const h = Math.floor(min / 60);
      const m = Math.floor(min % 60);
      const s = Math.floor((min % 1) * 60);
      if (h > 0) return `${h}h ${m}m ${s}s`;
      return `${m}m ${s}s`;
    };

    setResult({
      time: formatTime(totalMinutes),
      calories: Math.round(km * 60),
    });
  };

  const calculateDistance = () => {
    const t = parseFloat(time); // in minutes
    const p = parseFloat(pace); // pace in min/km
    if (!t || !p) return;

    const km = t / p;
    const mi = km / 1.60934;

    setResult({
      distance: { km, mi },
      calories: Math.round(km * 60),
    });
  };

  const calculate = () => {
    if (mode === 'pace') calculatePace();
    else if (mode === 'time') calculateTime();
    else calculateDistance();
  };

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
              Running Performance Tool
            </p>
            <h1 className="mb-5 text-5xl font-light tracking-tight text-stone-900 sm:text-6xl">
              Running Pace Calculator
            </h1>
            <p className="text-lg font-light leading-relaxed text-stone-600">
              Calculate running pace, time, and distance. Get split times and performance metrics for training and race planning.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Mode Selector */}
        <div className="mb-8">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
            Select Calculation Mode
          </div>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => { setMode('pace'); setResult(null); }}
              className={`border px-4 py-3 text-sm font-medium transition-colors ${
                mode === 'pace'
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900'
              }`}
            >
              Calculate Pace
            </button>
            <button
              onClick={() => { setMode('time'); setResult(null); }}
              className={`border px-4 py-3 text-sm font-medium transition-colors ${
                mode === 'time'
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900'
              }`}
            >
              Calculate Time
            </button>
            <button
              onClick={() => { setMode('distance'); setResult(null); }}
              className={`border px-4 py-3 text-sm font-medium transition-colors ${
                mode === 'distance'
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900'
              }`}
            >
              Calculate Distance
            </button>
          </div>
        </div>

        {/* Calculator */}
        <div className="mb-24">
          <div className="rounded-sm border border-stone-200 bg-white">
            <div className="border-b border-stone-200 bg-stone-50 px-8 py-5">
              <h2 className="text-lg font-medium text-stone-900">
                {mode === 'pace' && 'Calculate Running Pace'}
                {mode === 'time' && 'Calculate Running Time'}
                {mode === 'distance' && 'Calculate Running Distance'}
              </h2>
              <p className="mt-1 text-sm font-light text-stone-500">
                {mode === 'pace' && 'Enter distance and time to find your pace'}
                {mode === 'time' && 'Enter distance and pace to predict your time'}
                {mode === 'distance' && 'Enter time and pace to calculate distance covered'}
              </p>
            </div>

            <div className="p-8">
              <div className="mb-8 space-y-6">
                {/* Distance (hidden when calculating distance) */}
                {mode !== 'distance' && (
                  <div>
                    <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-stone-700">
                      Distance
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        step="0.1"
                        placeholder="10"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        className="h-11 flex-1 rounded-sm border border-stone-300 px-3 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      />
                      <select
                        value={distanceUnit}
                        onChange={(e) => setDistanceUnit(e.target.value as 'km' | 'mi')}
                        className="h-11 rounded-sm border border-stone-300 px-3 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      >
                        <option value="km">kilometers</option>
                        <option value="mi">miles</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Time (hidden when calculating time) */}
                {mode !== 'time' && (
                  <div>
                    <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-stone-700">
                      Time (minutes)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      placeholder="60"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="h-11 w-full rounded-sm border border-stone-300 px-3 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                    />
                    <p className="mt-2 text-xs font-light text-stone-500">
                      Total time in decimal minutes (e.g., 45.5 = 45min 30sec)
                    </p>
                  </div>
                )}

                {/* Pace (hidden when calculating pace) */}
                {mode !== 'pace' && (
                  <div>
                    <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-stone-700">
                      Pace (min/km or min/mi)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      placeholder="5.5"
                      value={pace}
                      onChange={(e) => setPace(e.target.value)}
                      className="h-11 w-full rounded-sm border border-stone-300 px-3 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                    />
                    <p className="mt-2 text-xs font-light text-stone-500">
                      Pace in decimal minutes per {distanceUnit === 'km' ? 'kilometer' : 'mile'}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={calculate}
                className="h-11 w-full rounded-sm bg-stone-900 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-stone-800"
              >
                Calculate
              </button>

              {result && (
                <div className="mt-10 space-y-6">
                  {/* Pace Results */}
                  {result.pace && (
                    <div>
                      <div className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
                        Running Pace
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="border-l-2 border-stone-900 bg-stone-50 px-5 py-4">
                          <div className="text-sm font-light text-stone-500">Per Kilometer</div>
                          <div className="mt-1 text-3xl font-light tabular-nums text-stone-900">
                            {result.pace.minkm}
                          </div>
                          <div className="mt-1 text-xs font-light text-stone-400">min/km</div>
                        </div>
                        <div className="border-l-2 border-stone-900 bg-stone-50 px-5 py-4">
                          <div className="text-sm font-light text-stone-500">Per Mile</div>
                          <div className="mt-1 text-3xl font-light tabular-nums text-stone-900">
                            {result.pace.minmi}
                          </div>
                          <div className="mt-1 text-xs font-light text-stone-400">min/mi</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Speed */}
                  {result.speed && (
                    <div>
                      <div className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
                        Speed
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="border-l border-stone-400 bg-stone-50 px-5 py-4">
                          <div className="text-sm font-light text-stone-500">km/h</div>
                          <div className="mt-1 text-2xl font-light tabular-nums text-stone-900">
                            {result.speed.kmh.toFixed(2)}
                          </div>
                        </div>
                        <div className="border-l border-stone-400 bg-stone-50 px-5 py-4">
                          <div className="text-sm font-light text-stone-500">mph</div>
                          <div className="mt-1 text-2xl font-light tabular-nums text-stone-900">
                            {result.speed.mph.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Time Result */}
                  {result.time && (
                    <div className="border-l-2 border-stone-900 bg-stone-50 px-5 py-4">
                      <div className="text-xs font-medium uppercase tracking-widest text-stone-500">
                        Total Time
                      </div>
                      <div className="mt-2 text-4xl font-light tabular-nums text-stone-900">
                        {result.time}
                      </div>
                    </div>
                  )}

                  {/* Distance Result */}
                  {result.distance && (
                    <div>
                      <div className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
                        Distance Covered
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="border-l-2 border-stone-900 bg-stone-50 px-5 py-4">
                          <div className="text-sm font-light text-stone-500">Kilometers</div>
                          <div className="mt-1 text-3xl font-light tabular-nums text-stone-900">
                            {result.distance.km.toFixed(2)}
                          </div>
                        </div>
                        <div className="border-l-2 border-stone-900 bg-stone-50 px-5 py-4">
                          <div className="text-sm font-light text-stone-500">Miles</div>
                          <div className="mt-1 text-3xl font-light tabular-nums text-stone-900">
                            {result.distance.mi.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Split Times */}
                  {result.splits && (
                    <div>
                      <div className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
                        Split Predictions
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="border-l border-stone-300 bg-stone-50 px-4 py-3">
                          <span className="text-sm font-light text-stone-600">1 km</span>
                          <span className="ml-auto font-mono text-sm font-medium tabular-nums text-stone-900"> {result.splits.km1}</span>
                        </div>
                        <div className="border-l border-stone-300 bg-stone-50 px-4 py-3">
                          <span className="text-sm font-light text-stone-600">1 mile</span>
                          <span className="ml-auto font-mono text-sm font-medium tabular-nums text-stone-900"> {result.splits.mi1}</span>
                        </div>
                        <div className="border-l border-stone-300 bg-stone-50 px-4 py-3">
                          <span className="text-sm font-light text-stone-600">5 km</span>
                          <span className="ml-auto font-mono text-sm font-medium tabular-nums text-stone-900"> {result.splits.km5}</span>
                        </div>
                        <div className="border-l border-stone-300 bg-stone-50 px-4 py-3">
                          <span className="text-sm font-light text-stone-600">10 km</span>
                          <span className="ml-auto font-mono text-sm font-medium tabular-nums text-stone-900"> {result.splits.km10}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Calories */}
                  {result.calories && (
                    <div className="border-l border-stone-400 bg-stone-50 px-5 py-4">
                      <div className="text-sm font-light text-stone-500">Estimated Calories</div>
                      <div className="mt-1 text-2xl font-light tabular-nums text-stone-900">
                        {result.calories} <span className="text-base text-stone-500">kcal</span>
                      </div>
                      <div className="mt-1 text-xs font-light text-stone-400">Based on 60 kcal/km average</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Sections */}
        <div className="border-t border-stone-200 pt-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-5 text-xl font-light text-stone-900">
                Understanding Running Pace
              </h2>
              <div className="space-y-4 text-sm font-light leading-relaxed text-stone-600">
                <p>
                  Running pace is the inverse of speed, measuring time per unit distance rather than distance per unit time. It's the preferred metric for runners as it directly relates to race finish times.
                </p>
                <p>
                  For example, a 5:00 min/km pace means you run each kilometer in 5 minutes. Over a 10 km race, this translates to a 50-minute finish time.
                </p>
                <p className="italic">
                  Common race paces: 5K (4:00-6:00 min/km), 10K (4:30-6:30 min/km), Half Marathon (5:00-7:00 min/km), Marathon (5:30-7:30 min/km).
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-5 text-xl font-light text-stone-900">
                Training Applications
              </h2>
              <div className="space-y-3">
                <div className="border-l border-stone-300 pl-4">
                  <div className="text-sm font-medium text-stone-900">Race Planning</div>
                  <div className="mt-1 text-sm font-light text-stone-500">
                    Calculate target paces for different race distances to set realistic goals
                  </div>
                </div>
                <div className="border-l border-stone-300 pl-4">
                  <div className="text-sm font-medium text-stone-900">Training Zones</div>
                  <div className="mt-1 text-sm font-light text-stone-500">
                    Determine appropriate paces for easy runs, tempo runs, and interval training
                  </div>
                </div>
                <div className="border-l border-stone-300 pl-4">
                  <div className="text-sm font-medium text-stone-900">Progress Tracking</div>
                  <div className="mt-1 text-sm font-light text-stone-500">
                    Monitor pace improvements over time to measure fitness gains
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
