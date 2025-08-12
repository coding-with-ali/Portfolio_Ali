
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div id='About' className='relative h-auto bg-gradient-to-b from-[#062d1a] via-black to-black overflow-hidden text-white flex justify-around items-center flex-col-reverse p-3 md:flex-row py-16 md:py-32'>
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
    <div className='md:w-[50%] '>
      
      
      <h1 className="mt-6 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight">
          <span
            className="inline-block text-[#7fe089] font-semibold mr-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            About
          </span>
          <span className="text-white inline font-bold"> Us</span>
        </h1>

        <h2 className='text-white text-[30px] font-extrabold lg:text-[50px]'>
        Full Stack Web Developer
        </h2>
        <p className="max-w-[800px] text-gray-300 mt-4 text-sm sm:text-base">
        My name is Muhammad Ali and I&apos;m a passionate web developer. I have a strong foundation in web design and development. I&apos;ve worked on various projects, including websites and web applications.I am currently open to new opportunities and collaborations. Feel free to reach out if you&apos;re interested in working together or have any projects in mind.
        </p>


     <Link href="/cv.pdf" target='_blank' rel="noopener noreferrer"> <button className='bg-black text-color text-md border-2 border-color font-bold py-2 px-6 my-5 rounded-[30px] lg:text-lg '>
          Download CV    
      </button></Link>
    </div>
  </div>
  )
}
