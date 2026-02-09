import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Import all 10 partner logos
// Note: Ensure the extensions (.png, .jpg, .webp) match your actual files
import partner1 from '../../assets/partnerlogo/partner1.png';
import partner2 from '../../assets/partnerlogo/partner2.png';
import partner3 from '../../assets/partnerlogo/partner3.png';
import partner4 from '../../assets/partnerlogo/partner4.png';
import partner5 from '../../assets/partnerlogo/partner5.webp';
import partner6 from '../../assets/partnerlogo/partner6.png';
import partner7 from '../../assets/partnerlogo/partner7.webp';
import partner8 from '../../assets/partnerlogo/partner8.png';
import partner9 from '../../assets/partnerlogo/partner9.png';
import partner10 from '../../assets/partnerlogo/partner10.png';

const Partners = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const partners = [
    { name: 'Partner 1', src: partner1 },
    { name: 'Partner 2', src: partner2 },
    { name: 'Partner 3', src: partner3 },
    { name: 'Partner 4', src: partner4 },
    { name: 'Partner 5', src: partner5 },
    { name: 'Partner 6', src: partner6 },
    { name: 'Partner 7', src: partner7 },
    { name: 'Partner 8', src: partner8 },
    { name: 'Partner 9', src: partner9 },
    { name: 'Partner 10', src: partner10 },
  ];

  return (
    <section ref={sectionRef} className={`w-full py-16 md:py-20 overflow-hidden relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes shimmer {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .animate-marquee {
            animation: marquee 45s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .animate-shimmer {
            animation: shimmer 3s ease-in-out infinite;
          }
        `}
      </style>

      <div className={`max-w-7xl mx-auto px-6 text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-[10px] md:text-xs font-bold text-[#2E1A5E]/50 uppercase tracking-[0.3em]">
          Trusted Partners & Underwriters
        </p>
      </div>

      {/* THE INFINITE SLIDER CONTAINER */}
      <div className="relative flex items-center group">

        {/* GRADIENT MASKS with enhanced blur */}
        <div className="absolute top-0 bottom-0 left-0 z-20 w-32 md:w-64 bg-gradient-to-r from-[#F8F9FF] via-[#F8F9FF]/50 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 z-20 w-32 md:w-64 bg-gradient-to-l from-[#F8F9FF] via-[#F8F9FF]/50 to-transparent pointer-events-none"></div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E91E63]/0 to-transparent group-hover:via-[#E91E63]/5 transition-all duration-500 pointer-events-none z-0"></div>

        {/* THE SCROLLING TRACK */}
        <div className="flex animate-marquee whitespace-nowrap relative z-10">
          {/* Duplicate the list for a seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
              {partners.map((partner, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer group/logo relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E91E63]/20 to-transparent rounded-lg opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[150px] object-contain transition-all duration-500 group-hover/logo:scale-125 group-hover/logo:brightness-110 drop-shadow-sm group-hover/logo:drop-shadow-md"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
