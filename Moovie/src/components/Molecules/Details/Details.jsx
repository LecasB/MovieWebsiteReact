import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/Fetch/useFetch";
import "./Details.css";
import FavoriteButton from "../../Atoms/FavouriteButton/FavouriteButton";
import { LuClock } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";

const Details = () => {
  const { id } = useParams();
  const url = `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`;
  const [data, isLoading, errorMessage] = useFetch(url);

  return (
    <>
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
            <p>
              <b>Description:</b> {data.summary}
            </p>
            <p>
              <b>Year:</b>
              {data.year} <CiCalendar />
            </p>
            <p>
              <b>Duration:</b> {data.runtime} min <LuClock />
            </p>
            <p>
              <b>Category:</b> {data.genres} <IoInformationCircleOutline />
            </p>

            <div className="director-actors">
              <div>
                <p>
                  <b>Director:</b>
                </p>
                <ul>
                  {data.director.map((director, key) => (
                    <li key={key}>{director}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p>
                  <b>Actors:</b>
                </p>
                <ul>
                  {data.actors.map((actor, key) => (
                    <li key={key}>{actor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </>
  );
};

export default Details;
