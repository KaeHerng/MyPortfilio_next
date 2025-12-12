"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { 
    name: "Project 1", 
    description: "A sleek web app with modern UI.", 
    image: "/project1.png", 
    link: "#",
    techStack: ["React", "Next.js", "Tailwind CSS"]
  },
  { 
    name: "Project 2", 
    description: "High-end frontend design with animations.", 
    image: "/project2.png", 
    link: "#",
    techStack: ["React", "Framer Motion", "TypeScript"]
  },
  { 
    name: "Project 3", 
    description: "Responsive and interactive dashboard.", 
    image: "/project3.png", 
    link: "#",
    techStack: ["React", "Redux", "Tailwind CSS"]
  },
  { 
    name: "Project 4", 
    description: "Modern portfolio website design.", 
    image: "/project4.png", 
    link: "#",
    techStack: ["Next.js", "TypeScript", "Framer Motion"]
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="relative min-h-screen px-6 py-16 bg-gradient-to-b from-gray-900 via-purple-950 to-black text-white overflow-hidden">

      {/* 背景装饰圆圈 */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl animate-spin-slow"></div>

      {/* 页面标题 */}
      <motion.h2
        
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 drop-shadow-2xl"
      >
        My Projects
      </motion.h2>

      {/* 项目网格 */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
