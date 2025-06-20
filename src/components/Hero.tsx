
import React from 'react';
import CalendlyEmbed from './CalendlyEmbed';

const Hero = () => {
  const handleYouTubeSubscribe = () => {
    window.open('https://youtube.com/AltPathAI', '_blank');
  };

  return (
    <section className="text-center py-16 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">
          Your Journey Is Unique.
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Discover the Path That Belongs to You.
        </p>
        <div className="flex justify-center space-x-4">
          <CalendlyEmbed
            eventUrl="https://calendly.com/bruceboston/altpathai/session"
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            📅 Book a Discovery Call
          </CalendlyEmbed>
          <button
            onClick={handleYouTubeSubscribe}
            className="bg-white hover:bg-gray-50 text-teal-700 border border-teal-300 px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
          >
            ▶️ Subscribe on YouTube
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
