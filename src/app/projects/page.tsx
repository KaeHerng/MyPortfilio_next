"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { 
    name: "Claiming System", 
    description: "A sleek web app with modern UI.", 
    image: "https://wallpapers.com/images/hd/memes-pics-funny-pictures-i0yba3ovfb7k4qgs.jpg", 
    link: "#",
    techStack: ["React", "Style + CSS", "javascript", "Redux", "RESTful API"]
  },
  { 
    name: "Warehouse Management System", 
    description: "High-end frontend design with animations.", 
    image: "https://play-lh.googleusercontent.com/ZrsPit-BgpiMdm3am82N-4XV5DJJTkf1JzWFi26F39dWX6gCBFylt3t4iL93NOYeVhM=w240-h480-rw", 
    link: "#",
    techStack: ["React", "CSS", "JavaScript", "MySQL", "RESTful API", "Redux"]
  },
  { 
    name: "Inventory System", 
    description: "Responsive and interactive dashboard.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTmbuJEYWshEVbGFYMNWCdCwJ8ULML1cbxQ&s", 
    link: "#",
    techStack: ["React", "Context", "CSS", "Ether.js", "Wallet Connect", "RESTful API", "Postgrey SQL"]
  },
  { 
    name: "AMP", 
    description: "an AI Marketplace CRM", 
    image: "https://static.wixstatic.com/media/8d7a62_853119a146d24bb693d751f9ae0c65e8~mv2.webp/v1/fill/w_700,h_700,al_c,q_85,enc_avif,quality_auto/8d7a62_853119a146d24bb693d751f9ae0c65e8~mv2.webp", 
    link: "#",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Context", "RESTful API", "Tailwind CSS"]
  },
  { 
    name: "My Portfolio", 
    description: "Modern portfolio website design.", 
    image: "https://cdn.wallpapersafari.com/18/58/340nFZ.png", 
    link: "#",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"]
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
