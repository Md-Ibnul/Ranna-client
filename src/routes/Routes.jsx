import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/home/Home";
import ChefDetails from "../pages/ChefDetails";
import Blog from "../pages/Blog";
import RecipeDetails from "../pages/RecipeDetails";
import ErrorPage from "../ErrorPage"
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

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
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/chefDetails/:id',
                element: <PrivateRoute><ChefDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chefDetails/${params.id}`)
            },
            {
                path: '/recipeDetails/:category_id',
                element: <PrivateRoute><RecipeDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/recipeDetails/${params.category_id}`)
            },
        ]
    }
])
export default router;