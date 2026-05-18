export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      emoji: "💻",
      skills: ["Python", "JavaScript", "C++", "C", "Java", "TypeScript"]
    },
    {
      title: "Frontend",
      emoji: "🎨",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"]
    },
    {
      title: "Backend",
      emoji: "⚙️",
      skills: ["Node.js", "Express.js", "REST API", "Flask"]
    },
    {
      title: "AI / ML",
      emoji: "🤖",
      skills: ["PyTorch", "TensorFlow", "LLMs", "RAG", "Hugging Face", "spaCy", "Sentence Transformers", "OpenCV"]
    },
    {
      title: "Database",
      emoji: "🗄️",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools & DevOps",
      emoji: "🛠️",
      skills: ["Git", "GitHub", "Postman", "Jupyter", "Vercel", "Streamlit", "CI/CD","AWS", "Azure"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">My <span className="text-purple-500">Skills</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition">
            <p className="text-3xl font-bold text-purple-400">400+</p>
            <p className="text-gray-400 mt-1">LeetCode Problems</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition">
            <p className="text-3xl font-bold text-purple-400">5⭐</p>
            <p className="text-gray-400 mt-1">HackerRank C++</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition">
            <p className="text-3xl font-bold text-purple-400">Top 10%</p>
            <p className="text-gray-400 mt-1">eLitmus pH Test</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition">
            <p className="text-3xl font-bold text-purple-400">6+</p>
            <p className="text-gray-400 mt-1">Certificates</p>
          </div>
        </div>

      </div>
    </section>
  )
}
