import React from "react";
import card1 from "../images/pro-card-1.png";
import card2 from "../images/pro-card-2.png";
import card3 from "../images/pro-card-3.png";
import { Link ,useNavigate} from "react-router-dom";

export default function Products() {

  const navigate = useNavigate();

  return (
    <div className="main-product-container  h-[120vh] sm:h-[90vh] md:h-[120vh]  lg:h-[70vh]  lg:mt-0 xl:h-[85vh] 2xl:h-[90vh]  ">
      <div className="product-heading text-center">
        <p className="text-sm font-bold text-blue-500  pt-3 md:text-lg xl:text-xl">PRODUCTS</p>
        <p className="text-xl py-3 font-semibold md:text-3xl lg:text-5xl"> Check What We Want</p>
      </div>

      {/* card section  */}
      <div className="main-cards   flex flex-wrap justify-evenly p-6 h-[109vh] sm:h-[80vh] md:h-[100vh] lg:h-[55vh] xl:h-[65vh] 2xl:h-[80vh]   ">
        <div className="  w-[54%] h-[33%] sm:w-[48%] sm:h-[48%] md:w-[38%] lg:w-[30%] lg:h-[95%] xl:w-[25%] xl:h-[100%] 2xl:w-[28%]    hover:shadow-xl  hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer hover:border-2 hover:border-blue-300 ">
          <div className="card-image ">
            <Link to={"/product/details"}>
              <img src={card1} alt="haeder-image" className=" rounded w-[100%] h-[27vh] md:h-[35vh] xl:h-[45vh] 2xl:h-[55vh]" />
            </Link>
          </div>
          <div className="card-content pt-3">
            <p className="text-sm font-semibold md:text-xl 2xl:text-3xl">
              Brushed Raglan Sweatshirt <br />
              $195
            </p>
          </div>
        </div>
        <div onClick={()=> navigate('/product/details')} className=" h-[30%]  w-[54%] sm:w-[48%] sm:h-[48%] md:w-[38%] lg:w-[30%] lg:h-[95%] xl:h-[100%] xl:w-[25%] 2xl:w-[28%]   hover:shadow-xl hover:rounded-lg  hover:scale-105 transition duration-300 hover:brightness-100 cursor-pointer hover:border-2 hover:border-blue-300">
          <div className="card-image ">
               {" "}
              <img
                src={card3}
                alt="haeder-image"
                className="w-[100%] rounded h-[24vh] sm:h-[27vh] md:h-[35vh] xl:h-[45vh] 2xl:h-[55vh]"
              />
           </div>
          <div className="card-content pt-3">
            <p className="text-sm font-semibold md:text-xl 2xl:text-3xl">
              Cameryn Sash Tie Dress <br />
              $545
            </p>
          </div>
        </div>
        <div className=" h-[33%] w-[50%] sm:w-[48%] sm:h-[48%] md:w-[38%] lg:w-[30%] lg:h-[95%] xl:h-[100%] xl:w-[25%] 2xl:w-[28%]   hover:shadow-xl  hover:rounded-lg hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer  hover:border-2 hover:border-blue-300">
          <div className="card-image  ">
           <Link to={"/product/details"}> 
                <img src={card2} alt="haeder-image" className="rounded  w-[100%] h-[27vh] md:h-[35vh] xl:h-[45vh] 2xl:h-[55vh]" />
           </Link>
          </div>
          <div className="card-content pt-3"> 
            <p className="text-sm font-semibold md:text-xl 2xl:text-3xl">
              Flex Sweatshirt <br />
              $175
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
