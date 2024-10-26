import APIFilter from "../Atoms/APIFilter/APIFilter";
import SortBy from "../Atoms/SortBy/SortBy";
import Genres from "../Molecules/Genres/Genres";
import Layout from "../Molecules/Layout/Layout";
import Movies from "../Molecules/Movies/Movies";

const MoviesPage = () => {
  return (
    <>
      <Layout>
        <APIFilter />
      </Layout>
    </>
  );
};

export default MoviesPage;
