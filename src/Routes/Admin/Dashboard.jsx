import React from 'react'
import { FaHome } from 'react-icons/fa'
import { AiFillCalendar, AiFillEdit, AiFillHeart, AiFillPlusCircle, AiOutlinePhone } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Dashboard() {
    return (
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
            <div className='flex-1'>
                <Outlet>

                </Outlet>
            </div>
        </div>
    )
}
