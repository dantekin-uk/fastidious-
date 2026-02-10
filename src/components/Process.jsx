import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, CheckCircle } from 'lucide-react';

const Step = ({ icon: Icon, title, desc, step, isLast }) => (
  <div className="relative flex flex-col items-center text-center group flex-1">
    {/* Connector Line */}
    {!isLast && (
      <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-slate-100 z-0">
        <div className="h-full bg-gradient-to-r from-[#E91E63] to-transparent w-0 group-hover:w-full transition-all duration-1000" />
      </div>
    )}
    
    <div className="relative z-10 w-20 h-20 bg-white border-2 border-slate-50 rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover:border-[#E91E63]/30 group-hover:shadow-xl group-hover:shadow-pink-500/10 transition-all duration-500">
      <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#2E1A5E] text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
        {step}
      </span>
      <Icon size={32} className="text-[#2E1A5E] group-hover:text-[#E91E63] transition-colors duration-500" />
    </div>
    
    <h4 className="text-lg font-bold text-[#2E1A5E] mb-2">{title}</h4>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed">{desc}</p>
  </div>
);

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Select Your Plan",
      desc: "Browse our wide range of tailored insurance products."
    },
    {
      icon: FileText,
      title: "Get a Quick Quote",
      desc: "Use our instant calculator or talk to our experts."
    },
    {
      icon: CheckCircle,
      title: "Instant Protection",
      desc: "Receive your digital certificate and stay protected."
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2E1A5E]">Getting covered is simple</h2>
          <div className="w-12 h-1 bg-[#E91E63] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start justify-between">
          {steps.map((step, index) => (
            <Step 
              key={index} 
              {...step} 
              step={index + 1} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;