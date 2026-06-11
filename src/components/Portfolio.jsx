import React, { useState } from 'react';

const portfolioItems = [
  { id: 1, category: 'Editorial', aspect: 'portrait' },
  { id: 2, category: 'Commercial', aspect: 'portrait' },
  { id: 3, category: 'Editorial', aspect: 'square' },
  { id: 4, category: 'Fitness', aspect: 'portrait' },
  { id: 5, category: 'Commercial', aspect: 'square' },
  { id: 6, category: 'Editorial', aspect: 'portrait' },
  { id: 7, category: 'Fitness', aspect: 'square' },
  { id: 8, category: 'Commercial', aspect: 'portrait' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Editorial', 'Commercial', 'Fitness'];

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="w-full py-24 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">PORTFOLIO</h2>
          <p className="text-sm font-light tracking-wide text-gray-600">
            Selection of recent work across fashion, commercial and editorial projects
          </p>
        </div>

        {/* Filter */}
        <div className="flex space-x-6 mb-12 border-b border-gray-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-sm font-light tracking-wider pb-2 border-b-2 transition-colors duration-300 ${
                activeFilter === cat
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400 hover:text-gray-600:text-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative image-placeholder overflow-hidden cursor-pointer bg-gradient-to-br from-gray-300 to-gray-400 transition-transform duration-300 ${
                item.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform group-hover:scale-105 transition-transform duration-300 w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
