// Movies.js
import React from "react";
import useFetch from "../../../hooks/Fetch/useFetch";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = ({ url }) => {
  // Use the useFetch hook to get the data based on the provided URL
  const [data, isLoading, errorMessage] = useFetch(
    url ||
      "https://moviesfunctionapp.azurewebsites.net/api/GetMovies?sortBy=relevance"
  );

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (errorMessage) return <div>Error: {errorMessage}</div>;

  return (
    <>
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
        {}
      </div>
    </>
  );
};

export default Movies;
