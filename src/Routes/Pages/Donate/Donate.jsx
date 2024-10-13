import React from 'react'
import img1 from '../../../assets/cover banner/1.jpg'
import { Helmet } from 'react-helmet-async'
import Cover from '../Shared/Cover/Cover'
import pic from '../../../assets/pic/1.jpg'
import { Link } from 'react-router-dom'

function Donate() {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Hope Hues | event </title>
                </Helmet>
                <Cover img={img1} titel='Donate Now' subTitel=''></Cover>
            </div>
            <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-2 gap-4 rounded-lg'>

                <div className='py-8 m-8'>
                    <h2 className='text-sm font-bold text-green-500'>
                        WELCOME TO HOPE HUES FAMILY
                    </h2>
                    <h1 className='text-4xl font-bold py-8'>
                        Do You Care Our People?
                    </h1>
                    <p className='text-sm font-semibold py-4 text-justify'>
                        Your support is very important to fund our programs and keep us going. If you would like any further information about donating, please <b className='text-blue-700'><Link to='/contact'>reach out to us</Link></b> directly.
                        <br />
                        <br />
                        <b className='text-xl font-bold'>
                            Donate On Bkash: +88018888888
                        </b>
                    </p>
                </div>
                <div>
                    <img src={pic} alt="" className='rounded-lg p-6' />
                </div>
            </div>
        </div>
    )
}

export default Donate