import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { Button } from '../ui/button';

const SocialsIcons = () => {
    return (
        <div className="flex flex-col items-center space-y-4">
            <Button className="p-3 w-48 justify-start">
                <div><FaLinkedin size={30}></FaLinkedin></div>
                <div><p className="pl-1">@darciomassala</p></div>
            </Button>

            <Button className="w-48 justify-start">
                <div><FaGithubSquare size={30}></FaGithubSquare></div>
                <div><p className="pl-1">@darcio-codes279</p></div>
            </Button>

            <Button className="w-48 justify-start">
                <div><BsSubstack size={30}></BsSubstack></div>
                <div><p className="pl-1">@darciowrites</p></div>
            </Button></div>
    )
}

export default SocialsIcons