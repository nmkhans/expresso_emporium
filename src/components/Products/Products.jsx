/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import BackgroundImg from "../../assets/more/1.png";
import { Link } from "react-router";
import { Coffee } from "lucide-react";
import useFetcher from "./../../hooks/useFetcher";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import Swal from "sweetalert2";

const Products = () => {
  const [coffees, setCoffees] = useState([]);
  const { getAllCoffee } = useFetcher();

  useEffect(() => {
    const fetchCoffee = async () => {
      const res = await getAllCoffee();
      setCoffees(res.data);
    };
    fetchCoffee();
  }, []);

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <section
      style={{ backgroundImage: `url(${BackgroundImg})` }}
      className="bg-no-repeat bg-center bg-cover py-[100px]"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <p>--- Sip & Savor ---</p>
          <h2 className="text-3xl font-medium my-5">
            Our Popular Products
          </h2>
          <Link
            className="btn btn-primary text-white border-2 border-accent text-xl"
            to="/add-coffee"
          >
            Add Coffee <Coffee className="text-accent" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
