import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Education = () => {
  const [activeTab, setActiveTab] = useState('college');

  const educationData = {
    college: {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "U.I.E.T CSJMU University, Kanpur",
      duration: "2023 - 2027",
      description: "",
      score: "Current CGPI: 6.0",
      color: "bg-indigo-50 dark:bg-gray-800",
      borderColor: "border-indigo-500"
    },
    higherSecondary: {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "KSI College patholi, Agra",
      duration: "2021 - 2022",
      description: "",
      score: "Percentage: 72.3%",
      color: "bg-blue-50 dark:bg-gray-800",
      borderColor: "border-blue-500"
    },
    highSchool: {
      id: 3,
      degree: "High School Education",
      institution: "Manglik siksha kendra fatehbad Road, Agra",
      duration: "2019 - 2020",
      description: "",
      score: "Percentage: 86.4%",
      color: "bg-teal-50 dark:bg-gray-800",
      borderColor: "border-teal-500"
    }
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">Education</h2>
        
        {/* Navigation Buttons - Mobile */}
        <div className="md:hidden flex flex-col space-y-4 mb-8">
          {Object.entries({
            college: 'College',
            higherSecondary: 'Higher Secondary',
            highSchool: 'High School'
          }).map(([key, label]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full py-3 rounded-lg ${
                activeTab === key 
                  ? key === 'college' ? 'bg-indigo-500 text-white' 
                    : key === 'higherSecondary' ? 'bg-blue-500 text-white' 
                    : 'bg-teal-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {label}
            </motion.button>
          ))}
        </div>
        
        {/* Navigation Buttons - Desktop */}
        <div className="hidden md:flex justify-center items-center mb-12 relative">
          <motion.button
            onClick={() => setActiveTab('highSchool')}
            className={`absolute left-0 px-4 py-2 rounded-lg ${activeTab === 'highSchool' ? 'bg-teal-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              x: activeTab === 'highSchool' ? 0 : -20,
              opacity: activeTab === 'highSchool' ? 1 : 0.8
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            High School
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab('college')}
            className={`px-6 py-3 mx-2 rounded-lg ${activeTab === 'college' ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            College
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab('higherSecondary')}
            className={`absolute right-0 px-4 py-2 rounded-lg ${activeTab === 'higherSecondary' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              x: activeTab === 'higherSecondary' ? 0 : 20,
              opacity: activeTab === 'higherSecondary' ? 1 : 0.8
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Higher Secondary
          </motion.button>
        </div>
        
        {/* Education Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`border-l-4 ${educationData[activeTab].borderColor} ${educationData[activeTab].color} p-6 rounded-lg shadow-lg`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{educationData[activeTab].degree}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                  {educationData[activeTab].institution}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{educationData[activeTab].duration}</p>
              </div>
              <span className={`px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-semibold ${
                activeTab === 'college' ? 'text-indigo-600 dark:text-indigo-300' :
                activeTab === 'higherSecondary' ? 'text-blue-600 dark:text-blue-300' :
                'text-teal-600 dark:text-teal-300'
              } shadow`}>
                {educationData[activeTab].score}
              </span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{educationData[activeTab].description}</p>
            
            <motion.div 
              className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-wrap gap-2">
                {activeTab === 'college' && (
                  <>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium">
                      Data Structures
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium">
                      Algorithms
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium">
                      Oops
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium">
                      Operating System
                    </span>
                  </>
                )}
                {activeTab === 'higherSecondary' && (
                  <>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                      Physics
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                      Chemistry
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                      Mathematics
                    </span>
                  </>
                )}
                {activeTab === 'highSchool' && (
                  <>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-xs font-medium">
                      Science
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-xs font-medium">
                      Mathematics
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-xs font-medium">
                      English
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-xs font-medium">
                      Hindi
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-xs font-medium">
                      Social Science
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Education;