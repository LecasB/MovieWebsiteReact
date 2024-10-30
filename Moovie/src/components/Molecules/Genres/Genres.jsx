import useFetch from "../../../hooks/Fetch/useFetch";
import "./Genres.css";

const Genres = ({ onChange }) => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetGenres"
  );

  return (
    <>
      {isLoading && <h3>Loading Genres 🎭</h3>}
      {data && (
        <div className="genres">
          <h2>Category</h2>
          <div className="genresOp">
            {data.map((genre, index) => (
              <div key={index} className="divGenre">
                <input
                  type="checkbox"
                  id={`${index}`}
                  value={genre}
                  onChange={onChange}
                  className="checkStyle"
                />
                <label className="genreLabel" htmlFor={`${index}`}>
                  {genre}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </>
  );
};

export default Genres;
