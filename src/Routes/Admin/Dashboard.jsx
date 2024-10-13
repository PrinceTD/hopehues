import React from 'react'
import { FaHome } from 'react-icons/fa'
import { AiFillCalendar, AiFillEdit, AiFillHeart, AiFillPlusCircle, AiOutlinePhone } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Helmet } from 'react-helmet-async';

export default function Dashboard() {
    return (
        <div className=''>
            <Helmet>
                    <title>Hope Hues | Deshboard </title>
                </Helmet>
            <div className='flex m-8'>
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen  border-r-4 border-indigo-500">

                    <p className='text-green-500 grid justify-items-center'>
                        <img className='w-15 h-12' src={logo} alt="" />
                        <b className='text-center'>
                            HOPE HUES <br /> ORGANIZATION
                        </b>
                    </p>
                    <ul className='menu p-4 font-bold'>
                        <li>
                            <Link to='/dashboard/addUpCommingEvent'>
                                <AiFillPlusCircle />
                                Add Upcomming Event
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/addEvent'>
                                <AiFillPlusCircle />
                                Add Event
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/addBlog'>
                                <AiFillPlusCircle />
                                Add Blog
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/addVolunteer'>
                                <AiFillPlusCircle />
                                Add Our Volunteer
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/addVolunteer'>
                                <AiFillPlusCircle />
                                Change Bikash Account
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/addVolunteer'>
                                <AiFillPlusCircle />
                                Make Admin
                            </Link>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <Link to='/'>
                                <FaHome></FaHome>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                <AiFillHeart />
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/event'>
                                <AiFillCalendar />
                                Event
                            </Link>
                        </li>
                        <li>
                            <Link to='/blog'>
                                <AiFillEdit />
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                <AiOutlinePhone />
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <small className='text-red-400'>
                        Note: Only admin can change this part.
                    </small>
                </div>
                {/* dashboard contact */}
                <div className='flex-1 m-4 ps-2'>
                    <div>
                        <div className="navbar bg-base-100">
                            <div className="flex-1">
                                <a className="btn btn-ghost text-xl">Hope Hues</a>
                            </div>
                            <div className="flex-none">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Outlet>

                    </Outlet>
                </div>
            </div>
        </div>
    )
}
