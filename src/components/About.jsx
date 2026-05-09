import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "../assets/image.png"

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabData = {
    skills: (
      <ul className="space-y-4 text-gray-400">
        <li><strong className="text-white">Languages:</strong> C++, C, JavaScript (ES6+), Java, Python</li>
        <li><strong className="text-white">Frontend:</strong> React.js, Tailwind CSS, HTML, CSS</li>
        <li><strong className="text-white">Backend:</strong> Node.js, Express.js, REST APIs, Authentication & Authorization</li>
        <li><strong className="text-white">Databases:</strong> MongoDB</li>
        <li><strong className="text-white">Tools:</strong> Git, GitHub, Postman</li>
        <li><strong className="text-white">Core Concepts:</strong> DSA, OOP, DBMS, OS</li>
      </ul>
    ),
    education: (
      <ul className="space-y-4 text-gray-400">
        <li>
          <strong className="text-white">B.Tech in Computer Science and Engineering — Pranveer Singh Institute of Technology (PSIT), Kanpur</strong> <br />
          <span className="text-cyan-400/80 text-sm">2024-2028 | CGPA: 9.16</span>
        </li>
        <li>
          <strong className="text-white">Senior Secondary Education (Class XII) — Lucknow Public School</strong> <br />
          <span className="text-cyan-400/80 text-sm">2023-2024 | Percentage: 94.8%</span>
        </li>
        <li>
          <strong className="text-white">Secondary Education (Class X) — Lucknow Public School</strong> <br />
          <span className="text-cyan-400/80 text-sm">2021-2022 | Percentage: 96.33%</span>
        </li>
      </ul>
    ),
    certifications: (
      <ul className="space-y-4 text-gray-400">
        <li><strong className="text-white">AI Foundation Associate</strong> - Oracle (2025)</li>
        <li><strong className="text-white">Problem Solving in C++</strong> - Hackerrank (2025)</li>
        <li><strong className="text-white">C Programming</strong> - NPTEL (2025)</li>
        <li><strong className="text-white">HTML, CSS, Python Programming</strong> - Infosys Springboard (2025)</li>
      </ul>
    ),
  };

  return (
    <section id="about" className="py-24 bg-[#0c1016]">
      
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="flex items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-cyan-400 font-mono text-2xl mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-gray-700 w-full ml-4 md:w-64"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group rounded-4xl overflow-hidden border border-white/10"
          >
            <img 
              src={Image}
              alt="Workspace"
              className="w-full h-auto object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0c1016] via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Right */}
          <div className="flex flex-col">
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a Computer Science student at PSIT, Kanpur, with a strong foundation in Data Structures & Algorithms and hands-on experience in Full-Stack Development. I am passionate about building clean, scalable, and user-centric applications using modern technologies.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              With a disciplined approach to problem-solving, I have solved <span className="text-cyan-400 font-bold">400+ problems</span>  on LeetCode using C++, sharpening my ability to write efficient and maintainable code. I am actively seeking opportunities to contribute to innovative projects and grow as a software engineer.
            </p>

            {/* Tab Headers */}
            <div className="flex gap-8 mb-8 border-b border-white/5 pb-2">
              {['skills', 'education', 'certifications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-bold uppercase tracking-widest transition-all relative pb-2 ${
                    activeTab === tab ? 'text-cyan-400' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-62.5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {tabData[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;