import React from 'react'
import { FaPeoplePulling } from "react-icons/fa6";
import { RiFundsFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Intro() {
    return (
        <div className='col-span-4 drop-shadow-lg'>
            <div className='p-2'>
                <small>WELCOME TO UNICARE</small>
                <h1 className='text-3xl text-green-500 font-bold'>
                    We are here to help everyone in need!!
                </h1>
                <p className='p-2 text-justify'>
                    On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                </p>
                <Link to='https://forms.gle/dTCE596az7idRzCQ9' className='px-2 py-2'>
                    <button className="btn text-white  px-6 font-bold rounded-full bg-green-500 border-0 ">Become A Voluteer</button>
                </Link>
            </div>
            <div className='flex items-center justify-between p-8'>
                <div className='flex items-center'>
                    <FaPeoplePulling className='w-[50px] h-[50px] text-green-500' />
                    <div className='px-2'>
                        <h1 className='text-2xl text-green-500 font-bold'>
                            50
                        </h1>
                        <p>Volunteers</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <RiFundsFill className='w-[50px] h-[50px] text-green-500' />
                    <div className='px-2'>
                        <h1 className='text-2xl text-green-500 font-bold'>
                            1450
                        </h1>
                        <p>Trusted Funds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro