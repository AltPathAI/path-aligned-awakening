
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface PricingTier {
  name: string;
  duration: string;
  price: number;
  description: string;
  available: boolean;
  highlight?: boolean;
}

const PricingOverview = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Meet & Greet",
      duration: "10 min",
      price: 5,
      description: "Quick introduction to see if we're a good fit for your journey.",
      available: true,
    },
    {
      name: "Intake Interview",
      duration: "30 min",
      price: 20,
      description: "Deep dive into your current situation and desired outcomes.",
      available: true,
    },
    {
      name: "Early-bird Working Session",
      duration: "1 hr",
      price: 40,
      description: "Hands-on session to tackle your most pressing challenges.",
      available: true,
    },
    {
      name: "Standard Working Session",
      duration: "1 hr",
      price: 200,
      description: "Full-rate coaching session for deep transformation work.",
      available: false,
      highlight: true,
    },
    {
      name: "Weekly Update",
      duration: "30 min",
      price: 100,
      description: "Regular check-ins to maintain momentum on your path.",
      available: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">
            Investment in Your Journey
          </h2>
          <p className="text-xl text-gray-700 mb-2">
            Anchored at <span className="font-bold text-emerald-600">$200/hr</span> – because transformation has value.
          </p>
          <p className="text-gray-600">
            Early access pricing available now. Standard rates begin Q3 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative ${tier.highlight ? 'border-2 border-emerald-500 shadow-lg' : 'border border-gray-200'} ${!tier.available ? 'opacity-75' : ''}`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Anchor Rate
                  </span>
                </div>
              )}
              {!tier.available && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Q3 2025
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-semibold text-emerald-800">
                  {tier.name}
                </CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  ${tier.price}
                  <span className="text-sm font-normal text-gray-600 ml-2">
                    {tier.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {tier.description}
                </p>
                {tier.available && (
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Available Now
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>
            * All sessions include follow-up resources and personalized action steps
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingOverview;
