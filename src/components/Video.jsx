import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="w-full py-24 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">REEL</h2>
          <p className="text-sm font-light tracking-wide text-gray-600">
            Professional showreel featuring recent work
          </p>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-sm overflow-hidden bg-black group cursor-pointer">
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />

          {/* Play Button */}
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 z-10"
          >
            <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play
                size={32}
                className="text-white ml-1"
                fill="white"
              />
            </div>
          </div>

          {/* Video Info on Hover */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm font-light tracking-wide">
              Professional Showreel 2024
            </p>
            <p className="text-gray-300 text-xs font-light tracking-widest mt-2">
              3:45 MIN
            </p>
          </div>
        </div>

        {/* Video Info */}
        <div className="mt-12 text-center">
          <p className="text-sm font-light text-gray-600 max-w-2xl mx-auto">
            Featuring work from major campaigns, editorial shoots, and runway appearances
          </p>
        </div>
      </div>
    </section>
  );
}
