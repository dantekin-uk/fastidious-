import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/services'
import servicesHero from '../../assets/hero/serviceshero.jpg'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

const ServiceCard = ({ item, index, isGrid = false }) => (
  <Link to={`/services/${item.id}`} className={`flex-shrink-0 ${isGrid ? 'w-full' : 'w-[85vw] sm:w-80'} snap-start snap-always`}>
    <motion.div
      className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: index * 0.05
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Main Image */}
      <motion.img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Text Overlay */}
      <motion.div
        className="absolute bottom-6 left-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.3 + (index * 0.1)
          }
        }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
        <motion.div
          className="h-1 bg-[#E91E63] rounded-full"
          initial={{ width: '2rem' }}
          whileHover={{ width: '4rem' }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  </Link>
);

const ScrollableServiceGroup = ({ title, desc, items, id, index, scrollState, onScroll, onButtonClick, onBrowseCategory }) => {
  const state = scrollState[id] || { canScrollLeft: false, canScrollRight: true }
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  return (
    <motion.section 
      id={id}
      className="py-20 border-b border-slate-100 last:border-0 overflow-hidden"
      initial="hidden"
      animate={controls}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.05
          }
        }
      }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div className="w-full lg:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2E1A5E] mb-4 md:mb-6">{title}</h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 md:mb-8">{desc}</p>
            <button onClick={onBrowseCategory} className="text-[#E91E63] font-bold text-sm md:text-base flex items-center gap-2 hover:gap-4 transition-all">
              Browse Category <ChevronRight size={20} />
            </button>
          </motion.div>

          <div className="w-full lg:w-2/3 relative group">
            <motion.div
              id={`scroll-${id}`}
              onScroll={onScroll}
              className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-6 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none', scrollPaddingLeft: '1rem' }}
            >
              {items.map((item, idx) => (
                <ServiceCard key={idx} item={item} index={idx} />
              ))}
            </motion.div>

            <button
              type="button"
              onClick={() => onButtonClick('left')}
              disabled={!state.canScrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 bg-[#E91E63] text-white p-2 md:p-3 rounded-full shadow-lg disabled:opacity-0 hidden md:flex active:scale-95 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => onButtonClick('right')}
              disabled={!state.canScrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 bg-[#E91E63] text-white p-2 md:p-3 rounded-full shadow-lg disabled:opacity-0 hidden md:flex active:scale-95 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default function Services() {
  const scrollContainerRef = useRef(null)
  const [scrollState, setScrollState] = useState({})
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const updateScrollState = useCallback((id) => {
    const container = document.getElementById(`scroll-${id}`)
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container
      setScrollState(prev => ({
        ...prev,
        [id]: {
          canScrollLeft: scrollLeft > 0,
          canScrollRight: scrollLeft < scrollWidth - clientWidth - 10
        }
      }))
    }
  }, [])

  const handleScroll = (id) => {
    updateScrollState(id)
  }

  const scroll = (id, direction) => {
    const container = document.getElementById(`scroll-${id}`)
    if (container) {
      const scrollAmount = window.innerWidth < 768 ? container.clientWidth * 0.85 : 400
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      // Update scroll state after scroll completes
      setTimeout(() => updateScrollState(id), 500)
    }
  }

  // Initialize scroll state for all containers on mount and window resize
  useEffect(() => {
    const initializeScrollStates = () => {
      ['life-products', 'personal-insurance', 'commercial-insurance'].forEach(id => {
        updateScrollState(id)
      })
    }

    initializeScrollStates()
    window.addEventListener('resize', initializeScrollStates)
    return () => window.removeEventListener('resize', initializeScrollStates)
  }, [updateScrollState])

  const categories = ['All', 'Life Products', 'Personal Insurance', 'Commercial Insurance'];

  // Get services by category from centralized data
  const lifeProductsItems = servicesData.filter(s => s.category === 'Life Products');
  const personalInsuranceItems = servicesData.filter(s => s.category === 'Personal Insurance');
  const commercialInsuranceItems = servicesData.filter(s => s.category === 'Commercial Insurance');

  // Filter items based on search query
  const filterBySearch = (items) => items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLife = filterBySearch(lifeProductsItems);
  const filteredPersonal = filterBySearch(personalInsuranceItems);
  const filteredCommercial = filterBySearch(commercialInsuranceItems);
  
  // Global results for search view
  const allFilteredResults = filterBySearch(servicesData);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Modern & Compact */}
      <motion.div
        className="relative text-white py-16 md:py-20 overflow-hidden border-b border-gray-100 min-h-[400px] md:min-h-[450px] lg:h-[55vh] flex items-center justify-center md:justify-start"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
        }}
      >
        {/* Background Image with Subtle Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={servicesHero}
            alt="Insurance Services"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 30%' }}
            initial={{ scale: 1.05 }}
            animate={{ 
              scale: 1,
              transition: { duration: 8, ease: [0.16, 1, 0.3, 1] }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A5E]/80 to-[#1E0F47]/80"></div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto md:mx-0">

            <motion.p
              className="text-base md:text-lg lg:text-xl font-medium text-white mb-6 md:mb-8 text-center md:text-left leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.1, duration: 0.4 }
              }}
            >
              Comprehensive group life insurance coverage designed for organizations seeking to provide financial protection for their employees and their families.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2, duration: 0.4 }
              }}
            >
            <button
              onClick={() => {
                setActiveFilter('All');
                setTimeout(() => {
                  document.getElementById('personal-insurance')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-[#E91E63] hover:bg-[#d81b5c] text-white font-semibold py-3 px-8 rounded-full text-base transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
              Read More
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Filter Bar - Sticky below header */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-start gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    activeFilter === cat
                      ? 'bg-[#2E1A5E] text-white shadow-lg shadow-purple-900/20 scale-100 md:scale-105'
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-[#2E1A5E]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full">
              <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 md:pl-11 pr-4 py-2 md:py-2.5 bg-slate-50 border border-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#E91E63]/20 focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="py-12">
        <AnimatePresence mode="wait">
          {searchQuery ? (
            <motion.div 
              key="search-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-4 md:px-6"
            >
              {allFilteredResults.length > 0 ? (
                <>
                  <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2E1A5E]">Search Results</h2>
                    <p className="text-slate-500 text-sm md:text-base mt-1">
                      Found {allFilteredResults.length} {allFilteredResults.length === 1 ? 'service' : 'services'} matching "{searchQuery}"
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allFilteredResults.map((item, idx) => (
                      <ServiceCard key={item.id} item={item} index={idx} isGrid={true} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-20">
                  <p className="text-slate-400 text-lg">No services found matching "{searchQuery}"</p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-[#E91E63] font-bold hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div key="categorized-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {(activeFilter === 'All' || activeFilter === 'Life Products') && filteredLife.length > 0 && (
                <ScrollableServiceGroup
                  key="life"
                  title="Life Products"
                  desc="Secure your family's future with our comprehensive life insurance solutions that provide financial protection and peace of mind."
                  items={filteredLife}
                  id="life-products"
                  index={0}
                  scrollState={scrollState}
                  onScroll={() => handleScroll('life-products')}
                  onButtonClick={(dir) => scroll('life-products', dir)}
                  onBrowseCategory={() => setActiveFilter('Life Products')}
                />
              )}

              {(activeFilter === 'All' || activeFilter === 'Personal Insurance') && filteredPersonal.length > 0 && (
                <ScrollableServiceGroup
                  key="personal"
                  title="Personal Insurance"
                  desc="Protect what matters most with our personal insurance options, from your home to your vehicle and beyond."
                  items={filteredPersonal}
                  id="personal-insurance"
                  index={1}
                  scrollState={scrollState}
                  onScroll={() => handleScroll('personal-insurance')}
                  onButtonClick={(dir) => scroll('personal-insurance', dir)}
                  onBrowseCategory={() => setActiveFilter('Personal Insurance')}
                />
              )}

              {(activeFilter === 'All' || activeFilter === 'Commercial Insurance') && filteredCommercial.length > 0 && (
                <ScrollableServiceGroup
                  key="commercial"
                  title="Commercial Insurance"
                  desc="Comprehensive protection for businesses of all sizes, covering property, liability, and employee benefits."
                  items={filteredCommercial}
                  id="commercial-insurance"
                  index={2}
                  scrollState={scrollState}
                  onScroll={() => handleScroll('commercial-insurance')}
                  onButtonClick={(dir) => scroll('commercial-insurance', dir)}
                  onBrowseCategory={() => setActiveFilter('Commercial Insurance')}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      {/* <section className="relative py-24 bg-gradient-to-r from-[#2E1A5E] to-[#E91E63] text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Custom Coverage?</h3>
          <p className="text-white/90 text-lg mb-8">Our experts are ready to create the perfect insurance solution for your unique needs.</p>
          <button className="text-white px-8 py-4 rounded-xl font-bold bg-white/20 hover:bg-white/30 transition-all border border-white/50 hover:border-white backdrop-blur-md">
            Contact Our Experts
          </button>
        </div>
      </section> */}
    </div>
  )
}
