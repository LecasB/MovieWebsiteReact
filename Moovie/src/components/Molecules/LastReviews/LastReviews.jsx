import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/Fetch/useFetch";
import Review from "../../Atoms/Review/Review";
import "./LastReviews.css";

const LastReviews = ({ id }) => {
  const [data, isLoading, errorMessage] = useFetch(
    id
      ? `https://brightflixapii.vercel.app/api/v1/GetReviewById?id=${id}`
      : "https://brightflixapii.vercel.app/api/v1/GetReviews"
  );

  return (
    <>
      {isLoading && <h3>Loading: LastReviews</h3>}
      <h2 style={{ padding: "0px 0px 0px 20px" }}>Last Reviews:</h2>
      <div className="reviews">
        {data && data.length > 0 ? (
          data.map((item) => (
            <Review
              key={item.id}
              title={item.title}
              text={item.text}
              movie={item.movie}
              email={item.email}
              firstName={item.first_name}
              lastName={item.last_name}
              rating={item.rating}
              id={item.id}
            />
          ))
        ) : (
          <h1>There is No Reviews</h1>
        )}
      </div>
    </>
  );
};

export default LastReviews;
