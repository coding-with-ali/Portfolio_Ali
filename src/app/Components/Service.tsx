import React from 'react'
import Image from 'next/image'

export default function Service() {
  return (
    <div id='Service' className='relative h-auto bg-gradient-to-b from-black via-[#2c352f] to-[#062d1a] overflow-hidden text-white py-20'>
      <h1 className="text-center mt-6 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight">
          <span
            className="inline-block text-[#7fe089] font-semibold mr-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            My
          </span>
          <span className="text-white inline font-bold"> Services</span>
        </h1>

        <div className='flex justify-around items-center flex-wrap mx-8 my-10 gap-10 lg:flex-nowrap'>
        <div className='w-[400px] h-fit text-white border-2 border-color rounded-3xl p-5  '>
          <div>
            <Image
            src="/service1.png"
            alt="service-1"
            width="900"
            height="900"
            className='w-[450px] h-auto '
            />
          </div>
            <h3 className='text-xl font-extrabold py-2'>Website Development</h3>
            <p className=' text-sm'>Modern, fast & custom web development that grows your business..</p>
            <button className='border-2 border-white py-2 px-5 bg-color mt-5 rounded-full '>Read More</button>
        </div>
        <div className='w-[400px] h-auto text-white border-2 border-color rounded-3xl p-5'>
        <div>
            <Image
            src="/service2.png"
            alt="service-2"
            width="900"
            height="900"
            className='w-[450px] h-auto'
           />
          </div>
            <h3 className='text-xl font-extrabold py-2'>Website Designing</h3>
            <p  className='text-sm'>Intuitive and engaging UI/UX design for a seamless user experience.</p>
            <button className='border-2 border-white py-2 px-5 bg-color mt-5 rounded-full '>Read More </button>
        </div>
        <div className='w-[400px] h-autotext-white border-2 border-color rounded-3xl p-5'>
        <div>
            <Image
            src="/service3.png"
            alt="service-3"
            width="900"
            height="900"
            className='w-[450px] h-auto'
            />
          </div>
            <h3 className='text-xl font-extrabold py-2'>Maintenance & Support</h3>
            <p  className='text-sm'>Regular updates & bug fixes. Security patches. Backup management. </p>
            <button className='border-2 border-white py-2 px-5 bg-color mt-5 rounded-full '>Read More</button>
          </div>
      </div>
    </div>
  )
}



