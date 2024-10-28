import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../../Atoms/FavouriteButton/FavouriteButton";
import useFetch from "../../../hooks/Fetch/useFetch";
import "./Movie.css";

const Movie = ({ id, posterUrl = false, title = false, genres = false }) => {
  const shouldFetch = !title || !posterUrl || !genres;
  const [data, isLoading, errorMessage] = shouldFetch
    ? useFetch(
        `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`
      )
    : [{}, false, null];

  const movieTitle = title || data?.title;
  const moviePosterUrl = posterUrl || data?.posterUrl;
  const movieGenres = genres || data?.genres;

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>Error: {errorMessage}</p>;

  return (
    <div className="movie">
      <Link to={`/movies/${id}`}>
        <img className="movie-image" src={moviePosterUrl} alt={movieTitle} />
      </Link>
      <div className="genre-fav">
        <p>{movieGenres}</p>
        <FavoriteButton id={id} />
      </div>
      <h3 className="movie-title">{movieTitle}</h3>
    </div>
  );
};

export default Movie;
