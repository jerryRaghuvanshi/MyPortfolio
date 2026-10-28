import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiDownload, FiArrowRight, FiExternalLink, FiTerminal, FiAward, FiCode, FiCpu, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiRedis, SiRabbitmq, SiDocker, SiLeetcode } from 'react-icons/si';
import logo from '/assets/myImg.jpeg';

const About = () => {
  const highlights = [
    { label: 'LeetCode Solved', value: '450+', icon: <SiLeetcode className="text-amber-500" /> },
    { label: 'TCS iON NQT', value: '81.22%', icon: <FiAward className="text-indigo-500" /> },
    { label: 'Flagship Platform', value: 'strangle.in', icon: <FiCpu className="text-cyan-500" /> },
    { label: 'Education', value: 'B.Tech CS (CSJMU)', icon: <FiCode className="text-emerald-500" /> },
  ];

  const coreTags = [
    { name: 'Java 21', icon: <FaJava className="text-red-500" /> },
    { name: 'Spring Boot 3', icon: <SiSpringboot className="text-emerald-500" /> },
    { name: 'Distributed Systems', icon: <FiCpu className="text-indigo-400" /> },
    { name: 'WebRTC & STOMP', icon: <FiTerminal className="text-cyan-400" /> },
    { name: 'Redis (Lua/Locks)', icon: <SiRedis className="text-red-500" /> },
    { name: 'RabbitMQ', icon: <SiRabbitmq className="text-orange-500" /> },
    { name: 'Docker & AWS EC2', icon: <SiDocker className="text-blue-400" /> },
  ];

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center py-12 md:py-20 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Text column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-slate-800/80 border border-indigo-200/60 dark:border-slate-700/60 text-xs font-medium text-indigo-700 dark:text-cyan-400 w-fit mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Backend Engineering Roles & Collaborations</span>
            </div>

            {/* Main Greeting / Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-cyan-400">
                Jay Singh
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              Backend Engineer &amp; Distributed Systems Specialist
            </p>

            {/* Resume Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Computer Science undergraduate at CSJMU Kanpur specializing in backend engineering, distributed architectures, and real-time systems. Creator and developer of <a href="https://strangle.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-cyan-400 font-semibold underline decoration-indigo-400/50 hover:decoration-indigo-400">Strangle (strangle.in)</a>, a production-grade voice/video platform powered by Java 21, Spring Boot, WebRTC, Redis, RabbitMQ, and AWS EC2.
            </p>

            {/* Core Tech Tags */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {coreTags.map((tag) => (
                <div
                  key={tag.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:border-indigo-400 transition-colors"
                >
                  <span className="text-sm">{tag.icon}</span>
                  <span>{tag.name}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="/Jay_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300/70 dark:border-slate-700/70 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <FiArrowRight className="w-4 h-4 text-indigo-500" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 font-medium text-sm transition-colors"
              >
                <FiMail className="w-4 h-4" />
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              {highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                    {h.icon}
                    <span>{h.label}</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {h.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right / Photo & Featured Card column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative background border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-30 dark:opacity-40 animate-pulse transition-opacity" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl">
                {/* Photo container */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-slate-100 dark:bg-slate-800 shadow-inner group">
                  <img
                    src={logo}
                    alt="Jay Singh"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay badge on image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold tracking-wide">Jay Singh</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-600/80 backdrop-blur-sm text-[11px]">CSJMU '27</span>
                  </div>
                </div>

                {/* Flagship Product Banner Inside Card */}
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-indigo-950/70 to-slate-900 border border-indigo-500/30 text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Flagship Project</span>
                    </div>
                    <a
                      href="https://strangle.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      <span>strangle.in</span>
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    Production real-time voice/video matchmaking platform built with Java 21, WebRTC, Redis &amp; RabbitMQ on AWS EC2.
                  </p>
                </div>

                {/* Social links row */}
                <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href="https://github.com/jerryRaghuvanshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/jay-singh-raghuvanshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:scale-110 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://leetcode.com/u/JayRaghuvanshi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:scale-110 transition-all"
                    aria-label="LeetCode Profile"
                  >
                    <SiLeetcode className="w-4 h-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-500 hover:scale-110 transition-all"
                    aria-label="Contact Jay"
                  >
                    <FiMail className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
