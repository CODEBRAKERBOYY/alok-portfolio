export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">Get To Know Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About <span className="text-purple-500">Me</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Left - Avatar */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">
            <div className="w-56 h-56 rounded-2xl border-4 border-purple-500/50 bg-purple-900/20 flex items-center justify-center">
              <span className="text-7xl">👨‍💻</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-purple-400">4+</p>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-purple-400">400+</p>
                <p className="text-gray-400 text-sm">LeetCode</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-purple-400">6+</p>
                <p className="text-gray-400 text-sm">Certificates</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-purple-400">1</p>
                <p className="text-gray-400 text-sm">Internship</p>
              </div>
            </div>
          </div>

          {/* Right - Bio */}
          <div className="flex-1 space-y-6">

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Full Stack AI Engineer & <span className="text-purple-400">Problem Solver</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                I am a final year Computer Science student at <span className="text-white font-medium">Pranveer Singh Institute of Technology, Kanpur</span>. 
                I have a strong passion for building AI-powered full stack applications that solve real world problems.
              </p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              During my internship at <span className="text-purple-400 font-medium">Infosys Springboard</span>, I built KnowMap — 
              an AI-driven knowledge graph system using NLP and Sentence Transformers. 
              I love working with LLMs, RAG pipelines, and modern web technologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I have solved <span className="text-white font-medium">400+ coding problems</span> on LeetCode, 
              earned a <span className="text-white font-medium">5-star C++ badge</span> on HackerRank, 
              and scored in the <span className="text-white font-medium">Top 10% nationwide</span> in eLitmus pH Test.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-purple-400">🎓</span>
                <div>
                  <p className="text-gray-500 text-sm">College</p>
                  <p className="text-white text-sm font-medium">PSIT Kanpur</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">📅</span>
                <div>
                  <p className="text-gray-500 text-sm">Graduation</p>
                  <p className="text-white text-sm font-medium">2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">📍</span>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-white text-sm font-medium">Kanpur, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">📧</span>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-white text-sm font-medium">alok58484@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:alok58484@gmail.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition"
              >
                Contact Me
              </a>
              <a
                href="/Alok_Yadav.pdf"
                download
                className="border border-white/20 hover:border-purple-500 text-white px-6 py-3 rounded-full font-medium transition"
              >
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
