import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const Review = () => {
  let [review, setReview] = useState(null || {});
  let { id } = useParams();

  const showReviews = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    setReview(data);
    //console.log(data);
  };

  useEffect(() => {
    showReviews();
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [review]);


  return (
    <div className="review-box">
      <h2 className="review-title">Review</h2>

      {review && review.results && review.results.length > 0 ? (
        <div className="review-area">
          {review.results.map((item) => (
            <div key={item.id}>
              <h4>{item.author}</h4>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Review;