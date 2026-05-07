import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "1. KrishiRakshak",
    desc: "AI-powered agricultural advisory platform developed for SIH 2025. Uses image recognition to detect crop diseases and provides multilingual support for farmers.",
    tech: ["MERN Stack", "Machine Learning"],
    github: "#",
    // link: "#",
    image: "src/assets/krishirakshak.png", 
  },
  {
    title: "2. CodexAI",
    desc: "An AI-powered code reviewer that transforms messy scripts into production-ready code. Provides real-time debugging and logic optimization.",
    tech: ["MERN Stack", "Gemini API"],
    github: "https://github.com/shubhimishra1606/CodexAI",
    // link: "#",
    image: "src/assets/codexai.png",
    tag: "iDEA 2026"
  }
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 bg-[#0c1016]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-cyan-400 font-mono text-2xl mr-2">02.</span> My Projects
          </h2>
          <div className="h-px bg-gray-700 w-full ml-4 md:w-64"></div>
        </div>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5 group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#112240]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 space-y-6">                
                <h3 className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-bold text-gray-500 border border-white/5 bg-white/5 px-3 py-1 rounded-md italic">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4 text-gray-400">
                  <a href={project.github} className="hover:text-cyan-400 transition-colors flex items-center gap-2 font-medium">
                    <FiGithub size={20} /> Code
                  </a>
                  {/* <a href={project.link} className="hover:text-cyan-400 transition-colors flex items-center gap-2 font-medium">
                    <FiExternalLink size={20} /> Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;