import React from 'react';
import ImageWithFallback from './ImageWithFallback';

const digitals = [
  { id: 1, label: 'DIGITAL 01', aspect: 'portrait', image: '/images/digital-1.jpg' },
  { id: 2, label: 'DIGITAL 02', aspect: 'portrait', image: '/images/digital-2.jpg' },
  { id: 3, label: 'DIGITAL 03', aspect: 'portrait', image: '/images/digital-3.jpg' },
];

export default function Digitals({ onImageClick }) {
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
              <div 
                className="relative overflow-hidden rounded-sm cursor-pointer"
                onClick={() => onImageClick(item.image, `Digital - ${item.label}`)}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={`Digital - ${item.label}`}
                  aspect="aspect-[3/4]"
                  className="transform group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
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
