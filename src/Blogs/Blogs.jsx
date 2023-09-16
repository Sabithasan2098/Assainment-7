import React, { useEffect, useState } from "react";
import Blog from "../Component/Blog";

const Blogs = ({ handleCourseName }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("pakege.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
 
  return (
    <div className="lg:w-4/5 lg:grid grid-cols-3 gap-6 bg-[#F3F3F3]">
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          handleCourseName={handleCourseName}
          key={blog.course_name}
        /> 
      ))}
    </div>
  );
};

export default Blogs;
