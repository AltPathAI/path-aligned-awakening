
import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-serif text-stone-800 mb-12">
          About AltPath.ai
        </h2>
        
        <div className="prose prose-lg prose-stone mx-auto">
          <p className="text-xl leading-relaxed mb-8">
            AltPath.ai began as a simple question: What if we stopped choosing between 
            "practical" and "beautiful"? What if the most efficient solutions could also 
            be the most delightful?
          </p>
          
          <p className="text-lg leading-relaxed mb-8">
            We're a lab for <strong>"thoughtfulness over lavishness"</strong>—proving that 
            modest materials can feel extraordinary when arranged with intention. Every 
            framework, tool, and case study we share has been tested in the real world, 
            where budgets are tight and beauty still matters.
          </p>
          
          <p className="text-lg leading-relaxed text-stone-600">
            Because the future needs solutions that work <em>and</em> inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
