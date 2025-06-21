
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Footer = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/altpathai-vki1/30min', '_blank', 'width=800,height=600');
  };

  return (
    <>
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
            Book Your Free Discovery Call
          </Button>
        </div>
      </section>
    </>
  );
};

export default Footer;
