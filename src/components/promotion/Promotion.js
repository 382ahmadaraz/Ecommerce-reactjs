import React from "react";
import pro1 from "../images/pro-1.png";
import pro2 from "../images/pro-2.png";
import pro3 from "../images/pro-3.png";

export default function Promotion() {
  return (
    <div className="text-center h-[55vh] sm:h-[70vh]  md:h-[110vh] lg:h-[85vh]   xl:h-[90vh]">
      <div> 
      <p className="text-sm font-bold text-blue-500 pt-8 md:text-lg ">
        PROMOTIONS
      </p>
      <p className="text-2xl py-5 font-semibold md:text-4xl lg:text-5xl">
        Our Promotions Events
      </p>
      </div>

      {/* image-section */}
      {/* 2-cards */}
      <div className="promotion-conatiner  px-0 w-[100%] sm:h-[75%]  lg:h-[60vh] lg:flex lg:items-center xl:h-[65%] ">
        <div className="pro-part-1 w-[80%] m-auto  sm:w-[100%] sm:pl-7 sm:h-[100%]  lg:w-[65%] lg:h-[88%] lg:pt-3 xl:h-[100%]">
          <div className="flex items-center justify-evenly bg-slate-300 h-24 hover:border-2 hover:border-black rounded-sm hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer sm:w-[96%] sm:h-[45%] lg:h-[23vh] xl:h-[45%]">
            <p className="font-bold text-lg  p-4 sm:text-4xl">
              GET UP TO 60% <br />
              <span className="font-normal text-[10px] sm:text-xl ">
                For the summer season
              </span>
            </p>
            <img src={pro1} alt="pro1" className="h-24 sm:h-[100%] " />
          </div>
          <div className="bg-neutral-900 mt-3 h-24  p-2 text-white hover:border-2 hover:border-blue-600 rounded-sm hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer sm:w-[96%] sm:h-[45%] lg:h-[22vh] xl:h-[45%]">
            <p className="font-bold text-md p-2 sm:p-1 sm:text-4xl md:pt-7 lg:p-1">
              GET 30% Off
              <br />
              <span className="font-normal text-[10px] sm:text-xl ">
                Use Promo Code
              </span>
              <br />
              <span className="bg-neutral-700 px-3 py-1  rounded font-semibold text-[10px] cursor-pointer hover:bg-black sm:text-lg md:text-lg xl:text-xl ">
                DINE WEEKEND SALE
              </span>
            </p>
          </div>
        </div>

        {/* 2-cards */}
        <div className=" pro-part-2 w-[40%] hidden    justify-around p-2   lg:block sm:h-[38vh]  sm:w-[100%] md:h-[48vh] lg:w-[35%] lg:h-[85%] xl:h-[100%]">
          <div className="sm:flex sm:justify-evenly h-[95%]   ">
            <div className="bg-orange-100 w-[40%] pt-2 pl-2 text-[14px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer sm:h-[35vh]  md:h-[100%] md:text-xl lg:text-lg  lg:w-[45%]">
              <p className="text-left ">
                Flex Sweatshirt <br />
                <span className="line-through mr-1">$100.00</span>$75.00{" "}
              </p>
              <img src={pro2} alt="pro2" className=" sm:w-[90%] sm:h-[83%]  lg:h-[80%]" />
            </div>
            <div className="bg-orange-100 w-[40%] pt-6 pl-2  text-[14px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer sm:h-[35vh] sm:pt-1   md:h-[100%] md:text-xl lg:text-lg lg:w-[45%]">
              <p className="text-left ">
                Flex Sweatshirt <br />
                <span className="line-through mr-1">$100.00</span>$75.00{" "}
              </p>
              <img
                src={pro3}
                alt="pro3"
                className="w-[800px] sm:h-[84%] lg:h-[80%] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
