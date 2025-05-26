import React from "react";
import BackgroundImg from "../../assets/more/1.png";
import { Link } from "react-router";
import { Coffee } from "lucide-react";

const Products = () => {
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
      </div>
    </section>
  );
};

export default Products;
