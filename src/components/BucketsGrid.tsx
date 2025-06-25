
import React, { useState } from 'react';
import { Home, Leaf, Bike, Lightbulb, TrendingUp, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BucketsGrid = () => {
  const [selectedBucket, setSelectedBucket] = useState<string | null>(null);

  const buckets = [
    {
      id: 'housing',
      icon: Home,
      title: 'Housing',
      videoId: 'dQw4w9WgXcQ', // Placeholder YouTube ID
      summary: 'Micro-spaces with sliding walls: 40% less rent, infinite configurations.'
    },
    {
      id: 'food',
      icon: Leaf,
      title: 'Food',
      videoId: 'dQw4w9WgXcQ',
      summary: 'Seasonal staples + cardamom: 30% grocery savings, 100% more delight.'
    },
    {
      id: 'mobility',
      icon: Bike,
      title: 'Mobility',
      videoId: 'dQw4w9WgXcQ',
      summary: 'Bike-first living: zero car costs, meditation in motion daily.'
    },
    {
      id: 'utilities',
      icon: Lightbulb,
      title: 'Utilities',
      videoId: 'dQw4w9WgXcQ',
      summary: 'Layered lighting: 50% energy reduction, perfect ambiance always.'
    },
    {
      id: 'savings',
      icon: TrendingUp,
      title: 'Savings',
      videoId: 'dQw4w9WgXcQ',
      summary: 'Visual progress tracking: 3x savings rate, celebration walls.'
    },
    {
      id: 'community',
      icon: Heart,
      title: 'Community',
      videoId: 'dQw4w9WgXcQ',
      summary: 'Tool libraries + repair cafés: 70% less purchasing, festival vibes.'
    }
  ];

  const openModal = (bucketId: string) => {
    setSelectedBucket(bucketId);
  };

  const closeModal = () => {
    setSelectedBucket(null);
  };

  const handleWatchPlaylist = () => {
    window.open('https://www.youtube.com/@AltPath', '_blank');
  };

  const selectedBucketData = buckets.find(b => b.id === selectedBucket);

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6">
              Buckets Re-imagined
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buckets.map((bucket) => {
              const IconComponent = bucket.icon;
              
              return (
                <div
                  key={bucket.id}
                  className="bg-neutral-50 hover:bg-accent-50 rounded-lg p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-neutral-200 hover:border-accent-500 cursor-pointer"
                  onClick={() => openModal(bucket.id)}
                >
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-neutral-600 group-hover:text-accent-600 transition-colors" />
                  <h3 className="text-lg font-medium text-neutral-800">{bucket.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedBucket && selectedBucketData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif text-neutral-800">{selectedBucketData.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* YouTube Embed */}
              <div className="aspect-video mb-6 bg-neutral-100 rounded-lg flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedBucketData.videoId}?autoplay=1`}
                  title={`${selectedBucketData.title} video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
              
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                {selectedBucketData.summary}
              </p>
              
              <div className="text-center">
                <Button
                  onClick={handleWatchPlaylist}
                  className="bg-accent-600 hover:bg-accent-500 text-white"
                >
                  Watch full playlist on YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BucketsGrid;
