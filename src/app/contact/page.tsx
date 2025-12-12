"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-start items-center text-center px-6 bg-black text-white overflow-hidden py-20">
      {/* 背景圆圈 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl animate-spin-slow pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl animate-spin-slow pointer-events-none"></div>

      {/* 顶部标题 */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
        Contact Me
      </motion.h2>

      {/* 下方两列：socials + form */}
      <div className="flex flex-col md:flex-row items-start md:items-start justify-center md:justify-center gap-14 w-full max-w-5xl">

        {/* 左列：社交按钮 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex flex-col gap-6 w-full md:w-1/3">
          <a
            href="mailto:kaeherngchong@fmail.com"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/25 px-6 py-4 rounded-2xl transition duration-300 shadow-md">
            <Mail size={22} />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/chong-kae-herng-a434ab320/"
            target="_blank"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/25 px-6 py-4 rounded-2xl transition duration-300 shadow-md">
            <Linkedin size={22} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/KaeHerng"
            target="_blank"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/25 px-6 py-4 rounded-2xl transition duration-300 shadow-md">
            <Github size={22} />
            <span>GitHub</span>
          </a>
        </motion.div>

        {/* 右列：表单 */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex flex-col gap-4 w-full md:w-1/2 bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-xl bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-xl bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="px-4 py-3 rounded-xl bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-3xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}
