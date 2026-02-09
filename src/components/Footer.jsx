import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a0f35] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decor (Subtle Tech Lines) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E91E63] rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMN 1: BRAND & TRUST (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#E91E63] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                F
              </div>
              <span className="text-2xl font-bold tracking-tight">Fastidious</span>
            </div>

            <p className="text-slate-400 leading-relaxed">
              We are an IRA-licensed agency dedicated to finding you the best insurance rates in Kenya. We compare, you save.
            </p>

            {/* IRA Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
              <ShieldCheck size={24} className="text-green-400" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Regulated By</p>
                <p className="text-sm font-bold text-white">Insurance Regulatory Authority</p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-lg text-white">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-[#E91E63] transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-[#E91E63] transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-[#E91E63] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#E91E63] transition-colors">Blog / Insights</a></li>
              <li><Link to="/contact" className="hover:text-[#E91E63] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: PRODUCTS (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-lg text-white">Insurance</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-[#E91E63] transition-colors">Motor Private</a></li>
              <li><a href="#" className="hover:text-[#E91E63] transition-colors">Medical Health</a></li>
              <li><a href="#" className="hover:text-[#E91E63] transition-colors">Business / WIBA</a></li>
              <li><a href="#" className="hover:text-[#E91E63] transition-colors">Travel Cover</a></li>
              <li><a href="#" className="hover:text-[#E91E63] transition-colors">Education Policy</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-bold text-lg text-white">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#E91E63] flex-shrink-0 mt-1" />
                <span>Sigona Cresent-Tilisi Nairobi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#E91E63] flex-shrink-0" />
                <a href="tel:0796683886" className="hover:text-white transition-colors">0796683886</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#E91E63] flex-shrink-0" />
                <a href="mailto:info@fastidiousinsurenceagency.co.ke" className="hover:text-white transition-colors">info@fastidiousinsurenceagency.co.ke</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Fastidious Insurance Agency. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#E91E63] hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#E91E63] hover:text-white transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#E91E63] hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#E91E63] hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
