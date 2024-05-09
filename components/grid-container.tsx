import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Linkedin, Instagram, } from "lucide-react";
import { Mail, StickyNote, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import Profile from "./layout/profile";
import TechStack from "./layout/tech-stack";
import SwiperContainer from "./swiper";


// const GridItems: GridItem[] = [
//     { title: "Tech Stack", colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 1 },
//     { title: "CV Download + Email", colSpan: 2, rowSpan: 2, colStart: 4, rowStart: 1 },
//     { title: "LinkedIn", colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 1 },
//     { title: "Github", colSpan: 1, rowSpan: 1, colStart: 7, rowStart: 1 },
//     { title: "Instagram", colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 2 },
//     { title: "Twitter" },
//     { title: "Random"},
//     { title: "Darcio Massala"},
//     { title: "Random-2",},
//     { title: "View Works },
//     { title: "About Me"},
//     { title: "Buy me a coffee"},
//     { title: "Emoji"},
// ];

const GridContainer: React.FC = () => {
    return (
        <div className="grid grid-cols-6 grid-rows-6 gap-4 w-full">
            <Card className="col-span-3 row-span-2">
                {/* <TechStack /> */}
                <SwiperContainer />
            </Card>
            <Card className="row-span-2 col-start-4">2</Card>
            <Card className="col-start-5">
                <Linkedin></Linkedin>
            </Card>
            <Card className="col-start-6"><Instagram></Instagram></Card>
            <Card className="col-start-5 row-start-2">5</Card>
            <Card className="col-start-6 row-start-2">6</Card>
            <Card className="row-span-2 row-start-3">
                <Image
                    src="/images/image.png"
                    alt="Description of the image"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-lg"
                ></Image>
            </Card>
            <Card className="col-span-3 row-span-2 row-start-3">
                <Profile></Profile>
            </Card>
            <Card className="col-span-2 row-span-2 col-start-5 row-start-3">
                <Image
                    src="/images/oliver-pecker-HONJP8DyiSM-unsplash.png"
                    alt="Description of the image"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-lg"
                ></Image>
            </Card>
            <Card className="col-span-3 row-span-2 row-start-5">10</Card>
            <Card className="col-span-3 row-span-2 col-start-4 row-start-5">11</Card>
        </div>
    );
};
export default GridContainer;

// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 