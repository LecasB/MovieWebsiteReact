import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

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
    <motion.div
      ref={ref}
      className="movie"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <Link to={`/movies/${id}`}>
        <img className="movie-image" src={posterUrl} alt={title} />
        <div className="movie-overlay">
          <h3 className="movie-title">{title}</h3>
          <p>{genres}</p>
        </div>
      </Link>
      <div className="genre-fav">
        <p>{title}</p>
        <FavoriteButton id={id} refresh={refresh} />
      </div>
    </motion.div>
  );
};

export default Movie;
