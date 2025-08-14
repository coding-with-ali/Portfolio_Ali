
"use client";

import React, { JSX, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const HeroLanding: React.FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="pb-10 relative h-auto bg-gradient-to-b from-black via-[#2f533d] to-[#062d1a] overflow-hidden text-white">

      {/* Navbar */}
      <motion.nav
        className="w-[80vw] fixed top-5 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md rounded-full">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#2ec76e] flex items-center justify-center shadow-lg text-black font-bold">
              ✻
            </div>
            <ul className="hidden md:flex gap-8 text-sm items-center opacity-90">
              <Link href="#home" className='text-xl px-3 hover:text-color'>Home</Link>
              <Link href="#About" className='text-xl px-3 hover:text-color'>About</Link>
              <Link href="#Service" className='text-xl px-3 hover:text-color'>Service</Link>
              <Link href="#Project" className='text-xl px-3 hover:text-color'>Projects</Link>
              <Link href="#Contact" className='text-xl px-3 hover:text-color'>Contact</Link>
            </ul>
          </div>
          <Link href="#Contact">
            <button className="hidden md:inline-block bg-gradient-to-r from-[#71f596] to-[#1fb55a] text-black px-5 py-2 rounded-full font-medium shadow-md hover:opacity-90">
              Contact Me
            </button>
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-md rounded-lg text-center bg-black/10 text-white px-6 py-4 space-y-4">
            <div className="flex flex-col gap-4 text-lg">
              <Link href="#home">Home</Link>
              <Link href="#About">About</Link>
              <Link href="#Service">Service</Link>
              <Link href="#Project">Projects</Link>
              <Link href="#Contact">Contact</Link>
            </div>
          </div>
        )}
      </motion.nav>

      {/* Center content */}
      <div className="max-w-[100vw] mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-32">

        {/* Small intro */}
        <motion.p
          className="text-xs sm:text-sm text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Hi! I&apos;m Muhammad Ali | Based in Pakistan
        </motion.p>

        {/* Main heading with typing */}
        <motion.h1
          className="mt-2 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <span
            className="inline-block text-[#26ab34] font-semibold mr-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <Typewriter
              options={{
                strings: ["Full Stack"],
                autoStart: true,
                loop: false,
                delay: 50,
                deleteSpeed: Infinity, 
                 cursor : "" 
              }}
            />
          </span>
          <span className="text-white block sm:inline font-bold">
            <Typewriter
              options={{
                strings: ["Developer  & Designer"],
                autoStart: true,
                loop: false,
                delay: 50,
                deleteSpeed: Infinity, 
                 cursor : "" 
              }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-[800px] text-gray-300 mt-2 text-sm sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 , duration: 0.5 }}
        >
          I build designs that solve problems, inspire action, and drive success.
        </motion.p>

        {/* Image + Ribbon */}
        <div className="relative mt-10 w-full flex justify-center items-center">

          {/* Image */}
          <motion.div
            className="relative z-10 w-[180px] sm:w-[220px] md:w-[300px] rounded-2xl bg-gradient-to-br from-[#11401b] to-[#1a4f27] p-1 shadow-2xl transform rotate-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
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

          {/* Ribbon */}
          <motion.svg
            className="absolute -bottom-6 w-[100vw] h-[150px] sm:h-[180px] pointer-events-none"
            viewBox="0 0 1000 220"
            preserveAspectRatio="xMidYMid slice"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <defs>
              <path id="ribbon" d="M0 110 C150 20, 350 200, 500 110 C650 20, 850 200, 1000 110" />
            </defs>
            <use href="#ribbon" fill="none" stroke="#26ab34" strokeWidth="35" />
            <text fontSize="18" fontWeight="700" fill="black">
              <textPath href="#ribbon" startOffset="0%">
                PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
