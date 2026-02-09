import { useState } from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/services'

export default function ServiceDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  // Group services by category
  const serviceGroups = [
    {
      title: 'Life Products',
      items: servicesData.filter(s => s.category === 'Life Products')
    },
    {
      title: 'Personal Insurance',
      items: servicesData.filter(s => s.category === 'Personal Insurance')
    },
    {
      title: 'Commercial Insurance',
      items: servicesData.filter(s => s.category === 'Commercial Insurance')
    }
  ]

  return (
    <div 
      className="h-12 sm:h-14 flex items-center group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Services Link */}
      <button 
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="nav-link hidden lg:flex items-center gap-1.5 py-2 px-4 rounded-lg hover:bg-slate-50 transition-all text-slate-700 font-medium"
      >
        Services
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Popup - Centered and Responsive */}
      {isOpen && (
          <div 
            className="absolute top-full left-0 right-0 flex justify-center pt-2 z-50 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-300 pointer-events-none"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(46,26,94,0.15)] border border-white/40 overflow-hidden w-[95vw] lg:w-[85vw] max-w-7xl pointer-events-auto">
              {/* Gradient Header */}
              <div 
                className="h-1"
                style={{ background: 'linear-gradient(to right, #2E1A5E, #E91E63)' }}
              ></div>

              {/* Service Groups Grid - Responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {serviceGroups.map((group, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 md:p-5 lg:p-8 ${idx < serviceGroups.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''} border-gray-100/50 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-[${idx * 100}ms]`}
                  >
                    {/* Group Title */}
                    <h3 
                      className="font-semibold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2"
                      style={{ color: '#2E1A5E' }}
                    >
                      <div 
                        className="w-1 h-5 md:h-6 rounded"
                        style={{ backgroundColor: '#E91E63' }}
                      ></div>
                      <span className="text-sm md:text-base">{group.title}</span>
                    </h3>

                    {/* Group Items */}
                    <ul className="space-y-2 md:space-y-2.5">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            to={`/services/${item.id}`}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 hover:text-white hover:bg-[#E91E63] transition-all duration-200 text-xs md:text-sm font-medium w-full text-left px-2 md:px-3 py-1.5 md:py-2 rounded-lg hover:pl-4 md:hover:pl-5 flex items-center gap-2 group/item"
                          >
                            <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">✓</span>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div 
                className="bg-slate-50/80 px-4 md:px-6 py-3 md:py-4 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0"
              >
                <p className="text-xs md:text-sm text-gray-600">
                  Explore all our comprehensive insurance solutions
                </p>
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 font-semibold text-xs md:text-sm transition-all duration-200 whitespace-nowrap"
                  style={{ color: '#E91E63' }}
                >
                  View All Services
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
      )}
    </div>
  )
}
