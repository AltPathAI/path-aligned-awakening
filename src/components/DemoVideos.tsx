
import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

const DemoVideos = () => {
  const videos = [
    {
      videoId: "dQw4w9WgXcQ",
      title: "Understanding Your Path",
      description: "Discover how to identify your unique journey and align with your true purpose."
    },
    {
      videoId: "dQw4w9WgXcQ", 
      title: "Values-Based Decision Making",
      description: "Learn to make decisions that align with your core values and long-term vision."
    },
    {
      videoId: "dQw4w9WgXcQ",
      title: "Building Authentic Relationships", 
      description: "Create meaningful connections that support your authentic self-expression."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
          Explore Your Journey
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <YouTubeEmbed key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoVideos;
