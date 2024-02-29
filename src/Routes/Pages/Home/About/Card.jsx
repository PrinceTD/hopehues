import React from 'react'
import { RiRefund2Line } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";

import './card.css'

export default function Card() {
    return (
        <div className='px-8 py-8 back-ground bg-fixed text-white rounded-lg'>
            <div className='py-10'>
                <h3 className='text-xs font-bold'>
                    GREAT REVIEWS FOR OUR SERVICES
                </h3>
                <h1 className='text-4xl font-bold'>
                    Technical Statistics
                </h1>
            </div>
            <div className=''>
                <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    <div className="flex justify-center items-center max-w-md bg-black p-10 bg-opacity-40 rounded-lg">
                        <RiRefund2Line className='w-[50px] h-[50px] text-green-500' />
                        <div className='pl-4'>
                            <h2 className='text-2xl font-bold'>
                                $60M
                            </h2>
                            <p className='text-xl font-bold'>
                                FUND RAISED
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center max-w-md bg-black p-10 bg-opacity-40 rounded-lg">
                        <GoProjectSymlink className='w-[50px] h-[50px] text-green-500' />
                        <div className='pl-4'>
                            <h2 className='text-2xl font-bold'>
                                $60M
                            </h2>
                            <p className='text-xl font-bold'>
                                FUND RAISED
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center max-w-md bg-black p-10 bg-opacity-40 rounded-lg">
                        <GiReceiveMoney className='w-[50px] h-[50px] text-green-500' />
                        <div className='pl-4'>
                            <h2 className='text-2xl font-bold'>
                                $60M
                            </h2>
                            <p className='text-xl font-bold'>
                                FUND RAISED
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center max-w-md bg-black p-10 bg-opacity-40 rounded-lg">
                        <FaPeopleRoof className='w-[50px] h-[50px] text-green-500' />
                        <div className='pl-4'>
                            <h2 className='text-2xl font-bold'>
                                $60M
                            </h2>
                            <p className='text-xl font-bold'>
                                FUND RAISED
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
