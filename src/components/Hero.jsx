import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const githubUser = import.meta.env.VITE_GITHUB_USERNAME;
const leetcodeUser = import.meta.env.VITE_LEETCODE_USERNAME;
const linkedinURL = import.meta.env.VITE_LINKEDIN_URL;
const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0c1016] overflow-hidden py-20">
      
      {/* Background */}
      <div className="absolute top-[20%] left-[10%] w-75 h-75 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-75 h-75 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-8 z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 font-mono tracking-[0.2em] text-sm md:text-base mb-4 block">
              WEB DEVELOPER & PROBLEM SOLVER
            </span>
            
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-tight">
              Building digital <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                experiences.
              </span>
            </h1>

            <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
              I'm <span className="text-white">Shubhi Mishra</span>, a MERN stack developer and competitive programmer focused on building clean, efficient, and user-centric web applications.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 hover:bg-cyan-600 text-[#0c1016] font-bold px-8 py-4 rounded-full flex items-center gap-2 group transition-all"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex items-center gap-6">
                <a href={`https://github.com/${githubUser}`} className="text-gray-400 hover:text-white transition-colors">
                  <FiGithub size={24} />
                </a>
                <a href={`https://leetcode.com/u/${leetcodeUser}/`} className="text-gray-400 hover:text-white transition-colors">
                  <SiLeetcode size={24} />
                </a>
                <a href={linkedinURL} className="text-gray-400 hover:text-white transition-colors">
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute w-75 h-75 md:w-100 md:h-100 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-[320px] h-80 md:w-107.5 md:h-107.5 border border-blue-500/10 rounded-full animate-[spin_15s_linear_reverse_infinite]" />

            <div className="relative w-65 h-65 md:w-87.5 md:h-87.5 rounded-full overflow-hidden border-4 border-[#112240] z-10">
              <img 
                src="src/assets/profile.jpg"
                alt="Shubhi Mishra"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-4 right-10 md:right-20 z-20 bg-[#112240] border border-cyan-400/30 px-4 py-2 rounded-2xl backdrop-blur-md"
            >
              <span className="text-cyan-400 font-mono text-xs font-bold">Hi, I'm Shubhi!</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hidden md:block"
      >
        <div className="w-0.5 h-10 bg-linear-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;