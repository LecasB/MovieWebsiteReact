import useFetch from "../../../hooks/Fetch/useFetch";
import "./Genres.css";
import { IoFilterOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const Genres = ({ onChange }) => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetGenres"
  );

  const [isMobile, setIsMobile] = useState(false);
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isMobile && (
        <div style={{ padding: "10px 0px 5px 25px" }}>
          <IoFilterOutline
            onClick={() => setShowFilter(!showFilter)}
            style={{ color: "grey", fontSize: "30px" }}
          />
        </div>
      )}
      {isLoading && <h3>Loading Genres 🎭</h3>}
      {data && showFilter && (
        <div className="genres">
          <h2>Category</h2>
          <div className="genresOp">
            {data.map((genre, index) => (
              <div key={index} className="divGenre">
                <input
                  type="checkbox"
                  id={`${index}`}
                  value={genre}
                  onChange={onChange}
                  className="checkStyle"
                />
                <label className="genreLabel" htmlFor={`${index}`}>
                  {genre}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </>
  );
};

export default Genres;
