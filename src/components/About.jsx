import React from 'react';
import ImageWithFallback from './ImageWithFallback';

export default function About({ onImageClick }) {
  return (
    <section id="about" className="w-full py-24 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">ABOUT</h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div 
            className="cursor-pointer"
            onClick={() => onImageClick('/images/about.jpg', 'Anjali Shameer - About Profile')}
          >
            <ImageWithFallback
              src="/images/about.jpg"
              alt="Anjali Shameer About Profile"
              className="shadow-lg hover:scale-[1.02] transition-transform duration-500"
              aspect="aspect-[3/4]"
            />
          </div>

          {/* Text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-light mb-4 tracking-tight">
                Emerging Model
              </h3>
              <p className="text-sm font-light leading-relaxed text-gray-700 space-y-4">
                <span className="block">
                  Anjali Shameer is an emerging model from Kerala who gained recognition through 
                  the Miss Kerala 2025 pageant. With exceptional stage presence and overall personality, 
                  she was one of the top 3 finalists in the competition.
                </span>
                <span className="block">
                  Combining grace, confidence, and professionalism, Anjali brings a fresh perspective 
                  to the modeling industry with her unique blend of traditional values and modern appeal.
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display font-light mb-4 tracking-tight">
                Key Achievements
              </h3>
              <ul className="text-sm font-light leading-relaxed text-gray-700 space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>1st Runner-Up – Miss Kerala 2025</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>Winner – Miss Fitness Title (Miss Kerala 2025)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>Top 3 Finalist – Miss Kerala 2025 Pageant</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-xs font-light tracking-widest text-gray-500">
                From Kerala • Miss Kerala 2025 Pageant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
