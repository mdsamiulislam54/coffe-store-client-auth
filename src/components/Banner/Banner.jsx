import React from "react";
import banner from "../../assets/more/6.jpeg";

const Banner = () => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat bg-center h-[90vh]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="text-white w-11/12 mx-auto">
        <div className="md:w-6/12 pt-[200px]">
          <h1 className="font-ran text-5xl mb-4">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="font-raleway text-sm mb-4">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>

          <button className="font-ran px-4 py-1 border-2 border-transparent bg-asset text-black text-xl rounded-md hover:border-2 hover:border-white  hover:bg-transparent hover:text-white cursor-pointer transition-all duration-300 ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
