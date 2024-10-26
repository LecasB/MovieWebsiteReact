import useFetch from "../../../hooks/Fetch/useFetch";

const Genres = ({ onChange }) => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetGenres"
  );

  return (
    <>
      {data && (
        <div>
          {data.map((genre, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`${index}`}
                value={genre}
                onChange={onChange} // Call the passed onChange handler
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
