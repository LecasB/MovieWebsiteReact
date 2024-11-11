import { useState, useEffect } from "react";
import Genres from "../../Molecules/Genres/Genres";
import SortBy from "../SortBy/SortBy";
import Movies from "../../Molecules/Movies/Movies";
import "./APIFilter.css";

const APIFilter = () => {
  const [selectedSort, setSelectedSort] = useState("relevance");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [apiLink, setApiLink] = useState("");

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenres((prev) => {
      if (prev.includes(genre)) {
        return prev.filter((g) => g !== genre);
      } else {
        return [...prev, genre];
      }
    });
  };

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
      <Genres onChange={handleGenreChange} />
      <div className="sortby-movies">
        <SortBy onChange={handleSortChange} />
        <Movies url={apiLink} />
      </div>
    </div>
  );
};

export default APIFilter;
