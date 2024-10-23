import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Organisms/HomePage";
import MoviesPage from "./components/Organisms/MoviesPage";
import WishListPage from "./components/Organisms/WishListPage";
import ReviewsPage from "./components/Organisms/ReviewsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="wishlist" element={<WishListPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
