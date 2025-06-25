
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TwoLensAccordion = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

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
    <section className="py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          {/* Pragmatic Lens */}
          <div className="border-b border-neutral-200">
            <button
              onClick={() => toggleSection('pragmatic')}
              className="w-full py-6 px-8 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <span className="text-xl font-medium text-neutral-800">Pragmatic Lens – Does it work?</span>
              <ChevronDown 
                className={`w-5 h-5 text-neutral-600 transition-transform ${
                  openSection === 'pragmatic' ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {openSection === 'pragmatic' && (
              <div className="px-8 pb-6">
                <div className="space-y-3">
                  {pragmaticItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-accent-600 mt-1">•</span>
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Elegant Lens */}
          <div>
            <button
              onClick={() => toggleSection('elegant')}
              className="w-full py-6 px-8 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <span className="text-xl font-medium text-neutral-800">Elegant Lens – Does it delight?</span>
              <ChevronDown 
                className={`w-5 h-5 text-neutral-600 transition-transform ${
                  openSection === 'elegant' ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {openSection === 'elegant' && (
              <div className="px-8 pb-6">
                <div className="space-y-3">
                  {elegantItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-accent-600 mt-1">•</span>
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-neutral-600 italic">
            *A proposal must say "yes" to most items in <strong>both</strong> lists—or we refine until it can.*
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoLensAccordion;
