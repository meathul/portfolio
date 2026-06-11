import React from 'react';

const works = [
  {
    id: 1,
    brand: 'LUXURY FASHION HOUSE',
    project: 'Spring/Summer Campaign 2025',
    type: 'Campaign',
    description: 'Lead model for international advertising campaign',
  },
  {
    id: 2,
    brand: 'VOGUE MAGAZINE',
    project: 'Editorial Feature',
    type: 'Editorial',
    description: 'Cover and 12-page editorial spread',
  },
  {
    id: 3,
    brand: 'PARIS FASHION WEEK',
    project: 'Runway Show',
    type: 'Runway',
    description: 'Opened show for renowned designer',
  },
  {
    id: 4,
    brand: 'PREMIUM BEAUTY BRAND',
    project: 'Global Campaign',
    type: 'Campaign',
    description: 'Digital and print advertising campaign',
  },
  {
    id: 5,
    brand: 'HARPER\'S BAZAAR',
    project: 'Editorial Shoot',
    type: 'Editorial',
    description: 'Fashion editorial and interview feature',
  },
  {
    id: 6,
    brand: 'LUXURY RETAIL',
    project: 'In-Store Campaign',
    type: 'Campaign',
    description: 'Window displays and promotional materials',
  },
];

export default function Work() {
  return (
    <section id="work" className="w-full py-24 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">WORK & EXPERIENCE</h2>
          <p className="text-sm font-light tracking-wide text-gray-600">
            Recent campaigns, editorial features, and runway appearances
          </p>
        </div>

        {/* Work List */}
        <div className="space-y-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="group border-b border-gray-200 pb-8 hover:pb-8 transition-all duration-300 last:border-b-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                {/* Brand */}
                <div className="md:col-span-1">
                  <p className="text-xs font-light tracking-widest text-gray-500 mb-1">
                    BRAND
                  </p>
                  <p className="text-sm font-light tracking-wide text-black">
                    {work.brand}
                  </p>
                </div>

                {/* Project */}
                <div className="md:col-span-1">
                  <p className="text-xs font-light tracking-widest text-gray-500 mb-1">
                    PROJECT
                  </p>
                  <p className="text-sm font-light tracking-wide text-black">
                    {work.project}
                  </p>
                </div>

                {/* Type */}
                <div className="md:col-span-1">
                  <p className="text-xs font-light tracking-widest text-gray-500 mb-1">
                    TYPE
                  </p>
                  <p className="text-sm font-light tracking-wide text-black">
                    {work.type}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-1">
                  <p className="text-xs font-light text-gray-600">
                    {work.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
