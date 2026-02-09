import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const inputClasses = "w-full bg-white/60 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#E91E63]/50 focus:border-[#E91E63] outline-none font-medium text-slate-700 transition-all focus:bg-white shadow-sm placeholder:text-slate-400";
  const labelClasses = "text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-4 mb-1.5 block";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="07XX XXX XXX"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="How can we help?"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className={labelClasses}>Your Message</label>
        <textarea
          name="message"
          placeholder="Tell us more about your requirements..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className={`${inputClasses} resize-none`}
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full lg:w-auto bg-[#E91E63] hover:bg-[#d81557] text-white px-12 py-4 rounded-2xl font-bold shadow-[0_10px_25px_-5px_rgba(233,30,99,0.3)] transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group"
        >
          Send Message
          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </form>
  )
}
