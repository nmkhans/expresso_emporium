/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import CoffeeForm from "../../components/CoffeeForm/CoffeeForm";
import useFetcher from "../../hooks/useFetcher";

const UpdateCoffee = () => {
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
        <div>
          <CoffeeForm coffeeData={coffee} />
        </div>
      </div>
    </section>
  );
};

export default UpdateCoffee;
