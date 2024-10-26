import React, { useEffect, useState } from "react";
import Layout from "../Molecules/Layout/Layout";
import MovieFav from "../Atoms/MovieFav/MovieFav";

const WishListPage = () => {
  const [sessionData, setSessionData] = useState([]);

  useEffect(() => {
    // Retrieve data from session storage when the component mounts
    const data = sessionStorage.getItem("favoriteMovies"); // Replace 'favoriteMovies' with the actual key you want to retrieve

    if (data) {
      try {
        // Assuming data is stored as a JSON string
        const parsedData = JSON.parse(data); // Parse the JSON string into an array
        setSessionData(parsedData); // Update state with retrieved data
      } catch (error) {
        setSessionData(["Invalid data format."]); // Handle parsing errors
      }
    } else {
      setSessionData(["No Favourite Movies."]); // Fallback message
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Layout>
      {sessionData.length > 0 ? (
        sessionData.map((movie, index) => <MovieFav id={movie} />)
      ) : (
        <h1>No Favourite Movies.</h1> // Show fallback message if no movies
      )}
    </Layout>
  );
};

export default WishListPage;
