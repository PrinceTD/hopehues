import React from 'react'
import { Link } from 'react-router-dom'

function Titel({ heading, button, subHeading }) {
    return (
        <div className='flex flex-row justify-between p-2 text-green-500 text-xl font-bold'>
            <h2>
                {heading}
            </h2>
            <Link to='/event' > <button className="btn btn-sm text-white font-bold bg-green-500 border-0">{button}</button></Link>
        </div>
    )
}

export default Titel