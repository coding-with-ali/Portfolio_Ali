"use client";

import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

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

export default function Skills() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#000] via-[#062d1a] to-black">
      <div className="max-w-6xl mx-auto px-6 text-center ">
        <h1 className="mt-6 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight">
          <span
            className="inline-block text-[#7fe089] font-semibold mr-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            My
          </span>
          <span className="text-white inline font-bold"> Skills</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center pt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#99ce9f] shadow-lg rounded-xl p-6 hover:scale-105 transform transition duration-300"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold text-black">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
