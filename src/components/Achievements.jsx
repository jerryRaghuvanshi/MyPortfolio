import { motion } from 'framer-motion';
import { useRef } from 'react';

const Achievements = () => {
  const constraintsRef = useRef(null);

  const achievements = [
    "Solved more than 500 problems on platforms such as Codeforces, LeetCode, CodeChef, and GFG",
    "Consistent participant in contests and coding challenges",
    "2 star at CodeChef with max rating 1421 and Codeforces max rating 925",
    "Secured 10 CPI in all three semesters",
    "Good understanding of algorithms such as sorting, searching, recursion, tree, linked list, stack and queue",
    "Secured a global rank of 2533 in a rated contest on CodeChef"
  ];

  // Background circle data
  const circles = [
    { size: 200, x: -50, y: -50, delay: 0.2 },
    { size: 300, x: 100, y: 100, delay: 0.4 },
    { size: 150, x: -100, y: 150, delay: 0.6 },
    { size: 250, x: 200, y: -50, delay: 0.8 }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-6 py-20">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden" ref={constraintsRef}>
        {circles.map((circle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: circle.x, y: circle.y }}
            animate={{ 
              opacity: 0.1,
              x: [circle.x, circle.x + 50, circle.x],
              y: [circle.y, circle.y + 50, circle.y]
            }}
            transition={{
              delay: circle.delay,
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute rounded-full bg-indigo-400 dark:bg-indigo-600`}
            style={{
              width: circle.size,
              height: circle.size,
              filter: "blur(60px)"
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My <span className="text-indigo-600 dark:text-indigo-400">Achievements</span>
          </motion.h2>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-600 transition-colors duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="flex-shrink-0 mt-1 mr-3">
                    <motion.svg 
                      className="w-6 h-6 text-indigo-600 dark:text-indigo-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-200">{achievement}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats section */}
            <motion.div 
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-300">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Problems Solved</div>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-300">10.0</div>
                <div className="text-gray-600 dark:text-gray-300">CPI Score</div>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-300">1421</div>
                <div className="text-gray-600 dark:text-gray-300">CodeChef Rating</div>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-300">2533</div>
                <div className="text-gray-600 dark:text-gray-300">Global Rank</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;