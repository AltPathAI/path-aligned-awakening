
import React from 'react';
import { Users, Target, Heart, Lightbulb } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '10',
      label: 'Core Life Domains',
      description: 'Essential areas for quality of life',
      color: 'text-blue-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: '2',
      label: 'Evaluation Lenses',
      description: 'Pragmatic and elegant perspectives',
      color: 'text-green-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: '1',
      label: 'Unified Philosophy',
      description: 'Elegant pragmatism for all',
      color: 'text-red-600'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      number: '∞',
      label: 'Unique Paths',
      description: 'Personalized solutions for everyone',
      color: 'text-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-accent-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-800 mb-4">
            The Framework in Numbers
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A simple yet comprehensive approach to creating solutions that work and inspire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-accent-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-neutral-800 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-neutral-700 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-neutral-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
