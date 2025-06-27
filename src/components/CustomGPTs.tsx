
import React from 'react';
import { Zap, Lightbulb, MessageCircle, Target } from 'lucide-react';

const CustomGPTs = () => {
  const gptFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Find What Motivates You",
      description: "Discover your core motivations and drivers using behavioral psychology and elegant pragmatism principles.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Understand Operant Conditioning",
      description: "Learn how behavioral patterns shape your decisions and how to use conditioning techniques effectively.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality of Life Assessment",
      description: "Comprehensive evaluation of your life satisfaction across 10 key domains with personalized insights.",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Find My Community",
      description: "Connect with like-minded individuals and communities that align with your values and goals.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Ask a Question",
      description: "Get personalized guidance on any life decision or challenge using the AltPath methodology.",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6 leading-tight">
            Custom GPTs for Your AltPath
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Adaptive AI assistants trained on Elegant Pragmatism principles to guide your unique journey.
          </p>
          
          <div className="bg-amber-100 text-amber-800 px-6 py-4 rounded-lg inline-block mb-12">
            <p className="font-medium">Custom GPTs launching late 2025 — stay tuned!</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gptFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} ${feature.borderColor} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-accent-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomGPTs;
