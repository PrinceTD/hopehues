import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { VscCalendar } from "react-icons/vsc";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import img1 from '../../../../assets/event pic/7.jpg'
import Titel from '../../../../Componets/SectionTitel/Titel';

export default function Event() {
    return (
        <section className='px-3 py-2'>
            <Titel
                heading={"our regular successfully event"}
                button={"view all"}
            >

            </Titel>
            <Swiper
                slidesPerView={2}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide className='shadow-xl gap-2 rounded-md'>
                    <div>
                        <img className='rounded-md' src={img1} />
                        <div className='p-3'>
                            <h2 className='text-2xl'>
                                Halping a Women
                            </h2>
                            <p className='text-sm text-justify'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellendus ab inventore possimus?
                            </p>
                            <br></br>
                            <div className='flex flex-row gap-4 items-center'>
                                <p>
                                    <VscCalendar></VscCalendar>
                                </p>
                                <p>
                                    Dec 16, 2924
                                </p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl gap-2 rounded-md'>
                    <div>
                        <img className='rounded-md' src={img1} />
                        <div className='p-3'>
                            <h2 className='text-2xl'>
                                Halping a Women
                            </h2>
                            <p className='text-sm text-justify'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellendus ab inventore possimus?
                            </p>
                            <br></br>
                            <div className='flex flex-row gap-4 items-center'>
                                <p>
                                    <VscCalendar></VscCalendar>
                                </p>
                                <p>
                                    Dec 16, 2924
                                </p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl gap-2 rounded-md'>
                    <div>
                        <img className='rounded-md' src={img1} />
                        <div className='p-3'>
                            <h2 className='text-2xl'>
                                Halping a Women
                            </h2>
                            <p className='text-sm text-justify'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellendus ab inventore possimus?
                            </p>
                            <br></br>
                            <div className='flex flex-row gap-4 items-center'>
                                <p>
                                    <VscCalendar></VscCalendar>
                                </p>
                                <p>
                                    16 Decembar, 2024
                                </p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl gap-2 rounded-md'>
                    <div>
                        <img className='rounded-md' src={img1} />
                        <div className='p-3'>
                            <h2 className='text-2xl'>
                                Halping a Women
                            </h2>
                            <p className='text-sm text-justify'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellendus ab inventore possimus?
                            </p>
                            <br></br>
                            <div className='flex flex-row gap-4 items-center'>
                                <p>
                                    <VscCalendar></VscCalendar>
                                </p>
                                <p>
                                    Dec 16, 2024
                                </p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl gap-2 rounded-md'>
                    <div>
                        <img className='rounded-md' src={img1} />
                        <div className='p-3'>
                            <h2 className='text-2xl'>
                                Halping a Women
                            </h2>
                            <p className='text-sm text-justify'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellendus ab inventore possimus?
                            </p>
                            <br></br>
                            <div className='flex flex-row gap-4 items-center'>
                                <p>
                                    <VscCalendar></VscCalendar>
                                </p>
                                <p>
                                    Dec 16, 2924
                                </p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl gap-2 rounded-md'>
                    <div>
                        <img className='rounded-md' src={img1} />
                        <div className='p-3'>
                            <h2 className='text-2xl'>
                                Halping a Women
                            </h2>
                            <p className='text-sm text-justify'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellendus ab inventore possimus?
                            </p>
                            <br></br>
                            <div className='flex flex-row gap-4 items-center'>
                                <p>
                                    <VscCalendar></VscCalendar>
                                </p>
                                <p>
                                    Dec 16, 2924
                                </p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
