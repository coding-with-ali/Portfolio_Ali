import React from 'react'
import Link from 'next/link';
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='flex justify-around items-center bg-[#000] text-white py-3 flex-col-reverse md:flex-row'>
            <p className='text-[12px] md:text-[16px]'>
                Copyright &copy; 2025 by Muhammad Ali | All rights reserved.
            </p>
            <div >
                <Link href="#home" className=" text-black cursor-pointer bg-gradient-to-r from-[#71f596] to-[#1fb55a] flex mb-5 rounded-full p-2.5 gap-3 " ><FaArrowUp size={20} />Go To Home</Link>
            </div>
        </div>
    )
}
