import React from "react";
import "./Review.css";

const Review = ({ title, text, movie, email, firstName, lastName, rating }) => (
  <div className="review-card">
    <div className="title-rating">
      <h2 className="review-title">{title}</h2>
      <p className="review-rating">{rating}</p>
    </div>
    <h3 className="review-movie">{movie}</h3>
    <p className="review-desc">{text}</p>
    <p className="review-author">{`${firstName} ${lastName} - ${email}`}</p>
  </div>
);

export default Review;
