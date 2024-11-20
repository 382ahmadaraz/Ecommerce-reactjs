import React from "react";

export default function Newslatter() {
  return (
      <div className="w-[100%] m-auto       h-[35vh] sm:h-[35vh] text-center p-2 mt-2 xl:h-[55vh] xl:p-8">
        <p className="text-5xl hidden font-bold text-opacity-65 text-slate-200 absolute  my-11 z-[-1]  sm:ml-1 sm:text-5xl l">
          Newsletter
        </p>
        <div className="  w-[80%] m-auto sm:p-5 md:p-7 xl:p-8 h-[100%]">
          <p className="text-xl sm:text-2xl font-semibold md:text-4xl lg:text-5xl">
            Subscribe Our Newsletter
          </p>
          <p className="text-gray-700 my-4 xl:text-xl lg:my-7">
            Get the latest information and promo offers directly
          </p>
          <div>
            <input
              type="email"
              placeholder="Input Email Address"
              className="w-[80%] md:w-[60%] p-2 rounded border z-50"
            />
            <button
              type="submit"
              className="bg-black text-white px-2 py-1 sm:px-3  sm:py-1 md:px-5 md:py-2 ml-2 mt-2 rounded hover:bg-slate-400 hover:rotate-6 transition-transform duration-900"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
  );
}
