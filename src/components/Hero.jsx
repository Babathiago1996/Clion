import React from 'react'

const Hero = () => {
  return (
    <div className=" w-full h-[333px] text-start absolute left-[10px] px-6 md:px-8 top-[300px] max-w-full lg:top-[200px] lg:left-[100px]">
      <div className=" max-w-[673px] w-full text-start ">
        <h1 className="font-[satoshi] font-[500] text-white text-[20px]  md:text-[40px] leading-tight  lg:text-[70px] w-[673px] capitalize">
          The institute for financial liberation
        </h1>
        <p className="font-[300] font-[satoshi] lg:text-[24px] mt-4 text-base md:text-lg text-[#ffffff] ">
          Empower yourself with expert insights, practical strategies, and the
          tools to take control of your financial future.
        </p>
        <button className="h-[47px] w-[133px] bg-white text-black mt-3 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero