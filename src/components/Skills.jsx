import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCpu, FiServer, FiDatabase, FiCloud, FiCode, FiLayers, FiCheck } from 'react-icons/fi';
import { FaJava, FaPython, FaJs, FaDocker, FaAws, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiMysql, SiRedis, SiRabbitmq, SiPostman, SiGithubactions, SiMinio, SiCaddy } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillGroups = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: <FiCode className="w-5 h-5 text-indigo-500" />,
      description: "Core languages for high-performance backend systems and algorithms",
      skills: [
        { name: "Java (21)", level: "Advanced", icon: <FaJava className="text-red-500" /> },
        { name: "Python", level: "Proficient", icon: <FaPython className="text-blue-500" /> },
        { name: "SQL", level: "Advanced", icon: <FiDatabase className="text-cyan-500" /> },
        { name: "JavaScript", level: "Proficient", icon: <FaJs className="text-amber-400" /> }
      ]
    },
    {
      id: "backend",
      title: "Backend Frameworks & Protocols",
      icon: <FiServer className="w-5 h-5 text-emerald-500" />,
      description: "Enterprise Java frameworks, REST contracts, signaling, and security",
      skills: [
        { name: "Spring Boot 3", level: "Advanced", icon: <SiSpringboot className="text-emerald-500" /> },
        { name: "Spring Security (RBAC/JWT)", level: "Advanced", icon: <FiCheck className="text-indigo-400" /> },
        { name: "Spring Data JPA / Hibernate", level: "Advanced", icon: <FiCheck className="text-indigo-400" /> },
        { name: "RESTful API Architecture", level: "Advanced", icon: <FiServer className="text-blue-400" /> },
        { name: "WebSockets (STOMP Signaling)", level: "Advanced", icon: <FiLayers className="text-cyan-400" /> },
        { name: "OAuth 2.0 & JWT Security", level: "Proficient", icon: <FiCheck className="text-amber-400" /> }
      ]
    },
    {
      id: "distributed",
      title: "Distributed Systems & Real-Time",
      icon: <FiCpu className="w-5 h-5 text-cyan-500" />,
      description: "Low-latency streaming, distributed state, queuing, and peer signaling",
      skills: [
        { name: "WebRTC Audio/Video", level: "Advanced", icon: <FiCpu className="text-cyan-400" /> },
        { name: "Redis (Sorted Sets, Lua Scripts)", level: "Advanced", icon: <SiRedis className="text-red-500" /> },
        { name: "Redis Distributed Locks", level: "Advanced", icon: <SiRedis className="text-red-400" /> },
        { name: "RabbitMQ Message Broker", level: "Advanced", icon: <SiRabbitmq className="text-orange-500" /> },
        { name: "Coturn STUN/TURN NAT", level: "Proficient", icon: <FiServer className="text-emerald-400" /> }
      ]
    },
    {
      id: "databases",
      title: "Databases & Object Storage",
      icon: <FiDatabase className="w-5 h-5 text-blue-500" />,
      description: "Relational schema design, query optimization, and S3 storage",
      skills: [
        { name: "PostgreSQL", level: "Advanced", icon: <SiPostgresql className="text-blue-500" /> },
        { name: "MySQL", level: "Advanced", icon: <SiMysql className="text-sky-600" /> },
        { name: "MinIO (S3-Compatible Storage)", level: "Proficient", icon: <SiMinio className="text-pink-500" /> },
        { name: "Indexing & Query Tuning", level: "Advanced", icon: <FiDatabase className="text-indigo-400" /> }
      ]
    },
    {
      id: "cloud-devops",
      title: "Cloud, DevOps & Tooling",
      icon: <FiCloud className="w-5 h-5 text-amber-500" />,
      description: "Containerization, cloud infrastructure, automation, and networking",
      skills: [
        { name: "AWS EC2 Deployment", level: "Proficient", icon: <FaAws className="text-amber-500" /> },
        { name: "Docker & Docker Compose", level: "Advanced", icon: <FaDocker className="text-blue-400" /> },
        { name: "GitHub Actions CI/CD", level: "Advanced", icon: <SiGithubactions className="text-blue-500" /> },
        { name: "Caddy (TLS & Reverse Proxy)", level: "Proficient", icon: <SiCaddy className="text-emerald-400" /> },
        { name: "Git & Linux Environments", level: "Advanced", icon: <FaLinux className="text-slate-300" /> },
        { name: "Postman API Testing", level: "Advanced", icon: <SiPostman className="text-orange-500" /> }
      ]
    },
    {
      id: "core-cs",
      title: "Core CS & Engineering Practices",
      icon: <FiLayers className="w-5 h-5 text-purple-500" />,
      description: "Strong theoretical foundations and resilient code architecture",
      skills: [
        { name: "Data Structures & Algorithms", level: "Advanced (450+ LeetCode)", icon: <FiLayers className="text-purple-400" /> },
        { name: "System Design & Scalability", level: "Advanced", icon: <FiCpu className="text-cyan-400" /> },
        { name: "OOP & SOLID Principles", level: "Advanced", icon: <FiCheck className="text-emerald-400" /> },
        { name: "Unit Testing (JUnit, Mockito)", level: "Proficient", icon: <FiCheck className="text-indigo-400" /> },
        { name: "API Design & Concurrency", level: "Advanced", icon: <FiServer className="text-amber-400" /> }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'backend', label: 'Backend & Frameworks' },
    { id: 'distributed', label: 'Distributed Systems' },
    { id: 'languages', label: 'Languages' },
    { id: 'databases', label: 'Databases & Storage' },
    { id: 'cloud-devops', label: 'Cloud & DevOps' },
    { id: 'core-cs', label: 'Core CS' },
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.id === activeCategory);

  return (
    <section className="min-h-screen py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 text-xs font-semibold text-indigo-600 dark:text-cyan-400 mb-4">
            <FiCpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-cyan-400">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive inventory of languages, distributed frameworks, cloud architectures, and databases I leverage in production.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 p-6 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-950/40 hover:border-indigo-400 dark:hover:border-indigo-500/60 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/60">
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {group.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 hover:bg-indigo-50/50 dark:hover:bg-slate-700/70 border border-slate-200/50 dark:border-slate-700/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700 shadow-2xs">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
