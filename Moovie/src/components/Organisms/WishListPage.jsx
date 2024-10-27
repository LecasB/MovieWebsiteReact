import React, { useEffect, useState } from "react";
import Layout from "../Molecules/Layout/Layout";
import MovieFav from "../Atoms/MovieFav/MovieFav";
import "./WishListPage.css";

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
        alert("Error Loading Movies"); // Reset to an empty array on error
      }
    } else {
      setSessionData([]); // No data found, reset to an empty array
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Layout>
      <h1 style={{ padding: "0px 0px 0px 20px" }}>Favourites:</h1>
      <div className="wishItems">
        {sessionData && sessionData.length > 0 ? (
          sessionData.map((movie, index) => <MovieFav key={index} id={movie} />)
        ) : (
          <h1>No Movies Found</h1>
        )}
      </div>
    </Layout>
  );
};

export default WishListPage;
