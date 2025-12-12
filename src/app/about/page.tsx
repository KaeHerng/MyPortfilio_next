"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Type, Zap, Layout, Feather, Layers } from "lucide-react";

export default function AboutPage() {
  const skills = [
    { name: "React", icon: <Code size={28} className="text-cyan-400" /> },
    { name: "Next.js", icon: <Layout size={28} className="text-white" /> },
    { name: "JavaScript", icon: <Zap size={28} className="text-yellow-400" /> },
    { name: "TypeScript", icon: <Type size={28} className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <Feather size={28} className="text-sky-400" /> },
    { name: "Redux / Context", icon: <Layers size={28} className="text-purple-500" /> },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white overflow-hidden">
      {/* 半透明叠加层 */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div> */}

      {/* 背景动态圆圈 */}
      {/* <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[450px] h-[450px] bg-purple-700/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-2xl animate-spin-slow"></div> */}


      <motion.div 
         initial={{ opacity: 0, y: 40, scale: 0.9 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, ease: "easeOut" }}
        style={{ position: 'absolute', top: '50%', left: '70%' }}>
        <Image
            src="/assets/minion3.png"
            alt="Profile Image"
            width={140}
            height={140}
            className="object-cover w-full h-full"
          />
      </motion.div>

      {/* 主标题 */}
      <motion.h2
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         initial={{ opacity: 0, y: 40, scale: 0.9 }}
         transition={{ type: "spring", stiffness: 180, damping: 10 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
        About Me
      </motion.h2>

      {/* 头像 */}
      <motion.div
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mb-6 rounded-full p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 shadow-lg">
        <div className="rounded-full overflow-hidden w-[140px] h-[140px]">
          <Image
            src="/assets/naruto.png"
            alt="Profile Image"
            width={140}
            height={140}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* 介绍文字 */}
      <motion.div
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-3xl text-gray-200 text-lg md:text-xl drop-shadow-md mb-8 space-y-4 leading-relaxed">
        <p>
          I am a passionate front-end developer focused on creating modern, high-end web applications. 
          I love crafting responsive designs, smooth animations, and engaging user experiences.
        </p>
        <p>
          My goal is to build interactive websites that look beautiful, perform seamlessly, and delight users.
        </p>
      </motion.div>

      {/* 技能列表 */}
      <motion.div
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="flex flex-wrap justify-center gap-4 max-w-2xl mb-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-5 py-3 bg-white/25 rounded-2xl shadow-sm hover:bg-white/60 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
            {skill.icon}
            <span className="text-sm md:text-base font-semibold text-white drop-shadow-md">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>

      {/* CTA 按钮 */}
      {/* <motion.a
        href="/assets/ChongKaeHerng_CV.pdf"
        download
        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 px-8 py-3 border border-white/40 rounded-2xl text-white font-medium hover:bg-white/10 transition-all duration-300">
        Download Resume
      </motion.a> */}
    </section>
  );
}
