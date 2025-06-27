
import React from 'react';
import { openSecureUrl } from '@/utils/urlValidation';
import { Youtube, ArrowRight, Calendar } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

const BringItHome = () => {
  const handleYouTubeClick = () => {
    openSecureUrl('https://www.youtube.com/@AltPathAI');
  };

  return (
    <section id="bring-it-home" className="text-center px-4 py-16 bg-neutral-50 relative overflow-hidden">
      <div className="relative z-10 max-w-lg mx-auto">
        <div className="mb-12">
          <img 
            src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
            alt="AltPath.ai Logo" 
            className="mx-auto mb-8 h-16 w-16 hover:scale-105 transition-transform duration-300"
          />

          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-neutral-800 leading-tight">
            From Buckets to Paths
          </h2>
        </div>

        <div className="prose prose-lg prose-neutral max-w-none mb-12">
          <p className="text-base text-neutral-700 leading-relaxed mb-6">
            Each quality of life bucket marks a core life concern—health, safety, housing, social connections, time autonomy, income, education, meaningful work, civic engagement, purpose.
          </p>
          
          <p className="text-base text-neutral-700 leading-relaxed mb-6">
            The principles of <strong className="text-accent-600">Elegant Pragmatism</strong> resolve these essentials first, then refine them into everyday elegance.
          </p>
          
          <p className="text-base text-neutral-700 leading-relaxed mb-6">
            But beauty is in the eye of the beholder. And what is 'essential' to one may not be to another. <em>It's never one size fits all.</em>
          </p>
          
          <p className="text-base text-accent-600 leading-relaxed mb-8 font-medium">
            Everyone is on an <strong>AltPath (Alternative Path)</strong>. And so, our adaptive AI helps you find your values, your essentials, and your optimal AltPath as defined by where you find beauty in the World.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          <button
            onClick={handleYouTubeClick}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600
                       px-6 py-3 text-white hover:bg-accent-700 transition-all duration-300
                       text-base font-medium hover:shadow-xl hover:scale-105 group w-full"
          >
            <Youtube className="w-4 h-4" />
            Subscribe on YouTube
          </button>
          
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600
                       px-6 py-3 text-white hover:bg-accent-700 transition-all duration-300
                       text-base font-medium hover:shadow-xl hover:scale-105 group w-full"
          >
            <Calendar className="w-4 h-4" />
            Schedule Meet & Greet →
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-neutral-600 italic">
            "The future needs solutions that work <em>and</em> inspire."
          </p>
        </div>
      </div>
    </section>
  );
};

export default BringItHome;
