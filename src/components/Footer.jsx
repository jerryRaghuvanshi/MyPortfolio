import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaCode,FaGoogle } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-xl" />,
      url: 'https://github.com/jerryRaghuvanshi',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-xl" />,
      url: 'https://www.linkedin.com/in/jay-singh-b7b44830b/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="text-xl" />,
      url: 'https://wa.me/7505127721',
      color: 'hover:text-green-500'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="text-xl" />,
      url: 'https://leetcode.com/u/JayRaghuvanshi/',
      color: 'hover:text-yellow-500'
    },
    
    {
      name: 'CodeChef',
      icon: <SiCodechef className="text-xl" />,
      url: 'https://www.codechef.com/users/jayraghuvansh1',
      color: 'hover:text-orange-500'
    },
     {
      name: 'Gmail',
      icon: <FaGoogle className="text-xl" />,
      url: 'https://mailto:jay10125r@gmail.com',
      color: 'hover:text-red-500'
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
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 sticky bottom-0"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col items-center"
        >
          <motion.h3 
            variants={item}
            className="text-lg font-semibold mb-6 text-gray-800 dark:text-white"
          >
            Connect with me
          </motion.h3>
          
          <motion.div 
            variants={container}
            className="flex flex-wrap justify-center gap-6 mb-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={item}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center gap-2 p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors ${link.color}`}
                aria-label={link.name}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.p 
            variants={item}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;