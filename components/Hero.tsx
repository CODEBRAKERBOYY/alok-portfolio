'use client'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const titles = ["Full Stack Developer", "AI Engineer", "ML Engineer", "Problem Solver"]

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const title = titles[currentTitle]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(title.substring(0, displayed.length + 1))
        if (displayed.length === title.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayed(title.substring(0, displayed.length - 1))
        if (displayed.length === 0) {
          setIsDeleting(false)
          setCurrentTitle((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, currentTitle])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="flex-1 space-y-6">

          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Open to Work
          </div>

          <div>
            <p className="text-gray-400 text-lg mb-2">Hello I am</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Alok <span className="text-purple-500">Yadav</span>
            </h1>
          </div>

          <div className="text-2xl md:text-3xl font-semibold text-gray-300 h-10">
            <span className="text-purple-400">{displayed}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Final year CS student at PSIT Kanpur. Building AI-powered full stack apps.
            Passionate about LLMs, RAG pipelines and solving real world problems with code.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition">
              View Projects
            </a>
            <a href="/Alok_Yadav.pdf" download className="border border-white/20 hover:border-purple-500 text-white px-6 py-3 rounded-full font-medium transition">
              Download CV
            </a>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/CODEBRAKERBOYY" target="_blank" className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-purple-500 transition">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/alokyadav06/" target="_blank" className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-purple-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:alok58484@gmail.com" className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-purple-500 transition">
              <Mail size={20} />
            </a>
          </div>

        </div>

        {/* Right Side - Real Photo */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-purple-500/50 overflow-hidden relative">
            <Image
              src="/images/alok.jpg"
              alt="Alok Yadav"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
