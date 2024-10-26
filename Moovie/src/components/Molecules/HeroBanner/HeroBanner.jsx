import useFetch from "../../../hooks/Fetch/useFetch";
import Button from "../../Atoms/Button/Button";

const HeroBanner = () => {
  const [data, isLoading, errorMessage] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetHeadline"
  );

  return (
    data && (
      <div style={{ backgroundImage: `url(${data.image})` }}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <Button text={"teste"} />
      </div>
    )
  );
};

export default HeroBanner;
