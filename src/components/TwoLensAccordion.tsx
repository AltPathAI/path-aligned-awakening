
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TwoLensAccordion = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const pragmaticItems = [
    'Problem-fit',
    'Feasibility', 
    'Efficiency',
    'Resilience',
    'Reproducibility'
  ];

  const elegantItems = [
    'Simplicity',
    'Harmony',
    'Surprise',
    'Sensory',
    'Uplift'
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
              <span className="text-xl font-medium text-neutral-800">Pragmatic</span>
              <ChevronDown 
                className={`w-5 h-5 text-neutral-600 transition-transform ${
                  openSection === 'pragmatic' ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {openSection === 'pragmatic' && (
              <div className="px-8 pb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {pragmaticItems.map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <span className="text-accent-600">✔︎</span>
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
              <span className="text-xl font-medium text-neutral-800">Elegant</span>
              <ChevronDown 
                className={`w-5 h-5 text-neutral-600 transition-transform ${
                  openSection === 'elegant' ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {openSection === 'elegant' && (
              <div className="px-8 pb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {elegantItems.map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <span className="text-accent-600">✔︎</span>
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
            Deep-dive videos live on YouTube—hit <strong>Subscribe</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoLensAccordion;
