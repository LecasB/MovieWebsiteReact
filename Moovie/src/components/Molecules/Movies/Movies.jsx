import useFetch from "../../../hooks/Fetch/useFetch";
import { Link } from "react-router-dom";
import FavoriteButton from "../../Atoms/FavouriteButton/FavouriteButton";

const Movies = ({ url }) => {
  // Use the useFetch hook to get the data based on the provided URL
  const [data, isLoading, errorMessage] = useFetch(
    url ||
      "https://moviesfunctionapp.azurewebsites.net/api/GetMovies?sortBy=relevance"
  );

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (errorMessage) return <div>Error: {errorMessage}</div>;

  return (
    <>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <img src={item.posterUrl} alt={item.title} />
            </Link>
            <p>{item.genres}</p> {/* Assuming genres is an array */}
            <h3>{item.title}</h3>
            <FavoriteButton id={item.id} /> {/* Use FavoriteButton */}
          </div>
        ))}
    </>
  );
};

export default Movies;
