
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleExploreFramework = () => {
    document.getElementById('what-and-why')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWorkshop = () => {
    window.open('https://calendly.com/altpathai-vki1/30min', '_blank', 'width=800,height=600');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse">
            <svg width="400" height="300" viewBox="0 0 400 300" className="text-slate-400">
              {/* Simple morphing house to bike to garden animation placeholder */}
              <rect x="150" y="120" width="100" height="80" fill="none" stroke="currentColor" strokeWidth="2" className="animate-[fade-in_3s_ease-in-out_infinite]" />
              <polygon points="150,120 200,80 250,120" fill="none" stroke="currentColor" strokeWidth="2" className="animate-[fade-in_3s_ease-in-out_infinite]" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Logo prominently displayed */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <img 
              src="/lovable-uploads/ad2fe661-0e6d-4408-a579-797fa3d62c10.png" 
              alt="AltPath.ai Logo" 
              className="w-32 h-32 mx-auto mb-6"
            />
            <div className="text-3xl font-bold text-teal-900">AltPath.ai</div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-serif font-light text-slate-800 mb-6 tracking-tight">
          Elegant Pragmatism
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
          Craft solutions as practical as they are delightful—then prove each flourish works.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            onClick={handleExploreFramework}
            size="lg"
            className="bg-teal-700 hover:bg-teal-600 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Explore the Framework
          </Button>
          <Button
            onClick={handleWorkshop}
            size="lg"
            variant="outline"
            className="border-2 border-teal-300 text-teal-700 hover:bg-teal-700 hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Start a Two-Lens Workshop
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
