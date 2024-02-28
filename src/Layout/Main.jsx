import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Routes/Pages/Shared/Footer'
import Navbar from '../Routes/Pages/Shared/Navbar/Navbar'

function Main() {
    return (
        <>
            <div className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>

                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Main