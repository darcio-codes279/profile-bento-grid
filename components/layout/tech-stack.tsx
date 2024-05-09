import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";

import { DiJsBadge } from "react-icons/di";

const TechStack = () => {
    return (
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
    )
}

export default TechStack

// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 