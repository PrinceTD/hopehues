import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../../../../assets/cover banner/aboutI.jpg'

function AboutIntro() {
    return (
        <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-2 gap-4 rounded-lg'>
            <div>
                <img src={pic} alt="" className='rounded-lg p-6' />
            </div>
            <div className='py-8 m-8'>
                <h2 className='text-sm font-bold text-green-500'>
                    WELCOME TO LOVECARE NON-PROFIT CHARITY
                </h2>
                <h1 className='text-4xl font-bold py-8'>
                    Do You Care Our People?
                </h1>
                <p className='text-sm font-semibold py-4 text-justify'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
                <Link to='/' className='px-2 py-2'>
                    <button className="btn text-white  px-6 font-bold rounded-full bg-green-500 border-0 ">Become A Voluteer</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutIntro