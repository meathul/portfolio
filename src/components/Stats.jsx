import React from 'react';

const stats = [
  { label: 'HEIGHT', value: '5\'3"' },
  { label: 'BUST', value: '35"' },
  { label: 'WAIST', value: '29"' },
  { label: 'HIPS', value: '35"' },
  { label: 'SHOE SIZE', value: '40' },
  { label: 'HAIR', value: 'Black & French Balayage' },
  { label: 'EYES', value: 'Dark Brown' },
  { label: 'SKIN TONE', value: 'Wheatish' },
];

export default function Stats() {
  return (
    <section id="stats" className="w-full py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">MEASUREMENTS</h2>
          <p className="text-sm font-light tracking-wide text-gray-400">
            Professional statistics and sizing information
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border border-white/10 p-8 rounded-sm hover:border-white transition-colors duration-300 bg-white/5 backdrop-blur-md shadow-sm"
            >
              <p className="text-xs font-light tracking-widest text-gray-500 mb-3">
                {stat.label}
              </p>
              <p className="text-2xl font-display font-light tracking-tight text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
