
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TwoLensAccordion from '@/components/TwoLensAccordion';
import QualityBuckets from '@/components/QualityBuckets';
import StatsSection from '@/components/StatsSection';
import BringItHome from '@/components/BringItHome';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import SectionNavigation from '@/components/SectionNavigation';

const Landing = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <ScrollProgress />
      <SectionNavigation />
      <Navbar />
      <Hero />
      <div className="with-watermark mt-6 md:mt-10">
        <TwoLensAccordion />
      </div>
      <StatsSection />
      <div className="mt-20 md:mt-32 with-watermark">
        <QualityBuckets />
      </div>
      <div className="with-watermark mt-16 md:mt-24">
        <BringItHome />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
