import HeroBanner from "../Molecules/HeroBanner/HeroBanner";
import LastReviews from "../Molecules/LastReviews/LastReviews";
import Layout from "../Molecules/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <HeroBanner />
      <LastReviews />
    </Layout>
  );
};

export default HomePage;
