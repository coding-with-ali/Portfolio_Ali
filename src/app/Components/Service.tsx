
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    img: "/service1.png",
    title: "Website Development",
    desc: "Modern, fast & custom web development that grows your business..",
  },
  {
    img: "/service2.png",
    title: "Website Designing",
    desc: "Intuitive and engaging UI/UX design for a seamless user experience.",
  },
  {
    img: "/service3.png",
    title: "Maintenance & Support",
    desc: "Regular updates & bug fixes. Security patches. Backup management.",
  },
];

export default function Service() {
  return (
    <div
      id="Service"
      className="relative h-auto bg-gradient-to-b from-black via-[#2c352f] to-[#062d1a] overflow-hidden text-white py-20"
    >
      <h1 className="text-center mt-6 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight">
        <span
          className="inline-block text-[#7fe089] font-semibold mr-2"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          My
        </span>
        <span className="text-white inline font-bold"> Services</span>
      </h1>

      <div className="flex justify-around items-center flex-wrap mx-8 my-10 gap-10 lg:flex-nowrap">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-[400px] h-fit text-white border-2 border-color rounded-3xl p-5 hover:scale-105 transition-transform duration-300"
          >
            <div>
              <Image
                src={service.img}
                alt={service.title}
                width="900"
                height="900"
                className="w-[450px] h-auto"
              />
            </div>
            <h3 className="text-xl font-extrabold py-2">{service.title}</h3>
            <p className="text-sm">{service.desc}</p>
            <button className="border-2 border-white py-2 px-5 bg-color mt-5 rounded-full">
              Read More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
