import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Promotion from '../../components/promotion/Promotion';
import Products from '../../components/products/Products';
import Unique from '../../components/unique/Unique';
import Newslatter from '../../components/newLetter/Newslatter';
import Footer from '../../components/footer/Footer';

export default function Home() {
  return (
    <div>
        <div>
        <Navbar/>
        <Header/>
        <Promotion/>
        <Products/>
        <Unique/>
        <Newslatter/>
        <Footer/>
        </div>
      {/* <h1>Home Page</h1> */}
    </div>
  )
}
