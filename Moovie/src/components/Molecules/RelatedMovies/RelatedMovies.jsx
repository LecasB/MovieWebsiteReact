import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/Fetch/useFetch";
import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import "./RelatedMovies.css";

const RelatedMovies = () => {
  const { id } = useParams();
  const url = `https://moviesfunctionapp.azurewebsites.net/api/GetRelated?id=${id}`;
  const [data, isLoading, errorMessage] = useFetch(url);

  // Get the genre of the first movie if available
  const category = data && data.length > 0 ? data[0].genres : "general";

  return (
    <>
      <div className="title-desc">
        <h2>Related Movies</h2>
        <Link className="seeall" to={`/movies?category=${category}`}>
          See All
        </Link>
      </div>
      <div className="relatedMovies">
        {data && data.length > 0 ? (
          data.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              posterUrl={movie.posterUrl}
              title={movie.title}
              genres={movie.genres}
            />
          ))
        ) : (
          <p>There are no Related Movies</p>
        )}
      </div>
      {isLoading && <h3>Loading Related Movies 🎞</h3>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </>
  );
};

export default RelatedMovies;
