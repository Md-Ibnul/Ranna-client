import React, { useEffect, useState } from 'react';

const Recipes = () => {
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data => setRecipe(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Recipes;