import React, { useState, useEffect } from "react";
import EmptyStar from "../../../assets/empty.png";
import FullStar from "../../../assets/full.png";

const FavoriteButton = ({ id, refresh = null }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavs =
      JSON.parse(sessionStorage.getItem("favoriteMovies")) || [];
    setIsFavorite(storedFavs.includes(id));
  }, [id]);

  const toggleFav = () => {
    const storedFavs =
      JSON.parse(sessionStorage.getItem("favoriteMovies")) || [];
    const updatedFavIds = isFavorite
      ? storedFavs.filter((favId) => favId !== id)
      : [...storedFavs, id];

    sessionStorage.setItem("favoriteMovies", JSON.stringify(updatedFavIds));
    setIsFavorite(!isFavorite);
  };

  return (
    <img
      style={{ cursor: "pointer" }}
      src={isFavorite ? FullStar : EmptyStar}
      onClick={() => {
        toggleFav();
        if (refresh) {
          refresh();
        }
      }}
    />
  );
};

export default FavoriteButton;
