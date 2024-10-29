import useFetch from "../../../hooks/Fetch/useFetch";
import "./Genres.css";

const Genres = ({ onChange }) => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetGenres"
  );

  return (
    <>
      {data && (
        <div className="genres">
          <h2>Category</h2>
          {data.map((genre, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`${index}`}
                value={genre}
                onChange={onChange}
              />
              <label htmlFor={`${index}`}>{genre}</label>
            </div>
          ))}
        </div>
      )}
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </>
  );
};

export default Genres;
