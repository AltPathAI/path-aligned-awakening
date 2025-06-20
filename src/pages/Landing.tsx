
import React from 'react';
import Hero from '@/components/Hero';
import DemoVideos from '@/components/DemoVideos';
import CommunityTeaser from '@/components/CommunityTeaser';
import MadlibPreview from '@/components/MadlibPreview';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      <Hero />
      <DemoVideos />
      <CommunityTeaser />
      <MadlibPreview />
      <Footer />
    </div>
  );
};

export default Landing;
