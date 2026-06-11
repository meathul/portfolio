import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ isOpen, imageSrc, imageAlt, onClose }) {
  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key press to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors focus:outline-none z-50"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={36} strokeWidth={1.5} />
      </button>

      {/* Main Image Container */}
      <div 
        className="relative max-w-5xl max-h-[85vh] mx-4 flex flex-col items-center select-none"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
      >
        <img
          src={imageSrc}
          alt={imageAlt || 'Expanded portfolio view'}
          className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl animate-zoomIn"
        />
        
        {/* Caption */}
        {imageAlt && (
          <p className="mt-4 text-sm font-light tracking-widest text-gray-300 uppercase text-center">
            {imageAlt}
          </p>
        )}
      </div>
    </div>
  );
}
