
import React from 'react';
import { Zap, Lightbulb, MessageCircle, Target, Calendar } from 'lucide-react';

const CustomGPTs = () => {
  const gptFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Find What Motivates You",
      description: "Discover your core motivations and drivers using behavioral psychology and elegant pragmatism principles.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Understand Operant Conditioning",
      description: "Learn how behavioral patterns shape your decisions and how to use conditioning techniques effectively.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quality of Life Assessment",
      description: "Comprehensive evaluation of your life satisfaction across 10 key domains with personalized insights.",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Find My Community",
      description: "Connect with like-minded individuals and communities that align with your values and goals.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Ask a Question",  
      description: "Get personalized guidance on any life decision or challenge using the AltPath methodology.",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <img 
            src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
            alt="AltPath.ai Logo" 
            className="mx-auto h-16 w-16 mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-800 mb-4 leading-tight">
            Custom GPTs for Your AltPath
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed mb-6">
            Adaptive AI assistants trained on Elegant Pragmatism principles to guide your unique journey.
          </p>
          
          <div className="bg-amber-100 text-amber-800 px-4 py-3 rounded-lg text-sm font-medium mb-8">
            Custom GPTs launching late 2025 — stay tuned!
          </div>
        </div>

        <div className="space-y-4">
          {gptFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} ${feature.borderColor} border rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-accent-600 mb-3">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="w-full bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Schedule Meet & Greet →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomGPTs;
