import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Todo App",
      description: "A basic todo application with createTodo, deleteTodo, getTodo and updateTodo features",
      tags: ["express.js", "Node.js", "MongoDB","Postman"],
      githubLink: "https://github.com/dryeyezzzz17/Todo-app",
      accentColor: "from-purple-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Weather App",
      description: "A real-time weather app that lets users Search weather by city name View current weather (temperature, humidity, wind speed)",
      tags: ["HTML", "CSS", "Javascript","OpenWeatherMap API"],
      githubLink: "https://github.com/dryeyezzzz17/weatherApp",
      accentColor: "from-blue-500 to-teal-400"
    },
    {
      id: 3,
      title: "Study Website",
      description: "A responsive study website built with React using a Single Page Application (SPA) approach. It features user authentication with login/signup and protected dashboard routes for a seamless learning experience.",
      tags: ["React", "SPA", "Tailwind CSS","Routes"],
      githubLink: "https://github.com/dryeyezzzz17/study_app",
      accentColor: "from-amber-500 to-pink-500"
    },
    {
      id: 4,
      title: "Gifs Generator",
      description: "A GIF Generator app with two sections: one shows a random GIF on button click, and the other lets users search GIFs using a search box. Built with React and custom hooks for cleaner logic.",
      tags: ["React", "API", "Tailwind CSS","Custom hook"],
      githubLink: "https://github.com/dryeyezzzz17/Gifs_generator",
      accentColor: "from-emerald-400 to-cyan-500"
    },
    {
      id: 5,
      title: "Basic DemoShop",
      description: "DemoShop is a static frontend demo of an e-commerce site featuring a hero section, navigation bar, search box, cart icon, and footer. Designed for layout showcase without functional features.",
      tags: ["React", "Tailwind CSS"],
      githubLink: "https://github.com/dryeyezzzz17/demoShop",
      accentColor: "from-violet-500 to-fuchsia-500"
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
                      
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:text-white/80 transition-colors"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View on GitHub
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
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