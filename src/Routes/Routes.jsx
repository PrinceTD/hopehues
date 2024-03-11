import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About/About";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import Event from "./Pages/Home/Event/AllEvent/Event/Event";
import Login from "./Pages/Login/Login";



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
                path: "event",
                element: <Event />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "adminlogin",
                element: <Login />
            }
        ]
    },
]);
