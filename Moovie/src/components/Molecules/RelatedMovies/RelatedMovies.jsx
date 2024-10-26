import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/Fetch/useFetch";
import { Link } from "react-router-dom";

const RelatedMovies = () => {
  const { id } = useParams();
  const url = `https://moviesfunctionapp.azurewebsites.net/api/GetRelated?id=${id}`;
  const [data, isLoading, errorMessage] = useFetch(url);
  console.log("Data:", data);
  return (
    <>
      {data &&
        data.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.posterUrl} alt={movie.title} />
            </Link>
            <p>{movie.genres}</p>
            <h3>
              {movie.title} ({movie.year})
            </h3>
            <p>Runtime: {movie.runtime} min</p>
            <p>{movie.summary}</p>
            <h4>Director(s):</h4>
            <ul>
              {movie.director.map((director, index) => (
                <li key={index}>{director}</li>
              ))}
            </ul>
            <h4>Actors:</h4>
            <ul>
              {movie.actors.map((actor, index) => (
                <li key={index}>{actor}</li>
              ))}
            </ul>
          </div>
        ))}
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </>
  );
};

export default RelatedMovies;
