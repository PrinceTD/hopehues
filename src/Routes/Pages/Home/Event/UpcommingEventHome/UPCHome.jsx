import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FiArrowRightCircle } from "react-icons/fi";


function UPCHome({ item }) {
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

            </div>


        </>
    )
}

export default UPCHome