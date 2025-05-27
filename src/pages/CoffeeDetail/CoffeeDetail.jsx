/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import useFetcher from "./../../hooks/useFetcher";

const CoffeeDetail = () => {
  const [coffee, setCoffee] = useState({});
  const { getOneCoffee } = useFetcher();
  const { id } = useParams();

  useEffect(() => {
    const fetchCoffee = async () => {
      const res = await getOneCoffee(id);
      setCoffee(res.data);
    };

    fetchCoffee();
  }, []);

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
        <div className="mt-5">
          <div className="bg-[#F5F4F1] rounded-lg p-5">
            <div className="flex items-center justify-between">
              <div className="basis-[50%] flex justify-center">
                <img
                  className="w-56"
                  src={coffee.photo}
                  alt="Coffee img"
                />
              </div>
              <div className="basis-[50%]">
                <h3 className="text-3xl font-semibold text-accent mb-5">
                  {coffee.category}
                </h3>
                <p className="mb-3">
                  <b>Name:</b> {coffee.name}
                </p>
                <p className="mb-3">
                  <b>Quantity:</b> {coffee.quantity}
                </p>
                <p className="mb-3">
                  <b>Supplier:</b> {coffee.supplier}
                </p>
                <p className="mb-3">
                  <b>Taste:</b> {coffee.taste}
                </p>
                <p className="mb-3">
                  <b>Price:</b> {coffee.price} Taka
                </p>
                <p className="mb-3">{coffee.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeDetail;
