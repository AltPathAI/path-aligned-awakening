
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TwoLensAccordion from '@/components/TwoLensAccordion';
import QualityBuckets from '@/components/QualityBuckets';
import BringItHome from '@/components/BringItHome';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Landing = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <div className="with-watermark mt-16 md:mt-24">
        <TwoLensAccordion />
      </div>
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
