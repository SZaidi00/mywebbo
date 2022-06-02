import Sidebar from "./Sidebar";
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Projects from "./Projects";
import Aboutme from "./Aboutme";
import Fun from "./Fun";
import Resources from "./Resources"
import "./index.css";



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
          
  
  );
}

export default App;
