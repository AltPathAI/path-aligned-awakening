
import React from 'react';

const ConvivialElegance = () => {
  return (
    <section className="py-24 bg-stone-100 relative">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-800/80 to-amber-800/60"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <blockquote className="text-4xl md:text-5xl font-serif text-white leading-relaxed mb-8">
          "Maintenance becomes celebration when we do it together."
        </blockquote>
        
        <div className="text-lg text-stone-200 space-y-2">
          <p>Mural repaint days • Tool-library swaps • Rooftop harvest suppers</p>
        </div>
      </div>
    </section>
  );
};

export default ConvivialElegance;
