
import React from 'react';
import { Calendar } from 'lucide-react';

const TwoLensAccordion = () => {
  const pragmaticItems = [
    { title: "Problem-fit", description: "Does it remove a real pain-point?" },
    { title: "Feasibility", description: "Can people afford, build, or learn it?" },  
    { title: "Efficiency", description: "Does it maximise benefit per unit time / energy / cost?" },
    { title: "Resilience", description: "Will it still work when resources shrink?" },
    { title: "Reproducibility", description: "Could peers copy it with a weekend's guidance?" }
  ];

  const elegantItems = [
    { title: "Simplicity", description: "Is nothing superfluous; can it be sketched on one page?" },
    { title: "Harmony", description: "Do the parts feel proportionate and coherent?" },
    { title: "Surprise", description: "Does it offer a small moment of \"oh, that's neat\"?" },
    { title: "Sensory Pleasure", description: "Does it invite touch, sight, or lingering?" },
    { title: "Uplift", description: "Do users treat the object—and each other—with more care?" }
  ];

  return (
    <section id="two-lens" className="py-16 bg-neutral-50 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo section - matching second screenshot */}
        <div className="text-center mb-8">
          <div className="inline-block border-2 border-green-600 rounded-2xl p-6 mb-6">
            <img 
              src="/lovable-uploads/76fb8ca3-504f-4a90-900d-beede196f893.png" 
              alt="AltPath.ai Logo" 
              className="h-16 w-16 mx-auto mb-2"
            />
            <div className="text-green-600 font-medium text-base">AltPathAI</div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-serif text-neutral-800 mb-4 leading-tight">
            Elegant Pragmatism
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Does it work? Does it delight?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Pragmatic Lens */}
          <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Pragmatic Lens
            </h3>
            <p className="text-neutral-600 mb-6 text-base">Does it work?</p>
            
            <div className="space-y-4">
              {pragmaticItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-base">
                    <span className="font-semibold text-neutral-800">{item.title}</span>
                    <br />
                    <span className="text-neutral-600">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elegant Lens */}
          <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Elegant Lens
            </h3>
            <p className="text-neutral-600 mb-6 text-base">Does it delight?</p>
            
            <div className="space-y-4">
              {elegantItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-base">
                    <span className="font-semibold text-neutral-800">{item.title}</span>
                    <br />
                    <span className="text-neutral-600">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mb-16">
          <p className="text-neutral-600 italic text-base leading-relaxed max-w-2xl mx-auto">
            A proposal must say "yes" to most items in <strong>both</strong> lists—or we refine until it can.
          </p>
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

export default TwoLensAccordion;
