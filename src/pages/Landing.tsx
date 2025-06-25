
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OriginBlock from '@/components/OriginBlock';
import TwoLensAccordion from '@/components/TwoLensAccordion';
import QualityBuckets from '@/components/QualityBuckets';
import BringItHome from '@/components/BringItHome';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      <OriginBlock />
      <TwoLensAccordion />
      <QualityBuckets />
      <BringItHome />
      <Footer />
    </div>
  );
};

export default Landing;
