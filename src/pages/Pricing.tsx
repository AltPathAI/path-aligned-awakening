
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { openCalendlyUrl, openSecureUrl } from '@/utils/urlValidation';

const Pricing = () => {
  const handleBookCall = () => {
    openCalendlyUrl('https://calendly.com/altpathai-vki1/30min');
  };

  const handleYouTubeSubscribe = () => {
    openSecureUrl('https://www.youtube.com/@altpathai');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            Start Your Journey Today
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Your path is unique. Let's explore it together.
          </p>
          <p className="text-lg text-gray-600">
            Begin with a <span className="font-bold text-emerald-600">free discovery call</span> to 
            see if we're aligned for your transformation journey.
          </p>
        </div>
      </section>

      {/* Discovery Call Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">
                Free Discovery Call
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p className="mb-4">
                  <strong>30 minutes. No cost. No pressure.</strong>
                </p>
                <p className="mb-4">
                  This isn't a sales call. It's a genuine conversation about where you are, 
                  where you want to be, and whether our approach resonates with your journey.
                </p>
                <p className="mb-4">
                  We'll explore your unique path, discuss your values, and see if there's 
                  alignment for deeper work together.
                </p>
                <p className="text-center font-medium text-emerald-700">
                  Your authentic life is waiting. Let's see if we're meant to walk this path together.
                </p>
              </div>
              <Button
                onClick={handleBookCall}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
              >
                📅 Book Your Free Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">
            Explore on YouTube
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get weekly insights on values-aligned living and authentic path discovery.
          </p>
          <Button
            onClick={handleYouTubeSubscribe}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
          >
            ▶️ Subscribe to AltPath.ai
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Stop Talking and Start Discovering?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Your journey is unique. The path forward doesn't have to be unclear.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={handleBookCall}
              className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Book Free Discovery Call
            </Button>
            <Button
              onClick={handleYouTubeSubscribe}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-800 transition-colors"
            >
              Watch on YouTube
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
