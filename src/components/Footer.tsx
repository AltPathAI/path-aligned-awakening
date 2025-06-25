
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
          alt="AltPath.ai Logo Watermark" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-center items-center">
          {/* Copy-left notice only */}
          <div className="text-center">
            <p className="text-neutral-300 text-base">
              Copy-left notice: Reuse anything; cite AltPath.ai.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
