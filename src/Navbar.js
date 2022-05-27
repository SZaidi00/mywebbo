import { Link } from "react-router-dom";

// import { Sidenav, Nav, Dropdown } from 'rsuite';
// import GearIcon from '@rsuite/icons/Gear';



// const Navbar = () => {
//     return(
//     <div style={{ width: 240 }}>
//       <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
//         <Sidenav.Body >
//           <Nav classname = "sidenavBod">
//             <Nav.Item eventKey="1"  icon={<GearIcon />}>
//               Dashboard
//             </Nav.Item>
//             <Nav.Item eventKey="2" >
//               User Group
//             </Nav.Item>
//             <Dropdown eventKey="3" title="Advanced" >
//               <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
//               <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
//               <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
//               <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
//             </Dropdown>
//             <Dropdown eventKey="4" title="Settings" >
//               <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
//               <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
//               <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
              
      
//             </Dropdown>
//           </Nav>
//         </Sidenav.Body>
//       </Sidenav>
//     </div>
//   );
// }
 
// export default Navbar; 


const Navbar = () => {
    return (
     
        <nav className="navbar">
            
            <h1>Shumail's Underground World</h1>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Aboutme">About me</Link>
                <Link to="/Projects" >Projects</Link>
                <Link to="/Fun" >Fun!</Link>
                <a href="https://www.google.com/" >If you need Google :) </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" > Sorry</a>
                <a href="https://akram.dev/" > Check this guy out</a>
                <a href="https://www.linkedin.com/in/shumail-zaidi/" > LinkedIn </a>
                <a href="https://github.com/SZaidi00"> Github </a>
               
                
            </div>


        </nav>

     );
}
 
export default Navbar;


