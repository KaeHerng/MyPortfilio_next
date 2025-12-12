"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  role: string;
  photo: string;
  quote: string;
  linkedin?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alice Wong",
    role: "Project Manager",
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/SpongeBob_SquarePants_character.png",
    quote: "Chong is an amazing front-end developer! Highly recommend.",
  },
  {
    name: "Bob Tan",
    role: "Team Lead",
    photo: "https://i.blogs.es/dda9da/unnamed-1-1-/375_375.jpeg",
    quote: "Delivered projects on time with great quality.",
  },
  {
    name: "Cathy Lim",
    role: "Mentor",
    photo: "https://avatarfiles.alphacoders.com/248/thumb-350-248387.webp",
    quote: "Creative, professional, and super easy to work with.",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const length = testimonials.length;

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Handle slide change
  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + length) % length);
  };

  // Go to specific slide (dot click)
  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Motion variants for sliding
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full mx-auto py-16 flex flex-col items-center
           bg-gray-950 via-purple-900/10 text-white">
      {/* <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
        Testimonials
      </h2> */}
      {/* 装饰圆圈 */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600/20 to-pink-500/20 rounded-full blur-2xl animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/20 to-orange-400/20 rounded-full blur-2xl animate-spin-slow"></div>
      <div className="absolute bottom-0/4 right-2/3 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/20 to-orange-400/20 rounded-full blur-2xl animate-spin-slow"></div>
      <div className="absolute top-1/5 left-4/5 transform -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600/20 to-pink-500/20 rounded-full blur-2xl animate-spin-slow"></div>

      <div className="relative w-full max-w-6xl h-[260px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragElastic={0.3}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x > 100 || velocity.x > 500) paginate(-1);
              else if (offset.x < -100 || velocity.x < -500) paginate(1);
            }}
            className="absolute top-0 left-0 w-full flex flex-col items-center 
                       bg-white/5 backdrop-blur-xl border border-white/20 
                       rounded-3xl p-8 cursor-grab 
                       shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <img
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-200 italic text-center mb-4">
              "{testimonials[current].quote}"
            </p>
            <span className="font-semibold text-white">
              {testimonials[current].name}
            </span>
            <span className="text-gray-400 text-sm mb-2">
              {testimonials[current].role}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      <div className="flex gap-3 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx === current ? "bg-purple-500" : "bg-gray-500/50 hover:bg-gray-400/70"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
