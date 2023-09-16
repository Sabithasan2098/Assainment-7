import { useState } from "react";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import Bookmarks from "./Bookmarks/Bookmarks";

import Header from "./Header/Header";

function App() {
  const[courseName, setCourseName] = useState([])
 
  const handleCourseName = (blog ) =>{
     
     const newCourseName = [...courseName,blog]
     setCourseName(newCourseName) 
     
    
  }
  
   console.log(courseName)
  

  return (
    <div className="bg-[#F3F3F3] p-10">
      <Header></Header>
      <div className="lg:flex max-w-[1600px] mx-auto">
        <Blogs handleCourseName={handleCourseName}></Blogs>
        <Bookmarks courseName={courseName} ></Bookmarks>
      </div>
    </div>
  );
}

export default App;
