import React from "react";
import { GiWarPick } from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import { MdAttractions } from "react-icons/md";
import { IoIosCodeWorking } from "react-icons/io";
import { MdOutlineEmojiPeople } from "react-icons/md";



export const SidebarData =[
    {
        title:"Home", 
        path: '/',
        icon: <AiIcons.AiFillHome size={35} />,
        cName: 'nav-text'
    },

    {
        title:"About me",
        path: '/Aboutme', 
        icon: <MdOutlineEmojiPeople size={35} />,
        cName: 'nav-text'
    },

    {
        title:"Projects",
        path: '/Projects',
        icon: <IoIosCodeWorking size={35}/>,
        cName: 'nav-text'
    },    

    {
        title:"Fun",
        path: '/Fun', 
        icon: <MdAttractions size={35}/>,
        cName: 'nav-text'
    },

    {
        title:"Important Resources",
        path: '/Resources', 
        icon: <GiWarPick size={35} />,
        cName: 'nav-text'
    },

]