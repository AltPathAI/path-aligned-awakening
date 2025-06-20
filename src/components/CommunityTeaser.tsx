
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Video, TreePine, Calendar } from 'lucide-react';

const CommunityTeaser = () => {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video-Based Learning',
      description: 'Discover your path through curated video content and community discussions.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Engagement',
      description: 'Ask questions, vote on topics, and learn from others on similar journeys.'
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: 'Values Alignment',
      description: 'AI-powered exercises to help you discover what truly matters to you.'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Personal Coaching',
      description: 'Book one-on-one discovery calls to accelerate your personal growth.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">
            Why Traditional Advice Falls Short
          </h2>
          <p className="text-lg text-teal-700 max-w-2xl mx-auto">
            Most guidance assumes one-size-fits-all. We believe your path should be as unique as you are.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-teal-100">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-teal-900">{feature.title}</h3>
                <p className="text-teal-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTeaser;
