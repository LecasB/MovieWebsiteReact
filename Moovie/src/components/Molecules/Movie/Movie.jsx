import FavoriteButton from "../../Atoms/FavouriteButton/FavouriteButton";
import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ id, posterUrl, title, genres }) => (
  <div className="movie">
    <Link to={`/movies/${id}`}>
      <img className="movie-image" src={posterUrl} alt={title} />
    </Link>
    <p>{genres}</p>
    <h3>{title}</h3>
    <FavoriteButton id={id} />
  </div>
);

export default Movie;
