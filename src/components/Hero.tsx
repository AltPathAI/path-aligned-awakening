
import React from 'react';

const Hero = () => {
  const handleYouTubeSubscribe = () => {
    window.open('https://www.youtube.com/@altpathai', '_blank');
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/altpathai-vki1/30min', '_blank', 'width=800,height=600');
  };

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/ad2fe661-0e6d-4408-a579-797fa3d62c10.png" 
              alt="AltPath.ai Logo" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-emerald-800 mb-4">
              Your Journey Is Unique.
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Discover the Path That Belongs to You.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={handleBookCall}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📅 Book a Free Discovery Call
              </button>
              <button
                onClick={handleYouTubeSubscribe}
                className="bg-red-600 hover:bg-red-700 text-white border border-red-300 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                ▶️ Subscribe on YouTube
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
