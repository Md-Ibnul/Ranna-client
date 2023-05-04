import React, { useState } from "react";
import { FaClock, FaPeopleArrows } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetails = () => {
  const recipeItem = useLoaderData();
  const {id, name, image_url, description, ingredients, time, servings} = recipeItem;
  const handleClick = event => {
    event.currentTarget.disabled = true;
    toast('Favorite added')
  };
  return (
    <div className="my-container mt-10 mb-8">
      <div className="card md:card-side bg-base-100 shadow-xl">
        <div className="h-fit w-full">
          <img className="h-full w-full"
            src={image_url}
            alt="Image"
          />
        </div>
        <div className="card-body ms-10 me=10">
          <h2 className="card-title text-3xl font-bold tracking-wide">{name}</h2>
          <p className="text-lg font-medium">{description}</p>
          <p className="text-lg font-medium"><FaClock className="text-red-500 inline me-2 mb-1" />Time: {time}</p>
          <p className="text-lg font-medium"><FaPeopleArrows className="text-red-500 inline me-2 mb-1" />Servings: {servings} peoples</p>
            <p className="text-2xl font-bold">
                Ingredients:
                {
                ingredients.map(i => <li className="text-lg font-medium mt-2" 
                key={i}
                >{i}</li>)
            }
            </p>
            <button onClick={handleClick} className="py-2 px-4 bg-red-700 text-white font-bold rounded-md">Favorite Recipe</button>
            <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
