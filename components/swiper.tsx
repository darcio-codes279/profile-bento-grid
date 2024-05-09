'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import { Autoplay, EffectFade, FreeMode, Scrollbar } from 'swiper/modules'

import { CardTitle, CardDescription, Card } from './ui/card';

// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 


import { DiJsBadge, DiGithubBadge, DiNodejs, DiPython } from "react-icons/di";
import { Linkedin } from 'lucide-react';
const SwiperContainer = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                speed={1500}
                loop={true}
                centeredSlides={true}
                allowTouchMove={false}
                modules={[Autoplay, FreeMode]}
                autoplay={{ delay: 0, disableOnInteraction: true }}
            >
                <SwiperSlide>
                    <div>
                        <Card className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-200 rounded-lg max-w-52">
                            <div>
                                <DiJsBadge size={32} />
                            </div>
                            <div className="space-y-2">
                                <CardTitle>JavaScript</CardTitle>
                            </div>
                        </Card>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Card className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-200 rounded-lg max-w-52">
                            <div>
                                <DiJsBadge size={32} />
                            </div>
                            <div className="space-y-2">
                                <CardTitle>JavaScript</CardTitle>
                                <CardDescription></CardDescription>
                            </div>
                        </Card>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Card className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-200 rounded-lg max-w-52">
                            <div>
                                <DiGithubBadge size={32} />
                            </div>
                            <div className="space-y-2">
                                <CardTitle>GitHub</CardTitle>
                                <CardDescription></CardDescription>
                            </div>
                        </Card>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Card className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-200 rounded-lg max-w-52">
                            <div>
                                <DiNodejs size={32} />
                            </div>
                            <div className="space-y-2">
                                <CardTitle>Node JS</CardTitle>
                                <CardDescription></CardDescription>
                            </div>
                        </Card>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperContainer

// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 