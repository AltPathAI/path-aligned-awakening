
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Wrench, Sprout } from 'lucide-react';

const Hero = () => {
  const handleBookConsultation = () => {
    window.location.href = '/consult';
  };

  return (
    <section id="hero" className="min-h-screen bg-neutral-50 flex items-center justify-center relative overflow-hidden with-watermark">
      {/* SVG Animation - Wrench → Sprout → Chair */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
        <div className="relative w-20 h-20">
          {/* Wrench (visible 0-1s) */}
          <Wrench 
            size={80} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-300 animate-pulse" 
            style={{
              animation: 'fadeInOut 3s infinite',
              animationDelay: '0s'
            }}
          />
          {/* Sprout (visible 1-2s) */}
          <Sprout 
            size={80} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-300" 
            style={{
              animation: 'fadeInOut 3s infinite',
              animationDelay: '1s'
            }}
          />
          {/* Chair (visible 2-3s) - Using a simple SVG path for chair */}
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-300"
            style={{
              animation: 'fadeInOut 3s infinite',
              animationDelay: '2s'
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

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-serif font-light text-neutral-800 mb-10 tracking-tight leading-tight">
          <span className="block">Solve problems first.</span>
          <span className="block"><em className="text-accent-600">Beautify answers second.</em></span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-600 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          <span className="block mb-3">Pragmatism delivers working solutions;</span>
          <span className="block">Aesthetics refines them into everlasting elegance.</span>
        </p>
        
        <div className="flex justify-center">
          <Button
            onClick={handleBookConsultation}
            variant="outline"
            size="lg"
            className="btn-primary border-accent-500 text-accent-600 hover:bg-accent-50 px-8 py-4 text-lg font-medium transition-all duration-150 hover:shadow-lg rounded-lg"
          >
            <img 
              src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
              alt="AltPath.ai Logo" 
              className="glyph w-5 h-5 mr-2"
            />
            <Calendar className="w-5 h-5 mr-2" />
            Book a Consultation
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInOut {
          0%, 33.33% { opacity: 1; }
          33.34%, 66.66% { opacity: 0; }
          66.67%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
