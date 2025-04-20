import React from "react";

const OurPricing = () => {
  return (
    <div className="layout px-4">
      <div className="mx-auto  w-full max-w-[707px] mb-8 text-center ">
        <h1 className=" text-[32px] md:text-[45px] font-[500] font-[satoshi] text-black">
          Our pricing
        </h1>
        <p className="text-[18px] text-center md:text-[22px] font-[400] mt-2 text-[#363636]">
          Our transparent pricing for all. No setup fee
        </p>
      </div>

     
      <div className="flex flex-col lg:flex-row  layout  gap-6">







        <div className="flex flex-col flex-1  justify-between bg-black rounded-xl p-6 lg:p10 text-white ">



          <div className="flex flex-col gap-4 justify-between md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-medium">Premium</p>
              <h1 className="text-3xl font-bold mt-1">$39</h1>
              <p className="mt-1">Perfect for Start up (20-100)</p>
            </div>
            <div className="space-y-1 text-sm text-center md:text-left">
              <p>Perfect for Start up (20-100)</p>
              <p>Perfect for Start up (20-100)</p>
              <p>Perfect for Start up (20-100)</p>
              <p>Perfect for Start up (20-100)</p>
            </div>
          </div>


            <button type="button" className="capitalize mt-6 bg-white text-black w-full py-2 border border-gray-300 font-semibold" >
              purchase
            </button>
        </div>


        <div className="bg-[#f6f6f6] flex-1 p-6  lg:p-10 rounded-xl flex  flex-col justify-between text-black ">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="text-center md:text-left ">
              <p className="font-medium">Premium</p>
              <h1 className="text-3xl font-bold mt-1">$39</h1>
              <p className="mt-1">Perfect for Start up (20-100)</p>
            </div>
            <div className="space-y-1 text-sm text-center md:text-left">
              <p>Perfect for Start up (20-100)</p>
              <p>Perfect for Start up (20-100)</p>
              <p>Perfect for Start up (20-100)</p>
              <p>Perfect for Start up (20-100)</p>
            </div>
          </div>
          <div>
            <button type="button" className="capitalize mt-6 border border-gray-300 font-semibold bg-white text-black py-2 w-full">
              purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
