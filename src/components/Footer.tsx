
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Youtube } from 'lucide-react';

const Footer = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/bruceboston/altpathai/session', '_blank');
  };

  const handleYouTubeSubscribe = () => {
    window.open('https://youtube.com/AltPathAI', '_blank');
  };

  return (
    <>
      {/* YouTube Subscribe Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-4">
          <Youtube className="w-5 h-5" />
          <span className="text-sm font-medium">
            Get weekly insights on values-aligned living
          </span>
          <Button
            size="sm"
            variant="secondary"
            onClick={handleYouTubeSubscribe}
            className="bg-white text-red-600 hover:bg-gray-100"
          >
            Subscribe
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Authentic Path?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands who've discovered their values-aligned journey. Your authentic life is waiting.
          </p>
          <Button
            size="lg"
            onClick={handleBookCall}
            className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-3 text-lg shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Discovery Call
          </Button>
        </div>
      </section>
    </>
  );
};

export default Footer;
