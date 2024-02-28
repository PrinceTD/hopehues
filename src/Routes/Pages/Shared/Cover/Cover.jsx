import React from 'react'

function Cover({ img, titel, subTitel }) {
    return (
        <div className="hero h-[400px] bg-fixed" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md bg-black p-8 bg-opacity-40 rounded-lg">
                    <h1 className="mb-5 text-5xl font-bold uppercase text-white">{titel}</h1>
                    <p className="mb-5 text-white">
                        {subTitel}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cover