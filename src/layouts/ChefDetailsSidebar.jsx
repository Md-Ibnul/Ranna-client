import React from 'react';
import { FaClock, FaPeopleArrows } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefDetailsSidebar = ({cr}) => {
  console.log(cr);
    const{name, image_url, description, time, servings, category_id} =cr;
    return (
        <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
        <div className="w-96 h-52">
        <img className="w-full h-full" 
          src={image_url}
          alt="Image"
        />
        </div>
        <div className="card-body p-2 ms-6">
          <h2 className="card-title font-semibold text-xl">{name}</h2>
          <p className="text-lg">{description.slice(0, 50)}... <Link to={`/recipeDetails/${category_id}`} className='text-red-500'>Read More</Link></p>
          <p className="text-lg font-medium"><FaClock className="text-red-500 inline me-2 mb-1" />Time: {time}</p>
          <p className="text-lg font-medium"><FaPeopleArrows className="text-red-500 inline me-2 mb-1" />Servings: {servings} peoples</p>
        </div>
      </div>
    </div>
    );
};

export default ChefDetailsSidebar;