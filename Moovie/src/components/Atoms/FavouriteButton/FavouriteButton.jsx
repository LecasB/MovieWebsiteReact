// FavoriteButton.js
import React, { useState, useEffect } from "react";
import EmptyStar from "../../../assets/empty.png";
import FullStar from "../../../assets/full.png";

const FavoriteButton = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the item is already in favorites when the component mounts
    const storedFavs =
      JSON.parse(sessionStorage.getItem("favoriteMovies")) || [];
    setIsFavorite(storedFavs.includes(id));
  }, [id]);

  const toggleFav = () => {
    const storedFavs =
      JSON.parse(sessionStorage.getItem("favoriteMovies")) || [];
    const updatedFavIds = isFavorite
      ? storedFavs.filter((favId) => favId !== id) // Remove if it exists
      : [...storedFavs, id]; // Add if it doesn’t exist

    // Update session storage and the local state
    sessionStorage.setItem("favoriteMovies", JSON.stringify(updatedFavIds));
    setIsFavorite(!isFavorite); // Toggle local state
  };

  return <img src={isFavorite ? FullStar : EmptyStar} onClick={toggleFav} />;
};

export default FavoriteButton;
