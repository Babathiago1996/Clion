import React from 'react'
import icon1 from "../assets/Vector.png"
import icon2 from "../assets/streamline_spiral-shape-solid.png"
import icon3 from "../assets/hugeicons_shapes.png"
import icon4 from "../assets/fluent_shape-union-24-regular.png"

const boxs = [
  {
    icon: icon1,
    alt: "dandelion-flower",
    h1: "Startup Loans & Grants",
    p: " Flexible funding solutions to kickstart or expand businesses.",
  },
  {
    icon:  icon2 ,
    alt: "vector",
    h1: "Financial Advisory ",
    p: "Expert guidance on cash flow management and budgeting",
  },
  {
    icon:  icon3 ,
    alt:"steamline-spiral",
    h1: "Revenue Growth Program",
    p: "Tools and mentorship to optimize profitability and sustainability.",
  },
  {
    icon: icon4,
    alt:"hugeicon",
    h1: "Investment Matching",
    p: "Connecting startups with potential investors and venture capitalists.",
  },
];

const Growth = () => {
  return (
    <div className="layout px-4 py-8 ">
      <div className="mx-auto h-[131px] w-full max-w-[707px] mb-8 text-center ">
        <h1 className="  text-[32px] md:text-[45px] font-[500] font-[satoshi] text-black">
          Creating efficient financial growth
        </h1>
        <p className="text-[18px] text-center md:text-[22px] font-[400] mb-8 lg:mb-0 lg:mt-2">
          Empower yourself with expert insights, practical strategies, and the
          tools to take control of your financial future.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 justify-center mt-4 lg:mt-0 ">
        {boxs.map((box, index) => {
          return (
            <div
              key={index}
              className="  flex-1 w-full max-w-[300px]  shadow-lg border border-gray-300 py-5 px-4 h-full"
            >
              <img src={box.icon} alt={box.alt} className="mb-12" />
              <h1 className="text-[20px] font-[satoshi] font-medium">
                {box.h1}
              </h1>
              <p className="text-[16px] font-[satoshi] font-[400]">{box.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Growth