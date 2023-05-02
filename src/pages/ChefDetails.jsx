import React from "react";
import { FaCheese, FaStar, FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {

  const [ChefRecipes, setChefRecipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data => setChefRecipes(data))
    },[])

  const chefDetails = useLoaderData();
  const {id, picture_url, name, bio, recipes, years_of_experience, num_recipes, likes} = chefDetails;
  return (
    <div className="md:flex gap-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-16">
      <div className="grow">
        <div className="card glass">
            <img className="rounded"
              src={picture_url}
              alt="Image"
            />
          <div className="card-body p-3 mt-3">
            <h2 className="text-3xl font-bold tracking-wide">{name}</h2>
            <p className="text-xl font-medium">{bio}</p>
            <div className="md:flex justify-between mt-8">
                <div>
                        <p className="text-xl font-bold text-red-500">Special Recipes: 
                    </p>
                    {
                        recipes.map(r=> <li
                            key={r}
                            className="ms-8 text-xl font-medium">{r}</li>)
                    }
                </div>
                <div className="me-8 mt-12">
                    <p className="text-xl mb-4"><FaUtensils className="inline text-red-500 me-2" />Experience: {years_of_experience} Years</p>
                    <p className="text-xl mb-4"><FaCheese className="inline text-red-500 me-2" /> Unique Recipes: {num_recipes}</p>
                    <p className="text-xl mb-4"><FaStar className="inline mb-2 text-red-500 me-2" /> Rating: {likes}</p>
                    <button className="py-2 px-4 bg-red-700 text-white font-bold rounded-md">Favorite</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Chef's Recipe</h3>
        
      </div>
    </div>
  );
};

export default ChefDetails;
