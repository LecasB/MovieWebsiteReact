// Movies.js
import React from "react";
import useFetch from "../../../hooks/Fetch/useFetch";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = ({ url }) => {
  const [data, isLoading, errorMessage] = useFetch(
    url ||
      "https://moviesfunctionapp.azurewebsites.net/api/GetMovies?sortBy=relevance"
  );

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
          <h3>There is No Movies in this category</h3>
        )}
      </div>
    </>
  );
};

export default Movies;
