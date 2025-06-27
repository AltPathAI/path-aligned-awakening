
import React from 'react';
import { openSecureUrl } from '@/utils/urlValidation';
import { Youtube, ArrowRight, Calendar } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

const BringItHome = () => {
  const handleYouTubeClick = () => {
    openSecureUrl('https://www.youtube.com/@AltPathAI');
  };

  return (
    <section id="bring-it-home" className="text-center px-6 py-40 bg-gradient-to-br from-neutral-50 to-accent-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-accent-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-16">
          <img 
            src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
            alt="AltPath.ai Logo" 
            className="mx-auto mb-12 h-64 w-64 hover:scale-105 transition-transform duration-300"
          />

          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-neutral-800 leading-tight">
            From Buckets to Paths
          </h2>
        </div>

        <div className="prose prose-xl prose-neutral max-w-none mb-16">
          <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-8">
            Each quality of life bucket marks a core life concern—health, safety, housing, social connections, time autonomy, income, education, meaningful work, civic engagement, purpose.
          </p>
          
          <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-8">
            The principles of <strong className="text-accent-600">Elegant Pragmatism</strong> resolve these essentials first, then refine them into everyday elegance.
          </p>
          
          <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-8">
            But beauty is in the eye of the beholder. And what is 'essential' to one may not be to another. <em>It's never one size fits all.</em>
          </p>
          
          <p className="text-xl md:text-2xl text-accent-600 leading-relaxed mb-12 font-medium">
            Everyone is on an <strong>AltPath (Alternative Path)</strong>. And so, our adaptive AI helps you find your values, your essentials, and your optimal AltPath as defined by where you find beauty in the World.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-12 max-w-md mx-auto">
          <button
            onClick={handleYouTubeClick}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-accent-600
                       px-8 py-4 text-white hover:bg-accent-700 transition-all duration-300
                       text-lg font-medium hover:shadow-xl hover:scale-105 group"
          >
            <Youtube className="w-5 h-5" />
            Subscribe on YouTube
          </button>
          
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-accent-600
                       px-8 py-4 text-white hover:bg-accent-700 transition-all duration-300
                       text-lg font-medium hover:shadow-xl hover:scale-105 group"
          >
            <Calendar className="w-4 h-4" />
            Schedule Meet & Greet →
          </button>
        </div>

        <div className="text-center">
          <p className="text-lg text-neutral-600 italic">
            "The future needs solutions that work <em>and</em> inspire."
          </p>
        </div>
      </div>
    </section>
  );
};

export default BringItHome;
