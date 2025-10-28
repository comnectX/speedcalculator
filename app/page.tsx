'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Timer, Clock, Route } from 'lucide-react';

type CalculationMode = 'speed' | 'distance' | 'time';

const specializedTools = [
  {
    id: 'speed-converter',
    title: 'Speed Converter',
    description: 'Convert between mph, km/h, m/s, knots and more speed units',
    icon: ArrowRight,
    href: '/speed-converter',
  },
  {
    id: 'running-pace',
    title: 'Running Pace Calculator',
    description: 'Advanced running metrics with splits and training zones',
    icon: Timer,
    href: '/running-pace-calculator',
  },
];

const upcomingTools = [
  {
    id: 'cycling',
    title: 'Cycling Speed Calculator',
    description: 'Speed analysis for cycling activities',
    icon: Route,
  },
  {
    id: 'walking',
    title: 'Walking Pace Calculator',
    description: 'Walking speed and fitness tracking',
    icon: Clock,
  },
];

const speedExamples = [
  { name: 'Human walking speed', value: '5 km/h (3.1 mph)' },
  { name: 'Usain Bolt (world record)', value: '44.72 km/h (27.8 mph)' },
  { name: 'Cheetah (top speed)', value: '120 km/h (75 mph)' },
  { name: 'Highway speed limit (US)', value: '105-120 km/h (65-75 mph)' },
  { name: 'High-speed train', value: '300 km/h (186 mph)' },
  { name: 'Commercial aircraft', value: '900 km/h (560 mph)' },
  { name: 'Sound (at sea level)', value: '1,235 km/h (767 mph)' },
  { name: 'Earth\'s orbit around sun', value: '107,000 km/h (66,600 mph)' },
  { name: 'Speed of light', value: '1,079,252,848 km/h (670,616,629 mph)' },
];

