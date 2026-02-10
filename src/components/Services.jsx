import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { servicesData } from '../data/services';

// Import images
const motorImg = servicesData.find(s => s.id === 'travel-insurance')?.image;
const healthImg = servicesData.find(s => s.id === 'group-funeral-expense')?.image;
const businessImg = servicesData.find(s => s.id === 'engineering')?.image;
const lifeImg = servicesData.find(s => s.id === 'individual-pension-plans')?.image;

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (cardsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
      const progress = scrollWidth > clientWidth ? (scrollLeft / (scrollWidth - clientWidth)) * 100 : 0;
      setScrollProgress(progress);
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    const el = cardsRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      const timer = setTimeout(handleScroll, 100);
      window.addEventListener('resize', handleScroll);
      return () => {
        el.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
        clearTimeout(timer);
      };
    }
  }, [cardsRef]);

  const scroll = (direction) => {
    if (cardsRef.current) {
      const { clientWidth } = cardsRef.current;
      // Scroll by one card width based on the new percentages
      const scrollAmount = window.innerWidth >= 1024 ? clientWidth * 0.32 : clientWidth * 0.78;
      cardsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Motor & Travel Insurance",
      desc: "Comprehensive coverage for your vehicle and peace of mind during your travels.",
      image: motorImg,
      category: "Personal"
    },
    {
      title: "Medical & Health Cover",
      desc: "Inpatient and outpatient covers tailored for individuals, families, and seniors.",
      image: healthImg,
      category: "Life"
    },
    {
      title: "Business & SME Solutions",
      desc: "Protect your assets with WIBA, Fire & Perils, and Liability coverage.",
      image: businessImg,
      category: "Commercial"
    },
    {
      title: "Life & Retirement Plans",
      desc: "Secure your future with education policies, funeral expense, and retirement plans.",
      image: lifeImg,
      category: "Life"
    }
  ];

  return (
    <section id="services-section" className="py-24 md:py-32 relative overflow-hidden">
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          @keyframes bounce-x {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(5px); }
          }
          .animate-bounce-x {
            animation: bounce-x 1s infinite;
          }
        `}
      </style>

      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Background image removed as per request */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-slate-50/90"></div>
      </div>

      {/* Animated Background Decor
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div 
          className="absolute top-20 -left-20 w-[600px] h-[600px] bg-[#2E1A5E]/20 rounded-full blur-[140px] animate-blob-slow"
          style={{ transform: `translateY(${relativeScroll * -0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-[#E91E63]/10 rounded-full blur-[140px] animate-blob-slow" 
          style={{ animationDelay: '3s', transform: `translateY(${relativeScroll * -0.15}px)` }}
        ></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header with scroll animations and parallax */}
        <div 
          ref={headerRef} 
          className={`text-center mt-8 md:mt-12 mb-4 md:mb-6 max-w-4xl mx-auto transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2E1A5E] leading-tight tracking-tight">
            Explore recommended products
          </h2>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-4 text-slate-400 animate-pulse">
          <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to explore</span>
          <ArrowRight size={14} className="animate-bounce-x ml-2" />
        </div>

        <div className="relative group/container">
          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden lg:block">
            <button 
              onClick={() => scroll('left')}
              className={`absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-slate-100 transition-all duration-300 hover:bg-white active:scale-95 ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="text-[#2E1A5E]" size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className={`absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-slate-100 transition-all duration-300 hover:bg-white active:scale-95 ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
              aria-label="Scroll right"
            >
              <ChevronRight className="text-[#2E1A5E]" size={24} />
            </button>
          </div>

          {/* 4 CARDS IN A ROW */}
          <div 
            ref={cardsRef} 
            className="flex overflow-x-auto gap-6 md:gap-8 pb-10 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >

            {services.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[75vw] md:w-[calc(45%-1rem)] lg:w-[calc(30%-1.5rem)] snap-start snap-always"
                >
                  <Link
                    to="/services"
                    className="group relative block h-[320px] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Background Image */}
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A5E] via-[#2E1A5E]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <span className="text-[#E91E63] font-bold text-[10px] uppercase tracking-widest mb-2">{service.category}</span>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">{service.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-white/90 transition-colors">{service.desc}</p>

                      <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all duration-300">
                        View Plans
                        <ArrowRight size={18} className="text-[#E91E63] group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress Bar Indicator */}
        <div className="max-w-xs mx-auto mt-4 h-1 bg-slate-100 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#E91E63]"
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
          />
        </div>

      </div>
    </section>
  );
};

export default Services;
