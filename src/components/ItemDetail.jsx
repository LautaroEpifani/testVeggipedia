import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavGraphic from "./NavGraphic";
import ProductInfo from "./ProductInfo";
import Reviews from "./Reviews";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import StarItems from "./StarItems";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";


const ItemDetail = ({ dataItem }) => {
  const { stateUser } = useAuth();
  const { detailId } = useParams();
  const navigate = useNavigate();

  const [reviews, setReviews] = useState({
    stars: "",
    textReview: "",
    userName: "",
  });
  const [reviewCompleted, setReviewCompleted] = useState([]);

  const [textAr, setTextAr] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setReviews({ ...reviews, [name]: value });
  };

 

  const uploadReview = (e) => {
    e.preventDefault();
    reviews.userName = stateUser().displayName;
    setReviewCompleted([...reviewCompleted, reviews]);
    e.target.reset();
    setTextAr(false);
    const db = getFirestore();
    const reviewsDoc = doc(db, `/products/${detailId}`);
    updateDoc(reviewsDoc, {
      uploadReviews: [...reviewCompleted, reviews],
    }).then((res) => {
      setOpenReviews(true);
    });
  };

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = doc(querydb, `/products/${detailId}`);
    getDoc(queryCollection).then((res) => {
      if (res.data().uploadReviews) {
        setReviewCompleted(res.data().uploadReviews);
      } else {
        setReviewCompleted([]);
      }
    });
  }, []);

  const openTextArea = () => {
    setTextAr(true);
  };

  return (
    <div className="bg-primary pb-20 ">
      <NavGraphic />
      <div className="block md:flex md:p-0 p-10">
        <div className="block md:flex w-full lg:w-1/2 justify-center gap-20  py-10 bg-white text-center mx-auto rounded-lg">
          <div className="w-1/2 md:w-1/3 text-center mx-auto">
            <img
              className=" p-2 text-center mx-auto"
              src={dataItem.image}
              alt=""
            />
          </div>
          <div className="w-10/12 text-center mx-auto lg:text-left">
            <StarItems completedReview={reviewCompleted} />
            <h1 className="font md:text-4xl text-pink-600 mb-4 font-bold md:font-semibold">
              {dataItem.title}
            </h1>

            <div >
              {textAr ? (
                <>
                  <form onSubmit={uploadReview}>
                    <select
                      onChange={handleChange}
                      name="stars"
                      className="py-2 px-10  border border-pink-800  rounded-lg uppercase  font-semibold w-44 md:w-72"
                    >
                      <option value=""></option>
                      <option value="5">5 - Excellent</option>
                      <option value="4">4 - Good</option>
                      <option value="3">3 - Fair</option>
                      <option value="2">2 - Poor</option>
                      <option value="1">1 - Bad</option>
                    </select>
                    <textarea
                      onChange={handleChange}
                      name="textReview"
                      type="text"
                      className="w-full mt-4 h-auto bg-gray-100 border-2 border-pink-400 p-2 focus:outline-none focus:ring-2 focus:ring-pink-700 focus:border-transparent rounded"
                      placeholder="Be honest please"
                    />

                    <button className="mt-2 border border-red-400  text-center mx-auto py-2 px-4 rounded-lg uppercase bg-pink-50 text-pink-600 font-semibold hover:bg-rose-400 hover:text-black">
                      Complete Review
                    </button>
                  </form>
                </>
              ) : (
                <button
                  onClick={openTextArea}
                  className="bg-pink-600 w-40 lg:w-64 rounded-md border py-2 text-white uppercase font-semibold mt-10"
                >
                
                  Make a review
                </button>
              )}{" "}
            </div>
          </div>
        </div>
        <ProductInfo />
      </div>
      <div className="w-1/2 lg:w-1/4 border bg-white border-pink-600 rounded-lg p-2 gap-10 text-center mx-auto items-center mt-4 lg:mt-20">
        <button
          className=" text-pink-700"
          onClick={() => setOpenReviews(!openReviews)}
        >
          View reviews ({reviewCompleted ? reviewCompleted.length : 0})
        </button>
      </div>
      <div>{openReviews ? <Reviews reviews={reviewCompleted} /> : <></>}</div>
    </div>
  );
};

export default ItemDetail;
