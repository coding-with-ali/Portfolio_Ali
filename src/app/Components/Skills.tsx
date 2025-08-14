"use client";

import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500 text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-5xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

export default function Skills() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#000] via-[#062d1a] to-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading Animation */}
        <motion.h1
          className="mt-6 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block text-[#7fe089] font-semibold mr-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            My
          </span>
          <span className="text-white inline font-bold"> Skills</span>
        </motion.h1>

        {/* Skills Grid Animation */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center pt-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center shadow-orange-50 hover:shadow-md rounded-xl p-6 hover:scale-105 transform transition duration-300"
              >
                {skill.icon}
                <p className="mt-4 text-lg font-semibold text-white">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
