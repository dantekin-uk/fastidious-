import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Menu, ArrowRight, Phone, Shield } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import ServiceDropdown from './ServiceDropdown'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header>
      <motion.div 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-white/90 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group active:scale-95 transition-transform">
            <motion.img 
              src="/assets/logo.png" 
              alt="Fastidous" 
              className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-2 items-center">
            <Link
              to="/"
              className="nav-link px-4 py-2 rounded-lg hover:bg-slate-50 transition-all text-slate-700 font-medium text-sm"
            >
              Home
            </Link>

            {/* Services with Dropdown */}
            <ServiceDropdown />

            <Link
              to="/about"
              className="nav-link px-4 py-2 rounded-lg hover:bg-slate-50 transition-all text-slate-700 font-medium text-sm"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="nav-link px-4 py-2 rounded-lg hover:bg-slate-50 transition-all text-slate-700 font-medium text-sm"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button
            className="hidden lg:block text-white px-5 py-1.5 rounded-xl hover:shadow-[0_8px_20px_rgba(233,30,99,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all font-semibold text-sm"
            style={{
              backgroundColor: '#E91E63',
            }}
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative z-[80] p-2 rounded-xl transition-colors ${
                isMenuOpen ? 'bg-slate-100' : 'hover:bg-[#E91E63]/10'
              }`}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-[#2E1A5E]" />
              ) : (
                <Menu size={24} className="text-[#2E1A5E]" />
              )}
            </button>
          </div>
        </div>
      </div>
      </motion.div>

      {/* Modern Floating Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop to dim the background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-md lg:hidden"
            />

            <motion.div 
              initial={{ x: '20%', opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: '20%', opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-2 right-2 z-[70] w-[calc(100%-1rem)] max-w-[250px] h-fit max-h-[calc(100vh-1rem)] bg-white lg:hidden flex flex-col rounded-2xl shadow-[0_30px_70px_rgba(46,26,94,0.25)] border border-slate-100 overflow-hidden"
            >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="flex flex-col p-6 pt-10 gap-4 relative z-10">
              <div className="space-y-0.5">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4"
                >
                  Menu
                </motion.p>
                
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-semibold text-[#2E1A5E] hover:text-[#E91E63] transition-all flex items-center justify-between group p-3 -mx-3 rounded-xl hover:bg-slate-50 active:bg-slate-100"
                    >
                      <span>{link.name}</span>
                      <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#E91E63]" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (navLinks.length * 0.1), duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
                  className="pt-4"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-[#E91E63] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-3 shadow-[0_10px_25px_-5px_rgba(233,30,99,0.3)] active:scale-[0.98] transition-all">
                      Get Quote <ArrowRight size={16} />
                    </button>
                  </Link>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 pt-6 border-t border-slate-100 mt-auto"
              >
                <div className="text-center space-y-2">
                  <p className="text-slate-400 text-xs font-medium tracking-wide flex items-center justify-center gap-2">
                    <Shield size={14} className="text-[#E91E63]" />
                    Licensed by IRA Kenya.
                  </p>
                 
                </div>
              </motion.div>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
