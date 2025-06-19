import { motion } from 'framer-motion';
import { FaBook, FaMusic, FaRunning, FaUsers, FaLaptopCode, FaTrophy, FaMicrophone, FaChalkboardTeacher, FaGamepad } from 'react-icons/fa';

const Extracurricular = () => {
  const activities = [
    
    {
      title: "Volunteer Teacher",
      organization: "Code for Good",
      description: "Publishing my code on leetcode community",
      icon: <FaChalkboardTeacher className="text-2xl" />
    },
    {
      title: "Spiritual Reading",
      organization: "Personal Growth",
      description: "Regular reading of spiritual books for mental peace and wisdom",
      icon: <FaBook className="text-2xl" />
    },
    {
      title: "Music Enthusiast",
      organization: "Creative Outlet",
      description: "Listening and analyzing various music genres for relaxation",
      icon: <FaMusic className="text-2xl" />
    },
    {
      title: "Athletics & Running",
      organization: "Fitness",
      description: "Regular running and participation in local athletic events",
      icon: <FaRunning className="text-2xl" />
    },
    {
      title: "Tech Events",
      organization: "Continuous Learning",
      description: "Attending tech talks, seminars, and webinars to stay updated",
      icon: <FaLaptopCode className="text-2xl" />
    },
    {
      title: "Coding Competitions",
      organization: "Skill Development",
      description: "Active participation in LeetCode, Codeforces, HackerRank challenges",
      icon: <FaTrophy className="text-2xl" />
    },
    {
      title: "Public Speaking",
      organization: "Communication",
      description: "Debate participation and public speaking at various events",
      icon: <FaMicrophone className="text-2xl" />
    },
    {
      title: "E-Sports Gaming",
      organization: "Recreation",
      description: "Participation in online gaming tournaments for strategic thinking",
      icon: <FaGamepad className="text-2xl" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
          Extracurricular Activities
        </h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activities.map((activity, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {activity.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400">{activity.organization}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-16">{activity.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 italic">
            "Balancing technical skills with diverse interests helps me maintain creativity, 
            discipline, and a well-rounded perspective in both professional and personal life."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Extracurricular;