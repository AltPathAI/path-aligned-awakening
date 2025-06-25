
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleExploreFramework = () => {
    document.getElementById('two-lens-test')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-50 to-accent-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background - Simple SVG Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse">
            <svg width="300" height="200" viewBox="0 0 300 200" className="text-neutral-400">
              {/* House → Bike → Garden morphing animation */}
              <g className="animate-[morph_3s_ease-in-out_infinite]">
                <rect x="120" y="100" width="60" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="120,100 150,70 180,100" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="150" cy="125" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Value Proposition */}
        <h1 className="text-5xl md:text-7xl font-serif font-light text-neutral-800 mb-8 tracking-tight leading-tight">
          Live beautifully <em className="text-accent-600">because</em><br />
          beauty helps life work.
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Every choice must clear two bars: Does it work? Does it delight?
        </p>
        
        <div className="flex justify-center">
          <Button
            onClick={handleExploreFramework}
            size="lg"
            className="bg-accent-600 hover:bg-accent-500 text-white px-8 py-4 text-lg font-medium transition-all duration-150 hover:shadow-lg rounded-lg"
          >
            Explore the Framework
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
