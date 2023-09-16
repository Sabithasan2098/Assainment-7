import { FaRegBookmark } from 'react-icons/fa';
import React from "react";

const Blog = ({ blog, handleCourseName}) => {
  const { image, course_name, credit_time, price, details } = blog;
  return (
    <div className="bg-white p-6 rounded-xl">
      <img className="lg:w-96" src={image} alt="" />
      <p className="font-semibold text-lg pt-4 pb-3">{course_name}</p>
      <p className="pb-5 text-[#1C1B1B99] text-sm	font-normal	">{details}</p>
      <div className="flex justify-between">
        <p className='text-base	font-medium	text-[#1C1B1B99]'> <span className='font-bold text-black'>$</span>  Price:  {price}</p>
        <span className='pl-32 pt-1'><FaRegBookmark></FaRegBookmark></span>
        <p className='text-[#1C1B1B99]'> Creadit: {credit_time}hr</p>
      </div>
      <button onClick={()=>handleCourseName(blog)} className='mt-4 mb-4 bg-blue-700 text-white px-40 font-semibold text-lg rounded-lg py-2'>Select</button>
    </div>
  );
};

export default Blog;
