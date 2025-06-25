
import React from 'react';
import { HexPath } from 'lucide-react';

const BringItHome = () => {
  const handleBookCall = () => {
    window.location.href = '/consult';
  };

  return (
    <section id="bring-it-home" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-3xl text-center px-4">
        {/* subtle logo glyph */}
        <HexPath className="mx-auto mb-6 h-8 w-8 text-accent-500" />

        <h2 className="font-serif text-2xl md:text-3xl mb-4 text-neutral-800">
          From Buckets to Paths
        </h2>

        <p className="text-lg text-neutral-700 leading-relaxed mb-6">
          Each bucket marks a core life concern—water, safety, purpose.
          Elegant Pragmatism asks us to solve the essentials first and
          refine the experience until it delights. By mapping these buckets
          into clear decision paths, we train our AI models to stay aligned
          with real quality-of-life payoff.
        </p>

        <button
          onClick={handleBookCall}
          className="inline-flex items-center gap-2 rounded-md border border-accent-600 px-6 py-3 text-accent-600 hover:bg-accent-600 hover:text-white transition-colors"
        >
          <HexPath className="h-4 w-4" />
          Book a Path-Mapping Call
        </button>
      </div>
    </section>
  );
};

export default BringItHome;
