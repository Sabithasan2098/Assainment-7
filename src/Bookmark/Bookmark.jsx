import React from 'react';

const Bookmark = ({bookmark  }) => {
    const{course_name } = bookmark
    
    
    return (
        <div>          
         <div>
            <h1 className='text-base font-normal text-[#1C1B1B99]'> {course_name} </h1>
         </div>       
            <div>
                  
            </div>
        </div>
    );
};

export default Bookmark;