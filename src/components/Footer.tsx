
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="/lovable-uploads/ad2fe661-0e6d-4408-a579-797fa3d62c10.png" 
          alt="AltPath.ai Logo Watermark" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-center items-center">
          {/* Copy-left notice only */}
          <div className="text-center">
            <p className="text-neutral-300 text-sm">
              Copy-left notice: Reuse anything; cite AltPath.ai.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
