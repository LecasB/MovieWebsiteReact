import useFetch from "../../../hooks/Fetch/useFetch";
import Button from "../../Atoms/Button/Button";
import "./HeroBanner.css";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetHeadline"
  );

  return (
    data && (
      <div
        style={{ backgroundImage: `url(${data.image})` }}
        className="herobanner"
      >
        <div className="hero-details">
          <h2 className="hero-title">{data.title}</h2>
          <p className="hero-desc">{data.description}</p>
          <Link to={`/movies/${data.id}`}>
            <Button text={"See Details"} />
          </Link>
        </div>
      </div>
    )
  );
};

export default HeroBanner;
