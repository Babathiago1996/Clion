import React from 'react'
import icon from "../assets/facebook1.png"
import icon1 from "../assets/instagram.png"
import  img from "../assets/devicon_clion-wordmark.png"
import before from "../assets/before.png"

const Footer = () => {
  return (
    <div className="bg-black mt-8 px-4 py-8 ">
      <div className="layout flex-col flex lg:flex-row justify-between gap-10 max-w-7xl ">
        <div className="flex flex-col justify-between items-center lg:items-start gap-4">
          <img src={img} alt="clion" className='w-[120px] lg:w-[160px]' />

          <div className="flex gap-4   h-[40px]">
            <img src={icon} alt="facebook"  className='h-full'/>
            <img src={icon1} alt="instagram" className='h-full' />
          </div>
        </div>

        <div className=" flex flex-col gap-10 w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
            <div className="space-y-2 text-white">
              <h4 className="text-[#d9d9d9] font-[400] text-[12px]">
                Services
              </h4>
              <div>
                <p>Loans and Grants</p>
                <p>Financial advisory</p>
                <p>Revenue growth program</p>
                <p>Investment matching</p>
              </div>
            </div>
            <div className="space-y-2 text-white">
              <h4 className="text-[#d9d9d9] font-[400] text-[12px]">info</h4>
              <div>
                <p>About</p>
                <p>Projects</p>
                <p>News</p>
                <p>Partners</p>
                <p>Contacts</p>
              </div>
            </div>
            <button className=" w-full mt-4 sm:mt-0  sm:w-[160px] bg-white text-black h-[40px]">
              Get a consultation
            </button>
          </div>
          <div className="bg-white w-[45px]">
            <img src={before} alt="before" className='w-full ' />
          </div>

          <div className="text-sm space-y-2 text-white  ">
              <h3 className="font-[400] text-[14px] font-[satoshi]">
                +1 891 989-11-91
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-16 text-white">
                <p>info@clion.com</p>
                <p>© 2023 — Copyright</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer