
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, Sprout, ArrowDown, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-neutral-50 flex items-center justify-center relative overflow-hidden with-watermark">
      {/* Enhanced SVG Animation */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
        <div className="relative w-24 h-24">
          <Wrench 
            size={96} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent-600" 
            style={{
              animation: 'fadeInOut 4s infinite',
              animationDelay: '0s'
            }}
          />
          <Sprout 
            size={96} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent-600" 
            style={{
              animation: 'fadeInOut 4s infinite',
              animationDelay: '1.3s'
            }}
          />
          <svg 
            width="96" 
            height="96" 
            viewBox="0 0 24 24" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent-600"
            style={{
              animation: 'fadeInOut 4s infinite',
              animationDelay: '2.6s'
            }}
          >
            <path 
              d="M7 11V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4m-3 0V7M7 11v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8M7 11h10" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-serif font-light text-neutral-800 mb-10 tracking-tight leading-tight animate-fade-in">
          <span className="block">Solve problems first.</span>
          <span className="block"><em className="text-accent-600 bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">Beautify answers second.</em></span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-600 mb-16 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="block mb-4">Pragmatism delivers working solutions;</span>
          <span className="block">Aesthetics refines them into personal joy.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={() => scrollToSection('two-lens')}
            size="lg"
            className="bg-accent-600 hover:bg-accent-500 text-white px-8 py-4 text-lg font-medium rounded-md transition-all hover:shadow-lg hover:scale-105 group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Explore the Philosophy
          </Button>
          <Button
            onClick={() => scrollToSection('bring-it-home')}
            variant="outline"
            size="lg"
            className="border-accent-600 text-accent-600 hover:bg-accent-50 px-8 py-4 text-lg font-medium rounded-md transition-all hover:shadow-lg hover:border-accent-500"
          >
            See the Vision
          </Button>
        </div>

        {/* Enhanced CTA area */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-accent-200 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <p className="text-neutral-700 text-lg mb-4">
            <strong>Join the movement:</strong> Where practical solutions meet beautiful experiences
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-neutral-600">
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full">Problem-solving</span>
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full">Aesthetic design</span>
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full">Personal paths</span>
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full">AI-guided</span>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('two-lens')}
          className="animate-bounce text-accent-600 hover:text-accent-500 transition-colors p-2 rounded-full hover:bg-accent-50"
          aria-label="Scroll to next section"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      <style>{`
        @keyframes fadeInOut {
          0%, 25% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          25.01%, 75% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          75.01%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
