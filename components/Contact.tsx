'use client'
import { useState } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    const { name, email, message } = formData
    const mailtoLink = `mailto:alok58484@gmail.com?subject=Message from ${name}&body=${message}%0A%0AFrom: ${name}%0AEmail: ${email}`
    window.open(mailtoLink)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Contact <span className="text-purple-500">Me</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let us work together!</h3>
              <p className="text-gray-400 leading-relaxed">
                I am currently open to new opportunities. Whether you have a project, 
                a job offer, or just want to say hi — my inbox is always open!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                  <Mail size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a href="mailto:alok58484@gmail.com" className="text-white hover:text-purple-400 transition">
                    alok58484@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                  <Phone size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <a href="tel:+917379916708" className="text-white hover:text-purple-400 transition">
                    +91 7379916708
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                  <MapPin size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-white">Kanpur, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/CODEBRAKERBOYY"
                target="_blank"
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-purple-500 text-white px-4 py-3 rounded-xl transition"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alokyadav06/"
                target="_blank"
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-purple-500 text-white px-4 py-3 rounded-xl transition"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>

          </div>

          {/* Right - Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Your Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Message</label>
              <textarea
                rows={5}
                placeholder="Hello Alok, I would like to..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium transition flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {sent ? 'Message Sent! 🎉' : 'Send Message'}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
