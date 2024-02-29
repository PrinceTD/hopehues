import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import ContactImg from '../../../assets/event pic/contact.jpg'

export default function Contact() {
    return (
        <>
            <div>
                <Helmet>
                    <title>Hope Hues | Contact</title>
                </Helmet>
                <Cover img={ContactImg} titel='contact us' subTitel='how are you men'></Cover>
            </div>
            <div className='bg-base-300 text-white'>
                <div className='px-8 pt-8 m-8'>
                    <h2 className='text-3xl font-bold'>
                        Contact us
                    </h2>
                    <p className='text-sm font-bold'>
                        We're open for any suggestion or just to have a chat.
                    </p>
                </div>
                <div className='px-8 mx-8'>
                    <div className='grid grid-cols-1 mg:grid-cols-3 lg:grid-cols-3 gap-4'>
                        <div className='p-2'>
                            <h3 className='font-semibold'>
                                ADDRESS:
                            </h3>
                            <p>
                                198 West 21th Street, Suite 721 New York NY 10016
                            </p>
                        </div>
                        <div className='p-2'>
                            <h3 className='font-semibold'>
                                EMAIL:
                            </h3>
                            <p>
                                info@yoursite.com
                            </p>
                        </div>
                        <div className='p-2'>
                            <h3 className='font-semibold'>
                                PHONE:
                            </h3>
                            <p>
                                + 1235 2355 98
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className='grid grid-cols-1 mg:grid-cols-3 lg:grid-cols-3 gap-4'>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Name" />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Subject" />
                        </label>
                    </div>
                </div>
                <div className="col-span-full">
                    <label for="SMS" className="text-sm font-medium leading-6"></label>
                    <div className="mt-2">
                        <textarea id="about" name="SMS" rows="3" className="w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-gray-600"></p>
                </div> */}
                <div className='p-8 m-8'>
                    <h2 className='font-semibold'>
                        Follow us here
                    </h2>
                    <div className="flex gap-2 p-2 ">
                        <a className='text-green-500 font-semibold'>FACEBOOK</a>
                        <a className='text-green-500 font-semibold'>INSTAGRAM</a>
                        <a className='text-green-500 font-semibold'>TWITER</a>
                    </div>
                </div>
            </div>
        </>
    )
}
