import useFetch from "../../../hooks/Fetch/useFetch";
import Button from "../../Atoms/Button/Button";
import PopUpEmbed from "../../Molecules/PopUpEmbed/PopUpEmbed";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";
import Loader from "../../Atoms/Loader/Loader";

const HeroBanner = () => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://brightflixapii.vercel.app/api/v1/GetHeadline"
  );
  const [popupUrl, setPopupUrl] = useState(null);

  const handlePopup = (url) => {
    setPopupUrl(url);
  };

  const closePopup = () => {
    setPopupUrl(null);
  };

  return (
    <>
      {isLoading && (
        <>
          <h3>Loading: HeroBanner</h3> <Loader />
        </>
      )}
      {data && (
        <div
          style={{ backgroundImage: `url(${data.movieUrl})` }}
          className="herobanner"
        >
          <div className="hero-details">
            <h2 className="hero-title">{data.title}</h2>
            <p className="hero-desc">{data.text}</p>
            <Link to={`/movies/${data.movieId}`}>
              <Button text={"See Details"} />
            </Link>
            <Button
              style={{ margin: "10px" }}
              text={"Trailer"}
              onClick={() => handlePopup(data.trailer)}
            />
            <Button
              text={"Watch Movie"}
              onClick={() => handlePopup(data.movie)}
            />
          </div>
        </div>
      )}
      {popupUrl && <PopUpEmbed videoUrl={popupUrl} onClose={closePopup} />}
    </>
  );
};

export default HeroBanner;
