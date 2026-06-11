import React from 'react';

const works = [
  {
    id: 1,
    brand: 'Swayamvara',
    project: 'Hoarding Campaign',
    type: 'Fashion & Ethnic Wear',
    description: 'Featured in both solo and group photoshoots, showcasing versatile fashion and ethnic looks for outdoor advertising campaigns.',
  },
  {
    id: 2,
    brand: 'Vishnu Inn',
    project: 'Promotional Advertisement',
    type: 'Ethnic Lifestyle Promotion',
    description: 'Created and featured in a promotional video highlighting the brand’s hospitality and ambience.',
  },
  {
    id: 3,
    brand: 'Argan Women’s Clothing and MakeupbyMahi',
    project: 'Brand Promotion',
    type: 'Ethnic & Bridal Fashion',
    description: 'Modeled a customized Pakistani bridal look to promote the brand’s ethnic clothing collection.',
  },
  {
    id: 4,
    brand: 'Makeup with Shifa and HairbyRiz',
    project: 'Glam Makeover Collaboration',
    type: 'Soft Glam Beauty',
    description: 'Featured in an elegant soft glam makeover shoot showcasing professional makeup artistry.',
  },
  {
    id: 5,
    brand: 'Khulood',
    project: 'Arabian Glam Makeover',
    type: 'Bold Beauty & Fashion',
    description: 'Modeled a statement Arabian glam look featuring premium Arabian beauty products and styling.',
  },
  {
    id: 6,
    brand: 'Zezora Unisex Salon',
    project: 'Promotional Collaboration',
    type: 'Transformation & Beauty',
    description: 'Participated in a makeover and transformation campaign to promote the salon’s services.',
  },
  {
    id: 7,
    brand: 'Ranganarayan & Sachuzz Makeover',
    project: 'Bridal Makeover & Photoshoot',
    type: 'South Indian Ethnic Bridal',
    description: 'Featured as a South Indian bride in a professional makeover and photoshoot campaign.',
  },
];

export default function Work() {
  return (
    <section id="work" className="w-full py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">WORK & EXPERIENCE</h2>
        </div>

        {/* Work List */}
        <div className="space-y-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="group border-b border-white/10 pb-8 hover:pb-8 transition-all duration-300 last:border-b-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                {/* Brand */}
                <div className="md:col-span-1">
                  <p className="text-xs font-light tracking-widest text-gray-500 mb-1">
                    BRAND
                  </p>
                  <p className="text-sm font-light tracking-wide text-white">
                    {work.brand}
                  </p>
                </div>

                {/* Project */}
                <div className="md:col-span-1">
                  <p className="text-xs font-light tracking-widest text-gray-500 mb-1">
                    PROJECT
                  </p>
                  <p className="text-sm font-light tracking-wide text-white">
                    {work.project}
                  </p>
                </div>

                {/* Type */}
                <div className="md:col-span-1">
                  <p className="text-xs font-light tracking-widest text-gray-500 mb-1">
                    TYPE
                  </p>
                  <p className="text-sm font-light tracking-wide text-white">
                    {work.type}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-1">
                  <p className="text-xs font-light text-gray-400">
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
