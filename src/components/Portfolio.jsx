import React, { useState } from 'react';
import ImageWithFallback from './ImageWithFallback';

const portfolioItems = [
  { id: 1, category: 'Ethnic', aspect: 'portrait', image: '/images/portfolio-1.jpg' },
  { id: 2, category: 'Commercial', aspect: 'portrait', image: '/images/portfolio-2.jpg' },
  { id: 3, category: 'Ethnic', aspect: 'portrait', image: '/images/portfolio-3.jpg' },
  { id: 4, category: 'Fashion', aspect: 'portrait', image: '/images/portfolio-4.jpg' },
  { id: 5, category: 'Commercial', aspect: 'portrait', image: '/images/portfolio-5.jpg' },
  { id: 6, category: 'Ethnic', aspect: 'portrait', image: '/images/portfolio-6.jpg' },
  { id: 7, category: 'Fashion', aspect: 'portrait', image: '/images/portfolio-7.jpg' },
  { id: 8, category: 'Commercial', aspect: 'portrait', image: '/images/portfolio-8.jpg' },
];

export default function Portfolio({ onImageClick }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Fashion', 'Ethnic', 'Commercial'];

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="w-full py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">PORTFOLIO</h2>
          <p className="text-sm font-light tracking-wide text-gray-400">
            Selection of recent work across fashion, ethnic and commercial projects
          </p>
        </div>

        {/* Filter */}
        <div className="flex space-x-6 mb-12 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-sm font-light tracking-wider pb-2 border-b-2 transition-colors duration-300 ${
                activeFilter === cat
                  ? 'border-white text-white font-medium'
                  : 'border-transparent text-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden cursor-pointer rounded-sm"
              onClick={() => onImageClick(item.image, `${item.category} - Portfolio Shot #${item.id}`)}
            >
              <ImageWithFallback
                src={item.image}
                alt={`${item.category} Portfolio Shot ${item.id}`}
                aspect={item.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'}
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
