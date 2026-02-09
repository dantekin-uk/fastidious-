import React, { useState, useEffect } from 'react';
import { Car, Heart, Briefcase, Users, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  const [relativeScroll, setRelativeScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setRelativeScroll(rect.top);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerRef]);

  const services = [
    {
      icon: Car,
      title: "Motor & Travel",
      desc: "Comprehensive coverage for your vehicle and peace of mind during your travels.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Heart,
      title: "Medical Health",
      desc: "Inpatient and outpatient covers tailored for individuals, families, and seniors.",
      color: "text-pink-600",
      bg: "bg-pink-50"
    },
    {
      icon: Briefcase,
      title: "Business / SME",
      desc: "Protect your assets with WIBA, Fire & Perils, and Liability coverage.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Life & Pensions",
      desc: "Secure your future with education policies, funeral expense, and retirement plans.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section id="services-section" className="py-24 md:py-32 relative overflow-hidden">
      <style>
        {`
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            animation: gradientShift 6s ease infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes blobFloat {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(50px, -80px) scale(1.2); }
            66% { transform: translate(-30px, 40px) scale(0.8); }
          }
          .animate-blob-slow {
            animation: blobFloat 25s infinite alternate ease-in-out;
          }
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
          className={`text-center mb-20 md:mb-28 max-w-4xl mx-auto transition-all duration-1000 ${headerVisible ? 'opacity-100 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
    
          style={{ transform: headerVisible ? `translateY(${relativeScroll * 0.06}px)` : undefined }}
        >
          {/* <span className="text-[#E91E63] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2E1A5E] tracking-tight leading-[1.1]">
          <span className="text-[#E91E63] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 block">Our Expertise</span> */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E1A5E] leading-tight tracking-tight">
            Explore recommended products
          </h2>
          <p className={`text-sm md:text-base text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${headerVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Tailored insurance plans designed for your lifestyle and business.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-8 text-slate-400 animate-pulse">
          <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to explore</span>
          <ArrowRight size={14} className="animate-bounce-x" />
        </div>

        {/* 4 CARDS IN A ROW */}
        <div 
          ref={cardsRef} 
          className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >

          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`flex-shrink-0 w-[85vw] md:w-auto snap-start snap-always group relative bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 border border-white/60 hover:border-white/90 shadow-[0_8px_32px_rgba(46,26,94,0.02)] hover:shadow-[0_30px_70px_rgba(46,26,94,0.12)] transition-all duration-700 hover:-translate-y-4 hover:bg-white/60`}
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible
                    ? `translateY(${relativeScroll * 0.04}px) translateX(0px) scale(1)`
                    : index % 2 === 0
                      ? 'translateY(100px) translateX(-30px) scale(0.9)'
                      : 'translateY(100px) translateX(30px) scale(0.9)',
                  transition: `all 1200ms cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 150}ms`,
                }}
              >
                {/* Animated glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Icon Bubble with enhanced animation */}
                <div className={`w-16 md:w-20 h-16 md:h-20 ${service.bg} rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500 shadow-md group-hover:shadow-xl animate-float`} style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                  <service.icon size={40} className={`${service.color} transition-transform duration-500 group-hover:scale-110`} strokeWidth={1.5} />
                </div>

                {/* Text */}
                <h3 className="text-lg md:text-xl font-bold text-[#2E1A5E] mb-3 group-hover:text-[#E91E63] transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                  {service.desc}
                </p>

                {/* Link Arrow with enhanced interaction */}
                <div className="flex items-center gap-2 text-sm font-bold text-[#2E1A5E] group-hover:gap-4 group-hover:text-[#E91E63] transition-all duration-300 cursor-pointer">
                  View Plans
                  <ArrowRight size={18} className="text-[#E91E63] group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;
