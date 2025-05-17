import React from "react";
import icons from "../../assets/more/logo1.png";
import { FaFacebookSquare, FaInstagramSquare, FaLocationArrow, FaPhone, FaYoutubeSquare } from "react-icons/fa";
import { MdEmail, MdLocalAirport, MdLocationPin } from "react-icons/md";
import images from '../../assets/more/13.jpg'
const Contact = () => {
  return (
    <div className="py-20 bg-secondary/50 bg-cover bg-no-repeat" style={{backgroundImage:`url(${images})`}}>
      <div className=" w-11/12 mx-auto">
        <div className="flex justify-between ">
          <div className="">
            <img src={icons} alt="logo" className="w-12" />
            <h2 className="text-3xl font-ran font-medium text-primaryC mb-4">
              Espresso Emporium
            </h2>
            <p className="w-7/12 mb-4 font-raleway text-sm">
                Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-4 items-center mb-4">
               <FaFacebookSquare size={30} color="blue"/>
               <FaInstagramSquare size={30} color="blue"/>
               <FaYoutubeSquare size={30} color='red'/>
            </div>
             <h2 className="text-3xl font-ran  text-primaryC font-bold mb-3">
             Get in Touch
            </h2>
            <div>
               <p className="flex items-center gap-4"> <FaPhone/> +880-1612086842</p>
               <p className="flex items-center gap-4"><MdEmail /> info@gmail.com  </p>
               <p className="flex items-center gap-4"> <MdLocationPin/> 72,well street,king Road Dhaka </p>
            </div>
          </div>
          <div className=" w-5/12">
               <h2 className="text-3xl font-ran  text-primaryC font-bold">
             Get in Touch
            </h2>
            <form action="" className="flex flex-col gap-5 p-3">
                <input type="text" name="name " placeholder="Name" className="w-full bg-white p-2 rounded-md focus:ring-2 focus:ring-primary focus:outline-none" />
                <input type="email" name="email " placeholder="Email"  className="w-full bg-white p-2 rounded-md focus:ring-2 focus:ring-primary focus:outline-none" />
                <textarea  name="text " placeholder="Message"  className="w-full bg-white p-2 rounded-md" focus:ring-2 focus:ring-primary focus:outline-none />
                <input type="submit" value='Send'  className="w-full bg-white p-2 rounded-md font-bold font-ran text-xl border-2 hover:border-primary border-transparent cursor-pointer transition-all duration-300"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
