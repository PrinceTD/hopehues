import React from 'react'
import logo from '../../../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const navOptions = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/event'>EVENT</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-60 bg-black text-white max-w-screen-xl">
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
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/donate'>
                        <button className="btn text-white btn-success btn-sm font-semibold"> DONATE NOW </button>
                    </Link>
                    {/* <Link to='/dashboard'>
                        <button className="btn text-white btn-success btn-sm font-semibold"> Admin </button>
                    </Link> */}
                </div>
            </div>

        </>
    )
}
