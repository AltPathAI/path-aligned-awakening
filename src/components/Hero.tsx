
import React from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, Calendar } from 'lucide-react';

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
        <div className="animate-[morph_3s_ease-in-out_infinite] hover:animate-none">
          <svg width="200" height="140" viewBox="0 0 200 140" className="text-neutral-300">
            <g className="animate-[morph_3s_ease-in-out_infinite]">
              {/* Wrench morphing to sprout to chair */}
              <path 
                d="M60,70 L140,70 M80,50 L120,50 M100,30 L100,110" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
                className="opacity-60"
              />
              <circle cx="100" cy="70" r="15" stroke="currentColor" strokeWidth="2" fill="none" className="opacity-40" />
            </g>
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-serif font-light text-neutral-800 mb-8 tracking-tight leading-tight">
          Solve first. <em className="text-accent-600">Beautify second.</em>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Pragmatism proves value under stress; Aestheticism adds meaning through beauty and novelty.
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
    </section>
  );
};

export default Hero;
