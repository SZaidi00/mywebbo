import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Projects from "./Projects";
import Aboutme from "./Aboutme";
import Fun from "./Fun";
import Resources from "./Resources"
import "./index.css";
import { Project } from "@rsuite/icons";



function App() {


  return (
    
    <>
    <Router>
      <Sidebar />
      <Switch>
        <Route path ='/' exact component={Home} />
        <Route path ='/Aboutme' exact component={Aboutme} />
        <Route path ='/Projects' exact component={Projects} />
        <Route path ='/Fun' exact component={Fun} />
        <Route path ='/Resources' exact component={Resources} />
      </Switch>
    </Router>
    </>
          
    


//     <Router>
//     <div className="App">
//       <Sidebar />

//       <div className= "content">
//         <Switch>

//           <Route exact path="/"> 
//             <Home />
//           </Route>

//           {/* <Route path="/Aboutme"> 
//             <Aboutme/>
//           </Route>

//           <Route path="/Hobbies"> 
            
//           </Route>

//           <Route path="/Projects"> 
//             <Projects/>
//           </Route>

//           <Route  path="/Fun"> 
//             <Fun/>
//           </Route> */}
          

//         </Switch>

//         </div>
//     </div>

// </Router>
    
  
  );
}

export default App;
