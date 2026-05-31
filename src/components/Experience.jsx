import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  const experiences = [
    {
      id: 1,
      role: "",
      company: "",
      duration: "",
      description: "",
      skills: ["React", "Javascript", "Java", "Spring boot"],
      color: "bg-gradient-to-br from-blue-600 to-indigo-700"
    },
    {
      id: 2,
      role: "",
      company: "",
      duration: "",
      description: "",
      skills: ["React", "Javascript", "Java", "Spring boot"],
      color: "bg-gradient-to-br from-teal-600 to-emerald-700"
    },
    {
      id: 3,
      role: "",
      company: "",
      duration: "",
      description: "",
      skills: ["React", "Javascript", "Java", "Spring boot"],
      color: "bg-gradient-to-br from-purple-600 to-violet-700"
    }
  ];

  const nextSlide = () => {
    if (isDragging) return;
    setIsDragging(true);
    setCurrentIndex(prev => (prev + 1) % experiences.length);
    controls.start({
      rotateY: -360,
      transition: { duration: 0.8, ease: "easeInOut" }
    }).then(() => {
      controls.set({ rotateY: 0 });
      setIsDragging(false);
    });
  };

  const prevSlide = () => {
    if (isDragging) return;
    setIsDragging(true);
    setCurrentIndex(prev => (prev - 1 + experiences.length) % experiences.length);
    controls.start({
      rotateY: 360,
      transition: { duration: 0.8, ease: "easeInOut" }
    }).then(() => {
      controls.set({ rotateY: 0 });
      setIsDragging(false);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getCardPosition = (index) => {
    const total = experiences.length;
    const angle = (index * (360 / total) - currentIndex * (360 / total)) % 360;
    const radius = 350;
    
    const isCurrent = angle % 360 === 0;
    
    return {
      x: isCurrent ? 0 : Math.sin(angle * Math.PI / 180) * radius,
      z: isCurrent ? 0 : Math.cos(angle * Math.PI / 180) * radius - radius,
      scale: isCurrent ? 1 : 0,
      opacity: isCurrent ? 1 : 0,
      rotateY: isCurrent ? 0 : angle > 180 ? -90 : 90,
      zIndex: isCurrent ? 10 : 0,
      display: isCurrent ? 'block' : 'none'
    };
  };

  return (
    <section className="container mx-auto px-6 py-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            My journey through innovative companies and challenging projects
          </motion.p>
        </div>

        <div className="relative h-[550px] flex items-center justify-center">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none hover:bg-indigo-100 dark:hover:bg-gray-700"
            aria-label="Previous experience"
          >
            <FiChevronLeft className="text-2xl text-gray-800 dark:text-white" />
          </button>
          
          <div className="perspective-1000 w-full h-full">
            <motion.div
              animate={controls}
              className="relative h-full w-full"
              style={{ perspective: "1000px" }}
            >
              {experiences.map((exp, index) => {
                const position = getCardPosition(index);
                return (
                  <motion.div
                    key={exp.id}
                    className={`absolute w-[400px] h-[500px] rounded-xl overflow-hidden shadow-2xl ${exp.color} text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
                    initial={getCardPosition(index)}
                    animate={{
                      x: position.x,
                      z: position.z,
                      scale: position.scale,
                      opacity: position.opacity,
                      rotateY: position.rotateY,
                      zIndex: position.zIndex,
                      display: position.display,
                      transition: { 
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    <div className="p-8 h-full flex flex-col">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                        <p className="font-medium text-indigo-100 text-lg">{exp.company}</p>
                        <p className="text-sm text-white/80 mt-3">{exp.duration}</p>
                      </div>
                      
                      <p className="mb-8 text-white/90 flex-grow text-base leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: 0.8 + skillIndex * 0.1,
                              type: "spring",
                              stiffness: 300,
                              damping: 20
                            }}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "rgba(255,255,255,0.4)"
                            }}
                          >
                            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all cursor-default">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none hover:bg-indigo-100 dark:hover:bg-gray-700"
            aria-label="Next experience"
          >
            <FiChevronRight className="text-2xl text-gray-800 dark:text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {experiences.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                const diff = index - currentIndex;
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) nextSlide();
                } else if (diff < 0) {
                  for (let i = 0; i < Math.abs(diff); i++) prevSlide();
                }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-indigo-600 dark:bg-indigo-400 w-6' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;