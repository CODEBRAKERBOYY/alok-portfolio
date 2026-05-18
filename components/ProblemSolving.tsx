export default function ProblemSolving() {
  return (
    <section id="problemsolving" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">Coding Stats</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Problem <span className="text-purple-500">Solving</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "400+", label: "LeetCode Problems", emoji: "💻" },
            { value: "5⭐", label: "HackerRank C++", emoji: "⭐" },
            { value: "90.12%", label: "eLitmus Percentile", emoji: "🏅" },
            { value: "Top 10%", label: "Nationwide Rank", emoji: "🎯" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition">
              <p className="text-3xl mb-2">{item.emoji}</p>
              <p className="text-2xl font-bold text-purple-400">{item.value}</p>
              <p className="text-gray-400 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href="https://leetcode.com/u/Alok_lc007/" target="_blank"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-500/50 transition block">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💻</span>
              <div>
                <h3 className="text-white font-bold text-lg">LeetCode</h3>
                <p className="text-gray-500 text-sm">@Alok_lc007</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-gray-400 text-sm">Problems Solved</span><span className="text-yellow-400 font-bold">400+</span></div>
              <div className="flex justify-between"><span className="text-gray-400 text-sm">Badges</span><span className="text-yellow-400 font-bold">Knight + SQL</span></div>
              <div className="flex justify-between"><span className="text-gray-400 text-sm">Status</span><span className="text-yellow-400 font-bold">Active</span></div>
            </div>
          </a>

          <a href="https://www.hackerrank.com/" target="_blank"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition block">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⭐</span>
              <div>
                <h3 className="text-white font-bold text-lg">HackerRank</h3>
                <p className="text-gray-500 text-sm">Alok Yadav</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-gray-400 text-sm">C++ Stars</span><span className="text-green-400 font-bold">5 ⭐</span></div>
              <div className="flex justify-between"><span className="text-gray-400 text-sm">Problems</span><span className="text-green-400 font-bold">300+</span></div>
              <div className="flex justify-between"><span className="text-gray-400 text-sm">Badge</span><span className="text-green-400 font-bold">Gold</span></div>
            </div>
          </a>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏅</span>
              <div>
                <h3 className="text-white font-bold text-lg">eLitmus</h3>
                <p className="text-gray-500 text-sm">pH Test</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-gray-400 text-sm">Percentile</span><span className="text-blue-400 font-bold">90.12</span></div>
              <div className="flex justify-between"><span className="text-gray-400 text-sm">Rank</span><span className="text-blue-400 font-bold">Top 10%</span></div>
              <div className="flex justify-between"><span className="text-gray-400 text-sm">Date</span><span className="text-blue-400 font-bold">Sep 2025</span></div>
            </div>
          </div>
        </div>

        {/* GitHub Contribution Graph Only */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🐙</span> GitHub Contributions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Public Repos", value: "40+" },
              { label: "Followers", value: "12" },
              { label: "Stars Earned", value: "4+" },
              { label: "Following", value: "29" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-white/5 rounded-xl p-4">
                <p className="text-2xl font-bold text-purple-400">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden bg-black/30 p-4">
            <img
              src="https://ghchart.rshah.org/9333ea/CODEBRAKERBOYY"
              alt="GitHub Contributions"
              className="w-full"
            />
          </div>
          <p className="text-gray-500 text-sm text-center mt-3">GitHub Contribution Graph</p>
        </div>

      </div>
    </section>
  )
}
