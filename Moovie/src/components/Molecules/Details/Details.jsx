import { useParams, useSearchParams } from "react-router-dom";
import useFetch from "../../../hooks/Fetch/useFetch";
import "./Details.css";
import FavoriteButton from "../../Atoms/FavouriteButton/FavouriteButton";
import { LuClock } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";

const Details = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "details"; // default to "details"

  const url = `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`;
  const [data, isLoading, errorMessage] = useFetch(url);

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}

      {data && (
        <div className="details">
          <div className="movie-poster-div">
            <img
              className="movie-poster"
              src={data.posterUrl}
              alt={data.title}
            />
          </div>
          <div className="text-section">
            <div className="title-fav">
              <h2>{data.title}</h2>
              <FavoriteButton id={data.id} />
            </div>
            <div className="tab-buttons">
              <div
                onClick={() => handleTabChange("details")}
                className={activeTab === "details" ? "active" : ""}
              >
                Details
              </div>
              <div
                onClick={() => handleTabChange("actors")}
                className={activeTab === "actors" ? "active" : ""}
              >
                Actors
              </div>
              <div
                onClick={() => handleTabChange("directors")}
                className={activeTab === "directors" ? "active" : ""}
              >
                Directors
              </div>
            </div>

            {activeTab === "details" && (
              <>
                <p>
                  <b>Description:</b> {data.summary}
                </p>
                <p>
                  <b>Year:</b> {data.year} <CiCalendar />
                </p>
                <p>
                  <b>Duration:</b> {data.runtime} min <LuClock />
                </p>
                <p>
                  <b>Category:</b> {data.genres} <IoInformationCircleOutline />
                </p>
              </>
            )}

            {activeTab === "actors" && (
              <div className="actors-list">
                <h3>Actors</h3>
                <ul>
                  {data.actors.map((actor, key) => (
                    <li key={key}>{actor}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "directors" && (
              <div className="directors-list">
                <h3>Directors</h3>
                <ul>
                  {data.director.map((director, key) => (
                    <li key={key}>{director}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
