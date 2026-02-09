export default function TestimonialCard({ name, role, message, rating }) {
  return (
    <div className="group relative bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/70 hover:border-white/90 shadow-[0_10px_40px_rgba(46,26,94,0.08)] hover:shadow-[0_25px_60px_rgba(233,30,99,0.12)] transition-all duration-500 hover:-translate-y-4 hover:bg-white/80 overflow-hidden">
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          .group:hover::before {
            animation: shimmer 2s infinite;
          }
        `}
      </style>

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 pointer-events-none"></div>

      {/* Animated glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      {/* Stars with enhanced styling */}
      <div className="flex gap-1 mb-5">
        {[...Array(rating)].map((_, i) => (
          <span
            key={i}
            className="text-yellow-400 text-lg md:text-xl transition-transform duration-300 group-hover:scale-110"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote mark accent */}
      <div className="text-3xl text-[#E91E63]/20 mb-2 group-hover:text-[#E91E63]/40 transition-colors duration-300">"</div>

      {/* Message with enhanced typography */}
      <p className="text-gray-700 md:text-base mb-6 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 relative z-10">{message}</p>

      {/* Author info with enhanced styling */}
      <div className="pt-4 border-t border-white/40 group-hover:border-[#E91E63]/20 transition-colors duration-300">
        <p className="font-semibold text-gray-900 text-sm md:text-base group-hover:text-[#E91E63] transition-colors duration-300">{name}</p>
        <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{role}</p>
      </div>
    </div>
  )
}
