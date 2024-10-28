import Details from "../Molecules/Details/Details";
import RelatedMovies from "../Molecules/RelatedMovies/RelatedMovies";
import Layout from "../Molecules/Layout/Layout";
import { useParams } from "react-router-dom";
import LastReviews from "../Molecules/LastReviews/LastReviews";

const MovieDetailsPage = () => {
  const { id } = useParams();
  return (
    <Layout>
      <Details />
      <RelatedMovies />
      <LastReviews id={id} />
    </Layout>
  );
};

export default MovieDetailsPage;
