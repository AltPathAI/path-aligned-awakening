
import React from 'react';
import { Zap, Lightbulb, MessageCircle, Target, Calendar } from 'lucide-react';

const CustomGPTs = () => {
  const gptFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Find What Motivates You",
      description: "Discover your core motivations and drivers using behavioral psychology and elegant pragmatism principles.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-accent-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Understand Operant Conditioning",
      description: "Learn how behavioral patterns shape your decisions and how to use conditioning techniques effectively.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-accent-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality of Life Assessment",
      description: "Comprehensive evaluation of your life satisfaction across 10 key domains with personalized insights.",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      iconColor: "text-accent-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Find My Community",
      description: "Connect with like-minded individuals and communities that align with your values and goals.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-accent-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Ask a Question",  
      description: "Get personalized guidance on any life decision or challenge using the AltPath methodology.",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      iconColor: "text-accent-600"
    }
  ];

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-accent-600 rounded-xl p-4 mb-8">
            <img 
              src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
              alt="AltPath.ai Logo" 
              className="h-12 w-12"
            />
            <div className="text-accent-600 font-medium mt-2 text-xs">AltPathAI</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6 leading-tight">
            Custom GPTs for Your AltPath
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed mb-8">
            Adaptive AI assistants trained on Elegant Pragmatism principles to guide your unique journey.
          </p>
          
          <div className="bg-amber-100 text-amber-800 px-6 py-4 rounded-xl text-base font-medium mb-8">
            Custom GPTs launching late 2025 — stay tuned!
          </div>
        </div>

        <div className="space-y-6">
          {gptFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} ${feature.borderColor} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`${feature.iconColor} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fixed bottom CTA */}
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="w-full bg-accent-600 hover:bg-accent-700 text-white px-6 py-4 rounded-xl font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2 text-lg"
          >
            <Calendar className="w-5 h-5" />
            Schedule Meet & Greet →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomGPTs;
