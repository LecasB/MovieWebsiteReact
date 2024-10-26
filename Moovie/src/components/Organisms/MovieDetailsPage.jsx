import Details from "../Molecules/Details/Details";
import RelatedMovies from "../Molecules/RelatedMovies/RelatedMovies";
import Layout from "../Molecules/Layout/Layout";

const MovieDetailsPage = () => {
  return (
    <Layout>
      <Details />
      <RelatedMovies />
    </Layout>
  );
};

export default MovieDetailsPage;
