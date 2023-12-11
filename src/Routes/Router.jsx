import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

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
            },
            {
                path:"contact",
                element: <Contact></Contact>
            }
        ]

    }
])
export default router;