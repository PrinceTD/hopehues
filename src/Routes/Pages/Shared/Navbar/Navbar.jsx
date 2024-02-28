import React from 'react'
import logo from '../../../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const navOptions = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li>
            <details>
                <summary>EVENT</summary>
                <ul className="p-2">
                    <li><a>UPCOMMING EVENT</a></li>
                    <li><a>PAST EVENT</a></li>
                </ul>
            </details>
        </li>

        <li><a>GALLERY</a></li>
        <li><a>BLOG</a></li>
        <li><Link to="/contact">CONTACT</Link></li>

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-11 h-10' src={logo}></img>
                        <Link to='/' className="btn btn-ghost text-xl">Hope Hues</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-sm px-4 bg-green-500 border-0 border-b-4 text-white">DONATE NOW</a>
                </div>
            </div>

        </>
    )
}
