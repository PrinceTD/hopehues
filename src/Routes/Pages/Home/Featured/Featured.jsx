import React from 'react'
import './featured.css'

export default function Featured() {
    return (
        <div className='featured-item bg-fixed p-8 rounded-lg'>
            <div className='p-10 text-center text-white m-8 p-8'>
                <h3 className='text-sm font-bold '>
                    Hope Hues Organaization
                </h3>
                <h1 className='text-4xl text-center font-bold font-serif p-2'>
                    The Smallest Act of Kindness is Worth More Than the Grandest Intention
                </h1>
                <div className='flex justify-center m-4'>
                    <div className='p-2'>
                        <button className="btn text-white  px-4 font-bold rounded-full bg-green-500 border-0">Donate Now</button>
                    </div>
                    <div className='p-2'>
                        <button className="btn text-white px-4 font-bold rounded-full  bg-orange-600 border-0">Become A Voluteer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}