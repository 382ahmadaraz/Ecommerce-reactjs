import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import m1 from '../../components/images/male/m1.png'
import m2 from '../../components/images/male/m2.png'
import m3 from '../../components/images/male/m3.png'

export default function Male() {
  return (
    <div>
      <Navbar />
      
      <h1 className="text-center font-semibold text-xl mt-7 text-blue-700 bg-blue-200 w-72 m-auto py-1">Mens Wears</h1>
      <div className="main-cards    flex flex-wrap justify-start p-7 h-[60vh] [&>*]:ml-8 [&>*]:mt-7">
      <div className="w-[20%] h-[70%] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
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
          <div className="   w-[20%] h-[40vh] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div>
            <img src={m2} alt="haeder-image" className="w-[100%]" />
          </div>
          <div className="card-content pt-3">
            <p className="text-xl font-semibold">
              Cameryn Sash Tie Dress <br />
              <span className="text-sm font-normal text-gray-500 ">Sweater</span> <br/>
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
