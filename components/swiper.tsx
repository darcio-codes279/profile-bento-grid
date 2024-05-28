'use client'

import { metadata } from '@/app/metadata';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import { Autoplay, EffectFade, Grid, Scrollbar } from 'swiper/modules'

import { CardTitle, CardDescription, Card } from './ui/card';

// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 


import { DiJsBadge, DiGithubBadge, DiNodejs, DiPython } from "react-icons/di";
import {
    SiTypescript, SiHtml5, SiAmazonaws, SiAmazondynamodb, SiMysql,
    SiCss3, SiMongodb, SiRedux, SiNextdotjs, SiFigma, SiPowershell, SiLinux, SiYaml
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { GoStack } from "react-icons/go";
import { Button } from './ui/button';

const SwiperContainer = () => {
    return (
        <>
            <Swiper
                spaceBetween={1}
                slidesPerView={3}
                centeredSlides={false}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                speed={3000}
                loop={true}
                allowTouchMove={false}
                modules={[Autoplay, EffectFade, Grid]}
                autoplay={{ delay: 1, pauseOnMouseEnter: false }}
            >
                {[
                    { name: 'JavaScript', icon: DiJsBadge },
                    { name: 'Python', icon: DiPython },
                    { name: 'GitHub', icon: DiGithubBadge },
                    { name: 'Node JS', icon: DiNodejs },
                    { name: 'TypeScript', icon: SiTypescript },
                    { name: 'HTML5', icon: SiHtml5 },
                    { name: 'AWS', icon: SiAmazonaws },
                    { name: 'DynamoDB', icon: SiAmazondynamodb },
                    { name: 'CSS3', icon: SiCss3 },
                    { name: 'MongoDB', icon: SiMongodb },
                    { name: 'Redux', icon: SiRedux },
                    { name: 'Next.js', icon: SiNextdotjs },
                    { name: 'Figma', icon: SiFigma },
                    { name: 'PowerShell', icon: SiPowershell },
                    { name: 'Linux', icon: SiLinux },
                    { name: 'YAML', icon: SiYaml },
                    { name: 'React.js', icon: RiReactjsFill },
                    { name: 'Mysql', icon: SiMysql },
                ].map(({ name, icon: Icon, }) => (
                    <SwiperSlide key={name}>
                        <div>
                            <Card className="flex items-center gap-4 p-2 bg-neutral-800 border dark:border-neutral-700 rounded-lg max-w-40">
                                <div className='p-2 border bg-neutral-700 dark:border-neutral-700 rounded-lg'>
                                    <Icon size={28} color='neutral' />
                                </div>
                                <div className="space-y-2">
                                    <p>{name}</p>
                                </div>
                            </Card>
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