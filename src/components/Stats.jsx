import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, Briefcase, Phone, Shield } from 'lucide-react';

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const end = parseInt(value.replace(/[^0-9]/g, ''));
      const controls = animate(0, end, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayNumber(Math.floor(latest));
        },
      });
      return () => controls.stop();
    } else {
      setDisplayNumber(0);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
    </span>
  );
};

const StatCard = ({ icon: Icon, value, label, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="flex flex-col items-center text-center group cursor-default py-4"
    >
      {/* Icon */}
      <div className="mb-3 text-pink-400/80 group-hover:text-[#E91E63] transition-colors duration-300">
        <Icon size={20} strokeWidth={2} />
      </div>

      {/* Animated Number */}
      <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
        <AnimatedNumber value={value} />
      </h3>

      {/* Label */}
      <p className="text-[8px] md:text-[9px] font-bold text-pink-200/40 uppercase tracking-[0.2em] group-hover:text-pink-200 transition-colors">
        {label}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Briefcase, value: "10+", label: "Insurance Partners" },
    { icon: Phone, value: "24", label: "Claims Support" },
    { icon: Shield, value: "100%", label: "Transparency" },
  ];

  return (
    <section className="py-8 md:py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#2E1A5E] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 overflow-hidden shadow-2xl shadow-purple-900/20"
        >
          {/* Decorative Background Elements inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E91E63]/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 items-center relative z-10">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;