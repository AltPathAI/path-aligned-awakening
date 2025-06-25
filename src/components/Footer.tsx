
import React from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, Calendar } from 'lucide-react';

const Footer = () => {
  const handleYouTubeSubscribe = () => {
    window.open('https://www.youtube.com/@AltPath', '_blank');
  };

  const handleBookConsultation = () => {
    window.location.href = '/consult';
  };

  return (
    <footer className="bg-neutral-800 text-white relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="/lovable-uploads/ad2fe661-0e6d-4408-a579-797fa3d62c10.png" 
          alt="AltPath.ai Logo Watermark" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Left: Creative Commons Notice */}
          <div className="text-center md:text-left">
            <p className="text-neutral-300 text-sm">
              Copy-left notice: Reuse anything; cite AltPath.ai.
            </p>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleYouTubeSubscribe}
              variant="outline"
              className="border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
            >
              <Youtube className="w-4 h-4 mr-2" />
              Subscribe on YouTube
            </Button>
            <Button
              onClick={handleBookConsultation}
              className="bg-accent-600 hover:bg-accent-500 text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
