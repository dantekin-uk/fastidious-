import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import blogHero from '../../assets/hero/blog.jpg';

const BlogParallax = () => {
  const { ref: animationRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const sectionRef = useRef(null);
  const [relativeScroll, setRelativeScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPos = rect.top - window.innerHeight / 2;
        setRelativeScroll(scrollPos);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setRefs = (node) => {
    sectionRef.current = node;
    animationRef.current = node;
  };

  return (
    <section
      ref={setRefs}
      className="relative w-full min-h-[320px] md:min-h-[450px] lg:h-[55vh] flex items-center overflow-hidden"
    >
      {/* 1. BACKGROUND IMAGE (Using img tag for better clarity and parallax) */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={blogHero}
          alt="Blog Background"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ 
            y: relativeScroll * 0.05,
            scale: 1.05
          }}
        />
        {/* Dark solid overlay to enhance text contrast across the entire image */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Gradient overlay to improve text contrast while maintaining image clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* 2. CONTENT */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-white">
        <div 
          className={`max-w-2xl mx-auto md:mx-0 text-center md:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'} drop-shadow-2xl`}
        >
         

          

          <h2 className="text-2xl md:text-2xl lg:text-3xl font-extrabold mb-4 leading-tight tracking-tight">
            Insurance is complex. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              We make it simple.
            </span>
          </h2>
          
          <p className="text-sm md:text-base text-slate-200 mb-8 font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
            Discover tips on saving premiums, understanding claims, and protecting what matters most in our latest articles.
          </p>

          {/* Button */}
          <Link to="/blog">
            <button className="bg-[#E91E63] hover:bg-[#d81557] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-[0_10px_25px_-5px_rgba(233,30,99,0.4)] inline-flex items-center gap-3 group hover:-translate-y-1 active:translate-y-0 duration-300">
              Read more 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogParallax;
