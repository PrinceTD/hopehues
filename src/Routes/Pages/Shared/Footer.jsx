import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import logo from '../../../assets/logo.png'
import CopyRinght from './CopyRinght';

export default function Footer() {
    return (
        <div className='pt-8 bg-neutral'>
            <footer className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-2 gap-4 max-w-screen-xl mx-auto'>
                <div>
                    <div className='p-4'>
                        <img src={logo} className='h-[50px] w-[55px]' />
                        <p className='py-2'>Hope Hues Organazation - 2022</p>
                    </div>
                    <div>
                        <p className='p-4'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>
                    </div>
                </div>
                <div className='p-4'>
                    <h6 className="footer-title"> Have a Questions?</h6>
                    <div className='flex items-center'>
                        <FaLocationArrow className='h-[20px] w-[20px]'></FaLocationArrow>
                        <p className='p-2'>
                            203 Fake St. Mountain View, San Francisco, California, USA
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <IoCall className='h-[20px] w-[20px]' />
                        <p className='p-2'>
                            +2 392 3929 210
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <MdOutlineTextsms className='h-[20px] w-[20px]'></MdOutlineTextsms>
                        <p className='p-2'>
                            info@yourdomain.com
                        </p>
                    </div>
                    <div className="flex gap-4 p-4">
                        <a className='text-green-500'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a className='text-green-500'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a className='text-green-500'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </footer>
            <CopyRinght></CopyRinght>
        </div>
    )
}
