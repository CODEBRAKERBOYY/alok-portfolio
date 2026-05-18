import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-center md:text-left">
          <div className="text-2xl font-bold text-white mb-1">
            AY<span className="text-purple-500">.</span>
          </div>
          <p className="text-gray-500 text-sm">Full Stack AI Engineer</p>
          <p className="text-gray-600 text-xs mt-1">Built with Next.js + Tailwind CSS</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/CODEBRAKERBOYY" target="_blank"
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-purple-500 transition">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/alokyadav06/" target="_blank"
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-purple-500 transition">
            <Linkedin size={18} />
          </a>
          <a href="mailto:alok58484@gmail.com"
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-purple-500 transition">
            <Mail size={18} />
          </a>
        </div>

      </div>

      <div className="text-center mt-8 text-gray-600 text-sm">
        © 2026 Alok Yadav. All rights reserved.
      </div>
    </footer>
  )
}
