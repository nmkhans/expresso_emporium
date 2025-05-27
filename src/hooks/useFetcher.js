import React from "react";

const useFetcher = () => {
  const addCoffee = async (coffee) => {
    const res = await fetch("http://localhost:9000/coffee/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    });
    return await res.json();
  };

  const getAllCoffee = async () => {
    const res = await fetch("http://localhost:9000/coffee");
    return await res.json();
  };

  const getOneCoffee = async (id) => {
    const res = await fetch(`http://localhost:9000/coffee/${id}`);
    return await res.json();
  };

  const deleteCoffee = async (id) => {
    const res = await fetch(
      `http://localhost:9000/coffee/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    return await res.json();
  };

  return {
    addCoffee,
    getOneCoffee,
    getAllCoffee,
    deleteCoffee,
  };
};

export default useFetcher;
