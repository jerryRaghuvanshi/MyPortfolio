import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink, FiGithub, FiCheckCircle, FiServer, FiLayers, FiShield, FiCpu, FiRadio } from 'react-icons/fi';
import { SiSpringboot, SiRedis, SiRabbitmq, SiDocker, SiPostgresql, SiMysql, SiReact, SiStripe } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const flagshipProject = {
    title: "Strangle – Real-Time Voice/Video Platform",
    subtitle: "Production Distributed Social Discovery Platform",
    status: "Live in Production",
    liveUrl: "https://strangle.in",
    githubUrl: "https://github.com/jerryRaghuvanshi/strangle-showcase",
    techStack: [
      { name: "Java 21", icon: <FiServer /> },
      { name: "Spring Boot 3", icon: <SiSpringboot /> },
      { name: "WebRTC", icon: <FiRadio /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "RabbitMQ", icon: <SiRabbitmq /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "AWS EC2", icon: <FiCpu /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Coturn STUN/TURN", icon: <FiServer /> },
      { name: "Caddy TLS", icon: <FiShield /> }
    ],
    highlights: [
      "Architected a high-concurrency matchmaking engine using Java 21, Spring Boot, and Redis (Lua scripts, Sorted Sets), achieving atomic queue pairing, verified campus domain isolation, and sub-second successive partner discovery without race conditions.",
      "Engineered end-to-end WebRTC audio/video calling with cross-platform interoperability across Next.js (Web) and native Android, utilizing WebSockets (STOMP) for SDP/trickle ICE signaling, Coturn (STUN/TURN) for NAT traversal, and a mutual two-way video consent handshake.",
      "Built an asynchronous, event-driven messaging layer with RabbitMQ and PostgreSQL, integrating MinIO (S3-compatible) presigned URLs for media transfers and automated Spring cron workers for zero-leak ephemeral data shredding and media lifecycle cleanup.",
      "Integrated a decoupled Python (FastAPI) Trust & Safety microservice via RabbitMQ/REST to perform automated toxicity and NSFW media moderation, pairing with real-time user reporting and distributed strike enforcement.",
      "Containerized and deployed the distributed system on AWS EC2 using Docker Compose, Caddy (reverse proxy with automated Let's Encrypt TLS/WebSocket tunneling), and a multi-stage GitHub Actions CI/CD pipeline featuring automated smoke tests and selective zero-downtime rebuilds."
    ]
  };

  const otherProjects = [
    {
      id: "amazon-backend",
      title: "Amazon-Inspired E-Commerce Backend",
      category: "backend",
      description: "High-performance Spring Boot microservice backend powering full-cycle e-commerce operations, secure payment processing, and inventory control.",
      githubUrl: "https://github.com/jerryRaghuvanshi/Amazon-Backend",
      tags: ["Spring Boot", "MySQL", "Redis", "Docker", "Stripe", "JWT", "Spring Security"],
      bullets: [
        "Architected complete backend covering product catalog, inventory locking, cart persistence, wishlist, and order-management workflows.",
        "Implemented stateless JWT-based authentication and granular role-based authorization (RBAC) using Spring Security.",
        "Integrated Stripe Payment Intents API and webhook listeners for reliable asynchronous checkout and payment verification.",
        "Applied Redis caching for frequently accessed catalogs and optimized SQL indexing, bundled via Docker Compose."
      ]
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker – Full-Stack Application",
      category: "fullstack",
      description: "Comprehensive financial management system featuring visual spending analytics, budget target tracking, and automated reports.",
      githubUrl: "https://github.com/jerryRaghuvanshi/expense-tracker",
      tags: ["Spring Boot", "React", "JWT", "Google OAuth 2.0", "MySQL", "Swagger"],
      bullets: [
        "Built full-stack personal finance application with dual JWT authentication and Google OAuth 2.0 SSO.",
        "Structured layered Controller-Service-Repository architecture using Spring Data JPA, MapStruct DTOs, and request validation.",
        "Implemented real-time expense category analytics, CSV data export, global exception handling, and OpenAPI/Swagger documentation."
      ]
    },
    {
      id: "task-manager-api",
      title: "Task Manager REST API",
      category: "backend",
      description: "Production-ready task management REST API designed with rigorous security standards, audit trails, and Swagger documentation.",
      githubUrl: "https://github.com/jerryRaghuvanshi/Task-Manager-API",
      tags: ["Spring Boot", "Spring Security", "JWT", "MySQL", "OpenAPI / Swagger"],
      bullets: [
        "Implemented secure RESTful endpoints with ownership-based authorization ensuring zero tenant data leakage.",
        "Designed clean entity-DTO mappings with MapStruct and comprehensive input validation.",
        "Configured interactive OpenAPI 3.0 / Swagger documentation with live sandbox testing."
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? otherProjects
    : otherProjects.filter(p => p.category === activeFilter);

  return (
    <section className="min-h-screen py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 text-xs font-semibold text-indigo-600 dark:text-cyan-400 mb-4">
            <FiLayers className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Projects &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-cyan-400">Systems</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From production-grade distributed WebRTC signaling engines to high-throughput e-commerce microservices and secure REST APIs.
          </p>
        </div>

        {/* 1. FLAGSHIP PROJECT SHOWCASE (Strangle) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-2xl shadow-indigo-950/50"
        >
          {/* Ambient background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative p-6 sm:p-10 lg:p-12 z-10">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-indigo-500/20">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    Flagship Project
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                    {flagshipProject.status}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {flagshipProject.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-medium mt-1">
                  {flagshipProject.subtitle}
                </p>
              </div>

              {/* Action Buttons for Strangle */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={flagshipProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>Visit Strangle.in</span>
                </a>
                <a
                  href={flagshipProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-sm border border-slate-700 transition-all hover:scale-[1.02]"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>Architecture &amp; Code</span>
                </a>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Technology Stack &amp; Infrastructure
              </span>
              <div className="flex flex-wrap gap-2">
                {flagshipProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200"
                  >
                    <span className="text-cyan-400">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Highlights Bullets */}
            <div>
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
                Key Engineering &amp; Architectural Accomplishments
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {flagshipProject.highlights.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/40 transition-colors"
                  >
                    <FiCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. OTHER PROJECTS SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Backend &amp; Full-Stack Implementations
          </h3>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-cyan-400 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('backend')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeFilter === 'backend'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-cyan-400 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Backend / APIs
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeFilter === 'fullstack'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-cyan-400 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 p-6 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-950/50 hover:border-indigo-400 dark:hover:border-indigo-500/60 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white p-1 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {project.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-700/60 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-700/60 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 font-semibold text-xs transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>View Repository &amp; Source</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA bottom bar */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/jerryRaghuvanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-sm shadow-md transition-all hover:scale-105"
          >
            <FiGithub className="w-4 h-4" />
            <span>Explore All Repositories on GitHub @jerryRaghuvanshi</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
