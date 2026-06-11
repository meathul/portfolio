import React from 'react';

const digitals = [
  { id: 1, label: 'FRONT', aspect: 'portrait' },
  { id: 2, label: 'SIDE', aspect: 'portrait' },
  { id: 3, label: 'PROFILE', aspect: 'portrait' },
  { id: 4, label: 'FULL BODY', aspect: 'portrait' },
  { id: 5, label: 'DETAIL', aspect: 'portrait' },
  { id: 6, label: 'MOVEMENT', aspect: 'portrait' },
];

export default function Digitals() {
  return (
    <section id="digitals" className="w-full py-24 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">DIGITALS</h2>
          <p className="text-sm font-light tracking-wide text-gray-600">
            Professional digital measurements and reference shots
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitals.map((item) => (
            <div
              key={item.id}
              className="group space-y-4"
            >
              <div className="relative image-placeholder w-full aspect-[3/4] bg-gradient-to-br from-gray-300 to-gray-400 rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
              <p className="text-xs font-light tracking-widest text-center text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
