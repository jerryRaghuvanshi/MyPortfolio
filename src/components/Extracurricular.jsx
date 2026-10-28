import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiBook, FiActivity, FiGlobe, FiCode } from 'react-icons/fi';
import { FaLaptopCode, FaRunning, FaChalkboardTeacher } from 'react-icons/fa';

const Extracurricular = () => {
  const activities = [
    {
      title: "Algorithmic Mentorship & Code Sharing",
      organization: "Developer Communities",
      description: "Sharing clean Java solutions, algorithm explanations, and test case analyses across LeetCode and peer programming groups.",
      icon: <FaChalkboardTeacher className="w-5 h-5 text-indigo-500" />,
      tag: "Community"
    },
    {
      title: "Hackathons & Technical Contests",
      organization: "Collegiate & Online Challenges",
      description: "Participating in timed coding sprints, hackathons, and algorithmic problem-solving contests to sharpen architectural speed under pressure.",
      icon: <FaLaptopCode className="w-5 h-5 text-cyan-500" />,
      tag: "Competition"
    },
    {
      title: "Continuous Tech Research & Seminars",
      organization: "Distributed Systems & Cloud",
      description: "Attending tech talks, reading technical papers on low-latency messaging, WebRTC optimization, and database scaling.",
      icon: <FiGlobe className="w-5 h-5 text-emerald-500" />,
      tag: "Learning"
    },
    {
      title: "Athletics & Physical Fitness",
      organization: "Personal Discipline",
      description: "Committed to regular endurance running and athletic training to cultivate focus, stamina, mental clarity, and discipline.",
      icon: <FaRunning className="w-5 h-5 text-amber-500" />,
      tag: "Wellness"
    },
    {
      title: "Philosophical & Reflective Reading",
      organization: "Mindset & Growth",
      description: "Dedicated reader of classical literature and spiritual texts, maintaining equilibrium, clear perspective, and ethical rigor.",
      icon: <FiBook className="w-5 h-5 text-purple-500" />,
      tag: "Mindset"
    },
    {
      title: "Open Source Collaboration",
      organization: "GitHub Ecosystem",
      description: "Building open tools, publishing modular Spring Boot boilerplates, and contributing to software projects.",
      icon: <FiCode className="w-5 h-5 text-blue-500" />,
      tag: "Open Source"
    }
  ];

  return (
    <section className="min-h-screen py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 text-xs font-semibold text-indigo-600 dark:text-cyan-400 mb-4">
            <FiActivity className="w-3.5 h-3.5" />
            <span>Beyond The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Extracurricular &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-cyan-400">Pursuits</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A balanced approach to engineering: athletic discipline, community contribution, and intellectual curiosity.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 p-6 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-950/40 hover:border-indigo-400 dark:hover:border-indigo-500/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/60">
                    {activity.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-cyan-400">
                    {activity.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {activity.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {activity.organization}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60"
        >
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
            "Balancing distributed systems engineering with athletic discipline and intellectual depth provides the stamina and clarity to build robust, resilient architectures."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Extracurricular;
