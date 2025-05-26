import React, { useState } from "react";
import Input from "../Input/Input";

const initialCoffeeData = {
  name: "",
  chef: "",
  supplier: "",
  taste: "",
  category: "",
  details: "",
  photo: "",
};

const AddCoffeeForm = () => {
  const [coffee, setCoffee] = useState(initialCoffeeData);

  const handleChange = (e) => {
    setCoffee({
      ...coffee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(coffee);
  };

  return (
    <div className="bg-[#F4F3F0] p-5 rounded-[5px] mt-10">
      <div className="text-center">
        <h3 className="text-3xl text-[#374151] font-medium mb-3">
          Add New Coffee
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
              id="chef"
              label="Chef"
              placeholder="Enter coffee chef"
              value={coffee.chef}
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
              id="photo"
              label="Photo"
              placeholder="Enter photo URL"
              value={coffee.photo}
              handleChange={handleChange}
            />
          </div>
          <div className="w-3/4 flex items-center gap-x-5 mx-auto mb-5">
            <button className="btn btn-primary w-full text-accent text-xl border-2 border-accent">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffeeForm;
