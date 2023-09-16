import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ courseName   }) => {
    const totalTime= courseName.reduce(getSum,0)
    function getSum (total,course){
            return(
                total + Math.round(course.credit_time)
            )
    }
  return (
    <div  className="lg:w-1/5 bg-white ml-4 p-4 rounded-lg ">
      <div className="border-b-2 pb-4">
        <h1 className="text-xl font-bold pb-5">Course name:</h1>
        {courseName.map((bookmark) => (
          <Bookmark key={bookmark.course_name} bookmark={bookmark}></Bookmark>
        ))}
      </div>
      <div className="pt-40">
         <h1 className="font-medium	 text-base">Total Creadit Hour: {totalTime}hr</h1>
      </div>
    </div>
  );
};

export default Bookmarks;
