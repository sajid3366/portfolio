import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Project from "../components/Project/Project";

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
            },
            {
                path:"project",
                element: <Project></Project>
            },
        ]

    }
])
export default router;