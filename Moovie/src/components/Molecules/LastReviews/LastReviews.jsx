import useFetch from "../../../hooks/Fetch/useFetch";
import Review from "../../Atoms/Review/Review";
import "./LastReviews.css";

const LastReviews = () => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetReviews"
  );

  console.log(data);

  return (
    <>
      <h2>Last Reviews:</h2>
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
            />
          ))}
      </div>
    </>
  );
};

export default LastReviews;
