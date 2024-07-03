'use client'

import { metadata } from '@/app/metadata';
// Import Swiper React components

import { CardTitle, CardDescription, Card } from "@/components/ui/card";
import Image from 'next/image';


const PastWorks = () => {
    return (
        <div className="flex items-center">
            <Image
                src="/images/view-works/torrinJoshua.png"
                alt="Past Clients"
                width={200}
                height={200}
                className="rounded-lg"
            ></Image>
        </div>
    )
}

export default PastWorks

// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 