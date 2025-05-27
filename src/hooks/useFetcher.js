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

  return {
    addCoffee,
    getAllCoffee,
  };
};

export default useFetcher;
