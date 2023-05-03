import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/home/Home";
import ChefDetails from "../pages/ChefDetails";
import Blog from "../pages/Blog";
import RecipeDetails from "../pages/RecipeDetails";
import ErrorPage from "../ErrorPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/chefDetails/:id',
                element: <ChefDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/chefDetails/${params.id}`)
            },
            {
                path: '/recipeDetails/:category_id',
                element: <RecipeDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/recipeDetails/${params.category_id}`)
            },
        ]
    }
])
export default router;