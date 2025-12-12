"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: 'Experiences', id: 'exp' },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
      setActive(id);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-sm bg-black/30 shadow-xl px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <motion.div
        onClick={() => handleScroll("home")}
        className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 3 }}>
        CKH
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-white font-medium relative">
        {menuItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative cursor-pointer"
            onClick={() => handleScroll(item.id)}
            whileHover={{ y: -2 }}
          >
            <span
              className={`transition-all duration-300 ${
                active === item.id ? "text-purple-400" : ""
              }`}
            >
              {item.name}
            </span>
            <motion.div
              layoutId="underline"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-400"
              animate={{ opacity: active === item.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg flex flex-col items-center py-6 gap-6 md:hidden text-white font-medium shadow-lg"
          >
            {menuItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="cursor-pointer text-lg"
                onClick={() => handleScroll(item.id)}
                whileHover={{ scale: 1.05, color: "#D946EF" }}
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
