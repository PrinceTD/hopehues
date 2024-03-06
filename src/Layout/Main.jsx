import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Routes/Pages/Shared/Footer'
import Navbar from '../Routes/Pages/Shared/Navbar/Navbar'

function Main() {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <>
            <div className='max-w-screen-xl mx-auto'>
                {noHeaderFooter || <Navbar></Navbar>}
                <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </>
    )
}

export default Main