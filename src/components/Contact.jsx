import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const githubUser = import.meta.env.VITE_GITHUB_USERNAME;
const leetcodeUser = import.meta.env.VITE_LEETCODE_USERNAME;
const linkedinURL = import.meta.env.VITE_LINKEDIN_URL;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      serviceId,   // Service ID
      templateId,  // Template ID
      form.current,
      publicKey    // Public Key
    )
    .then((result) => {
        setIsSending(false);
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
    }, (error) => {
        setIsSending(false);
        setStatus('error');
        console.log(error.text);
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0c1016] relative overflow-hidden">
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Content & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center tracking-tighter mb-6 whitespace-nowrap">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                <span className="text-cyan-400 font-mono text-2xl mr-2">04.</span> Let's Connect
              </h2>
              <div className="h-px bg-gray-700 w-full ml-4 md:w-64"></div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              I'm currently looking for new opportunities, my inbox is always open. 
              I'll try my best to get back to you!
            </p>
            
            <div className="flex gap-6 mt-auto">
              <a href={`https://github.com/${githubUser}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiGithub size={28} />
              </a>
              <a href={linkedinURL} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={28} />
              </a>
              <a href={`https://leetcode.com/u/${leetcodeUser}/`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FFA116] transition-colors">
                <SiLeetcode size={28} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 pt-12 md:pt-12"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">Your Email</label>
              <input 
                type="email" 
                name="name"
                required
                placeholder="you@gmail.com"
                className="w-full bg-[#112240] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/50 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">Subject</label>
              <input 
                type="text" 
                name="title"
                required
                placeholder="Just saying hi"
                className="w-full bg-[#112240] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">Message</label>
              <textarea 
                name="message"
                required
                rows="4"
                placeholder="Let's talk about..."
                className="w-full bg-[#112240] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/50 transition-all resize-none"
              />
            </div>

            <motion.button 
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 text-[#0c1016] font-black rounded-xl text-lg tracking-wide shadow-lg shadow-cyan-500/20 transition-all
                ${isSending ? 'bg-gray-500 cursor-wait' : 'bg-linear-to-r from-cyan-500 to-blue-600 active:from-cyan-600'}`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <p className="text-green-400 text-sm font-medium text-center animate-bounce">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm font-medium text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;