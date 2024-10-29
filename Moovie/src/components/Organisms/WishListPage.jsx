// WishListPage.js
import React, { useEffect, useState } from "react";
import Layout from "../Molecules/Layout/Layout";
import Movie from "../Molecules/Movie/Movie";
import "./WishListPage.css";

const WishListPage = () => {
  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("favoriteMovies")) || []
  );

  const refresh = () => {
    const favorites =
      JSON.parse(sessionStorage.getItem("favoriteMovies")) || [];
    setSessionData(favorites);
  };

  return (
    <Layout>
      <h1 style={{ padding: "0px 0px 0px 20px" }}>Favorites:</h1>
      <div className="wishItems">
        {sessionData && sessionData.length > 0 ? (
          sessionData.map((movieId, index) => (
            <Movie key={index} id={movieId} refresh={refresh} />
          ))
        ) : (
          <h1>No Movies Found</h1>
        )}
      </div>
    </Layout>
  );
};

export default WishListPage;
