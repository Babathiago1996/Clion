import React, { useState } from 'react'
import imag from "../assets/devicon_clion-wordmark.png"
import { RiMenuAddFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";



const links = [
  { title: "Home", to: "#" },
  { title: "About ", to: "#" },
  { title: "Contact", to: "#" },
  { title: "Resources", to: "#" }
];

const NavBar = () => {
    const [click, setClick]=useState(false)
    const handleclick=()=>{
setClick(!click)
    }
  return (
    <div className="relative">
      <div className=" flex justify-between h-[84px] py-4 px-4 md:py-8 lg:px-[100px]">
        <div>
          <img src={imag} alt="image" className="w-full object-contain" />
        </div>
        <div className="hidden lg:flex gap-[65px] items-center text-[#ffffff] font-[400] font-[Mona Sans] ">
          {links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.to}
                className="hover:text-gray-400 transition"
              >
                {link.title}
              </a>
            );
          })}
        </div>

        <div className="block lg:hidden z-50">
          <button onClick={handleclick} className="text-white">
            {click ? <IoClose size={40} /> : <RiMenuAddFill size={40} />}
          </button>
        </div>
      </div>
      {click && (
        <div className=" absolute lg:hidden w-full h-[250px] left-0 top-[84px] shadow-lg bg-[#000000] cursor-pointer p-6 z-40">
          <div className="flex flex-col gap-6 text-[#ffffff] text-base">
            {links.map((link, index) => {
              return (
                <a key={index} href={link.to} className='hover:text-gray-400'>
                  {link.title}
                </a>
              );
            })}
          </div>
          <button className="bg-[#fdfdfd] mt-6 w-full text-black py-2 rounded-full">
            read more
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBar