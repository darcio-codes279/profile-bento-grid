import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Mail, StickyNote, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image";
import { metadata } from "@/app/metadata";


const Profile = () => {
    return (
        <>
            <CardHeader className="p-2 group-hover/bento:translate-x-2 transition duration-200">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-6">
                        <div className="max-h-[60px] max-w-[60px]">
                            <Image
                                src={metadata.section[5].src}
                                alt="Description of the image"
                                width={100}
                                height={100}
                                className="rounded-full b dark:border-neutral-700"
                            ></Image>
                        </div>
                        {/* <Avatar>
                            <AvatarImage alt="User Avatar" src="/images/third.png" sizes="32" />
                            <AvatarFallback>DM</AvatarFallback>
                        </Avatar> */}
                        <div>
                            <CardTitle>Darcio Massala</CardTitle>
                            <CardDescription>Software Engineer</CardDescription>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="text-sm max-pb-2">
                <p>{metadata.section[5].description}</p>
            </CardContent>
            <CardFooter className="place-content-center space-x-4">

                <HoverCard>
                    <HoverCardTrigger>
                        <Button><Mail /></Button>

                    </HoverCardTrigger>
                    <HoverCardContent>
                        <p className="text-center">Send me an e-mail</p>
                    </HoverCardContent>
                </HoverCard>


                <HoverCard>
                    <HoverCardTrigger>
                        <Button>
                            <Download />
                        </Button>

                    </HoverCardTrigger>
                    <HoverCardContent>
                        <p className="text-center">Download CV</p>
                    </HoverCardContent>
                </HoverCard>

            </CardFooter>
        </>
    )
}

export default Profile