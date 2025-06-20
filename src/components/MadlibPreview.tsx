
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const MadlibPreview = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Career Transition Coach',
      content: 'AltPath helped me realize that my values weren\'t aligned with my career. The community support was incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Entrepreneur',
      content: 'The AI-powered values exercises gave me clarity I never had before. Highly recommend the discovery calls.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">
            What Our Community Says
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-teal-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                  ))}
                </div>
                <p className="text-teal-800 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-teal-900">{testimonial.name}</p>
                  <p className="text-sm text-teal-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MadlibPreview;
