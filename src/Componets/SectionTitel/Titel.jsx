import React from 'react'

function Titel({ heading, button, subHeading }) {
    return (
        <div className='flex flex-row justify-between p-5'>
            <h2>
                {heading}
            </h2>
            <button className="btn btn-sm">{button}</button>
        </div>
    )
}

export default Titel