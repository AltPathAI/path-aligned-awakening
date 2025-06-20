
import React from 'react';
import VideoCardGrid from './VideoCardGrid';
import QuestionTeaserThread from './QuestionTeaserThread';

const DemoVideos = () => {
  const demoVideoIds = ['dQw4w9WgXcQ', 'jNQXAC9IVRw']; // Placeholder video IDs

  return (
    <section id="demo-videos" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">
            🎬 Coaching in Action
          </h2>
          <p className="text-lg text-teal-700 max-w-2xl mx-auto">
            See how values-aligned coaching transforms lives through real sessions and community insights.
          </p>
        </div>
        
        <VideoCardGrid videos={demoVideoIds} />
        <QuestionTeaserThread />
      </div>
    </section>
  );
};

export default DemoVideos;
