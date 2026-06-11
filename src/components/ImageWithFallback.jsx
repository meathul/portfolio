import React, { useState } from 'react';

export default function ImageWithFallback({ src, alt, className = '', aspect = 'aspect-[3/4]' }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-sm ${aspect} ${className}`}>
      {/* Pulse placeholder state while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
      )}
      
      {/* Fallback gradient if error / file not found */}
      {hasError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black flex flex-col items-center justify-center p-4">
          <span className="text-[10px] font-light tracking-widest text-white opacity-60 uppercase text-center">
            {alt || 'Portfolio Image'}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
      )}
    </div>
  );
}
