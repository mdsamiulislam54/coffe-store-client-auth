import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const AddCoffe = () => {
  return (
    <div className="min-h-screen">
      <div className="w-11/12 mx-auto">
        <div className="my-4">
          <Link to={'/'} className="text-xl text-shadow-neutral-900 font-bold font-ran flex items-center gap-4 cursor-pointer"> <FaArrowLeft/> Back To Home</Link>
        </div>
        <div className="bg-secondaryy/80 p-10">
          <div className="flex flex-col justify-center items-center gap-4 w-9/12 mx-auto text-center mb-10">
            <h1 className="font-ran text-5xl mb-4 font-medium">
              Add New Coffee
            </h1>
            <p>
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form action="" className="">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="coffe name.."
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Chef</label>
                <input
                  type="text"
                  name="chef"
                  className="input w-full"
                  placeholder="Enter coffe chef"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Supplier</label>
                <input
                  type="text"
                  name="suplier"
                  className="input w-full"
                  placeholder="Enter coffe suplier"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Taste</label>
                <input
                  type="text"
                  name="taste"
                  className="input w-full"
                  placeholder="Enter coffe taste"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Category</label>
                <input
                  type="text"
                  name="category"
                  className="input w-full"
                  placeholder="Enter coffe category"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Details</label>
                <input
                  type="text"
                  name="details"
                  className="input w-full"
                  placeholder="Enter your details"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 col-span-2">
                <label className="label">Photo Url</label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full"
                  placeholder="Enter your photo url"
                />
              </fieldset>
              <input type="submit" value='Add Coffe' className="text-xl font-ran w-full col-span-2 bg-assett m-4 p-2 rounded-md border-2 border-primaryC hover:bg-transparent transition-all duration-300 cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffe;
