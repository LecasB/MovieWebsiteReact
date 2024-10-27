import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/Fetch/useFetch";
import "./Details.css";
import FavoriteButton from "../../Atoms/FavouriteButton/FavouriteButton";

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
            <p>{data.summary}</p>
            <p>Year:{data.year}</p>
            <p>Duration: {data.runtime}</p>
            <p>Category: {data.genres}</p>
            <div className="director-actors">
              <div>
                <p>Director:</p>
                <ul>
                  {data.director.map((director, key) => (
                    <li key={key}>{director}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p>Actors:</p>
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
