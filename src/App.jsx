import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F8F9FF] relative">
        {/* Modern Mesh Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Animated Mesh Blobs - Increased visibility and movement */}
          <div className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] rounded-full bg-[#2E1A5E]/10 blur-[140px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#E91E63]/8 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
          <div className="absolute -bottom-[20%] left-[10%] w-[70%] h-[70%] rounded-full bg-[#2E1A5E]/10 blur-[140px] animate-pulse" style={{ animationDuration: '10s' }} />
          
          {/* Distinct Dot Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.04]" 
            style={{ 
              backgroundImage: `radial-gradient(#2E1A5E 1.5px, transparent 1.5px)`, 
              backgroundSize: '40px 40px' 
            }} 
          />

          {/* Subtle Large Grid Lines Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" 
            style={{ 
              backgroundImage: `linear-gradient(#2E1A5E 0.5px, transparent 0.5px), linear-gradient(to right, #2E1A5E 0.5px, transparent 0.5px)`, 
              backgroundSize: '120px 120px' 
            }} 
          />
          
          {/* Modern Noise/Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}
