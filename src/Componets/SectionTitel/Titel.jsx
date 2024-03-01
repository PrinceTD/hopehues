import React from 'react'

function Titel({ heading, button, subHeading }) {
    return (
        <div className='flex flex-row justify-between p-5 text-green-500 text-xl font-bold'>
            <h2>
                {heading}
            </h2>
            <button className="btn btn-sm text-white font-bold rounded-full bg-green-500 border-0">{button}</button>
        </div>
    )
}

export default Titel