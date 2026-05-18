'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="text-xl font-bold text-white">
          AY<span className="text-purple-500">.</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <a
          href="mailto:alok58484@gmail.com"
          className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-full transition"
        >
          Hire Me
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 px-6 py-4 flex flex-col gap-4 text-gray-300 text-sm">

          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>

          <a href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </a>

          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>

          <a
            href="mailto:alok58484@gmail.com"
            className="text-purple-400"
          >
            Hire Me
          </a>

        </div>
      )}
    </nav>
  )
}