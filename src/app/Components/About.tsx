"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      id="About"
      className="relative h-auto bg-gradient-to-b from-[#062d1a] via-black to-black overflow-hidden text-white flex justify-around items-center flex-col-reverse p-3 md:flex-row py-16 md:py-32"
    >
      {/* Image Animation */}
      <motion.div
        className="relative z-10 w-[180px] sm:w-[220px] md:w-[300px] rounded-2xl bg-gradient-to-br from-[#11401b] to-[#1a4f27] p-1 shadow-2xl transform rotate-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-white rounded-xl overflow-hidden">
          <Image
            src="/heroimage.png"
            alt="hero"
            width={300}
            height={300}
            className="w-full h-[220px] sm:h-[300px] object-cover"
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="md:w-[50%]">
        {/* About Us Heading */}
        <motion.h1
          className="mt-6 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block text-[#7fe089] font-semibold mr-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            About
          </span>
          <span className="text-white inline font-bold"> Us</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-white text-[30px] font-extrabold lg:text-[50px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Full Stack Web Developer
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="max-w-[800px] text-gray-300 mt-4 text-sm sm:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          My name is Muhammad Ali and I&apos;m a passionate web developer. I have
          a strong foundation in web design and development. I&apos;ve worked on
          various projects, including websites and web applications. I am
          currently open to new opportunities and collaborations. Feel free to
          reach out if you&apos;re interested in working together or have any
          projects in mind.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-black text-color text-md border-2 border-color font-bold py-2 px-6 my-5 rounded-[30px] lg:text-lg">
              Download CV
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
      