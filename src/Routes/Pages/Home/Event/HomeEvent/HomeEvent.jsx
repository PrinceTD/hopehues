import React from 'react'
import Titel from '../../../../../Componets/SectionTitel/Titel'
import img1 from '../../../../../assets/event pic/1.jpg'
import img2 from '../../../../../assets/Profile/1.jpg'
import { GoTriangleRight } from "react-icons/go";
import { VscCalendar } from 'react-icons/vsc'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";


function HomeEvent() {
    return (
        <div className='my-8 py-8 rounded-md'>
            <div>
                <Titel
                    heading={'Our Causes & Help Us'}
                    button={'View All'}>
                </Titel>
            </div>
            <div className='p-4'>
                <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={img1} alt="Shoes" width="100%" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Give Food to Homeless Children</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>

                        <div className='flex p-4 hover:text-green-500 items-center'>
                            <GoTriangleRight className='' />
                            <h2 className='px-2'>
                                Read More
                            </h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={img1} alt="Shoes" width="100%" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Give Food to Homeless Children</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>

                        <div className='flex p-4 hover:text-green-500 items-center'>
                            <GoTriangleRight className='' />
                            <h2 className='px-2'>
                                Read More
                            </h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={img1} alt="Shoes" width="100%" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Give Food to Homeless Children</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>

                        <div className='flex p-4 hover:text-green-500 items-center'>
                            <GoTriangleRight className='' />
                            <h2 className='px-2'>
                                Read More
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default HomeEvent