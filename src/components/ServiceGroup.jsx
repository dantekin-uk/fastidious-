import React from 'react'
import { ArrowRight } from 'lucide-react'

const ServiceGroup = ({ title, desc, items }) => (
  <section className="py-20 border-b border-slate-100 last:border-0">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* LEFT: TEXT DESCRIPTION */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-bold text-[#2E1A5E] mb-6">{title}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            {desc}
          </p>
          <button className="text-[#E91E63] font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Browse Category <ArrowRight size={20} />
          </button>
        </div>

        {/* RIGHT: IMAGE CARDS GRID */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Main Image */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                <div className="w-10 h-1 bg-[#E91E63] rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
)

export default ServiceGroup
