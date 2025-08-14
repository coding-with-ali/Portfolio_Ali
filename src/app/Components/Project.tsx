
// "use client";

// import Image from "next/image";
// import { client } from "../../sanity/lib/client";
// import { projectsQuery } from "../../sanity/lib/queries";
// import type { Project } from "../../../types/project";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Project() {
//   const [projects, setProjects] = useState<Project[]>([]);

//   useEffect(() => {
//     async function getData() {
//       const data: Project[] = await client.fetch(projectsQuery);
//       setProjects(data);
//     }
//     getData();
//   }, []);

//   return (
//     <div
//       id="Project"
//       className="relative min-h-screen bg-gradient-to-b from-[#062d1a] via-black to-[#062d1a] overflow-hidden text-white py-20"
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-center mt-6 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight"
//       >
//         <span
//           className="inline-block text-[#7fe089] font-semibold mr-2"
//           style={{ fontFamily: "Playfair Display, serif" }}
//         >
//           My
//         </span>
//         <span className="text-white inline font-bold"> Projects</span>
//       </motion.h1>

//       <div className="flex justify-center items-start flex-wrap gap-10 mx-8 my-10">
//         {projects.map((p, idx) => (
//           <motion.div
//             key={p._slug ?? p._id ?? idx}
//             initial={{ opacity: 0, y: 50, scale: 0.95 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.6, delay: idx * 0.1 }}
//             viewport={{ once: true }}
//             className="group relative w-[330px] md:w-[400px] h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
//           >
//             {/* Project Image */}
//             {p.imageUrl ? (
//               <div className="w-full h-full overflow-hidden">
//                 <Image
//                   src={p.imageUrl}
//                   alt={p.title}
//                   fill
//                   className="object-fill transform group-hover:scale-110 transition-transform duration-700 ease-out"
//                   priority
//                 />
//               </div>
//             ) : (
//               <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-300">
//                 No Image
//               </div>
//             )}

//             {/* Overlay Content */}
//             <div
//               className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-6 
//                             translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
//             >
//               <h3 className="text-2xl font-extrabold mb-2 opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-700 delay-200">
//                 {p.title}
//               </h3>
//               <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-700 delay-300">
//                 {p.description}
//               </p>
//               {p.liveUrl && (
//                 <a
//                   href={p.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-700 delay-500 border-2 border-white py-2 px-5 bg-[#264131] rounded-full font-semibold hover:bg-[#3b5d48]"
//                 >
//                   View Project
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { projectsQuery } from "../../sanity/lib/queries";
import type { Project } from "../../../types/project";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    async function getData() {
      const data: Project[] = await client.fetch(projectsQuery);
      setProjects(data);
    }
    getData();
  }, []);

  return (
    <div
      id="Project"
      className="relative min-h-screen bg-gradient-to-b from-[#062d1a] via-black to-[#062d1a] overflow-hidden text-white py-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-6 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight"
      >
        <span
          className="inline-block text-[#7fe089] font-semibold mr-2"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          My
        </span>
        <span className="text-white inline font-bold"> Projects</span>
      </motion.h1>

      <div className="flex justify-center items-start flex-wrap gap-10 mx-8 my-10">
        {projects.map((p, idx) => {
          const isActive = activeIndex === idx;

          return (
            <motion.div
              key={p._slug ?? p._id ?? idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative w-[330px] md:w-[400px] h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => setActiveIndex(isActive ? null : idx)} // mobile toggle
            >
              {/* Project Image */}
              {p.imageUrl ? (
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    fill
                    className="object-fill transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-300">
                  No Image
                </div>
              )}

              {/* Overlay Content */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-6 
                  transition-transform duration-500 ease-in-out
                  ${isActive ? "translate-y-0" : "translate-y-full"} 
                  md:translate-y-full md:group-hover:translate-y-0`}
              >
                <h3
                  className={`text-2xl font-extrabold mb-2 transition-all duration-700 delay-200
                  ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                  md:opacity-0 md:translate-y-5 md:group-hover:opacity-100 md:group-hover:translate-y-0`}
                >
                  {p.title}
                </h3>
                <p
                  className={`text-sm mb-4 transition-all duration-700 delay-300
                  ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                  md:opacity-0 md:translate-y-5 md:group-hover:opacity-100 md:group-hover:translate-y-0`}
                >
                  {p.description}
                </p>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`border-2 border-white py-2 px-5 bg-[#264131] rounded-full font-semibold hover:bg-[#3b5d48] transition-all duration-700 delay-500
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    md:opacity-0 md:translate-y-5 md:group-hover:opacity-100 md:group-hover:translate-y-0`}
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
