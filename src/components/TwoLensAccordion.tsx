
import React from 'react';

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
    <section id="two-lens" className="py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6 leading-tight">
            Elegant Pragmatism
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Does it work? Does it delight?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pragmatic Lens */}
          <div className="bg-green-100 rounded-xl p-8 border border-green-200">
            <h3 className="text-2xl font-medium text-neutral-800 mb-2">
              Pragmatic Lens
            </h3>
            <p className="text-neutral-600 mb-6">Does it work?</p>
            
            <div className="space-y-4">
              {pragmaticItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Elegant Lens */}
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-medium text-accent-600 mb-2">
              Elegant Lens
            </h3>
            <p className="text-neutral-600 mb-6">Does it delight?</p>
            
            <div className="space-y-4">
              {elegantItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 italic text-lg leading-relaxed max-w-2xl mx-auto">
            A proposal must say "yes" to most items in <strong>both</strong> lists—or we refine until it can.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoLensAccordion;
