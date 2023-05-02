import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/home/Home";
import ChefDetails from "../pages/ChefDetails";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
        ]
    }
])
export default router;