import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import k1 from '../../components/images/kids/k1.jpg'


export default function Kids() {
  return (
    <div>
      <Navbar/> 
      <h1 className="text-center font-semibold text-xl mt-7 text-blue-700 bg-blue-200 w-72 m-auto py-1">Kids Wear</h1>
      <div className="main-cards    flex flex-wrap justify-start p-7 h-[90vh] [&>*]:ml-8 [&>*]:mt-7 ">
      <div className="  w-[18%] h-[410px] hover:border-2 hover:border-black hover:rounded-md hover:scale-105 transition duration-300 hover:brightness-110 cursor-pointer">
          <div >
            <img src={k1} alt="haeder-image" className="h-[300px] w-[100%]"/>
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
      </div>
     
      <Footer/>
    </div>
     
  )
}
