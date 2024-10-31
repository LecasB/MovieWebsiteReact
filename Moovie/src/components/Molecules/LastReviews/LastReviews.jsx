import useFetch from "../../../hooks/Fetch/useFetch";
import Review from "../../Atoms/Review/Review";
import "./LastReviews.css";

const LastReviews = ({ id }) => {
  const [data, isLoading, errorMessage] = useFetch(
    id
      ? `https://brightflixapii.vercel.app/api/v1/GetReviewById?id=${id}`
      : "https://brightflixapii.vercel.app/api/v1/GetReviews"
  );

  console.log(data);

  return (
    <>
      {isLoading && <h3>Loading: LastReviews</h3>}
      <h2 style={{ padding: "0px 0px 0px 20px" }}>Last Reviews:</h2>
      <div className="reviews">
        {data &&
          data.map((item, key) => (
            <Review
              key={key}
              title={item.title}
              text={item.text}
              movie={item.movie}
              email={item.email}
              firstName={item.first_name}
              lastName={item.last_name}
              rating={item.rating}
              id={item.id}
            />
          ))}
      </div>
    </>
  );
};

export default LastReviews;
