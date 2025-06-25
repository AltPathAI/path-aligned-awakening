
import React, { useState } from 'react';
import { House, LeafyGreen, Bicycle, Bulb, ChartWithUpwardsTrend } from 'lucide-react';

const EverydayBuckets = () => {
  const [hoveredBucket, setHoveredBucket] = useState<string | null>(null);

  const buckets = [
    {
      id: 'housing',
      icon: House,
      title: 'Housing',
      move: 'Right-sized flats (25–35 m² pp) + sliding walls + rooftop gardens'
    },
    {
      id: 'food',
      icon: LeafyGreen,
      title: 'Food',
      move: 'Seasonal staples + "beauty premium" spices; batch-cook base, garnish fresh'
    },
    {
      id: 'mobility',
      icon: Bicycle,
      title: 'Mobility',
      move: '15-minute neighbourhood + folding bike + car-share for heavy lifts'
    },
    {
      id: 'utilities',
      icon: Bulb,
      title: 'Utilities',
      move: 'Layered LEDs, solar-ready roof, grey-water planters'
    },
    {
      id: 'savings',
      icon: ChartWithUpwardsTrend,
      title: 'Savings',
      move: 'Progress-bar art poster turns frugality into a game'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-stone-800 mb-6">
            Everyday Buckets Re-imagined
          </h2>
          <p className="text-xl text-stone-600">
            Tap any tile for micro-case studies & cost data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {buckets.map((bucket) => {
            const IconComponent = bucket.icon;
            return (
              <div
                key={bucket.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredBucket(bucket.id)}
                onMouseLeave={() => setHoveredBucket(null)}
              >
                <div className="bg-stone-50 hover:bg-amber-50 rounded-lg p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-stone-200 hover:border-amber-300">
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-stone-600 group-hover:text-amber-600 transition-colors" />
                  <h3 className="text-lg font-medium text-stone-800 mb-2">{bucket.title}</h3>
                  
                  {/* Hover Reveal */}
                  <div className={`transition-all duration-300 ${
                    hoveredBucket === bucket.id ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <p className="text-sm text-stone-600 leading-relaxed mt-3">
                      {bucket.move}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EverydayBuckets;
