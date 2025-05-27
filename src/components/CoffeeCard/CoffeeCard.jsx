import React from "react";
import { Eye, Pen, Trash } from "lucide-react";

const CoffeeCard = ({ coffee, onView, onEdit, onDelete }) => {
  return (
    <div className="bg-[#F5F4F1] rounded-lg p-5">
      <div className="flex items-center justify-between">
        <div className="basis-[30%]">
          <img className="w-32" src={coffee.photo} alt="Coffee img" />
        </div>
        <div className="basis-[30%]">
          <p className="mb-3">
            <b>Name:</b> {coffee.name}
          </p>
          <p className="mb-3">
            <b>Quantity:</b> {coffee.quantity}
          </p>
          <p>
            <b>Price:</b> {coffee.price} Taka
          </p>
        </div>
        <div className="inline-flex flex-col basis-[30%] items-end justify-between space-y-3">
          <button
            onClick={() => onView(coffee._id)}
            className="btn btn-primary max-w-14"
          >
            <Eye />
          </button>
          <button
            onClick={() => onEdit(coffee._id)}
            className="btn btn-accent text-white max-w-14"
          >
            <Pen />
          </button>
          <button
            onClick={() => onDelete(coffee._id)}
            className="btn bg-red-500 text-white max-w-14"
          >
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
