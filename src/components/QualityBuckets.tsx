
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import BucketCard from './quality-buckets/BucketCard';
import { buckets } from './quality-buckets/bucketData';

const QualityBuckets = () => {
  const [hoveredBucket, setHoveredBucket] = useState<string | null>(null);

  return (
    <section id="quality-buckets" className="py-16 bg-white px-4">
      <div className="mx-auto max-w-sm">
        {/* Logo and title - matching screenshot */}
        <div className="mb-12 text-center">
          <div className="inline-block border-2 border-accent-600 rounded-2xl p-6 mb-8">
            <img 
              src="/lovable-uploads/797c40f5-1a3e-46b6-b3e0-dd7aaac51bb0.png" 
              alt="AltPath.ai Logo" 
              className="h-16 w-16"
            />
            <div className="text-accent-600 font-medium mt-3 text-sm">AltPathAI</div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-neutral-800 leading-tight">
            Quality-of-Life Buckets
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed mb-12">
            Each bucket marks a core life concern. Discover your essentials and find your optimal AltPath.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {buckets.map(bucket => (
            <BucketCard
              key={bucket.id}
              icon={bucket.icon}
              title={bucket.title}
              blurb={bucket.blurb}
              items={bucket.items}
              color={bucket.color}
              bgColor={bucket.bgColor}
              borderColor={bucket.borderColor}
              isHovered={hoveredBucket === bucket.id}
              onHover={() => setHoveredBucket(bucket.id)}
              onLeave={() => setHoveredBucket(null)}
            />
          ))}
        </div>

        {/* Fixed bottom CTA */}
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="w-full bg-brand-green hover:bg-green-700 text-white px-6 py-4 rounded-xl font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2 text-lg"
          >
            <Calendar className="w-5 h-5" />
            Schedule Meet & Greet →
          </button>
        </div>
      </div>
    </section>
  );
};

export default QualityBuckets;
