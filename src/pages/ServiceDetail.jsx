import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronLeft, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { getServiceById, servicesData, getRelatedServices } from '../data/services'

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const service = getServiceById(serviceId)
  const navigate = useNavigate()
  const scrollContainerRef = useRef(null)
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: true })

  // Get random services excluding current service
  const randomServices = useMemo(() => {
    // Use centralized logic to get related services from other categories first
    const related = getRelatedServices(serviceId, 4);
    // If we need more to fill the 4 slots, grab random ones
    if (related.length < 4) {
      const others = servicesData.filter(s => s.id !== serviceId && !related.find(r => r.id === s.id));
      return [...related, ...others].slice(0, 4);
    }
    return related;
  }, [serviceId])

  // Handle carousel scrolling
  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setScrollState({
        canScrollLeft: scrollLeft > 0,
        canScrollRight: scrollLeft < scrollWidth - clientWidth - 10
      })
    }
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [serviceId, handleScroll])

  const scrollToBenefits = () => {
    const benefitsElement = document.getElementById('benefits-section')
    if (benefitsElement) {
      benefitsElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2E1A5E] mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="bg-[#E91E63] hover:bg-[#d81b5c] text-white font-medium py-3 px-6 rounded-lg inline-block transition-all"
          >
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <div key={serviceId} className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        className="relative text-white py-16 md:py-20 overflow-hidden min-h-[350px] lg:h-[45vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Background Image with Heavy Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
          />
          {/* Heavy gradient overlay for reduced opacity effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A5E]/95 via-[#2E1A5E]/90 to-[#1E0F47]/95"></div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center">
            {/* Description Paragraph */}
            <motion.p
              className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {service.description}
            </motion.p>

            {/* Learn More Button - Small */}
            <motion.button
              onClick={scrollToBenefits}
              className="bg-[#E91E63] hover:bg-[#d81b5c] text-white font-medium py-2 px-6 rounded-lg transition-all inline-flex items-center gap-1 group shadow-md hover:shadow-lg text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              Learn More
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-white via-white to-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Description */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#2E1A5E] mb-2">About {service.name}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#E91E63] to-transparent rounded-full"></div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-8 font-light">
              {service.fullDescription}
            </p>

            {/* Benefits Section */}
            <div className="mt-12" id="benefits-section">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#2E1A5E] mb-2">Key Benefits</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#E91E63] to-transparent rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-3">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-white rounded-lg md:rounded-lg p-3 md:p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    variants={itemVariants}
                    whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    {/* Gradient accent top */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E91E63] to-[#2E1A5E] rounded-t-lg md:rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-8 md:w-9 h-8 md:h-9 rounded-lg bg-gradient-to-br from-[#E91E63] to-[#d81b5c] flex items-center justify-center mt-0.5 group-hover:scale-105 transition-transform duration-300">
                        <Check size={16} className="text-white" />
                      </div>
                      <p className="text-gray-700 font-medium text-xs md:text-sm leading-relaxed pt-0.5 md:pt-0.5">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Sidebar CTA */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="sticky top-32 bg-gradient-to-br from-[#2E1A5E] to-[#E91E63] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6">
                Contact our experts today to customize a plan that fits your needs.
              </p>

              <div className="space-y-3">
                <button className="w-full bg-white text-[#2E1A5E] hover:bg-gray-100 font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 group">
                  Get a Quote
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/contact"
                  className="block w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-4 rounded-lg transition-all text-center border border-white/50"
                >
                  Contact Us
                </Link>
              </div>

              {/* Features List */}
              <div className="mt-8 pt-8 border-t border-white/30 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span className="text-sm text-white/90">Expert guidance available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span className="text-sm text-white/90">Fast approval process</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span className="text-sm text-white/90">24/7 customer support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Explore Other Services Section */}
      {randomServices.length > 0 && (
        <motion.div
          key={`explore-${serviceId}`}
          className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E1A5E] mb-4">Explore Other Services</h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                Discover more comprehensive protection options available from our diverse portfolio
              </p>
            </motion.div>

            {/* Desktop Grid */}
            <motion.div
              className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {randomServices.map((randomService, index) => (
                <Link key={randomService.id} to={`/services/${randomService.id}`}>
                  <motion.div
                    className="group relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                  >
                    <motion.img
                      src={randomService.image}
                      alt={randomService.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6">
                      <div className="text-xs font-semibold text-[#E91E63] uppercase mb-2">
                        {randomService.category}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{randomService.name}</h3>
                      <motion.div
                        className="h-1 bg-[#E91E63] rounded-full"
                        initial={{ width: '2rem' }}
                        whileHover={{ width: '4rem' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Mobile Carousel */}
            <div className="lg:hidden relative group">
              <motion.div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {randomServices.map((randomService) => (
                  <Link
                    key={randomService.id}
                    to={`/services/${randomService.id}`}
                    className="flex-shrink-0 w-72 snap-start"
                  >
                    <motion.div
                      className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
                      whileHover={{ y: -5 }}
                    >
                      <motion.img
                        src={randomService.image}
                        alt={randomService.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Content */}
                      <div className="absolute bottom-6 left-6">
                        <div className="text-xs font-semibold text-[#E91E63] uppercase mb-2">
                          {randomService.category}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{randomService.name}</h3>
                        <motion.div
                          className="h-1 bg-[#E91E63] rounded-full"
                          initial={{ width: '2rem' }}
                          whileHover={{ width: '4rem' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>

              {/* Left Scroll Button - Mobile */}
              <motion.button
                onClick={() => scroll('left')}
                disabled={!scrollState.canScrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-[#E91E63] hover:bg-[#d81557] text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed lg:hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <ChevronLeft size={20} />
              </motion.button>

              {/* Right Scroll Button - Mobile */}
              {scrollState.canScrollRight && (
                <motion.button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-[#E91E63] hover:bg-[#d81557] text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all lg:hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <ChevronRight size={20} />
                </motion.button>
              )}
            </div>

            {/* Back to All Services */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[#E91E63] font-bold text-lg hover:gap-4 transition-all"
              >
                <ChevronLeft size={20} />
                Back to All Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
