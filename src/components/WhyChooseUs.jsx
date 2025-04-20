import React from 'react'
import first from "../assets/first.png"
import second from "../assets/second.png"
import third from "../assets/third.png"

const WhyChooseUs = () => {
  return (
    <div className="layout py-12 px-4">
      <div className="mx-auto  w-full max-w-[707px] mb-8 text-center ">
        <h1 className=" text-[32px] md:text-[45px] font-[500] font-[satoshi] text-black">
          Why choose us
        </h1>
        <p className="text-[18px] text-center md:text-[22px] font-[400] mt-2">
          Empower yourself with expert insights, practical strategies, and the
          tools to take control of your financial future.
        </p>
      </div>

      <div className=" flex flex-col  items-center gap-12  layout">
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full ">
          <div className="w-full lg:w-1/2 py-6 px-2 text-start max-w-[582px]">
            <h1 className="font-[700] font-[satoshi] text-[24px] md:text-[30px]">
              High Startup Success Rate
            </h1>
            <p className="text-[16px]  md:text-[18px] font-[400] font-[satoshi]">
              Startups we support have a <b> 70% success rate</b> after three
              years, compared to the global <b> average of 50%.</b> Our
              financial strategies and tailored funding solutions help
              businesses survive and thrive in competitive markets.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <img src={first} alt="firstpic" className='w-full h-auto'/>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-6  w-full">
          <div className="w-full lg:w-1/2 py-6 px-2 text-start max-w-[582px]">
            <h1 className="font-[700] font-[satoshi] md:text-[30px] text-[24px]">
              Expert Financial Guidance
            </h1>
            <p className=" text-[16px] md:text-[18px] font-[400] font-[satoshi]">
              Our team includes financial experts with 10+ years of experience,
              providing hands-on advisory to help startups optimize their
              revenue streams, manage cash flow, and increase profitability by
              an average of 30% within the first year
            </p>
          </div>
          <div className='w-full lg:w-1/2 '>
            <img src={second} alt="secondpic" className='w-full h-auto' />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
          <div className="w-full lg:w-1/2  py-6 px-2 text-start max-w-[582px]">
            <h1 className="font-[700] font-[satoshi] text-[24px] md:text-[30px]">
              Fast & Flexible Funding
            </h1>
            <p className="text-[16px]  md:text-[18px] font-[400] font-[satoshi]">
              Clion offers loan approvals in as little as 48 hours, with
              flexible repayment plans that adapt to business growth. Unlike
              traditional banks, we prioritize accessibility and efficiency,
              ensuring startups get the capital they need when they need it.
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src={third} alt="thirdpic" className='w-full h-auto' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs