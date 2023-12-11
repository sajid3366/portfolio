import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"about",
                element: <About></About>
            }
        ]

    }
])
export default router;