import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, ArrowRight } from 'lucide-react'
import heroImage from '../../assets/hero/heroimage.webp'
import mobileHero from '../../assets/hero/mobilehero.png'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    'Digital Certification',
    '24/7 Claims Support'
  ]

  return (
    <>
    <style>
      {`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .hero-img-pos {
          object-position: center;
        }
        @media (min-width: 1024px) {
          .hero-img-pos {
            object-position: right bottom;
          }
        }
      `}
    </style>
    <section className="relative w-full min-h-[500px] lg:min-h-[450px] lg:h-[55vh] flex items-center pt-8 lg:pt-0 overflow-hidden bg-[#2E1A5E]">
      
      {/* 1. THE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroImage} />
          <img
            src={mobileHero}
            alt="Kenyan Family Safe and Happy"
            className="w-full h-full object-cover lg:object-contain hero-img-pos animate-in fade-in lg:zoom-in-105 duration-1000 animate-float opacity-80 lg:opacity-100"
          />
        </picture>
      </div>

      {/* 2. THE GRADIENT OVERLAY (Mobile and Desktop versions) */}
      {/* Mobile Gradient: Fades faster to show family on the right */}
      <div
        className="absolute inset-0 z-10 lg:hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(46, 26, 94, 0.85) 0%, rgba(46, 26, 94, 0.5) 50%, rgba(46, 26, 94, 0.85) 100%)'
        }}
      ></div>

      {/* Desktop Gradient: Smooth multi-stop transition */}
      <div
        className="absolute inset-0 z-10 hidden lg:block"
        style={{
          background: 'radial-gradient(circle at 20% 50%, #2E1A5E 0%, #2E1A5E 35%, rgba(46, 26, 94, 0.8) 50%, rgba(46, 26, 94, 0.4) 65%, transparent 90%)'
        }}
      ></div>

      {/* 3. THE CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        
        {/* LEFT SECTION - Text Content */}
        <motion.div 
          className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 max-w-full lg:max-w-2xl py-8 lg:py-0 transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
        >
          
          {/* Main Headline */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-left-8 duration-700 delay-500 fill-mode-both drop-shadow-sm">
            Shield in times of 
            <span className="text-[#E91E63] pl-2">Uncertainty.</span>
          </h1>

          {/* Subtext */}
          <p className="text-xs md:text-sm text-white leading-relaxed max-w-lg mx-auto lg:mx-0 animate-in fade-in slide-in-from-left-8 duration-700 delay-700 fill-mode-both">
            We make insurance simple, accessible, and reliable. Protect your family and business with tailored policies that bridge the protection gaps in your life.
          </p>

          {/* Buttons */}
          <div className="flex animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-both">
            <Link 
              to="/services"
              className="bg-[#E91E63] hover:bg-[#d81557] text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-[0_10px_25px_-5px_rgba(233,30,99,0.4)] flex items-center justify-center gap-3 group hover:-translate-y-1 hover:shadow-[0_20px_35px_-10px_rgba(233,30,99,0.5)] active:scale-95"
            >
              Explore Our Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>

          {/* Thin line between buttons and checklist */}
          <div className="hidden lg:block w-12 h-px bg-white/20 animate-in fade-in slide-in-from-left-8 duration-700 delay-[1100ms] fill-mode-both"></div>
        </motion.div>
      </div>

      {/* Top Left Badge */}
      <div className="absolute top-20 lg:top-16 left-4 lg:left-8 z-30 flex justify-start animate-in fade-in slide-in-from-top-4 duration-700 delay-300 fill-mode-both">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] md:text-sm font-medium border border-white/10 shadow-xl hover:bg-white/20 transition-all cursor-default">
          <Shield size={16} className="text-[#E91E63]" />
          <span>Licensed by IRA Kenya</span>
        </div>
      </div>

      {/* Bottom Checklist Row */}
      <div className="absolute bottom-8 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8 flex justify-center lg:justify-start pointer-events-none">
        <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[1200ms] fill-mode-both pointer-events-auto">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2 group/item">
              <div className="w-1 h-1 bg-[#E91E63] rounded-full shadow-[0_0_8px_#E91E63]"></div>
              <span className="text-[10px] font-bold text-white/50 lg:text-white/70 uppercase tracking-[0.2em] group-hover/item:text-white transition-colors">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
