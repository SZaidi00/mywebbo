import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CodeIcon from '@mui/icons-material/Code';
import AttractionsIcon from '@mui/icons-material/Attractions';

export const SidebarData =[
    {
    title:"Home", 
    icon: <HomeIcon />,
    link: "/"
    },

    {
        title:"About me", 
        icon: <EmojiPeopleIcon />,
        link: "/Aboutme"
    },

    {
        title:"Projects", 
        icon: <CodeIcon/>,
        link: "/Projects"
    },    

    {
        title:"Fun", 
        icon: <AttractionsIcon />,
        link: "/Fun"
    },


]