import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="py-10 bg-[#0c1016] border-t border-white/5 text-center">
      <p className="text-gray-500 font-mono text-s tracking-widest">
        BUILT BY SHUBHI MISHRA <br />
        <span className="opacity-50 block mt-2 italic text-[12px]">All rights reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;