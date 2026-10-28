import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiExternalLink, FiCheckCircle, FiServer, FiLayers, FiRadio } from 'react-icons/fi';
import { FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiRedis, SiRabbitmq } from 'react-icons/si';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Founder & Lead Backend Engineer",
      organization: "Strangle (strangle.in)",
      period: "2024 – Present",
      type: "Production Real-Time Platform",
      liveUrl: "https://strangle.in",
      location: "Production / AWS Cloud",
      description: "Founded and engineered Strangle, an end-to-end distributed social discovery and audio/video matchmaking platform built for verified college networks.",
      achievements: [
        "Architected a high-concurrency matchmaking engine using Java 21, Spring Boot, and Redis (Lua scripts, Sorted Sets, distributed locks), achieving sub-second partner discovery with atomic pairing and zero race conditions.",
        "Engineered WebSockets (STOMP) signaling for WebRTC peer-to-peer audio/video calling, configuring Coturn (STUN/TURN) NAT traversal and a two-way consent handshake.",
        "Constructed an asynchronous event-driven messaging layer with RabbitMQ and PostgreSQL, utilizing MinIO S3 presigned URLs for secure media uploads.",
        "Containerized the entire stack with Docker Compose and orchestrated deployment on AWS EC2 fronted by Caddy reverse proxy with automated TLS certificates.",
        "Built automated multi-stage GitHub Actions CI/CD workflows with smoke tests and selective zero-downtime container rebuilds."
      ],
      techStack: [
        { name: "Java 21", icon: <FaJava className="text-red-500" /> },
        { name: "Spring Boot 3", icon: <SiSpringboot className="text-emerald-500" /> },
        { name: "WebRTC", icon: <FiRadio className="text-cyan-400" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-500" /> },
        { name: "AWS EC2", icon: <FaAws className="text-amber-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> }
      ]
    },
    {
      id: 2,
      role: "Backend & Systems Software Developer",
      organization: "Open Source & Distributed Projects",
      period: "2023 – Present",
      type: "Software Engineering",
      liveUrl: "https://github.com/jerryRaghuvanshi",
      location: "Independent & Open Source",
      description: "Building resilient microservice backends, cloud-native storage integrations, and algorithmically optimized distributed services.",
      achievements: [
        "Architected an Amazon-inspired e-commerce backend utilizing Spring Boot, Spring Security (JWT / RBAC), Stripe Payment Intents API, and Redis caching.",
        "Developed full-stack enterprise expense management platform with Spring Data JPA, Google OAuth 2.0, MapStruct DTOs, and OpenAPI documentation.",
        "Engineered secure Task Manager REST API with ownership-based multi-tenant authorization and comprehensive JUnit/Mockito test suites.",
        "Solved 450+ data structures and algorithms challenges across LeetCode and CodeChef, focusing on graph theory, dynamic programming, and systems concurrency."
      ],
      techStack: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-emerald-500" /> },
        { name: "MySQL", icon: <FiServer className="text-blue-500" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "JWT & Security", icon: <FiLayers className="text-amber-400" /> }
      ]
    }
  ];

  return (
    <section className="min-h-screen py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 text-xs font-semibold text-indigo-600 dark:text-cyan-400 mb-4">
            <FiBriefcase className="w-3.5 h-3.5" />
            <span>Engineering Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-cyan-400">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real-world backend architecture, production deployments, and leadership on distributed systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-cyan-400 before:to-indigo-500/10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col sm:flex-row items-start group"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 dark:border-cyan-400 shadow-md z-10">
                <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="ml-12 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)] sm:group-even:ml-auto rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-950/40 hover:border-indigo-400 dark:hover:border-indigo-500/60 transition-all duration-300">
                
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <FiCalendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {exp.role}
                </h3>

                <div className="flex items-center justify-between mt-1 mb-4">
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {exp.organization}
                  </span>
                  {exp.liveUrl && (
                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                    >
                      <span>Link</span>
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <FiCheckCircle className="w-4 h-4 text-emerald-500 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-2">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/50 text-[11px] font-medium text-slate-700 dark:text-slate-200"
                    >
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
