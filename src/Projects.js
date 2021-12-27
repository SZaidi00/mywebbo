import { useState } from "react";
import AboutmeList from "./ProjectList";



const Projects = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lossa', author: 'mario', id: 3 }
      ])


  return (
    <div className="undergrad">
        <h2>{blogs.title}</h2>
        <AboutmeList blogs={blogs} title="All Blogs"/> 

        
    </div>
  );
}
 
export default Projects;