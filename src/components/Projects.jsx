import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Strangle — Real-Time Voice/Video Discovery",
      description: "A production social discovery platform featuring voice-first matchmaking, mutual video consent, verified campus pools, and WebRTC media streaming.",
      tags: ["Java 21", "Spring Boot", "WebRTC", "Redis", "RabbitMQ", "AWS EC2"],
      githubLink: "https://github.com/jerryRaghuvanshi/strangle-showcase",
      liveLink: "https://strangle.in",
      accentColor: "from-cyan-600 via-blue-600 to-indigo-700"
    },
    {
      id: 2,
      title: "Amazon-Inspired E-Commerce Backend",
      description: "A containerized Spring Boot backend with Elasticsearch full-text search, Redis caching, MySQL indexing, Stripe payments, and JWT security.",
      tags: ["Spring Boot", "MySQL", "Redis", "Docker", "Elasticsearch"],
      githubLink: "https://github.com/jerryRaghuvanshi/Amazon-Backend",
      accentColor: "from-amber-500 via-orange-600 to-red-600"
    },
    {
      id: 3,
      title: "Enterprise Expense Tracker",
      description: "Full-stack personal finance application with dynamic analytics, target tracking, CSV exports, Google OAuth2, and Spring Data JPA.",
      tags: ["Spring Boot", "React", "JWT", "MySQL", "Tailwind CSS"],
      githubLink: "https://github.com/jerryRaghuvanshi/expense-tracker",
      accentColor: "from-emerald-500 to-teal-700"
    },
    {
      id: 4,
      title: "Task Manager REST API",
      description: "Secure REST API built with Spring Security, JWT, ownership-based authorization, MapStruct DTOs, and Swagger/OpenAPI documentation.",
      tags: ["Spring Boot", "Spring Security", "JWT", "MySQL", "Swagger"],
      githubLink: "https://github.com/jerryRaghuvanshi/Task-Manager-API",
      accentColor: "from-purple-500 to-indigo-600"
    }
  ];

  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const duplicatedProjects = [...projects, ...projects]; // For seamless looping

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ['0%', '-100%'],
        transition: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    }
  }, [controls, isHovered]);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Projects</span>
          </h2>
          
        </motion.div>

        <div className="relative h-[420px] w-full overflow-x-visible">
          <motion.div
            className="absolute flex gap-8"
            animate={controls}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicatedProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                className="w-[400px] h-[320px] flex-shrink-0 relative"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br ${project.accentColor}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm p-8 flex flex-col justify-between">
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-3"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-200 mb-6"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <motion.span
                            key={tag}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs"
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {project.liveLink && (
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white text-gray-900 font-semibold text-xs shadow-md hover:bg-gray-100 transition-all"
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Live Platform
                            <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>
                        )}
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white hover:text-white/80 transition-colors text-xs font-medium"
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {project.liveLink ? "Case Study" : "View on GitHub"}
                          <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-16">
          <motion.a
            href="#"
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;