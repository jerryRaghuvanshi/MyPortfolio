import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp, FaGoogle } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { FiDownload, FiArrowUp, FiHeart, FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-lg" />,
      url: 'https://github.com/jerryRaghuvanshi',
      color: 'hover:text-slate-900 dark:hover:text-white hover:border-slate-400'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-lg" />,
      url: 'https://linkedin.com/in/jay-singh-raghuvanshi',
      color: 'hover:text-blue-500 hover:border-blue-400'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="text-lg" />,
      url: 'https://leetcode.com/u/JayRaghuvanshi/',
      color: 'hover:text-amber-500 hover:border-amber-400'
    },
    {
      name: 'CodeChef',
      icon: <SiCodechef className="text-lg" />,
      url: 'https://www.codechef.com/users/jayraghuvansh1',
      color: 'hover:text-orange-500 hover:border-orange-400'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="text-lg" />,
      url: 'https://wa.me/917505127721',
      color: 'hover:text-emerald-500 hover:border-emerald-400'
    },
    {
      name: 'Gmail',
      icon: <FaGoogle className="text-lg" />,
      url: 'mailto:jay10125r@gmail.com',
      color: 'hover:text-red-500 hover:border-red-400'
    }
  ];

  const quickNav = [
    { name: 'About', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-8 border-b border-slate-100 dark:border-slate-800">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-base shadow-sm">
                JS
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Jay Singh
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Computer Science undergraduate &amp; backend engineer specializing in distributed systems, Java 21, Spring Boot, WebRTC, and cloud architectures.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="/Jay_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 text-xs font-semibold hover:bg-indigo-100 dark:hover:bg-slate-700 transition-colors"
              >
                <FiDownload className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
              <a
                href="https://strangle.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 text-xs font-semibold hover:bg-cyan-100 dark:hover:bg-cyan-900/60 transition-colors"
              >
                <FiExternalLink className="w-3.5 h-3.5" />
                <span>Strangle.in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2">
              {quickNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3 md:text-right">
                Connect
              </span>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 transition-all ${link.color}`}
                    aria-label={link.name}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
            >
              <span>Back to top</span>
              <FiArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Jay Singh. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with React, Tailwind CSS, &amp; Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
