import React from 'react';
import { FaBell } from 'react-icons/fa';
import bell from "../assets/bellicon.png"

const Navbar = () => {
  return (
    <nav className=" py-4 px-10 flex justify-between items-center bg-white font-poppins">
      <div className="flex flex-col items-start justify-center">
        <span className='text-[16px] text-[#191919] font-semibold'>
            Hello, James Williams
        </span>
        <span className="text-[13px] text-[#777777]">
            Welcome Back
        </span>
      </div>
      <div className="flex items-center space-x-2 font-poppins">
        <div className="bg-[#FFE8E945] p-2 rounded-full">
       <img src={bell} alt='notifications' className='w-[14px] h-auto'/>

        </div>
        <span className='text-[14px] font-semibold'>James Williams</span>
        <img src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp" alt="avatar" className='w-8 h-8 object-cover object-center rounded-xl'/>
      </div>
    </nav>
  );
};

export default Navbar;
