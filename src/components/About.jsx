import React from 'react';
import ImageWithFallback from './ImageWithFallback';

export default function About({ onImageClick }) {
  return (
    <section id="about" className="w-full py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">ABOUT</h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
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
              <h3 className="text-2xl font-display font-light mb-6 tracking-tight">
                Anjali Shameer
              </h3>
              <div className="text-sm font-light leading-relaxed text-gray-300 space-y-4">
                <p>
                  My name is Anjali Shameer, a 21-year-old model and pageant titleholder with a passion for fashion, performance, and visual storytelling.
                </p>
                <p>
                  Having worked with various makeup artists, photographers, and creative teams across both Bahrain and Kerala, I have developed the versatility to adapt seamlessly to different aesthetics, concepts, and professional environments. My experience in front of the camera has strengthened my confidence, adaptability, and ability to bring a creative vision to life.
                </p>
                <p>
                  I am also a trained classical dancer with years of experience in Bharatanatyam, Mohiniyattam, and Kuchipudi. This artistic foundation has played a significant role in shaping my poise, body language, expressions, discipline, and stage presence.
                </p>
                <p>
                  Beyond modelling, I actively participate in pageants and have had the honor of being crowned Miss Kerala 2025 – 1st Runner-Up. These experiences have enhanced my communication skills, confidence, and ability to connect with audiences both on and off the stage. I have also begun exploring video presenting and on-camera hosting, further expanding my skills within the media and entertainment industry.
                </p>
                <p>
                  Driven, adaptable, and continuously evolving, I am passionate about creating impactful visual content and collaborating with brands and creatives who value authenticity, professionalism, and strong storytelling.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-xs font-light tracking-widest text-gray-500">
                Bahrain • Kerala • Miss Kerala 2025 Pageant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
