import React from 'react';
import { ArrowRight, Users, Clock, ShieldCheck } from 'lucide-react';
import whyimage from '../../assets/whychoseus/why.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';    

const WhyChooseUs = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .animate-float-slow {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* Animated Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-[#2E1A5E]/10 via-[#E91E63]/5 to-[#2E1A5E]/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* LEFT SIDE: THE IMAGE (Visual Trust) */}
          <div ref={imageRef} className={`w-full lg:w-1/2 relative transition-all duration-1000 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Enhanced decorative gradient box */}
            <div className="absolute top-8 -left-8 w-full h-full bg-gradient-to-br from-[#E91E63]/15 via-[#2E1A5E]/5 to-transparent rounded-[3rem] -z-10 blur-xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#E91E63]/20 rounded-full blur-2xl -z-10"></div>

            {/* Main Image Container with enhanced effects */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm aspect-[4/3] group">
              <img
                src={whyimage}
                alt="Fastidious Agent Helping Client"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-100 group-hover:brightness-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A5E]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating "Experience" Badge with enhanced animation */}
              <div className="absolute -bottom-8 -left-8 bg-white/98 backdrop-blur-2xl shadow-[0_25px_60px_rgba(46,26,94,0.2)] p-6 rounded-3xl border border-white/60 animate-in fade-in zoom-in duration-1000 delay-700 fill-mode-both group-hover:scale-110 transition-transform cursor-default animate-float-slow">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E91E63] to-[#C91A5E] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/30 flex-shrink-0">
                    <ShieldCheck size={28} strokeWidth={2} />
                  </div>
                  <div className="pr-2">
                    <p className="text-3xl font-black text-[#E91E63] leading-none">100%</p>
                    <p className="text-[11px] text-slate-600 font-bold uppercase tracking-wider mt-1.5">Claim Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT & CHECKLIST */}
          <div ref={contentRef} className={`w-full lg:w-1/2 space-y-10 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>

            {/* Header */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E1A5E] mb-6 leading-tight tracking-tight">
                Your dedicated partners in protection.
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                At Fastidious, we don't just sell policies; we build relationships. As an IRA-licensed agency, we sit on your side of the table, negotiating with insurers to get you the best coverage at the lowest rates.
              </p>
            </div>

            {/* Cards and Button Container */}
            <div className="space-y-6 md:space-y-8">
              {/* THE CARDS - Enhanced with modern styling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 rounded-2xl p-5 bg-gradient-to-br from-white/40 to-white/20 border border-slate-200 hover:border-[#E91E63]/50 hover:bg-white/60 transition-all duration-300 group/card cursor-default hover:shadow-md hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-lg bg-blue-100/50 flex items-center justify-center flex-shrink-0">
                    <Users size={22} className="text-[#2E1A5E] group-hover/card:text-[#E91E63] transition-colors duration-300" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-[#2E1A5E] group-hover/card:text-[#E91E63] transition-colors duration-300">Client-First Approach</h4>
                </div>
                <div className="flex items-center gap-4 rounded-2xl p-5 bg-gradient-to-br from-white/40 to-white/20 border border-slate-200 hover:border-[#E91E63]/50 hover:bg-white/60 transition-all duration-300 group/card cursor-default hover:shadow-md hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-lg bg-orange-100/50 flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-[#2E1A5E] group-hover/card:text-[#E91E63] transition-colors duration-300" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-[#2E1A5E] group-hover/card:text-[#E91E63] transition-colors duration-300">Speed & Efficiency</h4>
                </div>
              </div>

              {/* The "Explore" Button - Enhanced */}
              <div className="pt-2">
                <button className="bg-gradient-to-r from-[#E91E63] to-[#C91A5E] hover:from-[#1a0f3a] hover:to-[#2E1A5E] text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group hover:-translate-y-1 active:translate-y-0 duration-300">
                  Explore Who We Are
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
