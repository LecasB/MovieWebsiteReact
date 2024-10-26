import useFetch from "../../../hooks/Fetch/useFetch";
import "./FormSubmit.css";

const FormSubmit = () => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetMovies"
  );

  const formHandle = (e) => {
    e.preventDefault();

    // Get form data
    const reviewData = {
      title: e.target.reviewTitle.value,
      text: e.target.reviewText.value,
      movie: e.target.moviesSelect.value,
      email: e.target.email.value,
      rating: e.target.rating.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    };

    // Send data to API
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
        alert("Review submitted successfully:", data);
      })
      .catch((error) => {
        alert("Error:", error);
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
            name="title"
            placeholder="Enter the title of your review"
          />

          <label htmlFor="reviewText">Review:</label>
          <textarea
            rows={8}
            id="reviewText"
            name="reviewText"
            placeholder="Write your review here"
          />

          <label htmlFor="carSelect">Select a Movie:</label>
          <select name="movies" id="moviesSelect">
            {data &&
              data.map((item, key) => <option key={key}>{item.title}</option>)}
          </select>

          <label htmlFor="rating">Rating (1 to 5)</label>
          <input
            className="input-form-review"
            type="number"
            id="rating"
            name="rating"
            placeholder="Enter rating"
          />

          <label htmlFor="firstName">First Name:</label>
          <input
            className="input-form-review"
            placeholder="John"
            type="text"
            id="firstName"
            name="firstName"
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            className="input-form-review"
            placeholder="Doe"
            type="text"
            id="lastName"
            name="lastName"
          />

          <label htmlFor="email">Email:</label>
          <input
            className="input-form-review"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default FormSubmit;
