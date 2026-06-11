import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Share2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Portfolio', 'Digitals', 'About', 'Stats', 'Work', 'Reel', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/30 backdrop-blur-md border-b border-white/5" style={{boxShadow: hasScrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none'}}>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-display font-light tracking-wider hover:opacity-70 transition-opacity text-white"
            >
              ANJALI SHAMEER
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="navbar-link text-sm font-light tracking-wide text-white hover:opacity-70 transition-opacity duration-300"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social Icons Desktop */}
          <div className="hidden md:flex space-x-4 items-center text-white">
            <a href="https://www.instagram.com/anjalishameer/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="Instagram">
              <Share2 size={18} />
            </a>
            <a href="mailto:anjaliearatt@gmail.com" className="hover:opacity-70 transition-opacity" title="Email">
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 text-white">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t bg-black/90 border-white/10">
            <div className="pt-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block w-full text-left px-4 py-2 text-sm font-light tracking-wide text-white hover:bg-white/10"
                >
                  {link}
                </button>
              ))}
              <div className="px-4 py-2 flex space-x-4 pt-4 border-t border-white/10 text-white">
                <a href="https://www.instagram.com/anjalishameer/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="Instagram">
                  <Share2 size={18} />
                </a>
                <a href="mailto:anjaliearatt@gmail.com" className="hover:opacity-70 transition-opacity" title="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
