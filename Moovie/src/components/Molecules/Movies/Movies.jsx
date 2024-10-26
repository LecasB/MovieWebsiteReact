import useFetch from "../../../hooks/Fetch/useFetch";
import { Link } from "react-router-dom";
import EmptyStar from "../../../assets/empty.png";
import FullStar from "../../../assets/full.png";
import { useState } from "react";

const Movies = ({ url }) => {
  // Use the useFetch hook to get the data based on the provided URL
  const [data, isLoading, errorMessage] = useFetch(
    url ||
      "https://moviesfunctionapp.azurewebsites.net/api/GetMovies?sortBy=relevance"
  );

  const [favIds, setFavIds] = useState(() => {
    const storedFavs = sessionStorage.getItem("favoriteMovies");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  const toggleFav = (id) => {
    setFavIds((prevFavIds) => {
      // Check if the ID is already in the favorites array
      const isFav = prevFavIds.includes(id);
      const updatedFavIds = isFav
        ? prevFavIds.filter((favId) => favId !== id) // Remove the ID if it exists
        : [...prevFavIds, id]; // Add the ID if it does not exist

      // Update session storage with the new favorite IDs
      sessionStorage.setItem("favoriteMovies", JSON.stringify(updatedFavIds));
      return updatedFavIds;
    });
  };

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
            <img
              src={favIds.includes(item.id) ? FullStar : EmptyStar}
              onClick={() => toggleFav(item.id)}
            />
          </div>
        ))}
    </>
  );
};

export default Movies;
