"use client"

import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { metadata } from '@/app/metadata';
import SwiperContainer from "./swiper";
import { InfiniteMovingCardsDemo } from "./layout/tech-stack";
import { BackgroundGradientAnimationDemo } from "./layout/backgroundGradientDemo";
import Profile from "./layout/profile";
import Image from "next/image";
import SocialsIcons from "./layout/socialsIcons";
import BuyMeCoffee from "./layout/buyMeCoffee";
import EmailMe from "./layout/emailMe";

export function BentoGridSecondDemo() {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]  grid md:grid-cols-6 md:grid-rows-6">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                    image={item.image}
                />
            ))}
        </BentoGrid>
    );
}

const IconComponent = metadata.section[0].icon;
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-neutral-100 dark:bg-black"></div>

);
const items = [
    {
        title: "Tech Stack",
        description: "",
        header: <InfiniteMovingCardsDemo />,
        className: "md:col-span-3 md:row-span-2",
        icon: <IconComponent size={28} />,
    },
    {
        title: "",
        description: "",
        header: "",
        className: "md:row-span-2 md:col-span-2 p-0",
        icon: "",
        image: <SocialsIcons />
    },
    {
        title: "",
        description: "",
        header: <BuyMeCoffee />,
        className: "md:col-span-1",
        icon: "",
    },
    {
        title: "",
        description: "",
        header: <EmailMe />,
        className: "md:col-start-6 md:row-start-2",
        icon: "",

    },
    {
        title: "",
        description:
            "",
        header: "",
        className: "md:row-span-2 md:row-start-3 p-0",
        icon: "",
        image: <Image src="/images/img1.jpeg" alt="Image2" width={150} height={150} className="md:max-h-[93%] rounded-xl block max-w-full" />
    },
    {
        title: "",
        description: "",
        header: <Profile />,
        className: "md:col-span-3 md:row-span-2 md:row-start-3",
        icon: "",
    },
    {
        title: "",
        description: "",
        header: "",
        className: "md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-3",
        icon: "",
        // image: <BackgroundGradientAnimationDemo />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        className: "md:col-span-3 md:row-span-2 md:row-start-5",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-5",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];
