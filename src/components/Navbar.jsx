import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Statistics', id: 'stats' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-100 transition-all duration-500 ${
      scrolled ? 'top-0 py-2' : 'top-0 py-6'
    }`}>
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 ${
        scrolled 
        ? 'bg-[#0c1016]/80 backdrop-blur-lg border-b border-white/10 py-3 rounded-none md:rounded-full md:mt-2 md:px-10' 
        : 'bg-transparent py-4'
      }`}>
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-2xl font-bold tracking-tighter text-white cursor-pointer"
        >
          Shubhi Mishra<span className="text-cyan-400">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10">
          {menuLinks.map((link, index) => (
            <motion.li 
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={`#${link.id}`} 
                className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full text-sm font-semibold hover:bg-cyan-400/10 transition-all"
          >
            Resume
          </motion.button>
        </ul>

        <div className="md:hidden text-white cursor-pointer" onClick={() => setNav(!nav)}>
          {nav ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </div>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#0c1016] flex flex-col justify-center items-center z-90 md:hidden"
          >
            {menuLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setNav(false)}
                className="text-4xl font-bold my-4 text-gray-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;