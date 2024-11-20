import { Link } from "react-router-dom";
import header from "../images/header-image.png";
import addcart from "../images/Frame.png";
import patner1 from "../images/header-patner.png";
import patner2 from "../images/bustle.png";
import patner3 from "../images/versace.png";
import patner4 from "../images/instyle.png";

export default function Header() {
  return (
    <div className="container flex justify-center items-center     min-w-[100%] md:  h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[85vh] 2xl:h-[85vh]      ">
      <div className="content-part header-content  pt-3 h-[100%]size-5/6 px-3 w-[100%] sm:p-5 sm:h-[100%] md:w-[50%] md:h-[100%] ">
        <span className="bg-blue-200 text-blue-700 rounded-md p-1 px-3 font-semibold 2xl:text-2xl">
          Sale 70%
        </span>
        <h1 className="heading  text-extrabold py-2 md:py-9 text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="pb-2 sm:pb-9 md:pb-0  xl:text-lg 2xl:text-2xl">
          Anyone can beat you but no one can beat your outfit as long as you
           wear Dine outfit<> If you use this site regularly and would like to help keep the site on the Internet</>
        </p>
        <button className="add-cart-btn md:mt-10 bg-black text-white text-sm w-[150px] sm:w-[160px] md:w-52 flex p-3   sm:px-4  hover:bg-slate-400 rounded hover:rotate-6 transition-transform duration-900">
          <img src={addcart} alt="addcart" className="mr-1 " />{" "}
          <Link to={"/Allproducts"}>Start Shoping</Link>
        </button>
        <div className="patner-logo flex justify-between py-4 lg:py-14">
          <img src={patner1} alt="header" className="w-[60px]  lg:h-[40px] lg:w-[90px] 2xl:w-[90px]" />
          <img src={patner2} alt="header" className="w-[60px] lg:w-[90px] 2xl:w-[90px]" />
          <img src={patner3} alt="header" className="w-[60px] lg:w-[90px] 2xl:w-[90px]" />
          <img src={patner4} alt="header" className="w-[60px] lg:w-[90px] 2xl:w-[90px]" />
        </div>
      </div>

      {/* 2nd part image  */}
      <div className="header-img h-[88%] w-[40%]  rounded-full bg-red-100 ml-6 hidden md:block md:h-[45vh] md:w-[45vh] lg:h-[50vh] lg:w-[50vh] xl:h-[65vh] xl:w-[65vh] xl:ml-11 2xl:h-[70vh] 2xl:w-[70vh]">
        <img src={header} alt="#" className=" md:h-[330px] md:ml-4 lg:h-[380px] lg:ml-0 xl:h-[450px]  2xl:h-[480px]  ]" />
      </div>
    </div>
  );
}
