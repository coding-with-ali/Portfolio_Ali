

import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import { projectsQuery } from '../../sanity/lib/queries'
import type { Project } from '../../../types/project'

export default async function Project() {
  const projects: Project[] = await client.fetch(projectsQuery)

  return (
    <div
      id="Project"
      className="relative min-h-screen bg-gradient-to-b from-[#062d1a] via-black to-[#062d1a] overflow-hidden text-white py-20"
    >
      <h1
        className="text-center mt-6 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight"
      >
        <span
          className="inline-block text-[#7fe089] font-semibold mr-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          My
        </span>
        <span className="text-white inline font-bold"> Projects</span>
      </h1>

      <div className="flex justify-center items-start flex-wrap gap-10 mx-8 my-10">
        {projects.map((p, idx) => (
          <div
            key={p._slug ?? p._id ?? idx}
            className="w-[330px] md:w-[400px] h-[450px] border-2 rounded-3xl p-3 flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {p.imageUrl ? (
              <div className="w-full h-[250px] md:h-[300px] relative rounded-lg overflow-hidden mb-4 ">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  className='object-fill'
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-[250px] bg-gray-700 rounded-2xl mb-4 flex items-center justify-center text-gray-300">
                No Image
              </div>
            )}

            <h3 className="text-2xl font-extrabold py-2">{p.title}</h3>

            <p className="text-[12px]  break-words overflow-hidden pb-4">{p.description}</p>

            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white py-2 px-5 bg-[#264131]  rounded-full text-center font-semibold transition-colors"
              >
                Veiw Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
