import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import useFetcher from "../../hooks/useFetcher";
import Swal from "sweetalert2";

const initialCoffeeData = {
  name: "",
  quantity: "",
  supplier: "",
  taste: "",
  category: "",
  details: "",
  price: "",
  photo: "",
};

const CoffeeForm = ({ coffeeData }) => {
  const [coffee, setCoffee] = useState({});
  const { addCoffee, updateCoffee } = useFetcher();

  useEffect(() => {
    setCoffee(coffeeData || initialCoffeeData);
  }, [coffeeData]);

  const handleChange = (e) => {
    setCoffee({
      ...coffee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (coffeeData) {
      const res = await updateCoffee(coffee._id, coffee);

      if (res.data.acknowledged) {
        Swal.fire({
          title: "Success!",
          text: "Coffee data updated!",
          icon: "success",
        });
      }
    } else {
      const res = await addCoffee(coffee);
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Success!",
          text: "A new coffee added successfully!",
          icon: "success",
        });

        setCoffee(initialCoffeeData);
      }
    }
  };

  return (
    <div className="bg-[#F4F3F0] p-5 rounded-[5px] mt-10">
      <div className="text-center">
        <h3 className="text-3xl text-[#374151] font-medium mb-3">
          {coffeeData
            ? "Update Existing Coffee Details"
            : "Add New Coffee"}
        </h3>
        <p className="w-2/3 mx-auto leading-7">
          It is a long established fact that a reader will be
          distraceted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has
          a more-or-less normal distribution of letters, as opposed to
          using Content here.
        </p>
      </div>
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <div className="w-3/4 flex items-center gap-x-5 mx-auto mb-5">
            <Input
              type="text"
              id="name"
              label="Name"
              placeholder="Enter coffee name"
              value={coffee.name}
              handleChange={handleChange}
            />
            <Input
              type="text"
              id="quantity"
              label="Quantity"
              placeholder="Enter coffee quantity"
              value={coffee.quantity}
              handleChange={handleChange}
            />
          </div>
          <div className="w-3/4 flex items-center gap-x-5 mx-auto mb-5">
            <Input
              type="text"
              id="supplier"
              label="Supplier"
              placeholder="Enter coffee supplier"
              value={coffee.supplier}
              handleChange={handleChange}
            />
            <Input
              type="text"
              id="taste"
              label="Taste"
              placeholder="Enter coffee taste"
              value={coffee.taste}
              handleChange={handleChange}
            />
          </div>
          <div className="w-3/4 flex items-center gap-x-5 mx-auto mb-5">
            <Input
              type="text"
              id="category"
              label="Category"
              placeholder="Enter coffee category"
              value={coffee.category}
              handleChange={handleChange}
            />
            <Input
              type="text"
              id="details"
              label="Details"
              placeholder="Enter coffee details"
              value={coffee.details}
              handleChange={handleChange}
            />
          </div>
          <div className="w-3/4 flex items-center gap-x-5 mx-auto mb-5">
            <Input
              type="text"
              id="price"
              label="Price"
              placeholder="Enter coffee price"
              value={coffee.price}
              handleChange={handleChange}
            />
            <Input
              type="text"
              id="photo"
              label="Photo"
              placeholder="Enter photo URL"
              value={coffee.photo}
              handleChange={handleChange}
            />
          </div>
          <div className="w-3/4 flex items-center gap-x-5 mx-auto mb-5">
            <button className="btn btn-primary w-full text-accent text-xl border-2 border-accent">
              {coffeeData ? "Update Coffee Detail" : " Add Coffee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoffeeForm;
