
import React from 'react';

const BringItHome = () => {
  return (
    <section id="bring-it-home" className="text-center px-6 py-32 md:py-40 bg-white">
      <img 
        src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
        alt="AltPath.ai Logo" 
        className="mx-auto mb-12 h-64 w-64"
      />

      <h2 className="font-serif text-3xl md:text-4xl mb-8 text-neutral-800 leading-tight">
        From Buckets&nbsp;to&nbsp;Paths
      </h2>

      <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto mb-16">
        Each quality of life bucket marks a core life concern—health, safety, housing, social connections, time autonomy, income, education, meaningful work, civic engagement, purpose.
        <br /><br />
        Elegant Pragmatism resolves the essentials first, then refines them into everyday elegance.
        <br /><br />
        But beauty is in the eye of the beholder. And what is 'essential' to one may not be to another. It's never one size fits all.
        <br /><br />
        Everyone is on an AltPath. And so, our adaptive AI helps you find your values, your essentials, your AltPath as defined by where you find beauty in the World.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {/* YouTube primary CTA */}
        <a
          href="https://www.youtube.com/@AltPathAI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-emerald-600
                     px-8 py-4 text-white hover:bg-emerald-700 transition-colors
                     text-lg font-medium"
        >
          Subscribe on YouTube
        </a>

        {/* Consultation secondary CTA */}
        <a
          href="/consult"
          className="inline-flex items-center gap-2 rounded-md border
                     border-emerald-600 px-8 py-4 text-emerald-600
                     hover:bg-emerald-600 hover:text-white transition-colors
                     text-lg font-medium"
        >
          <span>
            Intrigued?<br />Book a meet 'n greet
          </span>
        </a>
      </div>
    </section>
  );
};

export default BringItHome;
