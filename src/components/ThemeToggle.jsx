import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 border focus:outline-none bg-white/90 dark:bg-slate-800/90 text-amber-500 dark:text-cyan-400 border-slate-200 dark:border-slate-700/60 shadow-indigo-500/10 hover:shadow-indigo-500/25"
      aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? (
        <FiSun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <FiMoon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:-rotate-12 text-slate-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
