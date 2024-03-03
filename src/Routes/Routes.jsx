import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About/About";
import Contact from "./Pages/Contact/Contact";
import AllEVent from "./Pages/Home/Event/AllEvent/AllEVent";
import Blog from "./Pages/Blog/Blog";
import Gallery from "./Pages/Gallery/Gallery";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "upcommingEvent",
                element: <AllEVent></AllEVent>
            },
            {
                path: "lastEvent",
                element: <AllEVent></AllEVent>
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "gallery",
                element: <Gallery />
            }
        ]
    },
]);
