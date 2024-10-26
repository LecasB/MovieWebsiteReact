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
        <div className="movie">
          <Link to={`/movies/${data.id}`}>
            <img
              className="movie-image"
              src={data.posterUrl}
              alt={data.title}
            />
          </Link>
          <div className="genre-fav">
            <p>{data.genres}</p>
            <FavoriteButton id={data.id} />
          </div>
          <h3 className="movie-title">{data.title}</h3>
        </div>
      )}
    </>
  );
};

export default MovieFav;
