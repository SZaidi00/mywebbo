import React,{useState} from "react";
import "./index.css";
import {SidebarData} from "./SidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import './Sidebar.css';


// function Sidebar() {
//     return(
//         <div className="Sidebar">
//             <ul className="SidebarList">
//                 {SidebarData.map((val,key) => {
//                     return(
//                         <li 
//                         key = {key}
//                         id={window.location.pathname == val.link ? "active" : ""}
//                         className = "row"
//                         onClick={() => {
//                             window.location.pathname = val.link;
//                         }}
//                         >
//                             <div id ="icon" >{val.icon}</div> <div id="title">{val.title}</div>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }


function Sidebar(){
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    
    return (
        <>
        <div className="sidebar">
            <Link to="#" className = 'menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to ="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item,index) => {
                    return (
                        <li key ={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                }
                )}
            </ul>
        </nav>
        </>
    )
}


export default Sidebar;