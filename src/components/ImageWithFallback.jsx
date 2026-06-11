import React, { useState } from 'react';

export default function ImageWithFallback({ src, alt, className = '', aspect = 'aspect-[3/4]' }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm ${aspect} ${className}`}>
      {/* Pulse placeholder state while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Fallback gradient if error / file not found */}
      {hasError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex flex-col items-center justify-center p-4">
          <span className="text-[10px] font-light tracking-widest text-black opacity-40 uppercase text-center">
            {alt || 'Portfolio Image'}
          </span>
          <span className="text-[9px] font-extralight tracking-wider text-black opacity-25 mt-1">
            (Place in public/images/)
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
