import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-4">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-[#E91E63] text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
            <HelpCircle size={18} />
          </div>
          <span className={`font-bold transition-colors ${isOpen ? 'text-[#E91E63]' : 'text-[#2E1A5E]'}`}>
            {question}
          </span>
        </div>
        <ChevronDown 
          size={20} 
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#E91E63]' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-12 text-slate-500 text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I get an insurance quote?",
      answer: "You can get an instant quote by selecting your preferred product in our floating dock at the top of the page, or by visiting our contact page and filling out the form. Our experts will get back to you within minutes."
    },
    {
      question: "How long does it take to get my digital certificate?",
      answer: "For most motor and travel policies, we provide digital certificates via WhatsApp or Email within 20 minutes of payment confirmation, even on weekends."
    },
    {
      question: "What happens if I need to make a claim?",
      answer: "We offer 24/7 claims support. Simply call our dedicated line at 0796683886, and our team will guide you through the documentation and negotiate with the underwriter on your behalf to ensure a smooth payout."
    },
    {
      question: "Is Fastidious Insurance Agency licensed?",
      answer: "Yes, we are fully licensed and regulated by the Insurance Regulatory Authority (IRA) of Kenya. We partner only with top-tier, reputable underwriters to ensure your protection is secure."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#E91E63] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#2E1A5E]">
            Frequently Asked <span className="text-[#E91E63]">Questions.</span>
          </h2>
          <div className="w-12 h-1 bg-[#E91E63] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-slate-50/30 rounded-[2.5rem] p-4 md:p-8 border border-slate-100">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;