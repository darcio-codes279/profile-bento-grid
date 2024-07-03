'use client'

import { metadata } from '@/app/metadata';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import { Autoplay, EffectFade, Grid, Pagination, Scrollbar } from 'swiper/modules'


    // {JavaScript} Typescript, HTML, CSS, Node JS, AWS
    // Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
    // Powershell, Linux, Yaml, 
    // Figma
    // Jira, Bitbucket, 

    ;

const SwiperContainer = () => {
    return (
        <>
            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                speed={3000}
                loop={true}
                allowTouchMove={true}
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 1, pauseOnMouseEnter: false }}
            >
                {[metadata.section[5].description1
                ].map(({ quote }) => (
                    <SwiperSlide key={quote}>
                        <div>
                            <p>{quote}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>



    )
}

export default SwiperContainer

// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 