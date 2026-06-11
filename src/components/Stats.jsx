import React from 'react';

const stats = [
  { label: 'HEIGHT', value: '5\'11"' },
  { label: 'BUST', value: '34"' },
  { label: 'WAIST', value: '24"' },
  { label: 'HIPS', value: '35"' },
  { label: 'SHOE SIZE', value: '8.5 US' },
  { label: 'HAIR', value: 'Dark Brown' },
  { label: 'EYES', value: 'Brown' },
  { label: 'DRESS SIZE', value: '0-2' },
];

export default function Stats() {
  return (
    <section id="stats" className="w-full py-24 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">MEASUREMENTS</h2>
          <p className="text-sm font-light tracking-wide text-gray-600">
            Professional statistics and sizing information
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border border-gray-300 p-8 rounded-sm hover:border-gray-500:border-gray-500 transition-colors duration-300 bg-white"
            >
              <p className="text-xs font-light tracking-widest text-gray-500 mb-3">
                {stat.label}
              </p>
              <p className="text-2xl font-display font-light tracking-tight text-black">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
