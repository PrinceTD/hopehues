import React from 'react'
import Titel from '../../../../../Componets/SectionTitel/Titel'
import img1 from '../../../../../assets/event pic/1.jpg'
import { VscCalendar } from 'react-icons/vsc'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";


function UPCHome() {
    return (
        <div className='p-2 drop-shadow-lg rounded-md'>
            <div>
                <Titel
                    heading={'Upcoming Event'}
                    button={'View All'}>
                </Titel>
            </div>
            <div>
                <div className='justify-center'>
                    <img className='rounded-md w-full md:flex justify-center items-center px-6 py-2' src={img1} />
                    <div className='p-2'>
                        <h2 className='text-2xl text-green-500 font-bold px-4'>
                            Halping a Women
                        </h2>
                        <div className='px-8 py-4'>
                            <div className='flex flex-row gap-4 items-center'>
                                <p>
                                    <VscCalendar className='text-accent'></VscCalendar>
                                </p>
                                <p>
                                    March 16, 2024
                                </p>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <p>
                                    <FaLocationArrow className='text-orange-600'></FaLocationArrow>
                                </p>
                                <p>
                                    37 Bandor, Sylhet, Bangladesh
                                </p>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <p>
                                    <FaFacebookSquare className='text-blue-700' />
                                </p>
                                <a href="https://www.facebook.com/hopehues.org">
                                    Facebook
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default UPCHome