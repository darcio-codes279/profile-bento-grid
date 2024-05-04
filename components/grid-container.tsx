import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface GridItem {
    title: string;
    colSpan: number;
    rowSpan: number;
    colStart: number;
    rowStart: number;
}

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
            <Card className="col-span-3 row-span-2">1</Card>
            <Card className="row-span-2 col-start-4">2</Card>
            <Card className="col-start-5">3</Card>
            <Card className="col-start-6">4</Card>
            <Card className="col-start-5 row-start-2">5</Card>
            <Card className="col-start-6 row-start-2">6</Card>
            <Card className="row-span-2 row-start-3">7</Card>
            <Card className="col-span-3 row-span-2 row-start-3">
                {/* {Create Profile} */}
                <CardContent className="flex flex-row space-x-4 p-4">
                    <Avatar>
                        <AvatarImage src="/images/third.png" />
                        <AvatarFallback>DM</AvatarFallback>
                    </Avatar>
                    <CardTitle>Darcio Massala</CardTitle>
                    <CardDescription>Software Engineer</CardDescription>
                    {/* {Tags: Software Engineer, Speaker, Community Builder} */}
                    {/* {Description} */}
                    {/* {email me button} */}
                    {/* {Reusme button (download)} */}

                </CardContent>
            </Card>
            <Card className="col-span-2 row-span-2 col-start-5 row-start-3">9</Card>
            <Card className="col-span-3 row-span-2 row-start-5">10</Card>
            <Card className="col-span-3 row-span-2 col-start-4 row-start-5">11</Card>
        </div>
    );
};

export default GridContainer;