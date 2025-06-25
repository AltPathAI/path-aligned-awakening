
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TwoLensAccordion from '@/components/TwoLensAccordion';
import QualityBuckets from '@/components/QualityBuckets';
import BringItHome from '@/components/BringItHome';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      <TwoLensAccordion />
      <div className="mt-24 md:mt-32">
        <QualityBuckets />
      </div>
      <BringItHome />
      <Footer />
    </div>
  );
};

export default Landing;
