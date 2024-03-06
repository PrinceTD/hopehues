import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FiArrowRightCircle } from "react-icons/fi";


function AllEVent({ item }) {
    const { image, name, titel } = item;
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure className="">
                    <img src={image} alt="Shoes" width="100%" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{titel} </p>
                </div>
                <div className='flex p-4 hover:text-green-500 items-center'>
                    <FiArrowRightCircle />
                    <h2 className='px-2'>
                        Read More
                    </h2>
                </div>
            </div>


        </>
    )
}

export default AllEVent