import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://ranna-server-md-ibnul.vercel.app/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };
    return (
        <div className='my-container mt-20 mb-10'>
            <h2 className='text-2xl md:text-4xl font-bold mb-12 tracking-wide text-center'>OUR SPECIAL <span className='text-red-600'>RECIPES</span></h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                recipes.slice(0, showAll ? 18 : 6).map(recipe => <RecipeCard
                recipe={recipe}
                key={recipe.category_id}
                ></RecipeCard> )
            }
        </div>
        <div className="text-center mt-5">
        {!showAll && (
          <button onClick={() => handleShowAll()} className="btn btn-secondary">
            See all Recipes
          </button>
        )}
      </div>
        </div>
    );
};

export default Recipes;