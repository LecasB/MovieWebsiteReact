import useFetch from "../../../hooks/Fetch/useFetch";
import { Link } from "react-router-dom";

const MovieFav = ({ id }) => {
  const [data, isLoading, errorMessage] = useFetch(
    `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`
  );

  return (
    <>
      {data && (
        <div key={data.id}>
          <Link to={`/movies/${data.id}`}>
            <img src={data.posterUrl} alt={data.title} />
          </Link>
          <p>{data.genres}</p> {/* Assuming genres is an array */}
          <h3>{data.title}</h3>
          <img src={data.posterUrl} onClick={() => toggleFav(data.id)} />
        </div>
      )}
    </>
  );
};

export default MovieFav;
