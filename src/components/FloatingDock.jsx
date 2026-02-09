import React, { useState } from 'react';
import { Car, Heart, Briefcase, Home, Plane, X, ChevronRight } from 'lucide-react';

const FloatingDock = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'motor', label: 'Motor Insurance', icon: Car },
    { id: 'health', label: 'Health Cover', icon: Heart },
    { id: 'business', label: 'Business / SME', icon: Briefcase },
    { id: 'home', label: 'Home Insurance', icon: Home },
    { id: 'travel', label: 'Travel Cover', icon: Plane },
  ];

  return (
    <>
      {/* Backdrop to close popup when clicking anywhere else */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-20 bg-slate-900/10 backdrop-blur-[2px] animate-in fade-in duration-300"
          onClick={() => setSelectedService(null)}
        />
      )}

      <div className="relative z-30 px-4 md:px-6 -mt-4 md:-mt-6 mb-12 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(46,26,94,0.1)] border border-white/50 overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#2E1A5E] via-[#E91E63] to-[#2E1A5E]" />
        
        {/* VIEW A: ICON GRID (Default) */}
        {!selectedService ? (
          <div className="p-4 md:p-6 animate-in fade-in duration-500">
            <p className="text-[#2E1A5E] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-4 border-b border-slate-100 pb-2 md:pb-3">
              Select a product to get an instant quote
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
              {services.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setSelectedService(item)}
                  className="group flex flex-col items-center gap-2 md:gap-3 p-2 md:p-4 rounded-xl hover:bg-white/50 transition-all border border-transparent hover:border-white/60 hover:shadow-lg hover:shadow-purple-900/5"
                >
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 bg-[#2E1A5E]/5 text-[#2E1A5E] rounded-full flex items-center justify-center group-hover:bg-[#E91E63] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3 shadow-sm group-hover:shadow-pink-500/20"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                  >
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-slate-700 text-[10px] md:text-xs group-hover:text-[#E91E63] transition-colors">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          
          /* VIEW B: ACTIVE FORM (Expanded) */
          <div className="flex flex-col lg:flex-row items-stretch min-h-[120px] md:min-h-[140px] animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-300">
            
            {/* Left: Brand Context */}
            <div className="bg-[#2E1A5E] text-white p-4 md:p-6 lg:w-1/4 flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-[10px] font-bold text-[#E91E63] uppercase mb-1">You selected</p>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <selectedService.icon size={20} />
                  {selectedService.label}
                </h3>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="mt-4 text-[10px] text-slate-300 hover:text-white flex items-center gap-1 font-semibold underline decoration-[#E91E63]"
                >
                  <X size={12} /> Go Back
                </button>
              </div>
              <selectedService.icon size={100} className="absolute -right-6 -bottom-6 text-white/5 rotate-12" />
            </div>

            {/* Right: Input Fields */}
            <div className="p-4 md:p-6 lg:w-3/4 bg-white/40 flex flex-col justify-center">
                <form className="flex flex-col lg:flex-row gap-3 items-end">
                  <div className="w-full space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe" 
                      className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-[#E91E63]/50 focus:border-[#E91E63] outline-none font-medium text-slate-700 text-sm transition-all focus:bg-white shadow-sm"
                    />
                  </div>
                  
                  <div className="w-full space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="07XX XXX XXX" 
                      className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-[#E91E63]/50 focus:border-[#E91E63] outline-none font-medium text-slate-700 text-sm transition-all focus:bg-white shadow-sm"
                    />
                  </div>

                  <button type="button" className="w-full lg:w-auto bg-[#E91E63] hover:bg-[#d81557] text-white font-bold px-8 py-3 rounded-xl shadow-[0_10px_20px_rgba(233,30,99,0.2)] transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 text-sm">
                    Get Quote <ChevronRight size={18} />
                  </button>
                </form>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default FloatingDock;