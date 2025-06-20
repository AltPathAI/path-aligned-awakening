
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Youtube } from 'lucide-react';

const Hero = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/bruceboston/altpathai/session', '_blank');
  };

  const handleYouTubeSubscribe = () => {
    window.open('https://youtube.com/AltPathAI', '_blank');
  };

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg p-3">
            <img 
              src="/lovable-uploads/ad2fe661-0e6d-4408-a579-797fa3d62c10.png" 
              alt="AltPath.ai Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Choose the Smarter
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-700">
            {' '}Road Less Traveled
          </span>
        </h1>
        
        <p className="text-xl text-teal-800 mb-8 max-w-4xl mx-auto">
          I'm Bruce Boston, founder of AltPathAI. AI-aligned coaching grounded in psychology, 
          philosophy, rational inquiry & game theory—so you uncover your core values, 
          map unconventional paths, and build purpose-rich lives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleBookCall}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book a Discovery Call
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleYouTubeSubscribe}
            className="px-8 py-3 text-lg border-teal-300 text-teal-700 hover:bg-teal-50"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe on YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
