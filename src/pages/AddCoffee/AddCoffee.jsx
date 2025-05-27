import React from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import CoffeeForm from "../../components/CoffeeForm/CoffeeForm";

const AddCoffee = () => {
  return (
    <section className="py-[80px]">
      <div className="container mx-auto">
        <div>
          <Link
            to="/"
            className="btn btn-ghost text-[#374151] hover:btn-primary hover:text-accent text-xl"
          >
            <ArrowLeft /> Back to home
          </Link>
        </div>
        <div>
          <CoffeeForm />
        </div>
      </div>
    </section>
  );
};

export default AddCoffee;
