import useFetch from "../../../hooks/Fetch/useFetch";
import "./FormSubmit.css";
import { useState } from "react";

const FormSubmit = () => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetMovies"
  );

  const [rating, setRating] = useState("");

  const handleRatingChange = (e) => {
    const value = e.target.value;
    if (value === "" || (value >= 1 && value <= 5)) {
      setRating(value);
    }
  };

  const formHandle = (e) => {
    e.preventDefault();

    const reviewData = {
      title: e.target.reviewTitle.value,
      text: e.target.reviewText.value,
      movie: e.target.moviesSelect.value,
      email: e.target.email.value,
      rating,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    };

    fetch("https://moviesfunctionapp.azurewebsites.net/api/SubmitReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in submitting review");
        }
        return response.json();
      })
      .then((data) => {
        alert("Review submitted successfully");
      })
      .catch((error) => {
        alert("Error:", error.message);
      });
  };

  return (
    <>
      <form onSubmit={formHandle}>
        <div className="form-review">
          <h2>Submit Review</h2>

          <label htmlFor="reviewTitle">Title:</label>
          <input
            className="input-form-review"
            type="text"
            id="reviewTitle"
            name="reviewTitle"
            placeholder="Enter the title of your review"
            required
            minLength={5}
            maxLength={50}
          />

          <label htmlFor="reviewText">Review:</label>
          <textarea
            rows={8}
            id="reviewText"
            name="reviewText"
            placeholder="Write your review here"
            required
            minLength={20}
            maxLength={500}
          />

          <label htmlFor="moviesSelect">Select a Movie:</label>
          <select name="moviesSelect" id="moviesSelect" required>
            {data &&
              data.map((item, key) => (
                <option key={key} value={item.title}>
                  {item.title}
                </option>
              ))}
          </select>

          <label htmlFor="rating">Rating (1 to 5)</label>
          <input
            className="input-form-review"
            type="number"
            id="rating"
            name="rating"
            placeholder="Enter rating"
            required
            min={1}
            max={5}
            value={rating}
            onChange={handleRatingChange}
          />

          <label htmlFor="firstName">First Name:</label>
          <input
            className="input-form-review"
            placeholder="John"
            type="text"
            id="firstName"
            name="firstName"
            required
            minLength={2}
            maxLength={30}
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            className="input-form-review"
            placeholder="Doe"
            type="text"
            id="lastName"
            name="lastName"
            required
            minLength={2}
            maxLength={30}
          />

          <label htmlFor="email">Email:</label>
          <input
            className="input-form-review"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default FormSubmit;
