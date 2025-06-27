
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TwoLensAccordion = () => {
  const [openSection, setOpenSection] = useState<'pragmatic' | 'elegant' | null>('pragmatic');

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

  const toggleSection = (section: 'pragmatic' | 'elegant') => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="two-lens" className="py-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6 leading-tight">
            The Two-Lens Philosophy
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Every solution must pass through both lenses to achieve <em>elegant pragmatism</em>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
          {/* Pragmatic Lens */}
          <div className="border-b border-neutral-200">
            <button
              onClick={() => toggleSection('pragmatic')}
              className="w-full py-8 px-8 text-left flex items-center justify-between hover:bg-neutral-50 transition-all duration-200 group"
            >
              <div>
                <span className="text-2xl font-medium text-neutral-800 group-hover:text-accent-600 transition-colors">
                  Pragmatic Lens
                </span>
                <p className="text-neutral-600 mt-1">Does it work?</p>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-neutral-600 transition-all duration-300 ${
                  openSection === 'pragmatic' ? 'rotate-180 text-accent-600' : ''
                }`} 
              />
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openSection === 'pragmatic' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-8 pb-8">
                <div className="space-y-4">
                  {pragmaticItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-accent-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-neutral-700 text-lg leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Lens */}
          <div>
            <button
              onClick={() => toggleSection('elegant')}
              className="w-full py-8 px-8 text-left flex items-center justify-between hover:bg-neutral-50 transition-all duration-200 group"
            >
              <div>
                <span className="text-2xl font-medium text-neutral-800 group-hover:text-accent-600 transition-colors">
                  Elegant Lens
                </span>
                <p className="text-neutral-600 mt-1">Does it delight?</p>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-neutral-600 transition-all duration-300 ${
                  openSection === 'elegant' ? 'rotate-180 text-accent-600' : ''
                }`} 
              />
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openSection === 'elegant' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-8 pb-8">
                <div className="space-y-4">
                  {elegantItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-accent-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-neutral-700 text-lg leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
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
