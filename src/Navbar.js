import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            
            <Link to="/">Shumail's Underground World</Link>

            <div className="links">
                
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


