import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [isExploded, setIsExploded] = useState(false);
  
  const skills = [
    { 
      category: "Frontend", 
      items: ["React", "JavaScript", "HTML5", "Tailwind", "Next.js"], 
      icon: "💻"
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express", "MongoDB"], 
      icon: "⚙️"
    },
    { 
      category: "Programming", 
      items: ["C++", "DSA", "Algorithms", "Competitive", "Problem Solving"], 
      icon: "🧠"
    },
    { 
      category: "Tools", 
      items: ["Git", "VS Code", "Figma", "Postman"], 
      icon: "🛠️"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    show: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: i * 0.1
      }
    }),
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      transition: { duration: 0.2 }
    }
  };

  const centerButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: { 
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 }
    },
    pulse: {
      scale: [1, 1.03, 1],
      transition: { repeat: Infinity, duration: 2 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          {!isExploded && (
            <motion.div
              variants={centerButtonVariants}
              initial="hidden"
              animate={["show", "pulse"]}
              className="absolute z-10 cursor-pointer"
              onClick={() => setIsExploded(true)}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg">
                <span className="text-4xl">✨</span>
              </div>
              <motion.p 
                className="mt-4 text-center text-gray-700 dark:text-gray-300 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Click to explore
              </motion.p>
            </motion.div>
          )}

          <AnimatePresence>
            {isExploded && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={cardVariants}
                      whileHover="hover"
                      className="w-full h-96 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="h-full p-6 flex flex-col">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl mr-3">{skillGroup.icon}</span>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {skillGroup.category}
                          </h3>
                        </div>
                        <ul className="space-y-2 flex-grow">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <motion.li 
                              key={skillIndex}
                              className="flex items-center py-1"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ 
                                opacity: 1, 
                                x: 0,
                                transition: { delay: 0.3 + index * 0.1 + skillIndex * 0.03 }
                              }}
                            >
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setIsExploded(false)}
                    className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Back to Center
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;