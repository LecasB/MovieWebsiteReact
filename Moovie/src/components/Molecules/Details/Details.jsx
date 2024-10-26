import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/Fetch/useFetch";

const Details = () => {
  const { id } = useParams();
  const url = `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`;
  const [data, isLoading, errorMessage] = useFetch(url);

  return (
    <>
      {data && (
        <div>
          <img src={data.posterUrl} alt={data.title} />
          <p>{data.genres}</p>
          <h3>{data.title}</h3>
          <p>{data.summary}</p>
          <ul>
            {data.director.map((director, key) => (
              <li key={key}>{director}</li>
            ))}
          </ul>
          <ul>
            {data.actors.map((actor, key) => (
              <li key={key}>{actor}</li>
            ))}
          </ul>
        </div>
      )}
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </>
  );
};

export default Details;
