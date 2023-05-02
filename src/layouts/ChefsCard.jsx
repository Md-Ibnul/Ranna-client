import React from "react";
import { FaCookieBite, FaStar, FaStarOfLife } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";

const ChefsCard = ({ chef }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <div className="p-4">
  <img className="w-full rounded" src={chef.chef_photo} alt="Shoes" />
  </div>
  <div className="card-body p-2">
    <h2 className="font-bold text-2xl">{chef.chef_name}</h2>
    <p className="text-xl font-medium">Years of Experience: <span className="text-red-600">{chef.years_of_experience}</span></p>
    <p className="text-lg font-medium">Number of Recipe: <FaCookieBite className="inline text-red-600" /> <span className="text-red-600">{chef.num_recipes} items</span></p>
    <p className="text-lg font-medium">Likes: <span className="text-red-600">{chef.likes} <FaStar className="inline text-red-600 mb-2" /> </span></p>
      <Link to={`/chefDetails/${chef?.id}`}  className="btn btn-primary">View Details</Link>
  </div>
</div>
  );
};

export default ChefsCard;
