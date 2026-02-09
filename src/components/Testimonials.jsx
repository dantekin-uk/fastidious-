import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ReviewCard = ({ name, role, text, stars }) => (
  <div className="w-[320px] md:w-[400px] flex-shrink-0 bg-white/50 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(46,26,94,0.05)] mx-4 hover:shadow-[0_20px_60px_rgba(233,30,99,0.15)] hover:border-white/90 hover:bg-white/80 transition-all duration-500 cursor-default group">
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={`${i < stars ? "text-orange-400 fill-orange-400" : "text-slate-200"}`} 
          />
        ))}
      </div>
      <div className="w-10 h-10 bg-[#E91E63]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#E91E63] transition-colors duration-500 shadow-sm">
        <Quote size={20} className="text-[#E91E63] group-hover:text-white transition-colors duration-500" />
      </div>
    </div>
    
    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-medium italic">
      "{text}"
    </p>

    <div className="flex items-center gap-4 border-t border-white/40 pt-6">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2E1A5E] to-[#E91E63] flex items-center justify-center text-sm font-bold text-white shadow-lg">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-[#2E1A5E] text-sm md:text-base">{name}</h4>
        <p className="text-[10px] md:text-xs text-[#E91E63] font-bold uppercase tracking-widest">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const reviews = [
    { name: "Sarah K.", role: "SME Owner", text: "Fastidious saved me Ksh 15k on my fire cover. Incredible service.", stars: 5 },
    { name: "John O.", role: "Taxi Driver", text: "Got my PSV sticker via WhatsApp in 20 mins on a Sunday.", stars: 5 },
    { name: "Grace N.", role: "Medical Client", text: "Found me a maternity cover that actually paid out. Thank you!", stars: 5 },
    { name: "Peter W.", role: "Director", text: "Professional, licensed, and honest. Hard to find these days.", stars: 5 },
    { name: "Kamau J.", role: "Transporter", text: "The digital certificates save us so much time. Highly recommended.", stars: 5 },
    { name: "Lydia A.", role: "Parent", text: "The education policy explanation was clear. No hidden jargon.", stars: 5 },
  ];

  return (
    <section ref={sectionRef} className={`py-24 md:py-32 overflow-hidden relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <style>
        {`
          @keyframes marquee-testimonials {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee-testimonials {
            animation: marquee-testimonials 50s linear infinite;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-xl md:text-2xl font-bold text-[#2E1A5E] tracking-tight">
          Trusted by 500+ happy clients
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#2E1A5E] to-[#E91E63] mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative flex items-center">
        {/* Gradient Masks for smooth fading on edges */}
        <div className="absolute top-0 left-0 h-full w-24 md:w-64 bg-gradient-to-r from-[#F8F9FF] via-[#F8F9FF]/50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 md:w-64 bg-gradient-to-l from-[#F8F9FF] via-[#F8F9FF]/50 to-transparent z-20 pointer-events-none"></div>
        
        <div className="flex animate-marquee-testimonials hover:[animation-play-state:paused] py-8 relative z-10">
          {/* Tripled array for a seamless infinite loop on all screen sizes */}
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
             <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;