import React from 'react';
import about from '../../components/images/about.webp'
import Navbar from '../../components/navbar/Navbar';

const About = () => {
  return (
<div>
        <Navbar/>
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Dine Market</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Welcome to <span className="font-semibold text-gray-800">Dine Market</span>, your ultimate destination for fashionable and high-quality clothing. We are dedicated to providing a stunning range of apparel for both ladies and gentlemen, designed to suit every occasion and style.
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img
              src={about} // Replace with your actual image URL
              alt="Fashionable Clothing"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
            <p className="mt-4 text-gray-600">
              At <span className="font-semibold">Dine Market</span>, we believe that fashion is more than just clothing—it's a way to express yourself. Our collection is carefully curated to bring you the latest trends, exceptional quality, and unbeatable value. Whether you're dressing up for a special occasion or looking for casual wear, we've got you covered.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="bg-green-500 text-white rounded-full p-2 mr-4">
                  ✓
                </span>
                <p className="text-gray-600">Wide variety of trendy apparel</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-500 text-white rounded-full p-2 mr-4">
                  ✓
                </span>
                <p className="text-gray-600">High-quality materials</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-500 text-white rounded-full p-2 mr-4">
                  ✓
                </span>
                <p className="text-gray-600">Affordable prices</p>
              </li>
              <li className="flex items-center">
                <span className="bg-green-500 text-white rounded-full p-2 mr-4">
                  ✓
                </span>
                <p className="text-gray-600">Excellent customer service</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>);
};

export default About;
