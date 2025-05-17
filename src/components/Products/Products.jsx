import React, { useEffect, useState } from "react";
import icons from "../../assets/Vector.png";
import images1 from "../../assets/more/4.png";
import images2 from "../../assets/more/5.png";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
const Products = () => {
  const [coffeData, setCoffeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/coffe");
      const data = await res.json();
      setCoffeData(data);
    };
    fetchData();
  }, []);

  const handleCoffeDelete = (id)=>{
    fetch(`http://localhost:5000/coffe/${id}`,{
      method:"DELETE",
      headers:{
        "content-type":"application/json"
      },

    })
    .then(res => res.json())
    .then(data =>{
      if(data.deletedCount === 1){
        toast.success("Coffe deleted successfully!",{autoClose:2000})
        const newCoffe = coffeData.filter((cofee)=> cofee._id !== id);
        setCoffeData(newCoffe)
      }else{
        toast.error("Coffe deleted unsuccessfully!")
      }
    })

  }

  return (
    <div className="min-h-screen relative">
      <img src={images1} alt="" className="absolute top-[150px] -z-1 w-55" />
      <img
        src={images2}
        alt=""
        className="absolute top-[400px] right-0 w-55 -z-1"
      />
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center mb-20">
          <p className="mt-10 text-md mb-4">... Sip & Savor ...</p>
          <h3 className="text-5xl font-ran mb-4">Our Popular Products</h3>
          <Link
            to={"/addcoffe"}
            className="flex gap-3 font-ran bg-assett p-2 rounded-md border-2  items-center text-xl hover:bg-transparent cursor-pointer transition-all duration-300"
          >
            Add Coffe <img src={icons} alt="icons" className="w-4 h-4" />
          </Link>
        </div>

        
        <div className="z-100 grid md:grid-cols-2 gap-4 w-10/12 mx-auto">
          {coffeData.map((coffe) => {
            return (
              <div className="flex items-center  bg-assett/40 rounded-md p-2  justify-around">
                <div className="">
                  <img src={coffe.photo} alt="" className="w-40" />
                </div>
                <div>
                  <div className="flex items-center justify-between w-full">
                    <h2>Name: {coffe.name}</h2>
                  </div>
                  <div>
                    <h2>Chef: {coffe.chef}</h2>
                  </div>
                  <div>
                    <h2>Price: 800 Taka</h2>
                  </div>
                  
                </div>
                <div className="flex flex-col gap-4">
                    <Link className="p-3 bg-assett rounded-lg"><FaEye/></Link>
                    <Link className="p-3 bg-black text-white rounded-lg"> <CiEdit /> </Link>
                    <Link onClick={()=>handleCoffeDelete(coffe._id)} className="p-3 bg-red-400 rounded-lg"><MdDeleteForever /></Link>
                  </div>
              </div>
            );
          })}
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Products;
