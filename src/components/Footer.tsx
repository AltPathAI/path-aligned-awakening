
import React from 'react';
import { Youtube, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white relative overflow-hidden px-4 py-16 pb-32">
      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="/lovable-uploads/b3d627f5-06f2-4d97-bf68-8e1eb3889a3d.png" 
          alt="AltPath.ai Logo Watermark" 
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="relative z-10 max-w-sm mx-auto text-center">
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-white mb-3">AltPath.ai</h3>
          <p className="text-neutral-300 text-base">Elegant Pragmatism for Life Design</p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-12 mb-12">
          <button
            onClick={() => window.open('https://www.youtube.com/@AltPathAI', '_blank')}
            className="text-neutral-300 hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-8 h-8" />
          </button>
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="text-neutral-300 hover:text-white transition-colors"
            aria-label="Schedule Meeting"
          >
            <Calendar className="w-8 h-8" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-neutral-700 pt-8">
          <p className="text-neutral-400 text-sm">
            © 2024 AltPath.ai. Solve problems first. Beautify answers second.
          </p>
        </div>

        {/* Fixed bottom CTA */}
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="w-full bg-brand-green hover:bg-green-700 text-white px-6 py-4 rounded-xl font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2 text-lg"
          >
            <Calendar className="w-5 h-5" />
            Schedule Meet & Greet →
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
