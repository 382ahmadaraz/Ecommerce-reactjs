import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import m1 from '../../components/images/male/m1.png'
import m2 from '../../components/images/male/m2.png'
import f1 from '../../components/images/female/1.png'
import f2 from '../../components/images/female/2.png'
import f3 from '../../components/images/female/3.png'
import f7 from '../../components/images/female/7.png'
import f8 from '../../components/images/female/8.png'
import f9 from '../../components/images/female/9.png'
import k1 from '../../components/images/kids/k1.jpg'




export default function All() {
  return (
    <div>
      <Navbar/>
      <h3 className="text-center font-semibold text-xl mt-7 text-blue-700 bg-blue-200 w-72 m-auto py-1">All Products</h3>
      <div className="main-cards flex flex-wrap justify-start p-7 h-[220vh] [&>*]:ml-14 [&>*]:mt-7">
      <div className="w-[20%] h-[17%] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={m1} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Jackeks</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
      </div>

      <div className="w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f1} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Jackeks</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
      </div>

      <div className="  w-[18%] h-[410px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div >
            <img src={k1} alt="haeder-image" className="h-[280px] w-[100%]"/>
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Brushed Raglan   <br />
              <span className="text-sm font-normal text-gray-500 ">Sweater</span> <br/>
              <span className="line-through mr-1">$300.00</span>
              $195
            </p>
          </div>
        </div>

      <div className="w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f7} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Jackeks</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
      </div>

      <div className="w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f3} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Jackeks</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
      </div>

      <div className="w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={m2} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Jackeks</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
      </div>

      <div className="w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f2} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Jackeks</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
      </div>

      <div className="w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f8} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Jackeks</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
      </div>

      <div className="w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f9} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Jackeks</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
      </div>

      <div className="w-[20%] h-[380px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={f2} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Jackeks</span> <br/>
              <span className="line-through mr-1">$545.00</span>
              $345
            </p>
          </div>
      </div>

      
          </div>   
             <Footer/>
    </div>
  )
}
