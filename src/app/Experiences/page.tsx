"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Reactjs Frontend Developer",
    company: "Dynamic Click Sdn Bhd.",
    duration: "May 2025 - Present",
    description: [
      "Built responsive web apps using Next.js, Reactjs, Tailwind.",
      "Created interactive UIs with Framer Motion.",
      "Improved performance and SEO for large-scale pages.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Bear IT Enterprise",
    duration: "Nov 2020 - March 2025",
    description: [
      "Developed UI components in Reactjs, nodejs and Mysql Workbench",
      "Optimized UX for client landing pages.",
      "Learned agile workflow and Git collaboration.",
    ],
  },
  {
    role: "React-Native Frontend Developer (Intern)",
    company: "Netiquette Software",
    duration: "May 2020 - July 2020",
    description: [
      "Developed UI components in React.",
      "Optimized UX for client landing pages.",
      "Learned agile workflow and Git collaboration.",
    ],
  },
];

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="exp"
      className="min-h-screen bg-gradient-to-b from-[#2a0030] via-black to-[#2a0030] text-white flex flex-col items-center px-6 py-20">
      <motion.h2 
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         initial={{ opacity: 0, y: 40, scale: 0.9 }}
         transition={{ type: "spring", stiffness: 180, damping: 10 }}
      className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
        Experience
      </motion.h2>

      <div
        className="w-full max-w-3xl space-y-4">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.duration}</p>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={26} />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-5 pb-4"
                  >
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
