import React, { useState } from "react";
import { FaClock, FaPeopleArrows } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const recipeItem = useLoaderData();
  const {id, name, image_url, description, ingredients, time, servings} = recipeItem;
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-10">
      <div className="card md:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image_url}
            alt="Image"
          />
        </figure>
        <div className="card-body ms-10 me=10">
          <h2 className="card-title text-3xl font-bold tracking-wide">{name}</h2>
          <p className="text-lg font-medium">{description}</p>
          <p className="text-lg font-medium"><FaClock className="text-red-500 inline me-2 mb-1" />Time: {time}</p>
          <p className="text-lg font-medium"><FaPeopleArrows className="text-red-500 inline me-2 mb-1" />Servings: {servings} peoples</p>
            <p className="text-2xl font-bold">
                Ingredients:
                {
                ingredients.map(i => <li className="text-lg font-medium mt-2" key={id}>{i}</li>)
            }
            </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
