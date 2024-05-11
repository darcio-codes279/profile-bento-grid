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


const Profile = () => {
    return (
        <>
            <CardHeader>
                <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                        <Avatar>
                            <AvatarImage alt="User Avatar" src="/images/third.png" sizes="32" />
                            <AvatarFallback>DM</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>Darcio Massala</CardTitle>
                            <CardDescription>Software Engineer</CardDescription>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            src="/images/Logo.png"
                            alt="Description of the image"
                            width={100}
                            height={100}

                        />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="text-sm pt-0 pb-5">
                <p>This card includes an avatar, making it suitable for user-related information.</p>
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