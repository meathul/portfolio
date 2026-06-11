import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Digitals from './components/Digitals';
import About from './components/About';
import Stats from './components/Stats';
import Work from './components/Work';
import Video from './components/Video';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import './index.css';

function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', alt: '' });

  const openLightbox = (src, alt) => {
    setLightbox({ isOpen: true, src, alt });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: '', alt: '' });
  };

  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.animation = 'fadeIn 0.8s ease-in-out';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      section.style.opacity = '0';
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-white text-black">
      <Navbar />
      <Hero onImageClick={openLightbox} />
      <Portfolio onImageClick={openLightbox} />
      <Digitals onImageClick={openLightbox} />
      <About onImageClick={openLightbox} />
      <Stats />
      <Work />
      <Video />
      <Contact />
      <Footer />
      
      <Lightbox
        isOpen={lightbox.isOpen}
        imageSrc={lightbox.src}
        imageAlt={lightbox.alt}
        onClose={closeLightbox}
      />
    </div>
  );
}

export default App;
