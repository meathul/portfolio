import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

function VideoPlayer({ src, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Video play failed:", err);
        setHasError(true);
      });
    }
  };

  return (
    <div className="w-full max-w-[320px] aspect-[9/16] rounded-md overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 to-black relative group border border-white/10">
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
          <span className="text-[11px] font-light tracking-widest text-white uppercase opacity-75">
            {title}
          </span>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            onClick={togglePlay}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Controls Overlay */}
          <div 
            onClick={togglePlay}
            className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 cursor-pointer transition-opacity duration-300 ${
              isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
            }`}
          >
            <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transform scale-100 hover:scale-105 transition-transform duration-300">
              {isPlaying ? (
                <Pause size={24} className="text-white" fill="white" />
              ) : (
                <Play size={24} className="text-white ml-1" fill="white" />
              )}
            </div>
          </div>
          
          {/* Label at bottom */}
          <div className="absolute bottom-4 left-4 right-4 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60">
            <p className="text-[10px] font-light tracking-widest text-white uppercase bg-black bg-opacity-40 backdrop-blur-sm px-2 py-1 rounded-sm w-fit">
              {title}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function Video() {
  return (
    <section id="video" className="w-full py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">REELS</h2>
        </div>

        {/* Video Grid - Updated to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto justify-items-center">
          <VideoPlayer 
            src="/images/reel-1.mp4" 
            title="REEL 01" 
          />
          <VideoPlayer 
            src="/images/reel-2.mp4" 
            title="REEL 02" 
          />
          <VideoPlayer 
            src="/images/reel-3.mp4" 
            title="REEL 03" 
          />
        </div>


      </div>
    </section>
  );
}
