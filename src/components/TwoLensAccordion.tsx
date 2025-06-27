
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
      <div className="max-w-lg mx-auto">
        {/* Logo at top */}
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-accent-600 rounded-xl p-4 mb-6">
            <img 
              src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
              alt="AltPath.ai Logo" 
              className="h-12 w-12"
            />
            <div className="text-accent-600 font-medium mt-2 text-xs">AltPathAI</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-4 leading-tight">
            Elegant Pragmatism
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Does it work? Does it delight?
          </p>
        </div>

        <div className="space-y-6">
          {/* Pragmatic Lens */}
          <div className="bg-green-100 rounded-2xl p-6 border border-green-200">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
              Pragmatic Lens
            </h3>
            <p className="text-neutral-600 mb-6 text-base">Does it work?</p>
            
            <div className="space-y-4">
              {pragmaticItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-neutral-800">{item.title}</span>
                    <span className="text-neutral-700 ml-2">— {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elegant Lens */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="text-2xl font-semibold text-accent-600 mb-2">
              Elegant Lens
            </h3>
            <p className="text-neutral-600 mb-6 text-base">Does it delight?</p>
            
            <div className="space-y-4">
              {elegantItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-neutral-800">{item.title}</span>
                    <span className="text-neutral-700 ml-2">— {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-8">
          <p className="text-neutral-600 italic text-base leading-relaxed max-w-sm mx-auto">
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
