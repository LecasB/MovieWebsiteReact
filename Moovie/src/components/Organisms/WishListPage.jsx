// WishListPage.js
import React, { useEffect, useState } from "react";
import Layout from "../Molecules/Layout/Layout";
import Movie from "../Molecules/Movie/Movie";
import "./WishListPage.css";

const WishListPage = () => {
  const [sessionData, setSessionData] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("favoriteMovies");

    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setSessionData(parsedData);
      } catch (error) {
        alert("Error Loading Movies");
        setSessionData([]);
      }
    } else {
      setSessionData([]);
    }
  }, []);

  return (
    <Layout>
      <h1 style={{ padding: "0px 0px 0px 20px" }}>Favourites:</h1>
      <div className="wishItems">
        {sessionData && sessionData.length > 0 ? (
          sessionData.map((movie, index) => <Movie key={index} id={movie} />)
        ) : (
          <h1>No Movies Found</h1>
        )}
      </div>
    </Layout>
  );
};

export default WishListPage;
