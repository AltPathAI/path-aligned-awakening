
import React, { useState } from 'react';
import { Home, Leaf, Bike, Lightbulb, TrendingUp, Heart } from 'lucide-react';

const EverydayBuckets = () => {
  const [hoveredBucket, setHoveredBucket] = useState<string | null>(null);

  const buckets = [
    {
      id: 'housing',
      icon: Home,
      title: 'Housing',
      costSaving: '40% less space, 60% more light',
      delightNote: 'Sliding walls transform your flat into a dance studio by evening'
    },
    {
      id: 'food',
      icon: Leaf,
      title: 'Food',
      costSaving: 'Seasonal staples cut grocery bills 30%',
      delightNote: 'Cardamom transforms Tuesday lentils into something magical'
    },
    {
      id: 'mobility',
      icon: Bike,
      title: 'Mobility',
      costSaving: 'No car payments, insurance, or parking fees',
      delightNote: 'Morning bike rides become meditation in motion'
    },
    {
      id: 'utilities',
      icon: Lightbulb,
      title: 'Utilities',
      costSaving: 'Layered lighting cuts energy use 50%',
      delightNote: 'Perfect ambiance for every mood and task'
    },
    {
      id: 'savings',
      icon: TrendingUp,
      title: 'Savings',
      costSaving: 'Visual progress tracking increases savings 3x',
      delightNote: 'Your wall becomes a celebration of financial wins'
    },
    {
      id: 'community',
      icon: Heart,
      title: 'Community',
      costSaving: 'Tool sharing reduces individual purchases 70%',
      delightNote: 'Repair cafés become neighbourhood festivals'
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6">
            Everyday Buckets Re-imagined
          </h2>
          <p className="text-xl text-neutral-600 content-width mx-auto">
            Hover any tile to see cost-savings and delight notes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buckets.map((bucket) => {
            const IconComponent = bucket.icon;
            const isHovered = hoveredBucket === bucket.id;
            
            return (
              <div
                key={bucket.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredBucket(bucket.id)}
                onMouseLeave={() => setHoveredBucket(null)}
              >
                <div className="bg-neutral-50 hover:bg-accent-50 rounded-lg p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-neutral-200 hover:border-accent-500 min-h-[200px] flex flex-col">
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-neutral-600 group-hover:text-accent-600 transition-colors" />
                  <h3 className="text-lg font-medium text-neutral-800 mb-4">{bucket.title}</h3>
                  
                  {/* Content that changes on hover */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className={`transition-all duration-300 ${
                      isHovered ? 'opacity-0 max-h-0' : 'opacity-100 max-h-20'
                    } overflow-hidden mb-2`}>
                      <p className="text-sm text-neutral-600">
                        Hover to explore
                      </p>
                    </div>
                    
                    <div className={`transition-all duration-300 ${
                      isHovered ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'
                    } overflow-hidden`}>
                      <div className="space-y-3">
                        <div className="bg-white rounded-md p-3">
                          <p className="text-xs font-medium text-accent-600 mb-1">WORKS</p>
                          <p className="text-sm text-neutral-700">{bucket.costSaving}</p>
                        </div>
                        <div className="bg-white rounded-md p-3">
                          <p className="text-xs font-medium text-accent-600 mb-1">DELIGHTS</p>
                          <p className="text-sm text-neutral-700">{bucket.delightNote}</p>
                        </div>
                      </div>
                    </div>
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
