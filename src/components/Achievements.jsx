import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const Achievements = () => {
  const certificationsAndMilestones = [
    {
      id: "tcs-nqt",
      title: "TCS iON NQT - IT Examination",
      issuer: "Tata Consultancy Services (TCS iON)",
      score: "81.22% Overall",
      date: "2026",
      featured: true,
      breakdown: [
        { label: "Overall Score", value: "81.22%" },
        { label: "Cognitive Score", value: "83.60%" },
        { label: "Java Programming", value: "82.39%" }
      ],
      description: "Demonstrated national-level proficiency in advanced Java programming, logical problem solving, algorithmic reasoning, and quantitative aptitude."
    },
    {
      id: "leetcode",
      title: "450+ Algorithmic Problems Solved",
      issuer: "LeetCode",
      score: "450+ Problems",
      profileUrl: "https://leetcode.com/u/JayRaghuvanshi/",
      date: "Ongoing",
      featured: true,
      breakdown: [
        { label: "Total Solved", value: "450+" },
        { label: "Core Topics", value: "DP, Graphs, Trees, Heaps" },
        { label: "Language", value: "Java 21" }
      ],
      description: "Consistent problem solver tackling complex algorithmic paradigms: dynamic programming, graph traversal, greedy techniques, sliding windows, and binary search trees."
    },
    {
      id: "quiz-runner-up",
      title: "Tech Quiz Competition Runner-Up",
      issuer: "College Tech Fest",
      score: "2nd Place",
      date: "2023",
      featured: false,
      breakdown: [
        { label: "Event", value: "Annual Tech Fest" },
        { label: "Domain", value: "CS Fundamentals & Tech" }
      ],
      description: "Achieved Runner-Up position in an intensive multi-round technical quiz covering operating systems, DBMS, data structures, and computer networking."
    },
    {
      id: "codechef",
      title: "Active Competitive Programming Contender",
      issuer: "CodeChef",
      score: "Contest Rating",
      profileUrl: "https://www.codechef.com/users/jayraghuvansh1",
      date: "Ongoing",
      featured: false,
      breakdown: [
        { label: "Platform", value: "CodeChef" },
        { label: "Handle", value: "jayraghuvansh1" }
      ],
      description: "Regularly competing in rated programming rounds, analyzing competitive optimization techniques, and crafting time- and space-efficient algorithms."
    }
  ];

  return (
    <section className="min-h-screen py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 text-xs font-semibold text-indigo-600 dark:text-cyan-400 mb-4">
            <FiAward className="w-3.5 h-3.5" />
            <span>Honors &amp; Verified Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Certifications &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-cyan-400">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Validated technical assessment scores, competitive programming problem solving, and honors.
          </p>
        </div>

        {/* Featured Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certificationsAndMilestones.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 border flex flex-col justify-between ${
                item.featured
                  ? 'bg-gradient-to-br from-white to-indigo-50/30 dark:from-slate-800 dark:to-slate-900 border-indigo-200/80 dark:border-indigo-500/40 shadow-lg dark:shadow-indigo-950/40'
                  : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-cyan-400">
                      {item.id === 'leetcode' ? (
                        <SiLeetcode className="w-5 h-5 text-amber-500" />
                      ) : item.id === 'codechef' ? (
                        <SiCodechef className="w-5 h-5 text-orange-500" />
                      ) : (
                        <FiAward className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {item.issuer}
                    </span>
                  </div>

                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                    {item.score}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Score breakdown metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                  {item.breakdown.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-200/60 dark:border-slate-700/40"
                    >
                      <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        {stat.label}
                      </span>
                      <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link if present */}
              {item.profileUrl && (
                <a
                  href={item.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-700/70 dark:hover:bg-slate-700 text-indigo-600 dark:text-cyan-400 font-semibold text-xs transition-colors"
                >
                  <span>Verify Public Profile</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Highlight Summary Banner */}
        <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-indigo-500/20 text-cyan-400 border border-indigo-400/30">
              <FiTrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">450+ LeetCode Algorithms &amp; TCS iON Certified</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Consistently refining competitive coding abilities and distributed system scalability.
              </p>
            </div>
          </div>

          <a
            href="https://leetcode.com/u/JayRaghuvanshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-md transition-all whitespace-nowrap"
          >
            <span>Visit LeetCode Profile</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
