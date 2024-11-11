import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../../hooks/Fetch/useFetch";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = ({ url }) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  // Format the category for the API request
  const formattedCategory = category ? `[%22${category}%22]` : "";

  const apiUrl =
    url ||
    `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?sortBy=relevance${
      formattedCategory ? `&category=${formattedCategory}` : ""
    }`;

  const [data, isLoading, errorMessage] = useFetch(apiUrl);

  if (errorMessage) return <div>Error: {errorMessage}</div>;

  return (
    <>
      {isLoading && <h3>Loading Movies 🎞</h3>}
      <div className="movies">
        {data && data.length > 0 ? (
          data.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              posterUrl={item.posterUrl}
              title={item.title}
              genres={item.genres}
            />
          ))
        ) : (
          <h3>There are no movies in this category</h3>
        )}
      </div>
    </>
  );
};

export default Movies;
