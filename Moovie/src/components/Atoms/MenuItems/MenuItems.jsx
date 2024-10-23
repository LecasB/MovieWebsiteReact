import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <>
      <ul>
        <Link to="/movies">Movies</Link>
        <Link to="/wishList">WishList</Link>
        <Link to="/reviews">Reviews</Link>
      </ul>
    </>
  );
};

export default MenuItems;
