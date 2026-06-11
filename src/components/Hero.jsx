import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative pt-20 pb-20 bg-white overflow-hidden transition-colors duration-300"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-50 animate-float" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-40 animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Placeholder - Larger and with animation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 rounded-sm opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
            <div className="image-placeholder w-full aspect-[3/4] bg-gradient-to-br from-gray-300 via-gray-350 to-gray-400 rounded-sm shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-slideUp" />
            <div className="absolute inset-0 rounded-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Text Content - Much Larger */}
          <div className="space-y-10 lg:space-y-12">
            {/* Main Heading */}
            <div className="space-y-6 animate-slideUp-delayed-1">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-light tracking-tighter leading-none">
                <span className="block text-black">ANJALI</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">SHAMEER</span>
              </h1>
              <div className="w-20 h-1 bg-black" />
            </div>

            {/* Subtitle */}
            <div className="space-y-4 animate-slideUp-delayed-2">
              <p className="text-lg md:text-2xl font-light tracking-widest text-gray-700 uppercase">
                Fashion · Editorial · Commercial
              </p>
              <p className="text-sm md:text-base font-light leading-relaxed text-gray-600 max-w-lg">
                Emerging model from Kerala. 1st Runner-Up Miss Kerala 2025 & Miss Fitness Title Winner. 
                Top 3 Finalist with exceptional stage presence and professional excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-slideUp-delayed-3">
              <button
                onClick={scrollToPortfolio}
                className="btn-primary inline-flex items-center justify-center px-8 py-4 text-sm font-light tracking-widest bg-black text-white hover:bg-gray-800:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                VIEW PORTFOLIO
              </button>
              <button className="px-8 py-4 text-sm font-light tracking-widest border border-gray-400 text-gray-700 hover:bg-gray-50:bg-gray-900 transition-all duration-300 transform hover:scale-105">
                LEARN MORE
              </button>
            </div>

            {/* Professional Achievements Section */}
            <div className="pt-12 border-t border-gray-200 animate-slideUp-delayed-4">
              <div className="grid grid-cols-3 gap-6">
                {/* Achievement 1 */}
                <div className="group">
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-3 transition-opacity duration-500 blur-lg" />
                    <div className="relative bg-white border border-gray-300 p-8 h-full flex flex-col justify-between group-hover:border-black:border-white transition-all duration-300">
                      <div>
                        <div className="w-12 h-0.5 bg-black mb-6" />
                        <h3 className="text-2xl font-display font-light text-black leading-tight mb-3">1st Runner-Up</h3>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">Miss Kerala 2025 Pageant</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement 2 */}
                <div className="group">
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-3 transition-opacity duration-500 blur-lg" />
                    <div className="relative bg-white border border-gray-300 p-8 h-full flex flex-col justify-between group-hover:border-black:border-white transition-all duration-300">
                      <div>
                        <div className="w-12 h-0.5 bg-black mb-6" />
                        <h3 className="text-2xl font-display font-light text-black leading-tight mb-3">Miss Fitness Award</h3>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">Miss Kerala Pageant 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement 3 */}
                <div className="group">
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-3 transition-opacity duration-500 blur-lg" />
                    <div className="relative bg-white border border-gray-300 p-8 h-full flex flex-col justify-between group-hover:border-black:border-white transition-all duration-300">
                      <div>
                        <div className="w-12 h-0.5 bg-black mb-6" />
                        <h3 className="text-2xl font-display font-light text-black leading-tight mb-3">Brand Shoots</h3>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">Done for Several Top Brands</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs tracking-widest text-gray-500 uppercase">Scroll to explore</p>
            <div className="animate-bounce">
              <ChevronDown size={24} className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
