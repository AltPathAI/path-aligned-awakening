
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download } from 'lucide-react';

const TwoLensTest = () => {
  const [activeTab, setActiveTab] = useState<'pragmatic' | 'elegant' | null>(null);

  const handleDownloadPDF = () => {
    console.log('Downloading Two-Lens Test PDF checklist...');
    // In a real implementation, this would download an actual PDF
  };

  const pragmaticItems = [
    { id: 'problem-fit', label: 'Problem-fit', description: 'Addresses a real, validated need' },
    { id: 'feasibility', label: 'Feasibility', description: 'Can be implemented with available resources' },
    { id: 'efficiency', label: 'Efficiency', description: 'Optimal use of time, energy, and materials' },
    { id: 'resilience', label: 'Resilience', description: 'Robust under stress and changing conditions' },
    { id: 'reproducibility', label: 'Reproducibility', description: 'Can be replicated and scaled' }
  ];

  const elegantItems = [
    { id: 'simplicity', label: 'Simplicity', description: 'Clear, uncluttered, intuitive' },
    { id: 'harmony', label: 'Harmony', description: 'Parts work together seamlessly' },
    { id: 'surprise', label: 'Surprise', description: 'Delightful unexpected details' },
    { id: 'sensory', label: 'Sensory Pleasure', description: 'Engages senses positively' },
    { id: 'uplift', label: 'Uplift', description: 'Elevates mood and spirit' }
  ];

  return (
    <section id="two-lens-test" className="section-spacing bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6">
            The Two-Lens Test
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed content-width mx-auto">
            A proposal must say "yes" to most items in both columns—or we refine until it can.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden mb-8">
          {/* Accordion Headers */}
          <div className="border-b border-neutral-200">
            <button
              onClick={() => setActiveTab(activeTab === 'pragmatic' ? null : 'pragmatic')}
              className="w-full py-6 px-8 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <span className="text-xl font-medium text-neutral-800">Pragmatic Lens</span>
              <ChevronDown className={`w-5 h-5 text-neutral-600 transition-transform ${activeTab === 'pragmatic' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeTab === 'pragmatic' && (
              <div className="px-8 pb-6">
                <div className="space-y-4">
                  {pragmaticItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent-500 rounded flex items-center justify-center mt-0.5">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <span className="text-lg font-medium text-neutral-800">{item.label}</span>
                        <p className="text-neutral-600 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setActiveTab(activeTab === 'elegant' ? null : 'elegant')}
              className="w-full py-6 px-8 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <span className="text-xl font-medium text-neutral-800">Elegant Lens</span>
              <ChevronDown className={`w-5 h-5 text-neutral-600 transition-transform ${activeTab === 'elegant' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeTab === 'elegant' && (
              <div className="px-8 pb-6">
                <div className="space-y-4">
                  {elegantItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent-500 rounded flex items-center justify-center mt-0.5">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <span className="text-lg font-medium text-neutral-800">{item.label}</span>
                        <p className="text-neutral-600 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={handleDownloadPDF}
            variant="outline"
            className="border-accent-500 text-accent-600 hover:bg-accent-50 btn-primary"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF Checklist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TwoLensTest;
