import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import f1 from "../../components/images/female/1.png";
import f2 from "../../components/images/female/2.png";
import f3 from "../../components/images/female/3.png";
import f4 from "../../components/images/female/4.png";
import f5 from "../../components/images/female/5.png";
import f6 from "../../components/images/female/6.png";
import f7 from "../../components/images/female/7.png";
import f8 from "../../components/images/female/8.png";
import f9 from "../../components/images/female/9.png";

export default function Female() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center font-semibold text-xl mt-7 text-blue-700 bg-blue-200 w-72 m-auto py-1">Female Products</h1>
      {/* card section  */}
      <div className="main-cards    flex flex-wrap justify-evenly p-7 h-[300vh] [&>*]:ml-8 [&>*]:mt-7 ">
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f1} alt="haeder-image" className=""/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Brushed Raglan Sweatshirt <br />
              <span className="text-sm font-normal text-gray-500 ">Sweater</span> <br/>
              <span className="line-through mr-1">$300.00</span>
              $195
            </p>
          </div>
        </div>

        <div className="   w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f2} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Dress</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
        </div>
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f3} alt="haeder-image" className="size-full"/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Lite Sweatpants <br />
              <span className="text-sm font-normal text-gray-500 ">Pants</span> <br/>
              <span className="line-through mr-1">$301.00</span>
              $190
            </p>
          </div>
        </div>
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f9} alt="haeder-image" className=""/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Brushed Raglan Sweatshirt <br />
              <span className="text-sm font-normal text-gray-500 ">Sweater</span> <br/>
              <span className="line-through mr-1">$300.00</span>
              $195
            </p>
          </div>
        </div>
        <div className="w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f3} alt="haeder-image" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Flex Sweatshirt <br />
              <span className="text-sm font-normal text-gray-500 ">Sweater</span> <br/>
              <span className="line-through mr-1">$210.00</span>
              $155
            </p>
          </div>
        </div>
        <div className="   w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f4} alt="haeder-image" className="size-full"/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Flex Sweatpant <br />
              <span className="text-sm font-normal text-gray-500 ">Pants</span> <br/>
              <span className="line-through mr-1">$205.00</span>
              $175
            </p>
          </div>
        </div>
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f5} alt="haeder-image" className="size-full"/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
               Pink Fleece Sweatpants <br />
              <span className="text-sm font-normal text-gray-500 ">Pants</span> <br/>
              <span className="line-through mr-1">$188.00</span>
              $105
            </p>
          </div>
        </div>
        
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f1} alt="haeder-image" className=""/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Brushed Raglan Sweatshirt <br />
              <span className="text-sm font-normal text-gray-500 ">Sweater</span> <br/>
              <span className="line-through mr-1">$300.00</span>
              $195
            </p>
          </div>
        </div>
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f6} alt="haeder-image" className="size-full"/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Lite Sweatpants <br />
              <span className="text-sm font-normal text-gray-500 ">Pants</span> <br/>
              <span className="line-through mr-1">$301.00</span>
              $190
            </p>
          </div>
        </div>
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f7} alt="haeder-image" className="size-full"/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Imperial Alpaca Hoodie <br />
              <span className="text-sm font-normal text-gray-500 ">Jackets</span> <br/>
              <span className="line-through mr-1">$780.00</span>
              $510
            </p>
          </div>
        </div>
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f8} alt="haeder-image" className="size-full"/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Muscle Tank <br />
              <span className="text-sm font-normal text-gray-500 ">T-shirts</span> <br/>
              <span className="line-through mr-1">$110.00</span>
              $75
            </p>
          </div>
        </div>
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f2} alt="haeder-image" className="size-full"/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Lite Sweatpants <br />
              <span className="text-sm font-normal text-gray-500 ">Pants</span> <br/>
              <span className="line-through mr-1">$301.00</span>
              $190
            </p>
          </div>
        </div>
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f9} alt="haeder-image" className="size-full"/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Brushed Bomber<br />
              <span className="text-sm font-normal text-gray-500 ">Jackets</span> <br/>
              <span className="line-through mr-1">$400.00</span>
              $225
            </p>
          </div>
        </div>
        <div className="   w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f2} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Dress</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
          </div>
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f1} alt="haeder-image" className=""/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Brushed Raglan Sweatshirt <br />
              <span className="text-sm font-normal text-gray-500 ">Sweater</span> <br/>
              <span className="line-through mr-1">$300.00</span>
              $195
            </p>
          </div>
        </div>
        <div className="  w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f7} alt="haeder-image" className="size-full"/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Imperial Alpaca Hoodie <br />
              <span className="text-sm font-normal text-gray-500 ">Jackets</span> <br/>
              <span className="line-through mr-1">$780.00</span>
              $510
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
