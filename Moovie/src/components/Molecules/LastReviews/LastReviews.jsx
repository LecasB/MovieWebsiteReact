import useFetch from "../../../hooks/Fetch/useFetch";

const LastReviews = () => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetReviews"
  );

  console.log(data);

  return (
    <>
      {data &&
        data.map((item, key) => (
          <div key={key}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <p>{item.movie}</p>
            <p>{item.email}</p>
            <p>{`${item.first_name} ${item.last_name}`}</p>
          </div>
        ))}
    </>
  );
};

export default LastReviews;
