import { GoStack } from "react-icons/go";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";

import { HiOutlineAtSymbol } from "react-icons/hi2";

type Metadata = {
    title: string;
    description: string;
    section?: any;
}

export const metadata: Metadata = {
    title: "Darcio Massala",
    description: "Software Engineer",
    section: [
        { title: "Tech Stack", icon: GoStack, button: "And counting..." },
        {
            title: "Follow Me", icon: HiOutlineAtSymbol, social1: FaLinkedin, social2: FaGithubSquare, social3: BsSubstack,
            linkedin: '@darciomassala', github: '@darcio-codes279', substack: '@darciowrites'
        },
        { title: "Random", src: "" },
        { title: "Buy Me a Coffee", icon: "coffee" },
        { title: "pic", src: "/images/img1.jpeg" },
        { title: "Profile", src: "", description: "", icon1: "", icon2: "" },
        { title: "pic2", src: "" },
        { title: "View Works", icon: "", buttonTitle: "" },
        { title: "About Me", icon: "", tag1: "", tag2: "", tag3: "", tag4: "", tag5: "", tag6: "", tag7: "", tag8: "" }, ,
    ]
};