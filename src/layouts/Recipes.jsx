import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };
    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-14'>
            <h2 className='text-4xl font-bold mb-12 tracking-wide text-center'>Our Special <span className='text-red-600'>Recipes</span></h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                recipes.slice(0, showAll ? 18 : 6).map(recipe => <RecipeCard
                recipe={recipe}
                key={recipe.category_id}
                ></RecipeCard> )
            }
        </div>
        <div className="text-center mt-5">
        {!showAll && (
          <button onClick={() => handleShowAll()} className="btn btn-primary">
            See all Recipes
          </button>
        )}
      </div>
        </div>
    );
};

export default Recipes;