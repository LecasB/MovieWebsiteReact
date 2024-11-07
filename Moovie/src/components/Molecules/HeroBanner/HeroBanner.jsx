import useFetch from "../../../hooks/Fetch/useFetch";
import Button from "../../Atoms/Button/Button";
import "./HeroBanner.css";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://brightflixapii.vercel.app/api/v1/GetHeadline"
  );

  return (
    <>
      {isLoading && <h3>Loading: HeroBanner</h3>}
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
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBanner;
