import { Link } from "react-router-dom";
import React from "react";
import logo from "../images/logo.png";
import Search from "../images/search.png";
import Cart from "../images/cart.png";
import menu from "../images/menu-logo.png";
import { useState } from "react";

// sm:bg-red-500 md:bg-blue-400 lg:bg-orange-400 xl:bg-gray-300 2xl:bg-red-900 
export default function Navbar() {
  const [toggle, setToggle] = useState(false)        

const handleToggle =() =>{ setToggle(!toggle) }  
	return (
		<div className="relative from-slate-50">
			<div className="flex  max-w-[screen] mb-1 sm:mb-0 min-h-[60px] bg-gradient-to-l from-cyan-300 via-amber-200 to-purple-300 items-center justify-between px-3 sm:h-[70px]  sm:px-2   md:h-[90px]  lg:px-7 lg:h-[90px]  xl:h-[80px]  2xl:h-[110px] ">
				{/* 1st part */}
				<div className="1-container flex w-[150px]   justify-between sm:justify-start sm:w-[40%] sm:p-2 md:w-[65%] md:justify-around md:p-0 lg:w-[57%] 2xl:h-[70px] 2xl:items-center">
					<div className="menu-btn  cursor-pointer p-1 rounded-md bg-gray-200   md:hidden">
						<img src={menu} alt="menu-Bar" className="w-[25px]" onClick={handleToggle} />
					</div>

					<div className="logo cursor-pointer   p-1  ml-[10px] sm:ml-4 md:ml-0">
						<Link to={"/"}>
							<img
								src={logo}
								alt="logo"
								className="xl:h-[30px]  2xl:h-[40px]"
							/>
						</Link>
					</div>

					<div className=" hidden  md:block md:text-lg xl:text-2xl ">
						<ul className="nav-list flex  text-bold [&>*]:rounded lg:text-xl xl:text-xl">
							<li className="ml-7 md:ml-1  cursor-pointer py-1 px-3 hover:text-white  hover:bg-slate-400 lg:ml-3">
								<Link to={"/female"}>Female</Link>
							</li>
							<li className="ml-7 md:ml-1 cursor-pointer p-1 px-2 hover:text-white hover:bg-slate-400 lg:ml-3">
								<Link to={"/male"}>Male</Link>
							</li>
							<li className="ml-7 md:ml-1 cursor-pointer p-1 px-2 hover:text-white hover:bg-slate-400 lg:ml-3">
								<Link to={"/kids"}>Kids</Link>
							</li>
							<li className="ml-7 md:ml-1 cursor-pointer p-1 px-2 hover:text-white hover:bg-slate-400 lg:ml-3">
								<Link to={"/Allproducts  "}>All Products</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* 2nd part  */}
				<div className="2-container  w-1/2 flex justify-around p-1    md:w-[35%] md:h-[63px] md:p-3 lg:w-[44%] xl:h-[65px] xl:p-2">
					<div className="search-field flex items-center border-2 border-gray-300 rounded mt-1 h-[25px] w-[198px]   md:h-[28px]  md:text-xl md:mt-1 lg:p-0 lg:w-[300px] lg:h-[35px]  xl:w-[400px] xl:h-[30px] xl:mt-1 2xl:h-[35px] 2xl:w-[500px]">
						<img
							src={Search}
							alt="search"
							className="h-[24px] rounded-sm  p-0 sm:h-[25px] sm: md:h-[28px] lg:h-[30px] lg:p-1   "
						/>

						<input
							type="text"
							className="w-[100%]   text-[14px] ml-1 px-2 rounded-sm outline-none sm:w-[92%] md:w-[92%] md:h-[100%]  lg:w-[292%] lg:text-xl  "
							placeholder="Search"
						/>
					</div>
					<div className="add-to-cart ml-1 bg-slate-200 border-2 border-blue-500 hover:bg-gray-400 rounded-full  p-2 cursor-pointer xl:p-3 ">
						<img src={Cart} alt="cart" className="w-[25px] " />
					</div>
				</div>
			</div>
		{toggle &&<div className="absolute top-12 left-2">
				<ul className="bg-white shadow-2xl border rounded-xl p-6 flex flex-col items-center text-center">
					<li className="hover:bg-blue-400 p-2 hover:rounded-sm hover:text-blue-900"><Link to={"/female"}>Female</Link></li>
					<li className="hover:bg-blue-400 p-2 px-10 hover:rounded-sm hover:text-blue-900"><Link to={"/male"}>Male</Link></li>
					<li className="hover:bg-blue-400 p-2 px-10 hover:rounded-sm hover:text-blue-900"><Link to={"/kids"}>Kids</Link></li>
					<li className="hover:bg-blue-400 p-2 px-3 hover:rounded-sm hover:text-blue-900"><Link to={"/allproducts"}>All Products</Link></li>
					 
				</ul>
			</div>}
		</div>
	);
}
 