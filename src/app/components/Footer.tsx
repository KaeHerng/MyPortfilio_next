"use client";

import { Github, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gray-800 text-gray-300 py-10 md:py-14 overflow-hidden">
      
      {/* 背景装饰圆圈 */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6 relative z-10 gap-8">
        
        {/* 左侧版权信息 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CKH. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm max-w-xs">
            Building modern web experiences with sleek UI, animations, and responsive design.
          </p>
        </motion.div>

        {/* 中间快速链接 */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h4 className="font-semibold text-white">Quick Links</h4>
          <div className="flex flex-col gap-1 text-gray-400 text-sm">
            <a href="/" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="/projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </motion.div>

        {/* 右侧社交图标 */}
        <motion.div
          className="flex gap-6 items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <a href="https://github.com/KaeHerng/my.profile.nextjs.git" target="_blank" rel="noopener noreferrer">
            <Github className="hover:text-white hover:scale-110 transition-transform duration-300" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/chong-kae-herng-a434ab320/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:text-blue-500 hover:scale-110 transition-transform duration-300" size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Facebook className="hover:text-blue-400 hover:scale-110 transition-transform duration-300" size={24} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
