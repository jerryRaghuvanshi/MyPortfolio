import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiBookOpen, FiAward, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';

const Education = () => {
  const [activeTab, setActiveTab] = useState('btech');

  const educationList = [
    {
      id: 'btech',
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur",
      duration: "2023 – 2027",
      status: "Currently Pursuing (Undergraduate)",
      location: "Kanpur, Uttar Pradesh",
      grade: "B.Tech CSE",
      description: "Rigorous curriculum centered on computer science fundamentals, low-level architecture, systems programming, and high-performance software engineering.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Operating Systems & Concurrency",
        "Object-Oriented Programming (OOP)",
        "Computer Networks & Protocols",
        "System Design & Architecture"
      ]
    },
    {
      id: 'twelfth',
      degree: "Intermediate / Senior Secondary (Class XII)",
      institution: "U.P. State Board of High School & Intermediate Education",
      duration: "2021 – 2022",
      status: "Completed",
      location: "Uttar Pradesh",
      grade: "72.3%",
      description: "Focused on core science discipline: Physics, Chemistry, and Advanced Mathematics.",
      coursework: [
        "Advanced Mathematics",
        "Physics",
        "Chemistry",
        "English"
      ]
    },
    {
      id: 'tenth',
      degree: "High School (Class X)",
      institution: "U.P. State Board of High School & Intermediate Education",
      duration: "2019 – 2020",
      status: "Completed with Distinction",
      location: "Uttar Pradesh",
      grade: "86.5%",
      description: "Comprehensive foundational education with strong performance across science and mathematics.",
      coursework: [
        "Mathematics",
        "Science",
        "Social Sciences",
        "English",
        "Hindi"
      ]
    }
  ];

  return (
    <section className="min-h-screen py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 text-xs font-semibold text-indigo-600 dark:text-cyan-400 mb-4">
            <FiBookOpen className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-cyan-400">Coursework</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Solid foundations in computer science theory, systems architecture, and mathematical problem solving.
          </p>
        </div>

        {/* Education Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {educationList.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === item.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {item.degree.includes('Bachelor') ? 'B.Tech CS' : item.degree.includes('Intermediate') ? 'Class XII' : 'Class X'}
            </button>
          ))}
        </div>

        {/* Active Education Card */}
        {educationList
          .filter(e => e.id === activeTab)
          .map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-6 sm:p-10 shadow-xl dark:shadow-indigo-950/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-700/60">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-md bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                      {edu.status}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200/60 dark:border-emerald-800/40">
                      Score: {edu.grade}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 font-medium">
                    <FiCalendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <FiMapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="py-6">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {edu.description}
                </p>

                <div>
                  <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">
                    Key Coursework &amp; Subject Areas
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {edu.coursework.map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-200/50 dark:border-slate-700/40 text-xs font-medium text-slate-800 dark:text-slate-200"
                      >
                        <FiCheck className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Quick summary of all 3 for mobile & print convenience */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              onClick={() => setActiveTab(edu.id)}
              className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                activeTab === edu.id
                  ? 'border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/20'
                  : 'border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-800/40 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-indigo-600 dark:text-cyan-400">{edu.duration}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">{edu.grade}</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{edu.degree}</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{edu.institution}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
