import React, { useEffect, useState } from "react";
import icons from "../../assets/Vector.png";
import images1 from "../../assets/more/4.png";
import images2 from "../../assets/more/5.png";
import { Link, useLoaderData } from "react-router";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
  const data = useLoaderData();
  console.log(data);
  const handleUpdateCoffe = (e) => {
    e.preventDefault();

    const from = e.target;
    const fromData = new FormData(from);
    const coffeData = Object.fromEntries(fromData.entries());
    console.log(coffeData);

    //   data send server

    fetch(`http://localhost:5000/coffe/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: `Coffe Updated successfully ! ${data}`,
          icon: "success",
        });
      });
  };
  return (
    <div className="min-h-screen">
      <div className="w-11/12 mx-auto">
        <div className="my-4">
          <Link
            to={"/"}
            className="text-xl text-shadow-neutral-900 font-bold font-ran flex items-center gap-4 cursor-pointer"
          >
            {" "}
            <FaArrowLeft /> Back To Home
          </Link>
        </div>
        <div className="bg-secondaryy/80 p-10">
          <div className="flex flex-col justify-center items-center gap-4 md:w-9/12 mx-auto text-center mb-10">
            <h1 className="font-ran text-5xl mb-4 font-medium">
              Updated Your Coffee
            </h1>
            <p>
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleUpdateCoffe} action="" className="">
            <div className="md:grid grid-cols-1 md:grid-cols-2">
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={data.name}
                  className="input w-full"
                  placeholder="coffe name.."
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Chef</label>
                <input
                  type="text"
                  name="chef"
                  defaultValue={data.chef}
                  className="input w-full"
                  placeholder="Enter coffe chef"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Supplier</label>
                <input
                  type="text"
                  name="suplier"
                  defaultValue={data.suplier}
                  className="input w-full"
                  placeholder="Enter coffe suplier"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Taste</label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={data.taste}
                  className="input w-full"
                  placeholder="Enter coffe taste"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Price</label>
                <input
                  type="text"
                  name="price"
                  defaultValue={data.price}
                  className="input w-full"
                  placeholder="Enter coffe category"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
                <label className="label">Details</label>
                <input
                  type="text"
                  name="details"
                  defaultValue={data.details}
                  className="input w-full"
                  placeholder="Enter your details"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 col-span-2">
                <label className="label">
                  Photo Url{" "}
                  <span>
                    <img
                      className="w-10 h-10 object-cover bg-white"
                      src={data.photo}
                      alt=""
                    />
                  </span>{" "}
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={data.photo}
                  className="input w-full"
                  placeholder="Enter your photo url"
                />
              </fieldset>
              <input
                type="submit"
                value="updated Coffe"
                className="text-xl font-ran w-full col-span-2 bg-assett md:m-4 p-2 rounded-md border-2 border-primaryC hover:bg-transparent transition-all duration-300 cursor-pointer"
              />
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdateCoffe;
