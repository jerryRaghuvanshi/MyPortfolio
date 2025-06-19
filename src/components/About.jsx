import { motion } from 'framer-motion';
import logo from '../assets/image.png';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3 w-full"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white"
            >
              Hi, I'm <motion.span 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ scale: 1.05 }}
                className="text-indigo-600 dark:text-indigo-400 inline-block"
              >
                Govind Trievdi
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl mb-8 text-gray-600 dark:text-gray-300"
            >
              A passionate Computer Science Engineering student specializing in problem-solving through efficient algorithms and building robust web applications.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {['C++ Programmer', 'DSA Enthusiast', 'Web Developer', 'Problem Solver'].map((item) => (
                <motion.span
                  key={item}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: 0.5 + 0.1 * ['C++ Programmer', 'DSA Enthusiast', 'Web Developer', 'Problem Solver'].indexOf(item)
                  }}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium cursor-pointer"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="prose dark:prose-invert max-w-none"
            >
              <p>
                Currently pursuing my Bachelor's in Computer Science Engineering with a strong foundation in data structures, algorithms, and web technologies. I thrive on solving complex problems and turning ideas into functional applications.
              </p>
              <br />
              <br />
              <p>
                My technical toolkit includes C++ for competitive programming, JavaScript/React for frontend development, and Node.js for backend solutions. I'm constantly learning and applying new technologies to build efficient and scalable systems.
              </p>
            </motion.div>
          </motion.div>

          {/* Photo container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3 w-full lg:mt-0 mt-8 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, rotate: -2 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.02,
                  rotate: 1,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative rounded-2xl overflow-hidden shadow-xl dark:shadow-indigo-900/50"
              >
                <div className="aspect-w-5 aspect-h-6 w-full">
                  <img 
                    src={logo} 
                    alt="Govind Trievdi"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Glow effect */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute inset-0 bg-indigo-400 dark:bg-indigo-600 mix-blend-multiply pointer-events-none"
                />
              </motion.div>
              
              {/* Decorative elements with animation */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 0.4, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-indigo-300 dark:border-indigo-700 rounded-lg z-0"
              />
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 0.4, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -left-4 w-16 h-16 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg z-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;