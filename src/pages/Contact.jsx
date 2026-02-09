import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm'
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="relative">
      {/* Animated background blobs - same as home page */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none -z-10">
        <div className="absolute top-20 -left-10 w-96 h-96 bg-[#2E1A5E] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 -right-10 w-96 h-96 bg-[#E91E63] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="pt-32 pb-16 px-4 text-center relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#E91E63] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">
            Get in touch
          </span>
          <h1 className={`text-4xl md:text-6xl font-black text-[#2E1A5E] mb-6 tracking-tight transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Let's start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E1A5E] to-[#E91E63]">conversation.</span>
          </h1>
          <p className={`text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Have questions about our policies or need a custom quote? Our team of experts is ready to help you find the perfect protection.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 relative z-10">
        <div ref={cardsRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Phone, title: 'Call Us', detail: '0796683886', sub: 'Available 24/7', color: 'bg-blue-50', iconColor: 'text-blue-600', link: 'tel:0796683886' },
            { icon: Mail, title: 'Email Us', detail: 'info@fastidiousinsurenceagency.co.ke', sub: 'Response within 2 hours', color: 'bg-pink-50', iconColor: 'text-[#E91E63]', link: 'mailto:hello@fastidious.co.ke' },
            { icon: MapPin, title: 'Visit Us', detail: 'Sigona Cresent-Tilisi', sub: 'Nairobi, Kenya', color: 'bg-purple-50', iconColor: 'text-[#2E1A5E]', link: '#' },
          ].map((item, i) => (
            <a 
              key={i}
              href={item.link}
              className={`group bg-white/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(46,26,94,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm`}>
                <item.icon size={28} className={item.iconColor} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#2E1A5E] mb-2">{item.title}</h3>
              <p className="text-[#2E1A5E] font-bold mb-1">{item.detail}</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{item.sub}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 relative overflow-hidden mb-20">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={formRef}
            className={`bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-[0_20px_80px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-1000 ${formVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left: Visual/Text */}
              <div className="lg:w-1/3 bg-[#2E1A5E] p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                  <p className="text-purple-100/80 leading-relaxed mb-10">
                    Fill out the form and our team will get back to you as soon as possible to discuss your insurance needs.
                  </p>
                  <div className="space-y-5">
                    {[
                      'Expert Consultation',
                      'Tailored Solutions',
                      'No Obligation Quotes'
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm font-semibold text-purple-100/70">
                        <div className="w-2 h-2 bg-[#E91E63] rounded-full shadow-[0_0_12px_#E91E63]"></div>
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#E91E63]/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
              </div>

              {/* Right: Form */}
              <div className="lg:w-2/3 p-10 md:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
