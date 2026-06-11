import React, { useState } from 'react';
import { Mail, Share2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="w-full py-24 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-heading">CONTACT</h2>
          <p className="text-sm font-light tracking-wide text-gray-600">
            For booking inquiries, press requests, and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-display font-light tracking-tight mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <p className="text-xs font-light tracking-widest text-gray-500 mb-2">
                    EMAIL
                  </p>
                  <a
                    href="mailto:aria@example.com"
                    className="text-sm font-light tracking-wide text-black hover:opacity-70 transition-opacity"
                  >
                    aria@example.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-light tracking-widest text-gray-500 mb-2">
                    MANAGEMENT
                  </p>
                  <p className="text-sm font-light tracking-wide text-black">
                    Elite Model Management
                  </p>
                  <p className="text-sm font-light tracking-wide text-black">
                    New York, NY
                  </p>
                </div>

                <div>
                  <p className="text-xs font-light tracking-widest text-gray-500 mb-2">
                    PHONE
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-sm font-light tracking-wide text-black hover:opacity-70 transition-opacity"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-display font-light tracking-tight mb-6">
                Social
              </h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-sm font-light tracking-wide text-black hover:opacity-70 transition-opacity flex items-center space-x-2"
                >
                  <Share2 size={18} />
                  <span>@ariachen</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs font-light tracking-widest text-gray-500 block mb-3">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-sm font-light text-black focus:outline-none focus:border-black:border-white transition-colors placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-xs font-light tracking-widest text-gray-500 block mb-3">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-sm font-light text-black focus:outline-none focus:border-black:border-white transition-colors placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-xs font-light tracking-widest text-gray-500 block mb-3">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-sm font-light text-black focus:outline-none focus:border-black:border-white transition-colors resize-none placeholder-gray-400"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                {submitted ? 'MESSAGE SENT' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
