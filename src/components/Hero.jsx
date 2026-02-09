export default function Hero({ title, subtitle, cta }) {
  return (
    <div className="text-white py-20 px-4" style={{ background: 'linear-gradient(to right, #2E1A5E, #1a0f3a)' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">{subtitle}</p>
        {cta && (
          <button className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors text-lg" style={{ backgroundColor: '#E91E63' }}>
            {cta}
          </button>
        )}
      </div>
    </div>
  )
}
