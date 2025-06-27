
import React from 'react';
import { Youtube, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white relative overflow-hidden px-4 py-12">
      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
          alt="AltPath.ai Logo Watermark" 
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-xl font-medium text-white mb-2">AltPath.ai</h3>
          <p className="text-neutral-300 text-sm">Elegant Pragmatism for Life Design</p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-8 mb-8">
          <button
            onClick={() => window.open('https://www.youtube.com/@AltPathAI', '_blank')}
            className="text-neutral-300 hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </button>
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="text-neutral-300 hover:text-white transition-colors"
            aria-label="Schedule Meeting"
          >
            <Calendar className="w-6 h-6" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-neutral-700 pt-6">
          <p className="text-neutral-400 text-xs">
            © 2024 AltPath.ai. Solve problems first. Beautify answers second.
          </p>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-6">
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="w-full bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Schedule Meet & Greet →
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
