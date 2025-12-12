"use client";

import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  techStack?: string[];
}

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.97 }}
      className="block bg-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer border border-gray-800 hover:border-pink-500 transition-all duration-300">
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 md:h-56 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
      </div>

      <div className="p-5">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-white mb-1">
          {project.name}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gray-400 mb-2">
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack?.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
              className="px-3 h-8 flex items-center justify-center text-xs font-medium bg-gray-700 text-white rounded-full cursor-default hover:bg-gray-600 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
