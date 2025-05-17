import React from "react";
import icons from "../../assets/Vector.png";
import images1 from '../../assets/more/4.png'
import images2 from '../../assets/more/5.png'
import { Link } from "react-router";
const Products = () => {
  return (
    <div className="min-h-screen relative">
      <img src={images1} alt=""  className="absolute top-[150px]"/>
      <img src={images2} alt=""  className="absolute top-[200px] right-0 w-50"/>
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="mt-10 text-md mb-4">... Sip & Savor ...</p>
          <h3 className="text-5xl font-ran mb-4">Our Popular Products</h3>
          <Link to={"/addcoffe"} className="flex gap-3 font-ran bg-assett p-2 rounded-md border-2  items-center text-xl hover:bg-transparent cursor-pointer transition-all duration-300">
            Add Coffe <img src={icons} alt="icons" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
