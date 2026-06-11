import React from 'react';
import { Share2, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-light tracking-wider mb-4">
              ANJALI SHAMEER
            </h3>
            <p className="text-sm font-light text-gray-400">
              Professional fashion model and pageant titleholder
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-light tracking-widest text-gray-300 mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm font-light text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-sm font-light text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm font-light text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-light tracking-widest text-gray-300 mb-4">
              FOLLOW
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/anjalishameer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="Instagram"
              >
                <Share2 size={18} />
              </a>
              <a
                href="mailto:anjaliearatt@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-light text-gray-400">
          <p>
            © {currentYear} Anjali Shameer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
