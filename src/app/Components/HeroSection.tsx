"use client"

import React, { JSX, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const HeroLanding: React.FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="pb-10 relative h-auto bg-gradient-to-b from-black via-[#2f533d] to-[#062d1a] overflow-hidden text-white">
      {/* Top navigation */}
      <nav className="w-[80vw] fixed top-5 left-1/2 -translate-x-1/2 z-50 ">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md rounded-full">
          <div className="flex items-center gap-4 ">
            <div className="w-10 h-10 rounded-full bg-[#2ec76e] flex items-center justify-center shadow-lg text-black font-bold">
              ✻
            </div>
            {/* Desktop menu */}
            <ul className="hidden md:flex gap-8 text-sm items-center opacity-90">
            <Link href="#home" className='text-xl px-3 hover:text-color'>Home</Link>
        <Link href="#About" className='text-xl px-3 hover:text-color'>About</Link>
        <Link href="#Service" className='text-xl px-3 hover:text-color'>Service</Link>
        <Link href="#Project" className='text-xl px-3 hover:text-color'>Projects</Link>
        <Link href="#Contact" className='text-xl px-3 hover:text-color'>Contact</Link>
            </ul>
          </div>

          {/* Contact button - desktop */}
          <Link href="#Contact">
          <button className="hidden md:inline-block bg-gradient-to-r from-[#71f596] to-[#1fb55a] text-black px-5 py-2 rounded-full font-medium shadow-md hover:opacity-90">
            Contact Me
          </button>
          </Link>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-md rounded-lg text-center bg-black/10 text-white px-6 py-4 space-y-4">
            <div className="flex flex-col gap-4 text-lg">
            <Link href="#home" className='text-xl px-3 hover:text-color'>Home</Link>
        <Link href="#About" className='text-xl px-3 hover:text-color'>About</Link>
        <Link href="#Service" className='text-xl px-3 hover:text-color'>Service</Link>
        <Link href="#Project" className='text-xl px-3 hover:text-color'>Projects</Link>
        <Link href="#Contact" className='text-xl px-3 hover:text-color'>Contact</Link>
            </div>
            <Link href="#Contact">
          <button className="hidden md:inline-block bg-gradient-to-r from-[#71f596] to-[#1fb55a] text-black px-5 py-2 rounded-full font-medium shadow-md hover:opacity-90">
            Contact Me
          </button>
          </Link>
          </div>
        )}
      </nav>

      {/* Center content */}
      <div className="max-w-[100vw] mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-32">
        <p className="text-xs sm:text-sm text-gray-300 ">
          Hi! I&apos;m Muhammad Ali | Based on Pakistan
        </p>

        <h1 className="mt-2 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight">
          <span
            className="inline-block text-[#26ab34] font-semibold mr-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Full Stack
          </span>
          <span className="text-white block sm:inline font-bold"> Developer</span>
          <br className="hidden sm:block" />
          <span className="text-white block sm:inline font-bold"> & Designer</span>
        </h1>

        <p className="max-w-[800px] text-gray-300 mt-2 text-sm sm:text-base">
          I build designs that solve problems, inspire action, and drive success.
        </p>

        {/* Floating image + ribbon + CTA */}
        <div className="relative mt-10 w-full flex justify-center items-center">
          {/* Decorative backdrop */}
          <div className="absolute -bottom-28 w-[700px] sm:w-[900px] h-[300px] sm:h-[360px] rounded-full bg-gradient-to-t from-transparent to-black opacity-40 blur-[40px] pointer-events-none"></div>

          {/* Wavy ribbon text */}
          <svg
            className="absolute -bottom-6 w-[100vw] h-[150px] sm:h-[180px] pointer-events-none"
            viewBox="0 0 1000 220"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <path
                id="ribbon"
                d="M0 110 C150 20, 350 200, 500 110 C650 20, 850 200, 1000 110"
              />
            </defs>

            {/* Light green ribbon background */}
            <use href="#ribbon" fill="none" stroke="#26ab34" strokeWidth="35" />

            {/* Black text */}
            <text fontSize="18" fontWeight="700" fill="black">
              <textPath href="#ribbon" startOffset="0%">
                PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio
                PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio PortFolio
                PortFolio
              </textPath>
            </text>
          </svg>


          {/* Profile image card */}
          <div className="relative z-10 w-[180px] sm:w-[220px] md:w-[300px] rounded-2xl bg-gradient-to-br from-[#11401b] to-[#1a4f27] p-1 shadow-2xl transform rotate-6">
            <div className="bg-white rounded-xl overflow-hidden">
              <Image
                src="/heroimage.png"
                alt="hero"
                width={300}
                height={300}
                className="w-full h-[220px] sm:h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Circular CTA */}
          <div className="absolute z-20 right-[calc(50%-90px)] sm:right-[calc(50%-120px)] md:right-[calc(50%-180px)] bottom-8 md:bottom-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center text-green-700 font-bold text-lg">
                ↓
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* subtle grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay">
        <div className="w-full h-full bg-[linear-gradient(transparent_0px,transparent_calc(100%_-_1px),rgba(255,255,255,0.02)_100%)] bg-size-[100%_40px]"></div>
      </div>
    </section>
  );
};

export default HeroLanding;
