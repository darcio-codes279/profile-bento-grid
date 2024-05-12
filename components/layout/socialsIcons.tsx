import React from 'react'
import { metadata } from '@/app/metadata';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { Button } from '../ui/button';

import { HiOutlineAtSymbol } from "react-icons/hi2";

const SocialsIcons = () => {
    const IconComponent1 = metadata.section[1].icon
    const IconComponent2 = metadata.section[1].social1
    const IconComponent3 = metadata.section[1].social2
    const IconComponent4 = metadata.section[1].social3

    return (
        <>
            <div className='flex justify-center p-3 space-x-1'>
                <h1 className="text-xl text-center text-pretty">{metadata.section[1].title}</h1>
                <div><IconComponent1 size={28} />
                </div>
                <div className='pl-2'>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center space-y-4">
                    <Button className="p-3 w-48 justify-start">
                        <div><IconComponent2 size={30}></IconComponent2></div>
                        <div><p className="pl-1">{metadata.section[1].linkedin}</p></div>
                    </Button>

                    <Button className="w-48 justify-start">
                        <div><IconComponent3 size={30}></IconComponent3></div>
                        <div><p className="pl-1">{metadata.section[1].github}</p></div>
                    </Button>

                    <Button className="w-48 justify-start">
                        <div><IconComponent4 size={30}></IconComponent4></div>
                        <div><p className="pl-1">{metadata.section[1].substack}</p></div>
                    </Button>
                </div>
            </div>
        </>

    )
}

export default SocialsIcons