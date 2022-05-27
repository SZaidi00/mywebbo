import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CodeIcon from '@mui/icons-material/Code';
import AttractionsIcon from '@mui/icons-material/Attractions';




export const SidebarData =[
    {
        title:"Home", 
        path: '/',
        icon: <HomeIcon />,
        cName: 'nav-text'
    },

    {
        title:"About me",
        path: '/Aboutme', 
        icon: <EmojiPeopleIcon />,
        cName: 'nav-text'
    },

    {
        title:"Projects",
        path: '/Projects',
        icon: <CodeIcon/>,
        cName: 'nav-text'
    },    

    {
        title:"Fun",
        path: '/Fun', 
        icon: <AttractionsIcon />,
        cName: 'nav-text'
    },

    {
        title:"Git",
        path: 'https://www.google.com/', 
        icon: <AttractionsIcon />,
        cName: 'nav-text'
    },



]