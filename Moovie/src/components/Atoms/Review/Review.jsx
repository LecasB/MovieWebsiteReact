import React from "react";
import "./Review.css";

const Review = ({
  id,
  title,
  text,
  movie,
  email,
  firstName,
  lastName,
  rating,
}) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://brightflixapii.vercel.app/api/v1/DeleteReviewById?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data); // Log the response data

      // Call onDelete if provided to remove review from
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  return (
    <div className="review-card">
      <div className="title-rating">
        <h2 className="review-title">{title}</h2>
        <p className="review-rating">{rating}</p>
      </div>
      <h3 className="review-movie">{movie}</h3>
      <p className="review-desc">{text}</p>
      <p className="review-author">{`${firstName} ${lastName} - ${email}`}</p>
      <button onClick={handleDelete}>Apagar</button>
    </div>
  );
};

export default Review;
