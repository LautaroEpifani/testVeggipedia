import React from "react";


const Reviews = ({ reviews }) => {
  

  return (
   
        <div className="mt-10">
          {reviews ? (
            reviews.map((item, index) => (
              <div
                key={index}
                className="lg:w-1/2 border bg-white border-gray-400 rounded-lg pt-4 pb-8 px-2 gap-10 text-center mx-10 lg:mx-auto items-center mb-4 "
              >
                <div className="w-1/2 flex gap-x-2 mb-2 items-center">
                <h1 className="border border-yellow-400 rounded-full px-4 py-2 text-yellow-400">
                  {item.stars}
                </h1>  
                <h1 className="text-pink-700">{item.userName}</h1>
                
                </div>
                <h1 className="w-full text-left pl-2">{item.textReview}</h1>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
    
  );
};

export default Reviews;
