import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../../Atoms/FavouriteButton/FavouriteButton";
import useFetch from "../../../hooks/Fetch/useFetch";
import "./Movie.css";

const Movie = ({
  id,
  posterUrl = false,
  title = false,
  genres = false,
  refresh = null,
}) => {
  if (!posterUrl || !title || !genres) {
    const [data] = useFetch(
      `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`
    );

    if (data) {
      posterUrl = data.posterUrl;
      title = data.title;
      genres = data.genres;
    }
  }

  return (
    <div className="movie">
      <Link to={`/movies/${id}`}>
        <img className="movie-image" src={posterUrl} alt={title} />
      </Link>
      <div className="genre-fav">
        <p>{genres}</p>
        <FavoriteButton id={id} refresh={refresh} />
      </div>
      <h3 className="movie-title">{title}</h3>
    </div>
  );
};

export default Movie;
