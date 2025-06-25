
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatAndWhy from '@/components/WhatAndWhy';
import TwoLensTest from '@/components/TwoLensTest';
import EverydayBuckets from '@/components/EverydayBuckets';
import ConvivialElegance from '@/components/ConvivialElegance';
import NextSteps from '@/components/NextSteps';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhatAndWhy />
      <TwoLensTest />
      <EverydayBuckets />
      <ConvivialElegance />
      <NextSteps />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
