'use client'

import { metadata } from '@/app/metadata';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import { Autoplay, EffectFade, Grid, Scrollbar } from 'swiper/modules'

import { CardTitle, CardDescription, Card } from "@/components/ui/card";
import Image from 'next/image';


const PastWorks = () => {
    return (
        <Card className="flex items-center p-2 bg-neutral-800 border border-neutral-700 rounded-lg max-w-40 ">
            <Image
                src="/images/view-works/torrinJoshua.png"
                alt="Past Clients"
                width={200}
                height={200}
                className="rounded-lg"
            ></Image>
            <p>Make this full screen</p>
        </Card>
    )
}

export default PastWorks

// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 