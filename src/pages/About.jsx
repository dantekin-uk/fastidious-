import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, Building2, GraduationCap, 
  Truck, Factory, Users, MapPin, Heart, Target
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import life1 from '../../assets/serviceslife/life1.jpg';
import commercial1 from '../../assets/servicescommercial/commercial1.jpg';


// --- HELPER COMPONENTS ---

const ListItem = ({ number, title, desc, index }) => (
  <motion.div 
    className="group border-b border-slate-200 py-6 hover:border-[#E91E63] transition-colors duration-500 cursor-default"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <div className="flex flex-col md:flex-row md:items-start gap-6">
      {/* The Number */}
      <span className="text-2xl font-black text-slate-200 group-hover:text-[#E91E63] transition-colors duration-300">
        {number}
      </span>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-[#2E1A5E] mb-1 flex items-center gap-3">
          {title}
          <svg className="w-5 h-5 text-[#E91E63] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xl group-hover:text-slate-700 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  </motion.div>
);

const ClientTile = ({ icon: Icon, label, index }) => (
  <motion.div 
    className="relative group flex flex-col items-center justify-center gap-4 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(233,30,99,0.08)] hover:border-[#E91E63]/20 transition-all duration-500 cursor-default overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
  >
    {/* Subtle background glow on hover */}
    <div className="absolute -inset-full bg-gradient-to-tr from-[#E91E63]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    
    <div className="relative z-10 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#E91E63]/10 group-hover:text-[#E91E63] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    
    <span className="relative z-10 text-center font-bold text-slate-600 text-xs md:text-sm group-hover:text-[#2E1A5E] transition-colors duration-300">
      {label}
    </span>
  </motion.div>
);

export default function About() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <main className="bg-slate-50 min-h-screen overflow-x-hidden">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
      {/* Animated background blobs - same as home page */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none -z-10">
        <div className="absolute top-20 -left-10 w-96 h-96 bg-[#2E1A5E] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 -right-10 w-96 h-96 bg-[#E91E63] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* 1. HERO SECTION - Modern & Compact (Matching Services Page) */}
      <motion.div
        ref={heroRef}
        className="relative text-white py-16 md:py-20 overflow-hidden border-b border-gray-100 min-h-[400px] md:min-h-[450px] lg:h-[55vh] flex items-center justify-center md:justify-start"
        initial={{ opacity: 0 }}
        animate={heroVisible ? { 
          opacity: 1,
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
        } : {}}
      >
        {/* Background Image with Subtle Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={life1}
            alt="About Fastidious"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 30%' }}
            initial={{ scale: 1.05 }}
            animate={heroVisible ? { 
              scale: 1,
              transition: { duration: 8, ease: [0.16, 1, 0.3, 1] }
            } : {}}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A5E]/80 to-[#1E0F47]/80"></div>
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto md:mx-0">
            <motion.p
              className="text-base md:text-lg lg:text-xl font-medium text-white mb-6 md:mb-8 text-center md:text-left leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={heroVisible ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.1, duration: 0.4 }
              } : {}}
            >
              We partner with leading insurers to save you time on comparisons. Our goal is to build a lasting relationship with you, updating your coverage as your life changes.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={heroVisible ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2, duration: 0.4 }
              } : {}}
            >
              <button
                onClick={() => {
                  document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#E91E63] hover:bg-[#d81b5c] text-white font-semibold py-3 px-8 rounded-full text-base transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 2. OUR STORY */}
      <section id="our-story" ref={storyRef} className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Decor */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#E91E63]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: THE STORY */}
            <div className={`space-y-8 relative z-10 transition-all duration-1000 ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div>
                <h2 className="text-3xl font-bold text-[#2E1A5E] mb-6">Our Story</h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              
                  <p>
                    We offer competitive market rates and tailor policies, saving you time on comparisons. We are also keen on building relationships with our clients as life changes.
                  </p>
                  <p>
                    With deep local knowledge, we make insurance simple, accessible, and reliable for our clients.
                  </p>
                  <p className="border-l-4 border-[#E91E63] pl-6 italic">
                    "Our goal is to bridge protection gaps in the Kenyan market by partnering with leading insurers."
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="bg-slate-50 border border-slate-100 px-6 py-3 rounded-xl flex items-center gap-3">
                   <MapPin className="text-[#E91E63]" size={20} />
                   <div>
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Located At</p>
                     <p className="text-[#2E1A5E] font-bold">Sigona Cresent - Tilisi</p>
                   </div>
                </div>
              </div>
            </div>

            {/* RIGHT: MODERN IMAGE (Visual Trust) */}
            <div className={`w-full relative transition-all duration-1000 delay-300 ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              {/* Decorative elements */}
              <div className="absolute top-8 -right-8 w-full h-full bg-gradient-to-br from-[#E91E63]/15 via-[#2E1A5E]/5 to-transparent rounded-[3rem] -z-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#E91E63]/20 rounded-full blur-2xl -z-10"></div>

              {/* Main Image Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm aspect-[4/3] group">
                <img
                  src={commercial1}
                  alt="Our Story"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A5E]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE FASTIDIOUS: THE EDITORIAL LIST */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* LEFT: THE HEADLINE (Sticky on Desktop) */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <span className="text-[#E91E63] font-bold tracking-widest uppercase text-[10px] mb-3 block">
                  The Fastidious Standard
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-[#2E1A5E] mb-4 leading-tight">
                  Why we are the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#2E1A5E]">
                    Right Choice.
                  </span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Insurance isn't just about paperwork; it's about trust. Here is our promise to you.
                </p>
                {/* Decorative vertical line */}
                <div className="h-1 w-16 bg-[#E91E63] rounded-full"></div>
              </div>
            </div>

            {/* RIGHT: THE INTERACTIVE LIST */}
            <div className="lg:w-2/3 flex flex-col">
              <ListItem 
                number="01" 
                title="Fully Licensed & Regulated"
                desc="Licensed by the Insurance Regulatory Authority (IRA), ensuring 100% compliance and safety." 
                index={0}
              />
              <ListItem 
                number="02" 
                title="Education First Approach"
                desc="We prioritize client education, so you never sign a policy you don't fully understand." 
                index={1}
              />
              <ListItem 
                number="03" 
                title="Deep Local Expertise"
                desc="With deep local knowledge, we make insurance simple, accessible, and reliable for our clients." 
                index={2}
              />
              <ListItem 
                number="04" 
                title="Flexible Payment Plans"
                desc="We understand cash flow. We structure flexible payment plans to suit your financial capabilities." 
                index={3}
              />
              <ListItem 
                number="05" 
                title="Free Risk Assessments"
                desc="We provide free risk assessments to identify protection gaps before they become problems." 
                index={4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR CLIENTELE */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E91E63] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
              Diverse Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2E1A5E] tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#2E1A5E]">Clientele.</span>
            </h2>
            <div className="w-12 h-1 bg-[#E91E63] mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <ClientTile index={0} icon={Building2} label="Construction Industry" />
            <ClientTile index={1} icon={Users} label="NGOs" />
            <ClientTile index={2} icon={GraduationCap} label="Educational Institutions" />
            <ClientTile index={3} icon={Truck} label="Transport Industry" />
            <ClientTile index={4} icon={Factory} label="Manufacturing Industry" />
            <ClientTile index={5} icon={Building2} label="Government Entities" />
            <ClientTile index={6} icon={Users} label="Organized Individual Groups" />
            <ClientTile index={7} icon={Heart} label="Families & Individuals" />
          </div>
        </div>
      </section>
    </main>
  );
}