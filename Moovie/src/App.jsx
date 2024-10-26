import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Organisms/HomePage";
import MoviesPage from "./components/Organisms/MoviesPage";
import WishListPage from "./components/Organisms/WishListPage";
import ReviewsPage from "./components/Organisms/ReviewsPage";
import ErrorPage from "./components/Organisms/ErrorPage";
import Details from "./components/Molecules/Details/Details";
import MovieDetailsPage from "./components/Organisms/MovieDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetailsPage />} />
        <Route path="wishlist" element={<WishListPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
