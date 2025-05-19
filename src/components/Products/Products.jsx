import React, { useEffect, useState } from "react";
import icons from "../../assets/Vector.png";
import images1 from "../../assets/more/4.png";
import images2 from "../../assets/more/5.png";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
const Products = () => {
  const [coffeData, setCoffeData] = useState([]);
  const [coffe, setCoffe] = useState({})
 console.log(coffe);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/coffe");
      const data = await res.json();
      setCoffeData(data);
    };
    fetchData();
  }, []);

  const handleCoffeDelete = (id) => {
    // Confirmation alert
    Swal.fire({
      title: "Delete Coffee?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete request
        fetch(`http://localhost:5000/coffe/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              // Success alert
              Swal.fire("Deleted!", "Coffee removed successfully", "success");
              // Update state
              setCoffeData((prev) =>
                prev.filter((coffee) => coffee._id !== id)
              );
            }
          })
          .catch(() => {
            // Error alert
            Swal.fire("Error!", "Failed to delete coffee", "error");
          });
      }
    });
  };

  // const openModal = (coffe)=>{
  //   setCoffe(coffe)
  //   document.getElementById("my_modal_1").showModal()
  // }

  // const handleCoffeUpdate = e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const updateData = Object.fromEntries(formData);
  
  //   // Show loading alert
  //   Swal.fire({
  //     title: 'Updating...',
  //     allowOutsideClick: false,
  //     didOpen: () => {
  //       Swal.showLoading();
  //     }
  //   });
  
  //   // Update data on server
  //   fetch(`http://localhost:5000/coffe/${coffe._id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(updateData)
  //   })
  //   .then(res => {
  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return res.json();
  //   })
  //   .then(data => {
      
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Updated!',
  //       text: 'Coffee information has been updated successfully',
  //       confirmButtonColor: '#3085d6',
  //     });
  //     setCoffeData(prevData => 
  //       prevData.map(item => 
  //         item._id === coffe._id ? { ...item, ...data } : item
  //       )
  //     );
  //     document.getElementById("my_modal_1").close();
  //     console.log("Updated successfully", data);
  //   })
  //   .catch(error => {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Update Failed',
  //       text: error.message || 'Failed to update coffee information',
  //       confirmButtonColor: '#d33',
  //     });
  //     console.error("Update error:", error);
  //   });
  // };

  return (
    <div className="min-h-screen relative">
      <img src={images1} alt="" className="absolute top-[150px] -z-1 w-55" />
      <img
        src={images2}
        alt=""
        className="absolute top-[330px] right-0 w-55 -z-1"
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
                    <h2>Price: {coffe.price} Taka</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    to={`coffedetails/${coffe._id}`}
                    className="p-3 bg-assett rounded-lg"
                  >
                    <FaEye />
                  </Link>
                  <Link className="p-3 bg-black text-white rounded-lg" accordion
                  to={`coffeupdate/${coffe._id}`}
                  >
                    {" "}
                    <CiEdit />{" "}
                  </Link>
                  <Link
                    onClick={() => handleCoffeDelete(coffe._id)}
                    className="p-3 bg-red-400 rounded-lg"
                  >
                    <MdDeleteForever />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>


       
      </div>
    </div>
  );
};

export default Products;
