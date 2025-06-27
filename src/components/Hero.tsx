
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, Sprout, ArrowDown, Play, Calendar, Youtube } from 'lucide-react';
import { openSecureUrl } from '@/utils/urlValidation';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleYouTubeClick = () => {
    openSecureUrl('https://www.youtube.com/@AltPathAI');
  };

  return (
    <section id="hero" className="min-h-screen bg-neutral-50 flex items-center justify-center relative overflow-hidden px-4">
      <div className="max-w-sm mx-auto text-center relative z-10">
        {/* Logo with border - matching screenshot exactly */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-block border-2 border-accent-600 rounded-2xl p-6 mb-8">
            <img 
              src="/lovable-uploads/797c40f5-1a3e-46b6-b3e0-dd7aaac51bb0.png" 
              alt="AltPath.ai Logo" 
              className="h-20 w-20"
            />
            <div className="text-accent-600 font-medium mt-3 text-sm">AltPathAI</div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-normal text-neutral-800 mb-6 tracking-tight leading-tight animate-fade-in">
          <span className="block mb-2">Solve problems first.</span>
          <span className="block"><em className="text-accent-600 font-normal">Beautify answers second.</em></span>
        </h1>
        
        <p className="text-lg text-neutral-600 mb-16 font-light leading-relaxed animate-fade-in px-2" style={{ animationDelay: '0.3s' }}>
          <span className="block mb-2">Pragmatism delivers working solutions;</span>
          <span className="block">Aesthetics refines them into personal joy.</span>
        </p>

        {/* Action Buttons - matching screenshot spacing */}
        <div className="flex flex-col gap-4 justify-center items-center mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={handleYouTubeClick}
            className="bg-brand-green hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-xl transition-all hover:shadow-lg hover:scale-105 group w-full max-w-sm flex items-center justify-center gap-3"
          >
            <Youtube className="w-5 h-5" />
            Subscribe on YouTube
          </button>
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="bg-brand-green hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-xl transition-all hover:shadow-lg hover:scale-105 group w-full max-w-sm flex items-center justify-center gap-3"
          >
            <Calendar className="w-5 h-5" />
            Schedule Meet & Greet →
          </button>
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

        <button
          onClick={() => scrollToSection('two-lens')}
          className="animate-bounce text-accent-600 hover:text-accent-500 transition-colors p-2 rounded-full hover:bg-accent-50"
          aria-label="Scroll to next section"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
