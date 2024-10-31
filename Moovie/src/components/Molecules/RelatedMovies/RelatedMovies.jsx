import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/Fetch/useFetch";
import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import "./RelatedMovies.css";

const RelatedMovies = () => {
  const { id } = useParams();
  const url = `https://moviesfunctionapp.azurewebsites.net/api/GetRelated?id=${id}`;
  const [data, isLoading, errorMessage] = useFetch(url);
  console.log("Data:", data);
  return (
    <>
      <div className="title-desc">
        <h2>Related Movies</h2>
        <Link className="seeall" to="/movies">
          See All
        </Link>
      </div>
      <div className="relatedMovies">
        {data &&
          data.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              posterUrl={movie.posterUrl}
              title={movie.title}
              genres={movie.genres}
            />
          ))}
      </div>
      {isLoading && <h3>Loading Related Movies 🎞</h3>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </>
  );
};

export default RelatedMovies;
