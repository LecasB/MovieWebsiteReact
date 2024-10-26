import FavoriteButton from "../../Atoms/FavouriteButton/FavouriteButton";
import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ id, posterUrl, title, genres }) => (
  <div className="movie">
    <Link to={`/movies/${id}`}>
      <img className="movie-image" src={posterUrl} alt={title} />
    </Link>
    <div className="genre-fav">
      <p>{genres}</p>
      <FavoriteButton id={id} />
    </div>
    <h3 className="movie-title">{title}</h3>
  </div>
);

export default Movie;
