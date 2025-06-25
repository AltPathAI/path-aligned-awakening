
import React from 'react';

const WhatAndWhy = () => {
  return (
    <section id="what-and-why" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - The Synthesis */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-stone-800 mb-8">
              The Synthesis
            </h2>
            <div className="space-y-6">
              <p className="text-2xl font-light text-stone-700 leading-relaxed">
                Live beautifully because beauty helps life work.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                We fuse <strong>Pragmatism</strong> (ideas are true when they work) with <strong>Aestheticism</strong> (beauty enlarges life). Every choice must clear two bars: Does it work? Does it delight?
              </p>
            </div>
          </div>

          {/* Right Column - Why It Matters */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-stone-800 mb-8">
              Why It Matters
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-stone-600">
                  Escapes the utility ↔ ornament tug-of-war
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-stone-600">
                  Scales across incomes—thoughtfulness is the only premium
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-stone-600">
                  Builds resilient, convivial communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAndWhy;
