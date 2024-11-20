import logo from "../images/logo.png";
import twitter from "../images/x.png";
import facebook from "../images/fb.png";
import linkedin from "../images/linkedin.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-footer  w-[100%] bg-gray-100 h-[10vh] sm:h-[27vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh] 2xl:h-[38vh] overflow-hidden ">
      <div className="w-[100%] sm:pt-2 m-auto   sm:h-[20vh] md:h-[28vh] lg:h-[30vh] xl:h-[75%] 2xl:h-[28vh] flex justify-evenly [&>*]:p-1     text-[10px] md:text-2xl lg:text-xl sm:pl-2 ">
        {/* 1 */}
        <div className="logo-part hidden sm:block w-[50%]   sm:w-[45%] ">
          <img src={logo} alt="logo" className=" lg:h-[15%] cursor-pointer" />
          <p className="text-md mt-2 text-gray-500 sm:text-sm  hidden md:block md:text-lg xl:text-lg xl:my-3 lg:my-4">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="icons flex mt-5 md:mt-4 lg:mt-2 ">
            <img
              src={twitter}
              alt="x"
              className=" h-[20px] p-1 bg-gray-200 rounded   ml-3 sm:h-[34px] sm:p-2 lg:p-3 xl:p-2 cursor-pointer hover:bg-gray-400"
            />
            <img
              src={facebook}
              alt="fb"
              className="h-[20px] p-1 bg-gray-200 rounded   ml-3 sm:h-[34px] sm:p-2 lg:p-3 xl:p-2 cursor-pointer hover:bg-gray-400"
            />
            <img
              src={linkedin}
              alt="In"
              className="h-[20px] p-1 bg-gray-200 rounded   ml-3 sm:h-[34px] sm:p-2 lg:p-3 xl:p-2 cursor-pointer hover:bg-gray-400"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="company-part hidden sm:block w-[15%]   sm:text-[14px]  lg:text-md">
          <p className="font-semibold xl:text-xl">Company</p>
          <ul className="flex flex-col text-gray-500 text-sm  ">
            <li className=" mt-[1px]  hover:text-blue-800 cursor-pointer">
              <Link to={"/aboutus"}>About</Link> 
            </li>
            <li className=" mt-[1px] sm:mt-[3px] hidden md:block xl:mt-[7px] hover:text-blue-800 cursor-pointer">
              
              Terms of Use 
            </li>
            <li className=" mt-[1px] sm:mt-[3px] xl:mt-[7px] hover:text-blue-800 cursor-pointer">
              Privacy Policy 
            </li>
            <li className="  mt-[1px] sm:mt-[3px] xl:mt-[7px] hidden sm:block hover:text-blue-800 cursor-pointer">
              How it works 
            </li>
            <li className=" mt-[1px] sm:mt-[3px] xl:mt-[7px] hover:text-blue-800 cursor-pointer">
              Contact Us 
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div className="support-part hidden sm:block    w-[15%] sm:text-[14px] lg:text-md xl:text-md ">
          <p className="font-semibold xl:text-xl">Support</p>
          <ul className="flex flex-col text-gray-500">
            <li className="mt-[1px] sm:mt-[3px] xl:mt-[7px] hidden md:block hover:text-blue-800 cursor-pointer ">
              Support Carrer 
            </li>
            <li className=" mt-[1px] sm:mt-[3px] xl:mt-[7px] hover:text-blue-800 cursor-pointer  ">
              24h Service 
            </li> 
            <li className="mt-[1px] sm:mt-[3px] xl:mt-[7px] hover:text-blue-800 cursor-pointer  ">
              Quick Chat 
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div className="contact-part w-[15%] hidden sm:block  sm:text-[14px] lg:text-md xl:text-md ">
          <p className="font-semibold xl:text-xl">Contact</p>
          <ul className="flex flex-col text-gray-500">
            <li className="mt-[5px] sm:mt-[3px] xl:mt-[7px] hover:text-blue-800 cursor-pointer">
               
              Whatsapp 
            </li>
            <li className="mt-[5px] sm:mt-[3px] xl:mt-[7px] hover:text-blue-800 cursor-pointer">
               
              Support 24h 
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-[2px] bg-gray-400" />
      <div className="flex justify-evenly p-2 md:p-4 [&>*]:text-gray-600 md:text-xl lg:text-xl xl:text-xl">
        <p className="text-gray-500 text-md ">&copy;2022 All rights reserved</p>
        <p className="hidden lg:block">
          Designed by. 
          <span className=" font-semibold text-blue-500">
            Weired Design Studio
          </span>
        </p>
        <p>
          code by.
          <span className="font-semibold text-blue-500">Ahmad Raza</span>
        </p>
      </div>
    </div>
  );
}
