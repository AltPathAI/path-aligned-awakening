import React from 'react';
import { Calendar } from 'lucide-react';

const TwoLensAccordion = () => {
  const pragmaticItems = [
    "Problem-fit — Does it remove a real pain-point?",
    "Feasibility — Can people afford, build, or learn it?",
    "Efficiency — Does it maximise benefit per unit time / energy / cost?",
    "Resilience — Will it still work when resources shrink?",
    "Reproducibility — Could peers copy it with a weekend's guidance?"
  ];

  const elegantItems = [
    "Simplicity — Is nothing superfluous; can it be sketched on one page?",
    "Harmony — Do the parts feel proportionate and coherent?",
    "Surprise — Does it offer a small moment of \"oh, that's neat\"?",
    "Sensory Pleasure — Does it invite touch, sight, or lingering?",
    "Uplift — Do users treat the object—and each other—with more care?"
  ];

  return (
    <section id="two-lens" className="py-16 bg-neutral-50 px-4">
      <div className="max-w-lg mx-auto">
        {/* Logo at top */}
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
            alt="AltPath.ai Logo" 
            className="mx-auto h-16 w-16 mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-800 mb-3 leading-tight">
            Elegant Pragmatism
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Does it work? Does it delight?
          </p>
        </div>

        <div className="space-y-4">
          {/* Pragmatic Lens */}
          <div className="bg-green-100 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-medium text-neutral-800 mb-1">
              Pragmatic Lens
            </h3>
            <p className="text-neutral-600 mb-4 text-sm">Does it work?</p>
            
            <div className="space-y-3">
              {pragmaticItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700 leading-relaxed text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Elegant Lens */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-medium text-accent-600 mb-1">
              Elegant Lens
            </h3>
            <p className="text-neutral-600 mb-4 text-sm">Does it delight?</p>
            
            <div className="space-y-3">
              {elegantItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700 leading-relaxed text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
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

        <div className="text-center mt-8">
          <p className="text-neutral-600 italic text-sm leading-relaxed max-w-sm mx-auto">
            A proposal must say "yes" to most items in <strong>both</strong> lists—or we refine until it can.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoLensAccordion;
