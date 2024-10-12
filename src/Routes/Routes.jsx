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
import Donate from "./Pages/Donate/Donate";
import JoinUs from "./Pages/JoinUS/JoinUs";
import Dashboard from "./Admin/Dashboard";
import Cart from "./Admin/Dashboard/Cart";
import UpcommintEvent from "./Admin/Dashboard/UpcommintEvent";
import AddEvent from "./Admin/Dashboard/AddEvent";
import AddBlog from "./Admin/Dashboard/AddBlog";
import AddVolunteer from "./Admin/Dashboard/AddVolunteer";



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
            // {
            //     path: "adminlogin",
            //     element: <Login />
            // },
            {
                path: "donate",
                element: <Donate />
            },
            {
                path: "joinus",
                element: <JoinUs />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'addUpCommingEvent',
                element: <UpcommintEvent/>
            },
            {
                path: 'addEvent',
                element: <AddEvent/>
            },
            {
                path: 'addBlog',
                element: <AddBlog/>
            },
            {
                path: 'addVolunteer',
                element: <AddVolunteer/>
            }
        ]
    }

]);
