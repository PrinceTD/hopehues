import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { RiDoubleQuotesL } from "react-icons/ri";

import icon from '../../../assets/q.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { BsCheckAll } from "react-icons/bs";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Titel from '../../../Componets/SectionTitel/Titel';

function Review() {
    return (
        <div className='drop-shadow-xl p-4 rounded-lg'>
            <div className='text-center m-8 p-8'>
                <h1 className='text-xs font-bold text-green-500'>
                    TESTIMONIAL
                </h1>
                <h1 className='text-4xl font-bold'>
                    What People Says
                </h1>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='text-center m-8 p-8'>
                        {/* <img src={icon} className='w-[5px] h-[20px]'></img> */}
                        <p className=''>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>

                        <h1 className='text-4xl font-bold '>Maickel Band</h1>
                        <p className='text-sm font-bold font-serif'>Marketing Manager</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide> <h1 className='text-center m-8 p-8'>
                    <h1 className='text-4xl font-bold '>Maickel Band</h1>
                    <p className='text-sm font-bold font-serif'>Marketing Manager</p>
                    <p className=''>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </h1></SwiperSlide>
                <SwiperSlide> <h1 className='text-center m-8 p-8'>
                    <h1 className='text-4xl font-bold '>Maickel Band</h1>
                    <p className='text-sm font-bold font-serif'>Marketing Manager</p>
                    <p className=''>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </h1></SwiperSlide>
                <SwiperSlide> <h1 className='text-center m-8 p-8'>
                    <h1 className='text-4xl font-bold '>Maickel Band</h1>
                    <p className='text-sm font-bold font-serif'>Marketing Manager</p>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, adipisci ullam sequi, eius eaque repellendus ipsa tempore hic sint veniam tempora voluptatibus totam accusamus? Suscipit quis possimus ut velit modi.
                    </p>
                </h1></SwiperSlide>
                <SwiperSlide> <h1 className='text-center m-8 p-8'>
                    <h1 className='text-4xl font-bold '>Maickel Band</h1>
                    <p className='text-sm font-bold font-serif'>Marketing Manager</p>
                    <p className=''>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </h1></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Review