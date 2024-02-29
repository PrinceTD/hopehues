import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './voluteer.css';

import img1 from '../../../../../assets/Profile/1.jpg'
import img2 from '../../../../../assets/Profile/2.jpg'
import img3 from '../../../../../assets/Profile/3.jpg'
import img4 from '../../../../../assets/Profile/4.jpg'

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function VoluteerID() {
    return (
        <div>
            <div className='text-center m-8 p-8'>
                <p className='text-xs font-bold text-green-500'>
                    MEET OUR VOLUNTEER
                </p>
                <h1 className='text-4xl font-bold'>
                    Our Volunteer
                </h1>
            </div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
