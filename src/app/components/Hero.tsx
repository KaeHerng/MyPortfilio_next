"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Hi, I'm Chong Kae Herng";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const typingSpeed = 150;
  const deletingSpeed = 80;
  const pauseTime = 800; // 打完文字停顿时间

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // 打字阶段
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === fullText.length) {
          // 到结尾，停顿后开始删除
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // 删除阶段
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          // 删除完，开始重新打
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* 背景远程视频 */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/Earth2.mp4" type="video/mp4" />
      </video>

      {/* 渐变 + 半透明叠加 */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>

      {/* 装饰圆圈 */}
      {/* <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600/20 to-pink-500/20 rounded-full blur-2xl animate-spin-slow"></div> */}
      {/* <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/20 to-orange-400/20 rounded-full blur-2xl animate-spin-slow"></div> */}

      {/* 主标题 */}
      <motion.h1
        initial={{ opacity: 0, y: 60, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-6"
      >
        {displayedText}
        <span className="inline-block animate-blink">|</span>
      </motion.h1>

      {/* 副标题 */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative text-gray-200 text-lg md:text-xl max-w-3xl mb-8 drop-shadow-md"
      >
        I build high-end web applications with sleek designs, smooth animations, and professional user experiences.
      </motion.p>

      {/* 按钮 */}
      <motion.a
        href="/assets/ChongKaeHerng_CV.pdf"
        download
        whileHover={{
          scale: 1.07,
          rotate: 1.5,
          boxShadow: "0 0 60px rgba(255,192,203,0.6)"
        }}
        whileTap={{ scale: 0.95 }}
        className="relative mt-8 px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-3xl text-white font-semibold shadow-lg shadow-pink-500/50 hover:shadow-xl transition-all duration-300"
      >
        View My Resume
      </motion.a>
    </section>
  );
}
