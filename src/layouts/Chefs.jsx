import React, { useEffect, useState } from "react";
import ChefsCard from "./ChefsCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://ranna-server-md-ibnul.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="my-container mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        OUR EXCELLENT <span className="text-red-600">CHEFS</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
        {chefs.map((chef) => (
          <ChefsCard key={chef.id} chef={chef}></ChefsCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
