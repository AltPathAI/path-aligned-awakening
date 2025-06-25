
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OriginBlock from '@/components/OriginBlock';
import TwoLensAccordion from '@/components/TwoLensAccordion';
import BucketsGrid from '@/components/BucketsGrid';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      <OriginBlock />
      <TwoLensAccordion />
      <BucketsGrid />
      <Footer />
    </div>
  );
};

export default Landing;