export default function Home() {
  const [mode, setMode] = useState<CalculationMode>('speed');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [speed, setSpeed] = useState('');
  const [distanceUnit, setDistanceUnit] = useState<string>('km');
  const [timeUnit, setTimeUnit] = useState<'s' | 'min' | 'h'>('min');
  const [speedUnit, setSpeedUnit] = useState<string>('kmh');

  const [result, setResult] = useState<{
    value: number;
    unit: string;
    conversions?: { label: string; value: string }[];
  } | null>(null);

  const distanceUnits = [
    { value: 'mm', label: 'millimeters', toMeters: 0.001 },
    { value: 'cm', label: 'centimeters', toMeters: 0.01 },
    { value: 'm', label: 'meters', toMeters: 1 },
    { value: 'km', label: 'kilometers', toMeters: 1000 },
    { value: 'in', label: 'inches', toMeters: 0.0254 },
    { value: 'ft', label: 'feet', toMeters: 0.3048 },
    { value: 'yd', label: 'yards', toMeters: 0.9144 },
    { value: 'mi', label: 'miles', toMeters: 1609.34 },
    { value: 'nmi', label: 'nautical miles', toMeters: 1852 },
  ];

  const speedUnits = [
    { value: 'ms', label: 'm/s', toMps: 1 },
    { value: 'kmh', label: 'km/h', toMps: 1/3.6 },
    { value: 'mph', label: 'mph', toMps: 0.44704 },
    { value: 'knots', label: 'knots', toMps: 0.514444 },
    { value: 'fps', label: 'ft/s', toMps: 0.3048 },
    { value: 'kmm', label: 'km/min', toMps: 1000/60 },
  ];

  const calculate = () => {
    if (mode === 'speed') {
      const d = parseFloat(distance);
      const t = parseFloat(time);
      if (!d || !t) return;

      const distUnit = distanceUnits.find(u => u.value === distanceUnit);
      const meters = d * (distUnit?.toMeters || 1);

      let seconds = t;
      if (timeUnit === 'h') seconds = t * 3600;
      if (timeUnit === 'min') seconds = t * 60;

      const mps = meters / seconds;
      const kmh = mps * 3.6;
      const mph = mps / 0.44704;
      const knots = mps / 0.514444;

      const speedUnitData = speedUnits.find(u => u.value === speedUnit);
      const mainValue = mps / (speedUnitData?.toMps || 1);
      const mainUnit = speedUnitData?.label || 'm/s';

      setResult({
        value: mainValue,
        unit: mainUnit,
        conversions: [
          { label: 'meters per second', value: mps.toFixed(3) + ' m/s' },
          { label: 'kilometers per hour', value: kmh.toFixed(3) + ' km/h' },
          { label: 'miles per hour', value: mph.toFixed(3) + ' mph' },
          { label: 'knots', value: knots.toFixed(3) + ' knots' },
          { label: 'feet per second', value: (mps / 0.3048).toFixed(3) + ' ft/s' },
        ],
      });
    } else if (mode === 'distance') {
      const s = parseFloat(speed);
      const t = parseFloat(time);
      if (!s || !t) return;

      const speedUnitData = speedUnits.find(u => u.value === speedUnit);
      const mps = s * (speedUnitData?.toMps || 1);

      let seconds = t;
      if (timeUnit === 'h') seconds = t * 3600;
      if (timeUnit === 'min') seconds = t * 60;

      const meters = mps * seconds;

      const distUnit = distanceUnits.find(u => u.value === distanceUnit);
      const mainValue = meters / (distUnit?.toMeters || 1);
      const mainUnit = distUnit?.label || 'm';

      setResult({
        value: mainValue,
        unit: mainUnit,
        conversions: [
          { label: 'meters', value: meters.toFixed(2) + ' m' },
          { label: 'kilometers', value: (meters / 1000).toFixed(3) + ' km' },
          { label: 'miles', value: (meters / 1609.34).toFixed(3) + ' mi' },
          { label: 'feet', value: (meters / 0.3048).toFixed(2) + ' ft' },
          { label: 'yards', value: (meters / 0.9144).toFixed(2) + ' yd' },
        ],
      });
    } else if (mode === 'time') {
      const d = parseFloat(distance);
      const s = parseFloat(speed);
      if (!d || !s) return;

      const distUnit = distanceUnits.find(u => u.value === distanceUnit);
      const meters = d * (distUnit?.toMeters || 1);

      const speedUnitData = speedUnits.find(u => u.value === speedUnit);
      const mps = s * (speedUnitData?.toMps || 1);

      const seconds = meters / mps;
      const minutes = seconds / 60;
      const hours = seconds / 3600;

      let mainValue = seconds;
      let mainUnit = 's';
      if (timeUnit === 'min') { mainValue = minutes; mainUnit = 'min'; }
      if (timeUnit === 'h') { mainValue = hours; mainUnit = 'h'; }

      const formatTime = (sec: number) => {
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = Math.floor(sec % 60);
        if (h > 0) return `${h}h ${m}m ${s}s`;
        if (m > 0) return `${m}m ${s}s`;
        return `${s}s`;
      };

      setResult({
        value: mainValue,
        unit: mainUnit,
        conversions: [
          { label: 'seconds', value: seconds.toFixed(2) + ' s' },
          { label: 'minutes', value: minutes.toFixed(2) + ' min' },
          { label: 'hours', value: hours.toFixed(3) + ' h' },
          { label: 'formatted', value: formatTime(seconds) },
        ],
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-stone-500">
              Speed Analysis Tool
            </p>
            <h1 className="mb-5 text-5xl font-light tracking-tight text-stone-900 sm:text-6xl">
              Speed Calculator
            </h1>
            <p className="text-lg font-light leading-relaxed text-stone-600">
              Calculate speed, distance, or time using the fundamental relationship: <span className="font-medium italic">speed = distance / time</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Formula Overview */}
        <div className="mb-12 border-l-2 border-stone-900 bg-stone-50 px-6 py-5">
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-stone-500">
            Fundamental Equation
          </div>
          <div className="mb-4 text-2xl font-light text-stone-900">
            v = d / t
          </div>
          <div className="grid gap-3 text-sm font-light text-stone-600 sm:grid-cols-3">
            <div>
              <span className="font-medium">v</span> = velocity (speed)
            </div>
            <div>
              <span className="font-medium">d</span> = distance
            </div>
            <div>
              <span className="font-medium">t</span> = time
            </div>
          </div>
          <div className="mt-4 space-y-1 text-sm font-light text-stone-500">
            <p>Derived formulas:</p>
            <p>• d = v × t (distance = speed × time)</p>
            <p>• t = d / v (time = distance / speed)</p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="mb-8">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
            Select Calculation Mode
          </div>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => { setMode('speed'); setResult(null); }}
              className={`border px-4 py-3 text-sm font-medium transition-colors ${
                mode === 'speed'
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900'
              }`}
            >
              Find Speed
            </button>
            <button
              onClick={() => { setMode('distance'); setResult(null); }}
              className={`border px-4 py-3 text-sm font-medium transition-colors ${
                mode === 'distance'
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900'
              }`}
            >
              Find Distance
            </button>
            <button
              onClick={() => { setMode('time'); setResult(null); }}
              className={`border px-4 py-3 text-sm font-medium transition-colors ${
                mode === 'time'
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900'
              }`}
            >
              Find Time
            </button>
          </div>
        </div>

        {/* Main Calculator */}
        <div className="mb-24">
          <div className="rounded-sm border border-stone-200 bg-white">
            <div className="border-b border-stone-200 bg-stone-50 px-8 py-5">
              <h2 className="text-lg font-medium text-stone-900">
                {mode === 'speed' && 'Calculate Speed'}
                {mode === 'distance' && 'Calculate Distance'}
                {mode === 'time' && 'Calculate Time'}
              </h2>
              <p className="mt-1 text-sm font-light text-stone-500">
                {mode === 'speed' && 'Enter distance and time to find speed'}
                {mode === 'distance' && 'Enter speed and time to find distance'}
                {mode === 'time' && 'Enter distance and speed to find time'}
              </p>
            </div>

            <div className="p-8">
              <div className="mb-8 space-y-6">
                {/* Distance Input */}
                {mode !== 'distance' && (
                  <div>
                    <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-stone-700">
                      Distance
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        step="1"
                        placeholder="100"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        className="h-11 flex-1 rounded-sm border border-stone-300 px-3 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      />
                      <select
                        value={distanceUnit}
                        onChange={(e) => setDistanceUnit(e.target.value)}
                        className="h-11 rounded-sm border border-stone-300 px-3 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      >
                        {distanceUnits.map(unit => (
                          <option key={unit.value} value={unit.value}>{unit.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Time Input */}
                {mode !== 'time' && (
                  <div>
                    <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-stone-700">
                      Time
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        step="1"
                        placeholder="60"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="h-11 flex-1 rounded-sm border border-stone-300 px-3 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      />
                      <select
                        value={timeUnit}
                        onChange={(e) => setTimeUnit(e.target.value as 's' | 'min' | 'h')}
                        className="h-11 rounded-sm border border-stone-300 px-3 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      >
                        <option value="s">seconds</option>
                        <option value="min">minutes</option>
                        <option value="h">hours</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Speed Input */}
                {mode !== 'speed' && (
                  <div>
                    <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-stone-700">
                      Speed
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        step="1"
                        placeholder="10"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                        className="h-11 flex-1 rounded-sm border border-stone-300 px-3 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      />
                      <select
                        value={speedUnit}
                        onChange={(e) => setSpeedUnit(e.target.value)}
                        className="h-11 rounded-sm border border-stone-300 px-3 text-base font-light focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      >
                        {speedUnits.map(unit => (
                          <option key={unit.value} value={unit.value}>{unit.label}</option>
                        ))}
                      </select>
                    </div>
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
                <div className="mt-10">
                  <div className="mb-6 border-l-2 border-stone-900 bg-stone-50 px-5 py-4">
                    <div className="text-xs font-medium uppercase tracking-widest text-stone-500">
                      Result
                    </div>
                    <div className="mt-2 text-4xl font-light tabular-nums text-stone-900">
                      {result.value.toFixed(3)} <span className="text-2xl text-stone-500">{result.unit}</span>
                    </div>
                  </div>

                  {result.conversions && (
                    <div>
                      <div className="mb-3 text-xs font-medium uppercase tracking-widest text-stone-500">
                        Conversions
                      </div>
                      <div className="space-y-2">
                        {result.conversions.map((conv, i) => (
                          <div key={i} className="flex justify-between border-l border-stone-300 bg-stone-50 px-4 py-2">
                            <span className="text-sm font-light text-stone-600">{conv.label}</span>
                            <span className="font-mono text-sm font-medium tabular-nums text-stone-900">{conv.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Real-World Speed Examples */}
        <div className="mb-24">
          <h2 className="mb-6 text-2xl font-light text-stone-900">Common Speed Reference</h2>
          <p className="mb-6 font-light text-stone-600">
            Understanding speed in context: from human movement to the speed of light
          </p>
          <div className="space-y-2">
            {speedExamples.map((example, i) => (
              <div key={i} className="flex justify-between border-l border-stone-300 bg-stone-50 px-5 py-3">
                <span className="text-sm font-light text-stone-700">{example.name}</span>
                <span className="font-mono text-sm font-medium tabular-nums text-stone-900">{example.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Tools */}
        <div className="mb-24">
          <div className="mb-10">
            <h2 className="mb-2 text-2xl font-light text-stone-900">Specialized Calculators</h2>
            <p className="font-light text-stone-500">
              Advanced tools for specific use cases
            </p>
          </div>
          <div className="space-y-4">
            {specializedTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="group flex items-center justify-between border border-stone-200 bg-white p-6 transition-colors hover:border-stone-900"
                >
                  <div className="flex items-center gap-5">
                    <div className="rounded-sm bg-stone-900 p-2.5">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-medium text-stone-900">{tool.title}</h3>
                      <p className="mt-0.5 text-sm font-light text-stone-500">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 text-stone-400 transition-all group-hover:translate-x-1 group-hover:text-stone-900"
                    strokeWidth={1.5}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-24">
          <div className="mb-10">
            <h2 className="mb-2 text-2xl font-light text-stone-900">In Development</h2>
            <p className="font-light text-stone-500">
              Additional calculators currently in development
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {upcomingTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="border border-stone-200 bg-stone-50 p-6 opacity-60"
                >
                  <div className="mb-4 inline-flex rounded-sm bg-stone-200 p-2.5">
                    <Icon className="h-5 w-5 text-stone-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium text-stone-900">{tool.title}</h3>
                  <p className="mt-1 text-sm font-light text-stone-600">
                    {tool.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section - SEO Optimized */}
        <div className="mb-24 border-t border-stone-200 pt-16">
          <div className="mb-10">
            <h2 className="mb-2 text-2xl font-light text-stone-900">Frequently Asked Questions</h2>
            <p className="font-light text-stone-500">
              Common questions about speed calculations
            </p>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-stone-900 bg-stone-50 px-6 py-5">
              <h3 className="mb-2 font-medium text-stone-900">What is the formula for speed?</h3>
              <p className="text-sm font-light leading-relaxed text-stone-600">
                The speed formula is: <strong className="font-medium">Speed = Distance / Time</strong> (or v = d / t).
                For example, if you travel 100 kilometers in 2 hours, your speed is 100 / 2 = 50 km/h.
              </p>
            </div>
            <div className="border-l border-stone-300 bg-white px-6 py-5">
              <h3 className="mb-2 font-medium text-stone-900">How do I convert mph to km/h?</h3>
              <p className="text-sm font-light leading-relaxed text-stone-600">
                To convert miles per hour (mph) to kilometers per hour (km/h), multiply by 1.60934.
                For example: 60 mph × 1.60934 = 96.56 km/h. Use our{' '}
                <Link href="/speed-converter" className="underline">speed converter</Link> for instant conversions.
              </p>
            </div>
            <div className="border-l border-stone-300 bg-white px-6 py-5">
              <h3 className="mb-2 font-medium text-stone-900">What's the difference between speed and velocity?</h3>
              <p className="text-sm font-light leading-relaxed text-stone-600">
                Speed is a scalar quantity that measures how fast you're moving, while velocity is a vector that includes both speed and direction.
                This calculator measures speed only.
              </p>
            </div>
            <div className="border-l border-stone-300 bg-white px-6 py-5">
              <h3 className="mb-2 font-medium text-stone-900">How accurate is this speed calculator?</h3>
              <p className="text-sm font-light leading-relaxed text-stone-600">
                Our speed calculator uses precise conversion factors and formulas to provide accurate results.
                It supports 9 distance units (millimeters to nautical miles) and 6 speed units for maximum flexibility.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Notes */}
        <div className="border-t border-stone-200 pt-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-5 text-xl font-light text-stone-900">
                Understanding Speed
              </h2>
              <div className="space-y-4 text-sm font-light leading-relaxed text-stone-600">
                <p>
                  Speed is a scalar quantity that refers to how fast an object is moving. It is the rate at which an object covers distance.
                </p>
                <p>
                  Average speed is calculated by dividing the total distance traveled by the total time taken. Unlike velocity, speed does not account for direction.
                </p>
                <p className="italic">
                  Example: A car travels 150 km in 2 hours. Its average speed is 150 / 2 = 75 km/h.
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-5 text-xl font-light text-stone-900">
                Common Speed Units
              </h2>
              <div className="space-y-3">
                <div className="border-l border-stone-300 pl-4">
                  <div className="text-sm font-medium text-stone-900">Meters per second (m/s)</div>
                  <div className="mt-1 text-sm font-light text-stone-500">
                    SI unit of speed, commonly used in physics
                  </div>
                </div>
                <div className="border-l border-stone-300 pl-4">
                  <div className="text-sm font-medium text-stone-900">Kilometers per hour (km/h)</div>
                  <div className="mt-1 text-sm font-light text-stone-500">
                    Widely used for road traffic and general purposes
                  </div>
                </div>
                <div className="border-l border-stone-300 pl-4">
                  <div className="text-sm font-medium text-stone-900">Miles per hour (mph)</div>
                  <div className="mt-1 text-sm font-light text-stone-500">
                    Used primarily in the United States and United Kingdom
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
