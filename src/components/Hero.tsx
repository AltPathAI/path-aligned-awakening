
import React from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, Calendar, Wrench, Sprout } from 'lucide-react';

const Hero = () => {
  const handleYouTubeSubscribe = () => {
    window.open('https://www.youtube.com/@AltPath', '_blank');
  };

  const handleBookConsultation = () => {
    window.location.href = '/consult';
  };

  return (
    <section className="min-h-screen bg-neutral-50 flex items-center justify-center relative overflow-hidden">
      {/* SVG Animation - Wrench → Sprout → Chair */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
        <div className="group">
          <svg width="200" height="140" viewBox="0 0 200 140" className="text-neutral-300">
            {/* Wrench (0-1s) */}
            <g className="animate-[morph_3s_ease-in-out_infinite] group-hover:animate-none">
              <Wrench 
                size={80} 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 animate-[fade_3s_ease-in-out_infinite]" 
              />
            </g>
            {/* Sprout (1-2s) */}
            <g className="animate-[morph_3s_ease-in-out_infinite_1s] group-hover:animate-none">
              <Sprout 
                size={80} 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 animate-[fade_3s_ease-in-out_infinite_1s]" 
              />
            </g>
            {/* Chair (2-3s) - Using a simple SVG path for chair */}
            <g className="animate-[morph_3s_ease-in-out_infinite_2s] group-hover:animate-none">
              <svg 
                width="80" 
                height="80" 
                viewBox="0 0 24 24" 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 animate-[fade_3s_ease-in-out_infinite_2s]"
              >
                <path 
                  d="M7 11V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4m-3 0V7M7 11v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8M7 11h10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                />
              </svg>
            </g>
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-serif font-light text-neutral-800 mb-8 tracking-tight leading-tight">
          Solve problems first. <em className="text-accent-600">Beautify answers second.</em>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Pragmatism delivers working solutions; aesthetics refines them into everlasting elegance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleYouTubeSubscribe}
            size="lg"
            className="bg-accent-600 hover:bg-accent-500 text-white px-8 py-4 text-lg font-medium transition-all duration-150 hover:shadow-lg rounded-lg"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe on YouTube
          </Button>
          <Button
            onClick={handleBookConsultation}
            variant="outline"
            size="lg"
            className="border-accent-500 text-accent-600 hover:bg-accent-50 px-8 py-4 text-lg font-medium transition-all duration-150 hover:shadow-lg rounded-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book a Consultation
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade {
          0%, 33.33% { opacity: 1; }
          33.34%, 66.66% { opacity: 0; }
          66.67%, 100% { opacity: 0; }
        }
        
        @keyframes morph {
          0%, 33.33% { transform: scale(1); }
          33.34%, 66.66% { transform: scale(0.8); }
          66.67%, 100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
