
import React from 'react';

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 15l5.2-3L10 9v6z" />
      <path
        fillRule="evenodd"
        d="M2 12c0-3.9.3-6 1-7.3C3.7 3.4 5 3 8.3 3h7.4c3.3 0 4.6.4 5.3 1.7.7 1.3 1 3.4 1 7.3s-.3 6-1 7.3c-.7 1.3-2 1.7-5.3 1.7H8.3c-3.3 0-4.6-.4-5.3-1.7C2.3 18 2 15.9 2 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const BringItHome = () => {
  return (
    <section id="bring-it-home" className="text-center px-4 py-24 md:py-32 bg-white mb-24 md:mb-32">
      <img 
        src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
        alt="AltPath.ai Logo" 
        className="mx-auto mb-6 h-144 w-144"
      />

      <h2 className="font-serif text-2xl md:text-3xl mb-4 text-neutral-800">
        From Buckets&nbsp;to&nbsp;Paths
      </h2>

      <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto mb-10">
        Each bucket marks a core life concern—water, safety, purpose.
        Elegant&nbsp;Pragmatism resolves the essentials first, then refines
        them into everyday elegance. Our adaptive AI stays aligned with these
        considered routes.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* YouTube primary CTA */}
        <a
          href="https://www.youtube.com/@AltPathAI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-emerald-600
                     px-6 py-3 text-white hover:bg-emerald-700 transition-colors
                     h-12"
        >
          <YouTubeIcon className="h-4 w-4 fill-white" />
          Subscribe on YouTube
        </a>

        {/* Consultation secondary CTA */}
        <a
          href="/consult"
          className="inline-flex items-center gap-2 rounded-md border
                     border-emerald-600 px-6 py-3 text-emerald-600
                     hover:bg-emerald-600 hover:text-white transition-colors
                     h-12"
        >
          <img 
            src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
            alt="AltPath.ai Logo" 
            className="h-5 w-5"
          />
          Book a Path-Mapping Call
        </a>
      </div>
    </section>
  );
};

export default BringItHome;
