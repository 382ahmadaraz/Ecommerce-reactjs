import React from "react";
import girlImg from "../images/unique-part.png";

export default function Unique() {
  return (
    <div className="main-unique h-[68vh]    sm:h-[75vh] md:h-[88vh] lg:h-[120vh] xl:h-[80vh] xl:mt-0 2xl:h-[70vh] ">
      <div className="  h-[18%] w-[80%]   float-end text-lg font-semibold p-1 sm:w-[60%] sm:h-[14%] sm:text-2xl lg:text-4xl xl:h-[20%] xl:w-[50%]">
        <p>
          Unique And Authentic Vintage <br />
          Designer Jewellery
        </p>
      </div>
      {/* [&>*]:border */}
      {/* unique card container  */}
      <div className="   w-[100%] m-auto mt-2 h-[98%] sm:h-[75vh] md:h-[85vh] lg:h-[116vh] xl:flex xl:mt-0 xl:h-[80%]">
        <span className="hidden border-none text-5xl  pl-9 pt-5 text-gray-100 text-opacity-10 font-bold  mt-36 absolute lg:left-[10%] lg:mt-14 lg:block lg:text-8xl xl:mt-0  xl:left-[3%]">
          Different <br />
          from <br />
          others
        </span>
        <div className="4-text-container  h-[30vh] sm:h-[28vh]  lg:h-[40vh] lg:w-[80%] xl:w-[50%] xl:h-[98%] lg:m-auto xl:m-0   w-[100%] flex flex-wrap justify-center items-center [&>*]:p-2   [&>*]:w-[48%] [&>*]:text-lg [&>*]:z-10  [&>*]:leading-4 [&>*]:text-gray-300">
          <div className="w-[45%]    ">
            <p className="  font-semibold  text-black">
              Using Good Quality materials
            </p>{" "}
            <p className="text-[10px] sm:text-lg  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="w-[45%]  ">
            <p className="  font-semibold  text-black">
              100% Handmade Products
            </p>
            <p className="text-[10px] sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="w-[45%]  ">
            <p className="  font-semibold text-black">Modern Fashion Design</p>
            <p className="text-[10px] sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="w-[45%]  ">
            <p className="  font-semibold text-black">
              Discount For Bulk Orders
            </p>
            <p className="text-[10px] sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
        <div className="image-text-container   h-[35%]  w-[100%] p-2 flex items-center justify-center  sm:px-4 xl:px-0 sm:h-[50%] lg:h-[60vh] lg:w-[80%] lg:m-auto xl:w-[60%] xl:h-[80%]  ">
          <div className="image-card  z-10 w-[30%] p-2 h-[100%] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
            <img src={girlImg} alt="girl" className="h-[100%] w-[100%] xl:h-[100%] xl:w-[100%] " />
          </div>
          <div className="content text-sm sm:text-lg text-gray-700 w-[65%] ml-2 lg:text-lg lg:pl-20 xl:pl-3 ">
            <p>
              This piece is ethically crafted  in our small family-owned 
              <br className="hidden lg:block xl: " />
              workshop in Peru with unmatched<br className="hidden xl:block"/> attention to detail and care.
            </p>
            <button className="bg-black text-white bg-opacity-90 py-1 px-3 md:py-2 md:px-4 mt-4 ml-4 md:ml-0  hover:bg-slate-400 rounded hover:rotate-6 transition-transform duration-900">
              See All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
