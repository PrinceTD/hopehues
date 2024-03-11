import React from 'react'
import img1 from '../../../../../assets/event pic/1.jpg'
import { VscCalendar } from 'react-icons/vsc'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";


function UPCHome({ item }) {
    const { image, name, location, date } = item;
    return (
        <div className='shadow-lg rounded-md '>

            <div className='justify-items-center'>
                <div className='rounded-xl'>
                    <img className=' w-full md:flex rounded' src={img1} />
                </div>
                <div className='p-2'>
                    <h2 className='text-2xl text-green-500 font-bold px-4'>
                        {name}
                    </h2>
                    <div className='px-8 py-4'>
                        <div className='flex flex-row gap-4 items-center'>
                            <p>
                                <VscCalendar className='text-accent'></VscCalendar>
                            </p>
                            <p>
                                {date}
                            </p>
                        </div>
                        <div className='flex flex-row gap-4 items-center'>
                            <p>
                                <FaLocationArrow className='text-orange-600'></FaLocationArrow>
                            </p>
                            <p>
                                {location}
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

        </div >
    )
}

export default UPCHome