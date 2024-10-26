const FormSubmit = () => {
  return (
    <>
      <h2>Submit Review</h2>
      <form>
        <label htmlFor="reviewTitle">Title</label>
        <input
          type="text"
          id="reviewTitle"
          name="title"
          placeholder="Enter the title of your review"
        />

        <label htmlFor="reviewText">Review</label>
        <textarea
          id="reviewText"
          name="reviewText"
          placeholder="Write your review here"
        />

        <label htmlFor="carSelect">Select a Car</label>
        <select name="car" id="carSelect">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="Enter rating"
        />

        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormSubmit;
