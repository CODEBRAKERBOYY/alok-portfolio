'use client'
import { useState } from 'react'
import Image from 'next/image'

const certificates = [
  { name: "Infosys Springboard — KnowMap Internship", org: "Infosys", img: "/certificates/infosys.jpeg" },
  { name: "Introduction to Generative AI", org: "Google Cloud", img: "/certificates/google-ai.jpeg" },
  { name: "Introduction to Artificial Intelligence", org: "IBM", img: "/certificates/ibm-ai.jpeg" },
  { name: "ML Pipelines with Azure ML Studio", org: "Coursera", img: "/certificates/ml-azure.jpeg" },
  { name: "Structured Approach to Problem Solving", org: "Fractal Analytics", img: "/certificates/fractal.jpeg" },
  { name: "Vice Lead Certificate", org: "Coding Ninjas", img: "/certificates/coding-ninjas.jpeg" },
  { name: "Micro1 AI Certified", org: "Micro1", img: "/certificates/micro1.jpg" },
  { name: "eLitmus pH Test — 90.12 Percentile", org: "eLitmus", img: "/certificates/elitmus.jpeg" },
]

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experience & <span className="text-purple-500">Education</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-purple-400">💼</span> Experience
            </h3>
            <div className="relative border-l-2 border-purple-500/30 pl-8">
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-white font-bold text-lg">AI Intern</h4>
                      <p className="text-purple-400 font-medium">Infosys Springboard</p>
                    </div>
                    <span className="text-gray-500 text-sm bg-white/5 px-3 py-1 rounded-full">Virtual</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Sep 2025 – Nov 2025</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></span>
                      Built KnowMap — AI-driven knowledge graph using NLP and Sentence Transformers
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></span>
                      Created interactive cross-domain knowledge graph using NetworkX + PyVis
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></span>
                      Deployed Streamlit app via Ngrok for live exploration
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Python", "spaCy", "Sentence-Transformers", "NetworkX", "Streamlit"].map((t) => (
                      <span key={t} className="bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs px-2 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-purple-400">🎓</span> Education
            </h3>
            <div className="relative border-l-2 border-purple-500/30 pl-8 space-y-8">
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition">
                  <h4 className="text-white font-bold text-lg">B.Tech Computer Science</h4>
                  <p className="text-purple-400 font-medium">Pranveer Singh Institute of Technology</p>
                  <p className="text-gray-500 text-sm mt-1">Kanpur, India • 2022 – 2026</p>
                  <p className="text-white font-bold mt-2"></p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-purple-500/50 rounded-full border-4 border-black"></div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition">
                  <h4 className="text-white font-bold text-lg">Senior Secondary (XII)</h4>
                  <p className="text-purple-400 font-medium">Kendriya Vidyalaya</p>
                  <p className="text-gray-500 text-sm mt-1">Kanpur, India • 2020 – 2021</p>
                  <p className="text-white font-bold mt-2"> </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Certificates */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-purple-400">🏆</span> Certificates
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                onClick={() => setSelectedCert(cert.img)}
                className="cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition group"
              >
                <div className="relative w-full h-32 overflow-hidden">
                  <Image
                    src={cert.img}
                    alt={cert.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-3">
                  <p className="text-white text-xs font-medium line-clamp-2">{cert.name}</p>
                  <p className="text-purple-400 text-xs mt-1">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition">
            <p className="text-4xl mb-3">⭐</p>
            <p className="text-white font-bold text-lg">5-Star C++</p>
            <p className="text-gray-400 text-sm mt-1">HackerRank</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition">
            <p className="text-4xl mb-3">💻</p>
            <p className="text-white font-bold text-lg">400+ Problems</p>
            <p className="text-gray-400 text-sm mt-1">LeetCode</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition">
            <p className="text-4xl mb-3">🏅</p>
            <p className="text-white font-bold text-lg">Top 10% Nationwide</p>
            <p className="text-gray-400 text-sm mt-1">eLitmus pH Test</p>
          </div>
        </div>

      </div>

      {/* Image Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative w-full max-w-3xl">
            <Image
              src={selectedCert}
              alt="Certificate"
              width={900}
              height={600}
              className="rounded-xl w-full object-contain"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}

    </section>
  )
}
