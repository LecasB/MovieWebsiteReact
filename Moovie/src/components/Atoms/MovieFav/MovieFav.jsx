import useFetch from "../../../hooks/Fetch/useFetch";
import { Link } from "react-router-dom";
import FavoriteButton from "../FavouriteButton/FavouriteButton";

const MovieFav = ({ id }) => {
  const [data, isLoading, errorMessage] = useFetch(
    `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`
  );

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>Error: {errorMessage}</p>;

  return (
    <>
      {data && (
        <div key={data.id}>
          <Link to={`/movies/${data.id}`}>
            <img src={data.posterUrl} alt={data.title} />
          </Link>
          <p>{data.genres}</p> {/* Assuming genres is an array */}
          <h3>{data.title}</h3>
          <FavoriteButton id={data.id} />
        </div>
      )}
    </>
  );
};

export default MovieFav;
