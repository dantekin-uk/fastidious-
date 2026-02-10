import { useState } from 'react';
import HeroSection from '../components/HeroSection'
import FloatingDock from '../components/FloatingDock'
import Partners from '../components/Partners'
import Services from '../components/Services'
import BlogParallax from '../components/BlogParallax'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import FAQ from '../components/FAQ'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      <FloatingDock />
      <Partners />
      <Services />
      <BlogParallax />
      <WhyChooseUs />
      <Testimonials />
      <Stats />
      <FAQ />
    </div>
  )
}
