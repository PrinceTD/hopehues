import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import ContactImg from '../../../assets/event pic/contact.jpg'
import { AiOutlinePhone } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <>
            <div>
                <Helmet>
                    <title>Hope Hues | Contact</title>
                </Helmet>
                <Cover img={ContactImg} titel='contact us' subTitel=''></Cover>
            </div>
            <div className=''>
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
                            <p className='flex'>
                               <b className=''>
                               + 1235 2355 98
                               </b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-8 m-8'>
                    <h2 className='font-semibold'>
                        Follow us here
                    </h2>
                    <div className="flex gap-2 p-2 ">
                        <Link to='https://www.facebook.com/hopehues.org' className='text-green-500 font-semibold'>
                        FACEBOOK
                        </Link>
                        <Link to='https://www.facebook.com/hopehues.org' className='text-green-500 font-semibold'>
                        INSTAGRAM
                        </Link>
                        <Link to='https://www.facebook.com/hopehues.org' className='text-green-500 font-semibold'>
                        TWITER
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
