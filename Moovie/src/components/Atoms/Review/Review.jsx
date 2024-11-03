import React, { useState } from "react";
import "./Review.css";
import PopUpDelete from "../../Molecules/PopUpDelete/PopUpDelete";

const Review = ({
  id,
  title,
  text,
  movie,
  email,
  firstName,
  lastName,
  rating,
  onConfirm,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://brightflixapii.vercel.app/api/v1/DeleteReviewById?id=${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      setShowPopup(false);
      onConfirm();
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
      <button onClick={() => setShowPopup(true)}>Delete</button>
      {showPopup && (
        <PopUpDelete
          title={title}
          name={`${firstName} ${lastName}`}
          onConfirm={handleDelete}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default Review;
