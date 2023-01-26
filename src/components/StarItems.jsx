import { FaDove, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { useState } from "react";

const StarItems = ({ completedReview }) => {
  const stars = [
    completedReview ? completedReview.map((item) => parseInt(item.stars)) : [0],
  ];
  // console.log(stars)

  const starsReduce = stars[0].reduce((a, b) => a + b, 0);
  const starsAverage = (starsReduce / stars[0].length).toFixed(2);
  const reviews = completedReview ? completedReview.length : 0;
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <div key={index} className="">
        {starsAverage >= index + 1 ? (
          <FaStar className=" text-yellow-400 w-8" />
        ) : starsAverage >= number ? (
          <FaStarHalfAlt className="text-yellow-400 flex w-8"/>
        ) : (
          <BsStar className=" text-yellow-400 flex w-8"/>
        )}
      </div>
    );
  });

  return (
    <div className="icon-style py-4">
      <div className="flex">{ratingStar}</div>
      <p className="md:w-1/2 ml-2 text-left">({reviews} users reviews)</p>
    </div>
  );
};

export default StarItems;
