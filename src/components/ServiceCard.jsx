export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:shadow-[0_20px_40px_rgba(46,26,94,0.05)] transition-all hover:-translate-y-1.5 group">
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
