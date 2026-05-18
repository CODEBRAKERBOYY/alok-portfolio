import { Github } from 'lucide-react'

const projects = [
  {
    title: "IoT Patient Health Monitor",
    emoji: "🏥",
    description: "Complete end-to-end IoT health monitoring system. Collects patient vitals via hardware sensors, transmits wirelessly via SIM900A GSM, detects anomalies using Isolation Forest ML model, and displays live readings on a Streamlit dashboard.",
    tech: ["Python", "Streamlit", "Flask", "ML", "Arduino", "ESP32", "scikit-learn"],
    github: "https://github.com/CODEBRAKERBOYY",
    date: "Final Year Project — 2026",
    badge: "🏆 Final Year Project",
    highlights: [
      "Real-time vitals: BPM, SpO₂, Body Temp, Humidity",
      "Isolation Forest ML — 90%+ anomaly detection",
      "SMS alerts via SIM900A GSM every 30 seconds",
      "Live cloud IoT dashboard with charts"
    ]
  },
  {
    title: "Greenhouse Tracker",
    emoji: "🌱",
    description: "AI-powered job tracking platform with REST APIs for authentication, application management, and analytics. Integrated LLM APIs for resume analysis and cover letter generation.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Groq API"],
    github: "https://github.com/CODEBRAKERBOYY",
    date: "Feb 2026 – Mar 2026",
    badge: "",
    highlights: [
      "REST APIs for auth & analytics",
      "LLM-powered resume analysis",
      "Real-time dashboard with charts"
    ]
  },
  {
    title: "Blackbox Recruiter",
    emoji: "🤖",
    description: "AI-powered resume screening system using Llama 3.3 70B for JD matching and ATS optimization. Implemented prompt engineering with structured JSON outputs for sub-3s real-time analysis.",
    tech: ["React", "Groq API", "Llama 3.3 70B", "Tailwind CSS", "Vercel"],
    github: "https://github.com/CODEBRAKERBOYY",
    date: "Jan 2026",
    badge: "",
    highlights: [
      "Llama 3.3 70B for JD matching",
      "Sub-3s real-time analysis",
      "PDF/TXT upload support"
    ]
  },
  {
    title: "KnowMap",
    emoji: "🗺️",
    description: "AI-driven system that extracts key concepts across domains using NLP and Sentence Transformer embeddings. Created an interactive cross-domain knowledge graph using NetworkX + PyVis.",
    tech: ["Python", "spaCy", "Sentence-Transformers", "NetworkX", "PyVis", "Streamlit"],
    github: "https://github.com/CODEBRAKERBOYY",
    date: "Sep 2025 – Nov 2025",
    badge: "🏢 Infosys Internship",
    highlights: [
      "NLP concept extraction",
      "Interactive knowledge graph",
      "Deployed via Streamlit + Ngrok"
    ]
  },
  {
    title: "Glaucoma Detection Model",
    emoji: "👁️",
    description: "ViT-based glaucoma classifier achieving 90%+ accuracy. Improved preprocessing with CLAHE + normalization to reduce false positives. Utilized TPU acceleration to cut training time.",
    tech: ["Python", "PyTorch", "ViT-B16", "OpenCV", "Google Colab"],
    github: "https://github.com/CODEBRAKERBOYY",
    date: "Apr 2024 – Jun 2024",
    badge: "",
    highlights: [
      "90%+ accuracy",
      "CLAHE preprocessing",
      "TPU acceleration — 30 min training"
    ]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">What I Have Built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">My <span className="text-purple-500">Projects</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.emoji}</span>
                  <div>
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <p className="text-gray-500 text-sm">{project.date}</p>
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-purple-500 transition"
                >
                  <Github size={16} />
                </a>
              </div>

              {/* Badge */}
              {project.badge && (
                <span className="self-start bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs px-3 py-1 rounded-full">
                  {project.badge}
                </span>
              )}

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-1">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></span>
                    {h}
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/CODEBRAKERBOYY"
            target="_blank"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-purple-500 text-white px-8 py-3 rounded-full font-medium transition"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}
