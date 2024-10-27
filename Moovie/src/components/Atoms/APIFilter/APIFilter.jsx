import { useState, useEffect } from "react";
import Genres from "../../Molecules/Genres/Genres";
import SortBy from "../SortBy/SortBy";
import Movies from "../../Molecules/Movies/Movies";
import "./APIFilter.css";

const APIFilter = () => {
  const [selectedSort, setSelectedSort] = useState("relevance"); // Default sort option
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [apiLink, setApiLink] = useState("");

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value); // Update the selected sort option
  };

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenres((prev) => {
      // Add or remove genre from selectedGenres array
      if (prev.includes(genre)) {
        return prev.filter((g) => g !== genre); // Remove genre if already selected
      } else {
        return [...prev, genre]; // Add genre if not selected
      }
    });
  };

  // Function to construct the API link
  useEffect(() => {
    let link;
    if (selectedGenres.length === 0) {
      link = `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?sortBy=${selectedSort}`;
    } else {
      const genresParam = JSON.stringify(selectedGenres);
      link = `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?category=${genresParam}&sortBy=${selectedSort}`;
    }
    setApiLink(link);
  }, [selectedGenres, selectedSort]);

  return (
    <div className="movies-page">
      <Genres onChange={handleGenreChange} /> {/* Pass the onChange handler */}
      <div className="sortby-movies">
        <SortBy onChange={handleSortChange} /> {/* Pass the onChange handler */}
        <Movies url={apiLink} /> {/* Pass the apiLink to Movies component */}
      </div>
    </div>
  );
};

export default APIFilter;
