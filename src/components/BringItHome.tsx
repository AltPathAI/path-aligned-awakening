
import React from 'react';
import { openSecureUrl } from '@/utils/urlValidation';
import { Youtube, ArrowRight, Calendar } from 'lucide-react';

const BringItHome = () => {
  const handleYouTubeClick = () => {
    openSecureUrl('https://www.youtube.com/@AltPathAI');
  };

  return (
    <section id="bring-it-home" className="text-center px-4 py-16 bg-neutral-50 relative overflow-hidden">
      <div className="relative z-10 max-w-lg mx-auto">
        <div className="mb-12">
          <div className="inline-block border-2 border-accent-600 rounded-xl p-4 mb-8">
            <img 
              src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
              alt="AltPath.ai Logo" 
              className="h-12 w-12"
            />
            <div className="text-accent-600 font-medium mt-2 text-xs">AltPathAI</div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-neutral-800 leading-tight">
            From Buckets to Paths
          </h2>
        </div>

        <div className="prose prose-lg prose-neutral max-w-none mb-12 space-y-6">
          <p className="text-base text-neutral-700 leading-relaxed">
            Each quality of life bucket marks a core life concern—health, safety, housing, social connections, time autonomy, income, education, meaningful work, civic engagement, purpose.
          </p>
          
          <p className="text-base text-neutral-700 leading-relaxed">
            The principles of <strong className="text-accent-600">Elegant Pragmatism</strong> resolve these essentials first, then refine them into everyday elegance.
          </p>
          
          <p className="text-base text-neutral-700 leading-relaxed">
            But beauty is in the eye of the beholder. And what is 'essential' to one may not be to another. <em>It's never one size fits all.</em>
          </p>
          
          <p className="text-base text-accent-600 leading-relaxed font-medium">
            Everyone is on an <strong>AltPath (Alternative Path)</strong>. And so, our adaptive AI helps you find your values, your essentials, and your optimal AltPath as defined by where you find beauty in the World.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-12">
          <button
            onClick={handleYouTubeClick}
            className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 text-lg font-medium rounded-xl transition-all hover:shadow-lg hover:scale-105 group w-full flex items-center justify-center gap-3"
          >
            <Youtube className="w-5 h-5" />
            Subscribe on YouTube
          </button>
          
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 text-lg font-medium rounded-xl transition-all hover:shadow-lg hover:scale-105 group w-full flex items-center justify-center gap-3"
          >
            <Calendar className="w-5 h-5" />
            Schedule Meet & Greet →
          </button>
        </div>

        <div className="text-center">
          <p className="text-base text-neutral-600 italic">
            "The future needs solutions that work <em>and</em> inspire."
          </p>
        </div>

        {/* Fixed bottom CTA */}
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="w-full bg-accent-600 hover:bg-accent-700 text-white px-6 py-4 rounded-xl font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2 text-lg"
          >
            <Calendar className="w-5 h-5" />
            Schedule Meet & Greet →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BringItHome;
